#!/usr/bin/env tsx
/**
 * fetch-ticket.ts
 *
 * Fetches a GitHub issue from the ai-engineering repo and saves it as a
 * markdown file in _bmad-output/planning-artifacts/ for use with BMAD workflows.
 *
 * Usage:
 *   npm run fetch-ticket -- <issue-number>
 *
 * Example:
 *   npm run fetch-ticket -- 1
 *
 * Requires:
 *   GITHUB_TOKEN in .env (personal access token with repo read scope)
 *   GITHUB_REPO in .env  (e.g. applydigital/ai-engineering)
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
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO ?? 'applydigital/ai-engineering';
const OUTPUT_DIR = join(ROOT, '_bmad-output', 'planning-artifacts');

const issueNumber = process.argv[2];

if (!issueNumber || Number.isNaN(Number(issueNumber))) {
  console.error('❌  Usage: npm run fetch-ticket -- <issue-number>');
  console.error('   Example: npm run fetch-ticket -- 1');
  process.exit(1);
}

if (!GITHUB_TOKEN) {
  console.error('❌  GITHUB_TOKEN is not set.');
  console.error('   Add it to your .env file:');
  console.error('   GITHUB_TOKEN=ghp_your_token_here');
  process.exit(1);
}

async function fetchIssue(repo: string, number: string) {
  const url = `https://api.github.com/repos/${repo}/issues/${number}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${body}`);
  }

  return res.json() as Promise<{
    number: number;
    title: string;
    body: string | null;
    state: string;
    labels: { name: string }[];
    assignees: { login: string }[];
    html_url: string;
    created_at: string;
    updated_at: string;
  }>;
}

function toMarkdown(issue: Awaited<ReturnType<typeof fetchIssue>>): string {
  const labels = issue.labels.map((l) => l.name).join(', ') || 'none';
  const assignees = issue.assignees.map((a) => a.login).join(', ') || 'unassigned';

  return `# GH-${issue.number}: ${issue.title}

## Metadata

- **Issue:** [#${issue.number}](${issue.html_url})
- **State:** ${issue.state}
- **Labels:** ${labels}
- **Assignees:** ${assignees}
- **Created:** ${issue.created_at.split('T')[0]}
- **Updated:** ${issue.updated_at.split('T')[0]}

## Description

${issue.body ?? '_No description provided._'}
`;
}

async function main() {
  console.log(`\n🔍  Fetching GH issue #${issueNumber} from ${GITHUB_REPO}...`);

  const issue = await fetchIssue(GITHUB_REPO, issueNumber);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const filename = `GH-${issue.number}-${issue.title
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
