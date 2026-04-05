---
title: GitHub Team Collaboration & Code Organization
description: Git and GitHub practices for multi-person BMAD teams to share context, branch work, and merge AI-generated outputs.
---

# Tutorial 00c: GitHub Team Collaboration & Code Organization

> **Track:** All roles
> **Audience:** All team members working on a shared BMAD project
> **Time:** ~30 minutes
> **Prerequisites:** Tutorial 00a or 00b (Install)

---

## Overview

BMAD was originally designed for a single-operator workflow. When a team uses it, you need agreed practices for sharing context, branching work, and merging AI-generated outputs — otherwise each person's agent operates from a different source of truth.

This tutorial covers the Git and GitHub practices that make BMAD work for a multi-person team:

- Repository structure and what goes where
- Branch strategy for BMAD story work
- Commit conventions that carry AI context
- Daily sync workflow
- PR standards and merge rules
- Handling conflicts in `.bmad/` context files

The Apply Digital project uses GitHub as the shared working memory for the entire team — not just source code, but briefs, architecture decisions, BMAD outputs, meeting notes, and design references. Everything lives in the repo so every team member's AI agent is working from the same material.

---

## Quick Setup Checklist

Before your first day contributing to the project, complete these steps:

### Individual Setup

- [ ] Create a GitHub account (use your work email)
- [ ] Ask the project lead to add you to the Apply Digital GitHub repo
- [ ] Install [GitHub Desktop](https://desktop.github.com) (recommended for non-technical users)
- [ ] Clone the repo locally
- [ ] Confirm Claude Code or Cursor access
- [ ] Open the project folder in your IDE

### BMAD Setup

- [ ] Confirm BMAD is installed (from the project root, run `npx bmad-method install` if needed)
- [ ] Confirm skills and workflows are accessible (run `/bmad-help` in your AI tool)
- [ ] Locate the `_bmad-output/` folder — this is where all BMAD deliverables are saved
- [ ] Load `_bmad-output/project-context.md` at the start of each session if it exists

---

## Repository Structure

The Apply Digital project repo follows this layout. **Do not reorganize folders without team agreement** — AI agents depend on predictable paths to find context files.

```
apply-digital-redesign/
├── _bmad/                          # BMAD configuration (committed)
│   ├── context/                    # Shared AI context documents
│   │   ├── project-brief.md        # Top-level project definition
│   │   ├── architecture.md         # Technical decisions log
│   │   └── glossary.md             # Project-specific terminology
│   ├── stories/
│   │   ├── active/                 # Stories currently in development
│   │   ├── completed/              # Done stories (archived)
│   │   └── backlog/                # Stories not yet started
│   └── agents/                     # Agent persona definitions
├── _bmad-output/                   # All BMAD workflow outputs (committed)
│   ├── product-brief.md
│   ├── ux-design-specification.md
│   ├── trigger-map.md
│   └── ...
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
├── docs/                           # Public documentation
├── src/                            # Application source code
└── README.md
```

### What Belongs in the Repo

The repo is the **shared working memory** for both the team and their AI agents. Everything important goes here:

| Content type | Where it goes |
| --- | --- |
| BMAD workflow outputs (briefs, PRDs, specs) | `_bmad-output/` |
| User stories | `_bmad/stories/active/` or `backlog/` |
| Architecture decisions | `_bmad/context/architecture.md` |
| Meeting notes and decisions | `docs/meetings/` |
| Design exports (Excalidraw, Figma exports) | `_bmad-output/` |
| Source code | `src/` |

> **Key rule:** Never rely on private chat history for important decisions or context. If it matters to the project, it belongs in the repo.

### `.gitignore` Rules for BMAD

Add these entries to avoid committing ephemeral AI session data:

```
# Local Claude Code session logs
.claude/
CLAUDE.local.md

# Local agent overrides (developer-specific)
_bmad/local-overrides/

# Temporary BMAD scratch files
_bmad/scratch/
*.bmad-tmp

# GitHub Copilot local cache
.copilot-cache/

# macOS metadata
.DS_Store
```

### GitHub Copilot Context File

If your team uses GitHub Copilot alongside Claude Code, create `.copilot-instructions.md` at the repo root. Copilot reads this automatically in VS Code and uses it to align suggestions with your project conventions:

```markdown
## Project Context
This project follows the BMAD methodology. All AI suggestions must align
with the architecture defined in _bmad/context/architecture.md.

## Coding Conventions
- Follow patterns established in existing src/ files
- Tests required for all new business logic

## Do Not Suggest
- Changes to _bmad/agents/ without explicit human review
- Direct edits to architecture.md (use the ADR process)
- New dependencies without noting them in the PR description
```

> **Claude Code** reads `CLAUDE.md` at the repo root and any `_bmad/context/` files you reference in your prompt. Point Claude Code to `_bmad/context/project-brief.md` at the start of each session.

---

## Branch Strategy

### Branch Types

| Branch | Pattern | Purpose |
| --- | --- | --- |
| `main` | `main` | Production-ready. Protected — no direct commits. |
| `develop` | `develop` | Integration branch. All story work merges here. |
| `story/*` | `story/S{n}-{slug}` | One branch per BMAD story. This is where AI agents work. |
| `fix/*` | `fix/{issue}-{slug}` | Bug fixes outside of stories. |
| `chore/*` | `chore/{description}` | Tooling, context updates, housekeeping. |
| `experiment/*` | `experiment/{description}` | Exploratory work — never merges to `develop` directly. |

### Branch Naming

```
# Story branch
story/S12-homepage-redesign
story/S34-contact-form-integration
story/S07-case-study-component

# Bug fix
fix/142-mobile-nav-overflow

# Housekeeping
chore/update-brand-guidelines
chore/upgrade-dependencies
```

### Branch Lifecycle

1. Always branch from `develop`: `git checkout develop && git pull && git checkout -b story/S12-homepage`
2. Work on the story (with your AI agent). Commit frequently.
3. Keep your branch current: `git fetch origin && git rebase origin/develop`
4. Open a PR to `develop` when story acceptance criteria are met
5. After merge, delete the story branch
6. `develop` merges to `main` at each milestone via a release PR

**Never commit directly to \****`main`***\* or \****`develop`**\*\*.** All changes flow through PRs so context and rationale stay documented.

---

## Commit Conventions

BMAD projects use Conventional Commits with BMAD-specific extensions. This matters because AI agents read commit history to understand project context — clear commit messages help the next session pick up where the last one left off.

### Format

```
<type>(<scope>)[bmad:S{n}]: <short description>

[optional body]

[optional BMAD footer]
```

### Examples

```
feat(homepage)[bmad:S12]: implement hero component with CMS-driven content
fix(contact)[bmad:S34]: handle HubSpot form submission timeout
bmad(context): update architecture.md with Contentful content model decisions
docs(prd): add acceptance criteria for case study filtering
```

### Commit Types

| Type | When to use |
| --- | --- |
| `feat` | New feature or story acceptance criterion met |
| `fix` | Bug fix |
| `bmad` | BMAD-specific: agent updates, story moves, context changes in `_bmad/` |
| `docs` | Documentation-only changes (including `_bmad-output/` updates) |
| `refactor` | Code restructure with no behavior change |
| `test` | Adding or correcting tests |
| `chore` | Tooling, dependencies, configuration |
| `wip` | Work in progress — **squash before merging**, never use on final commits |

### BMAD Footer (for significant AI decisions)

When an AI agent makes an important architectural or design decision, record it in the commit footer:

```
feat(services)[bmad:S07]: add services listing page with Contentful integration

Implements story S07 AC-2: services list pulls from Contentful content type.
Chose static generation over SSR based on architecture.md §3.1.

BMAD-Agent: claude-code
BMAD-Story: S07
BMAD-Decision: Static generation chosen for performance; revalidation set to 1 hour
BMAD-Reviewed-By: your.name@applydigital.com
```

**Tip:** End each Claude Code session with: *"Summarize what we changed in this session for a git commit message."*

---

## Story Ownership Model

Each BMAD story has exactly one **Story Owner** — the human developer responsible for that branch. AI agents assist the Story Owner but are never owners themselves.

| Role | Responsibility |
| --- | --- |
| **Story Owner** | Drives the story branch, makes final code decisions, opens the PR |
| **Reviewer 1** | Reviews code quality, tests, and alignment with `architecture.md` |
| **Reviewer 2** | Reviews BMAD context files and verifies story acceptance criteria are met |
| **AI Agent** | Generates code, refactors, writes tests — always under human oversight |

> One person cannot be both Story Owner and sole reviewer. Every PR needs at least one human reviewer who didn't write the code.

---

## Daily Sync Workflow

### Morning Startup

1. Pull latest `develop`:
```
   git fetch origin
   git checkout develop && git pull
```
2. Rebase your story branch:
```
   git checkout story/S12-homepage && git rebase origin/develop
```
3. Resolve any rebase conflicts (see [Conflict Resolution](#conflict-resolution) below)
4. Open your IDE and start your AI session with context:
   > *"We are continuing story S12 — homepage component implementation. Context: ****`_bmad/stories/active/S12-homepage.md`**** and ****`_bmad-output/ux-design-specification.md`****"*
5. Check GitHub for PR comments from teammates

### End-of-Day Commit

1. Stage all story-related changes including any `_bmad-output/` or `_bmad/` updates
2. Commit with the convention:
```
   git commit -m "wip(homepage)[bmad:S12]: progress on hero and navigation components"
```
3. Push:
```
   git push origin story/S12-homepage
```
4. If acceptance criteria are met, open a PR

---

## Pull Request Standards

### PR Template

Save this as `.github/PULL_REQUEST_TEMPLATE.md` in the repo:

```markdown
## Story Reference
- **BMAD Story:** S{number} — {story title}
- **Story file:** `_bmad/stories/active/S{number}-{slug}.md`
- **Acceptance Criteria met:** (list which ACs this PR covers)

## Summary of Changes
<!-- What does this PR do? Write for a teammate with zero context. -->

## AI Agent Activity
- **Primary agent:** [ ] Claude Code  [ ] Copilot  [ ] Both  [ ] Neither
- **Agent-generated code:** Yes / No — if Yes, which files?
- **Human review of agent code:** Yes / No
- **Key AI decisions made:**
  -

## BMAD Context Changes
- [ ] `_bmad/context/` files updated
- [ ] `_bmad/stories/` story file updated (ACs checked off)
- [ ] `_bmad-output/` deliverables updated
- [ ] No BMAD context changes in this PR

## How to Review
<!-- Tell reviewers where to start, what to focus on, any gotchas -->

## Checklist
- [ ] Tests added/updated for all new behavior
- [ ] `architecture.md` updated if a new architectural decision was made
- [ ] `CLAUDE.md` or `.copilot-instructions.md` updated if project conventions changed
- [ ] Self-reviewed all AI-generated code line by line
- [ ] No secrets, API keys, or personal data in any committed file
```

### Merge Strategy

| Scenario | Strategy |
| --- | --- |
| Story branch → `develop` | **Squash & merge** — one clean commit per story |
| `develop` → `main` | **Merge commit** — preserves develop history |
| Never use | Rebase & merge — loses BMAD footer metadata |

After squash-merging a story, move the story file from `_bmad/stories/active/` to `_bmad/stories/completed/` in a follow-up chore commit.

### PR Review Standards

AI-generated code requires the same review rigour as human-written code — in some cases more, because AI agents can produce confident-looking code with subtle errors.

**What every reviewer must check:**

| Area | What to look for |
| --- | --- |
| **Functionality** | Does the code correctly implement every story AC? |
| **AI code quality** | Hallucinated APIs, over-engineered solutions, subtle logic errors, tests that always pass |
| **Context integrity** | Do the `_bmad/context/` changes accurately reflect what was actually built? |
| **Architecture alignment** | Does the implementation match `architecture.md`? If not, was a new ADR added? |
| **Test coverage** | Are tests meaningful, or did the AI write tests that always pass? |

**Useful review prompts for Claude Code:**
- *"Audit **`services-page.tsx`** for correctness and alignment with our architecture"*
- *"Review **`_bmad/context/architecture.md`** after this merge for logical consistency"*
- *"Check this component for hallucinated Next.js APIs or non-existent Contentful methods"*

> **Do not let GitHub Copilot auto-resolve conflicts in ****`_bmad/`**** files.** Copilot does not have enough project context to make safe decisions about AI agent context documents.

---

## Conflict Resolution

`.bmad/` and `_bmad-output/` files need careful handling during merges — these are context documents, not code, and auto-resolving them can corrupt the shared project understanding.

| File type | Risk | Who resolves |
| --- | --- | --- |
| `src/` code | Low–medium | Story owner + AI assist |
| `_bmad/context/` | **High** | Story owner + team lead |
| `_bmad-output/` deliverables | Medium | Story owner (their version wins) |
| `_bmad/stories/` | Medium | Story owner |

**Rules:**
1. Do not blindly auto-merge context or deliverable `.md` files
2. For `_bmad/context/` conflicts: favor the most recent architecture decision — check `git log` on the file
3. For `_bmad-output/` conflicts: the story owner's version takes precedence; notify the other person in the PR
4. After resolving: ask Claude Code to review the merged file for logical consistency

**Prevention:** Rebase onto `develop` daily, keep story branches short-lived (target 3 days), and coordinate via a GitHub Issue before editing shared context files like `architecture.md`.

---

## Managing `_bmad-output/` as Shared Context

The `_bmad-output/` folder is the team's shared source of truth for BMAD deliverables. Treat it like `src/` — every change goes through a branch and PR.

**Parallel story development rules:**
- Shared context files (`project-brief.md`, `architecture.md`) are **read-only** during active stories — context updates go through PRs to `develop`
- If two stories both need a context update, coordinate via a GitHub Issue and use a `chore/update-shared-context` branch
- AI sessions are local and ephemeral — never commit `.claude/` session logs or scratch files

**Before starting each AI session:** compare your branch against `develop` to check if any context files have been updated since your last session.

---

## GitHub Actions — Context Validation (Optional)

For teams wanting automated checks on BMAD context integrity, add this workflow as `.github/workflows/bmad-context-check.yml`:

```yaml
name: BMAD Context Validation
on:
  pull_request:
    paths:
      - '_bmad/**'
      - '_bmad-output/**'

jobs:
  validate-bmad-context:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Check required context files exist
        run: |
          for f in _bmad-output/product-brief.md; do
            [ -f "$f" ] || (echo "Missing required: $f" && exit 1)
          done

      - name: Validate story files have acceptance criteria
        run: |
          for f in _bmad/stories/active/*.md; do
            [ -f "$f" ] || continue
            grep -q "Acceptance Criteria" "$f" || \
            (echo "Story missing AC section: $f" && exit 1)
          done

      - name: Check no secrets in BMAD files
        run: |
          if grep -rE "(api_key|secret|password|token)\s*[:=]\s*\S+" _bmad/ _bmad-output/; then
            echo "Possible secret found in BMAD files"
            exit 1
          fi
```

---

## Quick Reference

### Daily Commands

```shell
# Morning: sync and rebase
git fetch origin
git checkout develop && git pull
git checkout story/S{n}-{slug} && git rebase origin/develop

# Check status
git status
git log --oneline -10

# Stage and commit
git add -p
git commit -m "feat(scope)[bmad:S{n}]: description"
git push origin story/S{n}-{slug}

# After PR merge: clean up
git checkout develop && git pull
git branch -d story/S{n}-{slug}
git remote prune origin
```

### AI Session Starters

**Starting a new story:**
> *"We are starting story S12 — homepage redesign. Read ****`_bmad/stories/active/S12-homepage.md`**** and ****`_bmad/context/architecture.md`****. Confirm you understand the acceptance criteria before we begin."*

**Continuing a story:**
> *"We are continuing story S12. Here are the last few commits: [paste]. Today's focus is [component/task]."*

**Ending a session:**
> *"Summarize what we changed in this session as a conventional commit message with the ****`[bmad:S12]`**** tag."*

### Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Agent ignores architecture decisions | Context not loaded at session start | Reference `architecture.md` explicitly at session start |
| Frequent `_bmad/context/` conflicts | Uncoordinated edits by multiple people | Coordinate via GitHub Issues before editing shared context |
| AI makes decisions already decided | Stale context in session | Pull latest `develop`, reload context files |
| Committed sensitive data | Missing `.gitignore` rules | `git rm -r --cached <file>`, fix `.gitignore`, notify team lead |
| Story branch drifted far from `develop` | Infrequent rebasing | Rebase daily; target 3-day maximum branch lifetime |

---

## Next Steps

With your GitHub workflow set up, proceed to:

1. **Tutorial 01** — Project context and use case
2. **Tutorial 02** — Discovery and customer experience strategy

Whenever you complete a BMAD workflow and save outputs to `_bmad-output/`, commit them to your branch and push so your teammates' agents have access to the latest deliverables.

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
