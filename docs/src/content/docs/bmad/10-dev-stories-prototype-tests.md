---
title: Dev Story Cycle - Implement, Review, Iterate
description: Execute the implementation cycle—implement stories, conduct code reviews, iterate on findings, and generate automated E2E tests.
---

# Tutorial: Dev Story Cycle — Implement, Review, Iterate

> **Track:** Technical / Hands-On
> **Audience:** Developers, Tech Leads
> **Time:** ~60 minutes
> **Blueprint Deliverable:** 402 — Solution Implementation
> **Prerequisites:** Tutorial 09 (Sprint Planning & Story Preparation) — you need stories at `ready-for-dev` status

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

This tutorial takes you through the **implementation cycle** for the stories you prepared in Tutorial 09. For each story, you'll:

1. **Dev Story** — the developer agent implements the story using test-driven development
2. **Code Review** — adversarial review catches bugs, edge cases, and acceptance gaps
3. **Iterate** — fix review findings and mark the story done
4. **QA Test Suite** — generate automated E2E tests that cover the implemented features

You'll run 2 stories through this cycle, experiencing how the second story builds on learnings from the first.

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario, you should have 2 stories at `ready-for-dev` status from Tutorial 09. These might be:
> - Homepage hero component (Next.js + Contentful)
> - Contact form with HubSpot integration
> - Navigation component

**Specific things to watch during code review:**
- Does the component respect `prefers-reduced-motion`? (WCAG 2.1 AA)
- Is the Contentful fetch properly error-handled?
- Is the component SSR-safe (no `window` or browser-only APIs at render time)?
- Are HubSpot API failures handled gracefully with fallback behaviour?

---

## Story 1: Implement

Open a **new conversation**:

```
/bmad-dev-story
```

The skill auto-discovers the first `ready-for-dev` story from `sprint-status.yaml`. If you want to specify:

```
/bmad-dev-story path/to/your-story-file.md
```

### What the Dev Agent Does

The dev agent follows the story file's task list exactly, using **red-green-refactor**:

1. **Red** — writes failing tests first for the current task
2. **Green** — implements minimal code to make tests pass
3. **Refactor** — improves code structure while keeping tests green
4. Marks the task complete and moves to the next one
5. Repeats until all tasks and subtasks are done

Throughout the process, the agent:
- Updates `sprint-status.yaml` to `in-progress`
- Runs the full test suite after each task to catch regressions
- Documents decisions in the story file's Dev Agent Record
- Updates the File List with every new or modified file

### What to Expect

- The agent works through every task and subtask **sequentially** — it follows the story file's order exactly
- It will **HALT** if it encounters ambiguity, missing dependencies, or 3 consecutive failures
- When all tasks are complete, it marks the story as `review`
- The agent is designed to **run to completion** without pausing — let it work

### When the Agent HALTs

If the dev agent stops, it will tell you why. Common reasons:
- **Missing dependency:** A package or configuration the story assumes isn't available
- **Ambiguous requirement:** An acceptance criterion that could be interpreted multiple ways
- **Repeated failures:** Three consecutive implementation attempts failed

When this happens, provide guidance or clarify the requirement. The agent will resume from where it stopped.

---

## Story 1: Code Review

Once the dev agent marks the story as `review`, open a **new conversation**.

**Best practice:** Use a **different LLM** than the one that implemented the story. The implementing LLM has blind spots about its own work.

```
/bmad-code-review
```

### What the Code Review Does

The review runs parallel adversarial layers:

| Layer | What It Checks |
| --- | --- |
| **Blind Hunter** | Bugs, logic errors, security vulnerabilities |
| **Edge Case Hunter** | Branching paths, boundary conditions, null/empty states |
| **Acceptance Auditor** | Does the implementation satisfy every acceptance criterion? |

Findings are triaged by severity:
- **High** — must fix before the story can be "done"
- **Medium** — should fix, creates risk if left
- **Low** — nice to fix, won't block

### What to Expect

- A structured review report with actionable findings
- Each finding is added as a task in the story file's "Review Follow-ups" section
- The story file gets a "Senior Developer Review" section with the full report

---

## Story 1: Fix Review Findings

If the review found High or Medium issues, go back to the dev agent in a **new conversation**:

```
/bmad-dev-story
```

The dev agent will:
1. Detect the review follow-up tasks (marked with `[AI-Review]` prefix)
2. Prioritize them before any remaining work
3. Mark each review item as resolved in both the task list and the review section
4. Run the full test suite to confirm fixes don't introduce regressions

Once all review items are addressed, the story moves to `done`.

---

## Story 2: The Full Cycle

Now repeat for your second story. Open a **new conversation** for each step:

### Implement

```
/bmad-dev-story
```

The skill auto-discovers the next `ready-for-dev` story.

**What's different the second time:** The story file (created in Tutorial 09) already contains learnings from Story 1 — patterns established, files created, technical decisions made. The dev agent builds on this context instead of starting from scratch.

### Review

```
/bmad-code-review
```

Same adversarial review process. Watch for:
- Does the second story reuse patterns from the first consistently?
- Are there any regressions in Story 1's functionality?

### Fix (if needed)

```
/bmad-dev-story
```

Address any review findings, same as Story 1.

---

## Generate QA Test Suite

After both stories are implemented and reviewed, generate automated tests that cover the features end to end. Open a **new conversation**:

```
/bmad-qa-generate-e2e-tests
```

### What the QA Skill Does

