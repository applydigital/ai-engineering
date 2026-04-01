---
title: Sprint Planning & Story Preparation
description: Transition from planning to implementation by generating sprint trackers and preparing stories with full developer context.
---

# Tutorial: Sprint Planning & Story Preparation

> **Track:** Technical / Hands-On
> **Audience:** Developers, Tech Leads, Scrum Masters
> **Time:** ~30 minutes
> **Blueprint Deliverable:** 401 — Detailed User Story Backlog
> **Prerequisites:** Tutorial 07 (PRD), Tutorial 08 (Technical Architecture), completed epics and stories in `_bmad-output/`

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

This tutorial transitions from planning to implementation. You'll generate a sprint tracker from your epics and prepare your first stories for development — giving each story the full context a developer agent needs to implement it correctly.

This tutorial covers:
1. **Sprint Planning** — generate a sprint status tracker from your epics
2. **Create Story** — prepare stories with full developer context

The next tutorial (Tutorial 10) covers the implementation cycle: building stories, code review, and iteration.

### The Full Implementation Cycle

The BMAD implementation phase has four key skills that form a repeating cycle:

| Step | Skill | What It Does | Tutorial |
| --- | --- | --- | --- |
| Plan | `/bmad-sprint-planning` | Parses epics, builds sprint-status.yaml tracker | **This tutorial** |
| Prepare | `/bmad-create-story` | Creates a comprehensive story file with all context a developer needs | **This tutorial** |
| Build | `/bmad-dev-story` | Implements the story following red-green-refactor | Tutorial 10 |
| Review | `/bmad-code-review` | Adversarial code review with structured triage | Tutorial 10 |

### Why This Matters

- **Sprint Planning** prevents stories from being worked out of order or forgotten
- **Create Story** prevents the developer agent from making assumptions — it front-loads all context (architecture, previous learnings, tech specs) into the story file

---

## Tutorial Scope: Pick 2 Stories

For this tutorial, you'll prepare **2 stories** for development. Pick stories from your first epic that are small and self-contained.

### Apply Digital Example

If you're following the Apply Digital scenario, good candidates:

| Story | Why It's Good for a Tutorial |
| --- | --- |
| Homepage hero component | Visual, bounded scope, touches Next.js + Contentful |
| Contact form with HubSpot | End-to-end: UI → API → integration, clear acceptance criteria |
| Navigation component | Foundational, other stories depend on it |

Pick whichever 2 stories feel most concrete from your epics. Avoid stories with heavy dependencies on other stories.

---

## Step 1: Sprint Planning

Open a new conversation:

```
/bmad-sprint-planning
```

The skill reads your epics from `_bmad-output/` and generates a `sprint-status.yaml` file that tracks every epic, story, and retrospective.

**What to expect:**
- It parses all your epic files and extracts every story
- Each story gets a status: `backlog` → `ready-for-dev` → `in-progress` → `review` → `done`
- The output is a YAML file that all other implementation skills read and update

**After it completes**, review the generated `sprint-status.yaml`. You should see all your stories listed with `backlog` status.

### Understanding sprint-status.yaml

The status file tracks three types of items:

**Epic status:** `backlog` → `in-progress` → `done`
- Moves to `in-progress` when the first story is created
- Moves to `done` when all stories are complete

**Story status:** `backlog` → `ready-for-dev` → `in-progress` → `review` → `done`
- `backlog` — story exists only in the epics file
- `ready-for-dev` — story file has been created with full context
- `in-progress` — developer agent is actively working
- `review` — implementation complete, awaiting code review
- `done` — code reviewed and approved

**Retrospective:** `optional` ↔ `done`
- One per epic, recommended but not required

---

## Step 2: Create Your First Story

Open a **new conversation** (fresh context is important):

```
/bmad-create-story
```

The skill will either auto-discover the next backlog story from `sprint-status.yaml`, or you can specify which story to create:

```
Create story 1-1 (or whichever story ID you chose)
```

**What the skill does:**

This is the most thorough step in the cycle. The skill:
1. Loads your PRD, architecture doc, UX spec, and epics
2. Extracts everything relevant to this specific story
3. Researches latest versions of libraries/frameworks mentioned in the architecture
4. Creates a comprehensive story file with:
  - User story statement and acceptance criteria
  - Developer guardrails (architecture compliance, file structure, testing requirements)
  - Technical context from the architecture doc
  - Previous story learnings (if not the first story)
5. Updates `sprint-status.yaml` to `ready-for-dev`

**What to expect:** The skill runs mostly autonomously. It may ask a question or two if something in the epics is ambiguous. The output is a detailed story file in your implementation artifacts folder.

### Review the Story File

Before moving on, check that:
- [ ] The user story statement is clear and matches the epic
- [ ] Acceptance criteria are specific and testable
- [ ] Developer guardrails reference the correct architecture patterns
- [ ] The task list is broken down into implementable steps
- [ ] Technical context includes the right libraries and versions

---

## Step 3: Create Your Second Story

Open another **new conversation**:

```
/bmad-create-story
```

The skill will auto-discover the next backlog story. If you want a specific one:

```
Create story 1-2 (or whichever story ID you chose)
```

**What's different the second time:** The skill will analyze your first story for context — patterns established, files expected, technical decisions made. This context gets included in the second story file, helping the dev agent build on previous work.

---

## Step 4: Check Sprint Status

Verify your stories are ready:

```
/bmad-sprint-status
```

You should see your 2 chosen stories at `ready-for-dev` status. Everything else should still be `backlog`.

---

## Tips for Success

### Use Fresh Conversations

Each skill invocation should run in a **new conversation**. This prevents context pollution — the sprint planner shouldn't be influenced by story-level details.

### Don't Skip Create Story

It's tempting to jump straight to dev-story. Don't. The Create Story step front-loads critical context (architecture patterns, library versions, previous learnings) that prevents the dev agent from making costly mistakes.

### Review Before Dev

Take 5 minutes to read each story file. Catching a bad acceptance criterion now saves an hour of rework during implementation.

---

## Common Mistakes

### Mistake 1: Manually editing sprint-status.yaml
**Problem:** You update the YAML by hand and introduce formatting issues or status inconsistencies.
**Fix:** Let the skills manage the status file. Use `/bmad-sprint-status` to check progress.

### Mistake 2: Creating too many stories at once
**Problem:** You create all stories up front, but the first implementation changes the architecture patterns. Later story files have stale context.
**Fix:** Create stories just-in-time — one or two ahead of implementation.

### Mistake 3: Not reviewing story files
**Problem:** The dev agent implements exactly what the story file says. If acceptance criteria are vague, the implementation will be too.
**Fix:** Review every story file before moving to dev-story.

---

## Next Steps

Your stories are prepared and ready for development. In **Tutorial 10**, you'll take these stories through the implementation cycle:

1. **Dev Story** — implement with test-driven development
2. **Code Review** — adversarial review of the implementation
3. **Iterate** — fix review findings and complete the story

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
