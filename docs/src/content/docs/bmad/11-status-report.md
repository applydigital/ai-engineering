---
title: Status Report
description: Produce recurring status reports that provide ongoing visibility into progress, risks, and upcoming work for stakeholder alignment.
---

# Tutorial: Status Report

> **Track:** Non-Technical
> **Audience:** Project Managers, Delivery Leads, Scrum Masters
> **Time:** ~20 minutes
> **Blueprint Deliverable:** 107 — Status Report
> **Prerequisites:** Tutorial 09 (Sprint Planning) — you need a `sprint-status.yaml` and at least one completed story

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

The Status Report (107) provides ongoing visibility into progress, risks, and upcoming work. It's a **recurring deliverable** — produced weekly or per sprint — that keeps stakeholders aligned without requiring them to dig into sprint boards or YAML files.

This tutorial shows you how to pull together a status report using data from your BMAD sprint execution (Tutorials 09–10) and align it with the Experience Delivery Blueprint's PM Track.

### What the Status Report Covers

Per the blueprint, the status report should:
- Summarize progress and milestones
- Flag risks, blockers, and decisions needed
- Outline next steps
- Report hours burned (if T&M project)

### Where It Fits in the PM Track

| Deliverable | Purpose |
| --- | --- |
| 102 — Timeline | Overall project schedule |
| 106 — RAIDD Log | Running log of risks, assumptions, issues, dependencies, decisions |
| **107 — Status Report** | Recurring snapshot of progress and health |
| 108 — Account Delivery Update | Internal leadership visibility |

The Status Report pulls from the Timeline and RAIDD Log and feeds into the Account Delivery Update.

---

## Apply Digital Use Case

> If you've been following the Apply Digital scenario through Tutorials 09–10, you have:
> - A `sprint-status.yaml` tracking all epics and stories
> - 2 completed stories with code reviews
> - An E2E test suite
> - Possibly a retrospective

**Your status report needs to communicate:** What got done this sprint, what's coming next, and whether the project is on track for the 6-month delivery timeline.

---

## Step 1: Gather Sprint Data

Start by checking your sprint status. Open a new conversation:

```
/bmad-sprint-status
```

This gives you a structured summary of:
- Stories completed this sprint
- Stories in progress
- Stories remaining in the backlog
- Epic progress (what percentage of each epic is done)

Copy or note the key numbers — you'll use them in the report.

---

## Step 2: Write the Status Report

You can use the BMAD tech writer agent to draft the report, or write it yourself. For the AI-assisted approach:

```
/bmad-agent-tech-writer
```

Then ask:

```
Write a project status report (Blueprint 107) for the Apply Digital website redesign. Use the sprint status data from _bmad-output/ and the following structure:

1. Executive Summary — 2-3 sentence progress summary and overall health (Green/Amber/Red)
2. Progress This Period — completed deliverables and stories, with links to artifacts
3. Deliverable Tracker — status of all Experience Delivery Blueprint deliverables in scope
4. Key Metrics — sprint velocity, stories completed, defects, test coverage
5. Risks & Blockers — description, impact, mitigation, owner
6. Decisions Needed — decision, owner, due date
7. Next Steps — priorities for next sprint with owners
8. Artifacts — links to key deliverables in _bmad-output/
```

### The Deliverable Tracker

This is the section that ties the status report back to the Experience Delivery Blueprint. For the Apply Digital project, the tracker should cover every deliverable that's been produced or is in scope:

```markdown
| # | Deliverable | Status | Tutorial | Notes |
|---|-------------|--------|----------|-------|
| 201 | Opportunity Identification | Complete | 02 | CX audit and gap analysis done |
| 202 | Digital Growth Strategy | Complete | 02 | Strategy approved by stakeholder |
| 203 | Conceptual Design | Complete | 02 | Design direction selected |
| 204 | Strategic Initiative Roadmap | Complete | 04 | 3-horizon roadmap approved |
| 301 | Product Brief | Complete | 03 | Scope locked for Phase 1 |
| 302 | Information Architecture | Complete | 06 | Sitemap validated against story map |
| 303 | High-Level User Story Map | Complete | 05 | MVP boundary defined |
| 304 | Technical Architecture | Complete | 08 | Next.js + Contentful + Vercel |
| 306 | Component Library | Complete | 06 | Component inventory with CMS fields |
| 314 | PRD | Complete | 07 | Acceptance criteria reviewed |
| 401 | Detailed User Story Backlog | In Progress | 09 | 2 of N stories prepared |
| 402 | Solution Implementation | In Progress | 10 | 2 stories implemented and reviewed |
| 107 | Status Report | This Document | 11 | — |
```