The QA automation engineer agent:
1. **Detects your test framework** — looks at your project's existing setup (Playwright, Jest, Vitest, Cypress, etc.) and follows its patterns
2. **Identifies features to test** — you can point it at specific components, directories, or let it auto-discover
3. **Generates API tests** (if applicable) — status codes, response validation, happy path + error cases
4. **Generates E2E tests** — user workflows, form interactions, navigation flows using semantic locators
5. **Runs the tests** to verify they pass
6. **Produces a summary** — coverage report saved to your implementation artifacts

### Apply Digital Example

For the 2 stories you implemented, tell the QA agent:

```
Generate E2E tests for the features implemented in stories 1-1 and 1-2. The project uses Next.js with App Router. Focus on:
1. User-visible workflows (navigation, form submission, content display)
2. Error states (API failures, empty content, invalid form input)
3. Accessibility checks (keyboard navigation, screen reader labels)
```

**Specific things to check in the generated tests:**
- Is there a test for `prefers-reduced-motion` (reduced motion preference disables animation)?
- Is there a test for the case where Contentful returns empty content?
- Is there a test for HubSpot API timeout/failure?
- Do form tests cover validation error messages?

### QA vs. Dev Story Tests

The dev agent writes **unit and integration tests** during implementation (the red-green-refactor cycle). The QA skill generates **E2E tests** that simulate real user behaviour across the full stack. Both are valuable:

| Test Type | Written By | Scope | Purpose |
| --- | --- | --- | --- |
| Unit tests | `/bmad-dev-story` | Individual functions/components | Verify logic works |
| Integration tests | `/bmad-dev-story` | Component interactions | Verify parts work together |
| E2E tests | `/bmad-qa-generate-e2e-tests` | Full user workflows | Verify the feature works as a user experiences it |

> **For advanced QA needs** (risk-based test strategy, quality gates, NFR assessment, comprehensive coverage analysis), consider installing the [Test Architect (TEA) module](https://bmad-code-org.github.io/bmad-method-test-architecture-enterprise/).

---

## Check Sprint Status

After both stories are complete:

```
/bmad-sprint-status
```

You should see your 2 stories at `done` status. The skill summarizes: which stories are complete, which are in progress, and what's next.

---

## Optional: Run a Retrospective

If you've completed all stories in an epic:

```
/bmad-retrospective
```

This reviews the completed work, extracts lessons learned, and assesses whether the epic met its success criteria.

---

## The Full Cycle at a Glance

```
  Story at "ready-for-dev"
          │
          ▼
  ┌───────────────────┐
  │  /bmad-dev-story   │  ◄── New conversation
  │  (TDD: red-green-  │
  │   refactor cycle)   │
  └─────────┬─────────┘
            │ Story → "review"
            ▼
  ┌───────────────────┐
  │  /bmad-code-review │  ◄── New conversation (different LLM recommended)
  │  (adversarial       │
  │   review layers)    │
  └─────────┬─────────┘
            │
     ┌──────┴──────┐
     │             │
  Approved    Changes requested
     │             │
     ▼             ▼
  "done"    /bmad-dev-story  ◄── Fixes review findings
            │
            ▼
  ┌───────────────────┐
  │  /bmad-qa-generate │  ◄── After stories are done
  │  -e2e-tests        │
  │  (E2E test suite)  │
  └───────────────────┘
```

---

## Tips for Success

### Use Fresh Conversations for Every Step

The dev agent, code reviewer, and fix cycle should each run in a **new conversation**. Context from implementation biases the review. Context from the review biases the fix.

### Use Different LLMs for Review

The code review is most effective when run by a **different LLM** than the one that wrote the code. Same-model review tends to overlook the same edge cases.

### Let Dev Story Run to Completion

The dev agent is designed to work autonomously through the entire task list. Don't interrupt it at "milestones" or "significant progress" — let it complete the full story. It will HALT if it genuinely can't proceed.

### Watch for Patterns Across Stories

After Story 2's review, look for patterns in the findings. If both stories have the same type of issue (e.g., missing error handling for API calls), that's a signal to update the architecture doc or add it to the Create Story context for future stories.

---

## Common Mistakes

### Mistake 1: Running everything in one conversation
**Problem:** Context from implementation leaks into the code review. The reviewer is primed by the dev agent's reasoning and misses the same things.
**Fix:** Fresh conversation for each skill invocation.

### Mistake 2: Skipping code review
**Problem:** Stories go straight to "done" without review. Bugs compound across stories.
**Fix:** Code review is where quality is enforced. Run it for every story.

### Mistake 3: Ignoring Low-severity findings
**Problem:** Low-severity items pile up and create technical debt.
**Fix:** Address Low items when convenient — they don't block the story, but don't ignore them forever.

### Mistake 4: Manually marking stories as "done"
**Problem:** You update sprint-status.yaml by hand, skipping the review gate.
**Fix:** Let the workflow manage status transitions. The dev agent moves stories to `review`, and the post-review fix cycle moves them to `done`.

---

## What You've Accomplished

After completing this tutorial, you've:
- Implemented 2 stories with test-driven development
- Run adversarial code reviews on both
- Fixed review findings and marked stories as done
- Generated an automated E2E test suite covering both features
- Experienced the learning transfer from Story 1 to Story 2
- Seen the full BMAD implementation cycle end to end

This is the same cycle you'll repeat for every story in the project.

---

## Next Steps

1. **Continue the sprint:** Work through remaining stories in your first epic using the same cycle
2. **Retrospective:** After completing the epic, run `/bmad-retrospective` to capture learnings
3. **Course Correct:** If scope changes mid-sprint, use `/bmad-correct-course` to navigate the change

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
