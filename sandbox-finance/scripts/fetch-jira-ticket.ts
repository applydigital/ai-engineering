#!/usr/bin/env tsx
/**
 * fetch-jira-ticket.ts
 *
 * Fetches a Jira issue and saves it as a markdown file in
 * _bmad-output/planning-artifacts/ for use with BMAD workflows.
 *
 * Usage:
 *   npm run fetch-jira-ticket -- <ticket-key>
 *
 * Example:
 *   npm run fetch-jira-ticket -- PROJ-123
 *
 * Requires:
 *   JIRA_BASE_URL in .env  (e.g. https://your-org.atlassian.net)
 *   JIRA_EMAIL   in .env  (your Atlassian account email)
 *   JIRA_API_TOKEN in .env (API token from https://id.atlassian.com/manage-profile/security/api-tokens)
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Load .env manually if it exists (avoids hard dependency on --env-file flag)
const envPath = join(ROOT, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (key && !(key in process.env)) {
      process.env[key] = rest.join('=').replace(/^["']|["']$/g, '');
    }
  }
}

// --- Config ---
const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const OUTPUT_DIR = join(ROOT, '_bmad-output', 'planning-artifacts');

const ticketKey = process.argv[2];

if (!ticketKey || !/^[A-Z]+-\d+$/.test(ticketKey)) {
  console.error('❌  Usage: npm run fetch-jira-ticket -- <ticket-key>');
  console.error('   Example: npm run fetch-jira-ticket -- PROJ-123');
  process.exit(1);
}

if (!JIRA_BASE_URL || !JIRA_EMAIL || !JIRA_API_TOKEN) {
  console.error('❌  Missing Jira credentials. Add to your .env file:');
  console.error('   JIRA_BASE_URL=https://your-org.atlassian.net');
  console.error('   JIRA_EMAIL=you@example.com');
  console.error('   JIRA_API_TOKEN=your_token_here');
  process.exit(1);
}

async function fetchIssue(key: string) {
  const url = `${JIRA_BASE_URL}/rest/api/3/issue/${key}?fields=summary,description,status,labels,assignee,reporter,issuetype,created,updated,comment`;
  const credentials = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${credentials}`,
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Jira API error ${res.status}: ${body}`);
  }

  return res.json() as Promise<{
    key: string;
    fields: {
      summary: string;
      description: JiraDoc | null;
      status: { name: string };
      labels: string[];
      assignee: { displayName: string } | null;
      reporter: { displayName: string } | null;
      issuetype: { name: string };
      created: string;
      updated: string;
    };
  }>;
}

// Jira uses Atlassian Document Format (ADF) for rich text.
// This converts it to plain markdown — handles the most common node types.
type JiraDoc = {
  type: string;
  content?: JiraDoc[];
  text?: string;
  attrs?: Record<string, unknown>;
};

function adfToMarkdown(node: JiraDoc, depth = 0): string {
  switch (node.type) {
    case 'doc':
      return (node.content ?? []).map((n) => adfToMarkdown(n, depth)).join('\n');
    case 'paragraph':
      return (node.content ?? []).map((n) => adfToMarkdown(n, depth)).join('') + '\n';
    case 'text':
      return node.text ?? '';
    case 'hardBreak':
      return '\n';
    case 'heading': {
      const level = (node.attrs?.level as number) ?? 1;
      const text = (node.content ?? []).map((n) => adfToMarkdown(n, depth)).join('');
      return `${'#'.repeat(level)} ${text}\n`;
    }
    case 'bulletList':
      return (node.content ?? []).map((n) => adfToMarkdown(n, depth)).join('');
    case 'orderedList':
      return (node.content ?? [])
        .map((n, i) => adfToMarkdown(n, depth).replace(/^- /, `${i + 1}. `))
        .join('');
    case 'listItem': {
      const text = (node.content ?? []).map((n) => adfToMarkdown(n, depth)).join('').trim();
      return `${'  '.repeat(depth)}- ${text}\n`;
    }
    case 'codeBlock': {
      const lang = (node.attrs?.language as string) ?? '';
      const code = (node.content ?? []).map((n) => n.text ?? '').join('');
      return `\`\`\`${lang}\n${code}\n\`\`\`\n`;
    }
    case 'inlineCard':
    case 'blockCard':
      return (node.attrs?.url as string) ?? '';
    case 'rule':
      return '---\n';
    default:
      return (node.content ?? []).map((n) => adfToMarkdown(n, depth)).join('');
  }
}

function toMarkdown(issue: Awaited<ReturnType<typeof fetchIssue>>): string {
  const { fields } = issue;
  const labels = (fields.labels ?? []).join(', ') || 'none';
  const assignee = fields.assignee?.displayName ?? 'unassigned';
  const description = fields.description
    ? adfToMarkdown(fields.description).trim()
    : '_No description provided._';

  return `# ${issue.key}: ${fields.summary}

## Metadata

- **Ticket:** ${JIRA_BASE_URL}/browse/${issue.key}
- **Type:** ${fields.issuetype.name}
- **Status:** ${fields.status.name}
- **Labels:** ${labels}
- **Assignee:** ${assignee}
- **Created:** ${fields.created.split('T')[0]}
- **Updated:** ${fields.updated.split('T')[0]}

## Description

${description}
`;
}

async function main() {
  console.log(`\n🔍  Fetching Jira ticket ${ticketKey} from ${JIRA_BASE_URL}...`);

  const issue = await fetchIssue(ticketKey);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const filename = `${issue.key}-${issue.fields.summary
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50)}.md`;

  const outputPath = join(OUTPUT_DIR, filename);
  writeFileSync(outputPath, toMarkdown(issue), 'utf8');

  console.log(`✅  Saved to: _bmad-output/planning-artifacts/${filename}`);
  console.log(`\n📋  Next steps:`);
  console.log(`   1. Review the ticket: open ${outputPath}`);
  console.log(`   2. Run: /bmad-quick-spec ${outputPath}`);
}

main().catch((err) => {
  console.error('❌ ', err.message);
  process.exit(1);
});