Adapt this to your actual progress. The key is that **every Blueprint deliverable maps to a tutorial and has a status**.

---

## Step 3: Review and Polish

Run the report through the editorial review for quality:

```
/bmad-editorial-review-prose
```

Point it at your status report file. This checks for communication clarity, conciseness, and consistency.

---

## Status Report Structural Framework

For reference, here's the full template aligned to Blueprint 107:

```markdown
# Status Report — [Project Name]

**Project:** [Name]
**Sprint / Reporting Period:** [Sprint N / Date Range]
**Date:** [Report Date]
**Prepared by:** [Name]
**Overall Health:** 🟢 Green / 🟡 Amber / 🔴 Red

---

## Executive Summary

[2-3 sentences: what happened, overall health, any headline risks]

## Progress This Period

### Deliverables Completed
- [Deliverable name] — [brief description of what was delivered]

### Stories Completed
- [Story ID] — [Story title] — [Status: done/reviewed]

### Stories In Progress
- [Story ID] — [Story title] — [Status: in-progress/review]

## Deliverable Tracker

| # | Deliverable | Status | Notes |
|---|-------------|--------|-------|
| ... | ... | ... | ... |

## Key Metrics

| Metric | This Sprint | Cumulative |
|--------|------------|------------|
| Stories completed | X | Y |
| Stories remaining | X | — |
| Sprint velocity (points) | X | Avg: Y |
| Open defects | X | — |
| Test coverage (E2E) | X% | — |
| Code review findings resolved | X/Y | — |

## Risks & Blockers

| Risk / Blocker | Impact | Mitigation | Owner | Status |
|---------------|--------|------------|-------|--------|
| ... | ... | ... | ... | ... |

## Decisions Needed

| Decision | Context | Owner | Due Date |
|----------|---------|-------|----------|
| ... | ... | ... | ... |

## Next Steps

1. [Priority 1] — [Owner]
2. [Priority 2] — [Owner]
3. [Priority 3] — [Owner]

## Artifacts

- Product Brief: `_bmad-output/[filename]`
- PRD: `_bmad-output/[filename]`
- Architecture: `_bmad-output/[filename]`
- Sprint Status: `_bmad-output/sprint-status.yaml`
```

---

## Tips for a Strong Status Report

- **Lead with health.** Green/Amber/Red tells the reader instantly whether to skim or dig in.
- **Deliverable Tracker is the backbone.** It ties sprint work back to the Blueprint and shows progress against the full project scope, not just this sprint's stories.
- **Quantify progress.** "2 of 12 stories done" is more useful than "making good progress."
- **Risks need mitigations.** Don't just list risks — show what you're doing about them and who owns it.
- **Link to artifacts.** Stakeholders shouldn't have to ask where to find things.

---

## Common Mistakes

### Mistake 1: Status report that's just a story list
**Problem:** The report lists completed stories but doesn't connect them to deliverables or project milestones.
**Fix:** Use the Deliverable Tracker to show how sprint work maps to Blueprint deliverables.

### Mistake 2: No health indicator
**Problem:** Readers have to read the whole report to understand if the project is in trouble.
**Fix:** Put Green/Amber/Red at the top. Define your criteria (e.g., Green = on track and on budget, Amber = at risk, Red = off track).

### Mistake 3: Risks without owners
**Problem:** Risks are listed but nobody is responsible for mitigating them.
**Fix:** Every risk needs an owner and a mitigation action.

---

## Saving Your Work

Save your status report to `_bmad-output/`:
- `status-report-YYYY-MM-DD.md` (dated for each reporting period)

---

## Next Steps

1. **Recurring cadence:** Set up a weekly or per-sprint rhythm for status reports
2. **RAIDD Log (106):** If risks are accumulating, consider maintaining a formal RAIDD log alongside the status report
3. **Account Delivery Update (108):** Use the status report as input for internal leadership updates

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
