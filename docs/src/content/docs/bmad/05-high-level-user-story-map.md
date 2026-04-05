---
title: High-Level User Story Map
description: Create a structured outline of functional requirements, linking the Product Brief to detailed PRDs and implementation plans.
---

# Tutorial: High-Level User Story Map

> **Track:** Non-Technical
> **Audience:** Product Managers, UX Designers, Tech Leads, Strategists
> **Time:** ~30 minutes
> **Blueprint Deliverable:** 303 — High-Level User Story Map
> **Prerequisites:** Tutorial 03 (Product Brief)

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

The High-Level User Story Map is a structured outline of the functional requirements prioritized for project planning purposes. It's **not** a detailed PRD or a sprint-ready backlog — it's the layer between the Product Brief and those downstream artifacts.

Think of it as the answer to: **"What does this product need to do, for whom, and in what order of priority?"**

It serves as the source of truth to align the team on scope, identify MVP boundaries, and ensure no functional gaps exist in the proposed solution.

### What the User Story Map Enables

The story map feeds directly into:

- **304 — Technical Architecture Document** (what needs to be built informs how it's built)
- **305 — Production Design** (designers need to know the full scope of functionality)
- **307 — Measurement Plan** (what to measure depends on what functionality exists)
- **308 — Product Feature Roadmap** (the story map defines what's in each release)
- **314 — Product Requirements Document** (the PRD elaborates on each story in detail)

### What It Is (and Isn't)

| It IS | It ISN'T |
| --- | --- |
| A high-level list of epics and user stories | A detailed PRD with acceptance criteria |
| Minimal descriptions ("I want to...") | Full specifications with edge cases |
| Prioritized with release/MVP boundaries | A flat backlog with no structure |
| Organized by users, activities, and epics | A technical task list |
| An input into detailed requirements | The final word on requirements |

### Dependencies

- **301 — Product Brief** (primary input — epics and scope come from here)
- **205 — Technical Strategy Document** (technical constraints inform feasibility)
- **302 — Information Architecture** (site structure informs user flows)

---

## How This Tutorial Works

You'll use the BMAD `/bmad-create-epics-and-stories` skill to build the story map in two steps:

1. **Generate Epics** — the skill breaks the Product Brief into major functional areas. You review and refine before proceeding.
2. **Generate User Stories** — the skill creates high-level "I want to..." stories within each approved epic.

This two-step process gives you a checkpoint between epics and stories, preventing wasted work if the epic structure needs adjustment.

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario from `01-use-case-and-project-context.md`, use the context below for your story mapping session.

**Where you are:** You have a Product Brief that defines Phase 1 scope, user types, and key objectives. Now you need to break that down into a structured map of what the product needs to do.

**Your users:**
- **Enterprise clients** — evaluating Apply Digital as a delivery partner (primary)
- **Prospective hires** — senior engineers, designers, strategists exploring careers
- **Existing clients/partners** — looking for case studies and updates

**Your epics (from the Product Brief):**
- Enterprise client conversion journey
- Brand and services showcase
- Case studies
- Talent attraction
- Foundation and performance

**Key MVP questions:**

| Question | Impact |
| --- | --- |
| Does "Start a Conversation" need a multi-step form or a simple contact form? | Conversion UX complexity |
| Do case studies need filtering/search or is a curated list enough? | Development effort |
| Is ATS integration in Phase 1 or is "email to apply" acceptable? | Integration complexity |
| Does the blog need to exist at launch? | Content operations scope |
| How many case studies need to migrate on day 1? | Content migration effort |

---

## Part 1: Build the High-Level User Story Map

### What the Story Map Looks Like

The blueprint defines a specific structure:

- **Users** — the audience types from the Product Brief
- **Epics** — the major functional areas
- **User Activities** — what users are trying to accomplish within each epic
- **High-Level User Stories** — "I want to..." statements describing the functionality
- **Prioritization and Release Lines** — which stories are MVP vs. Phase 2+

Each user story should be minimal — a single sentence describing the functionality from the user's perspective. Detailed requirements come later in the PRD (314).

### Step 1: Generate Epics

Open a new conversation in your AI tool. Invoke the epics and stories skill:

```
/bmad-create-epics-and-stories
```

The skill will automatically pick up your Product Brief from the `_bmad-output/` folder. If it doesn't find it, point it to `_bmad-output/applydigital-product-brief.md`.

When prompted, provide context:

```
I need a High-Level User Story Map (Blueprint 303) for the Apply Digital website redesign. The Product Brief is in _bmad-output/.

Start by generating the epics. For each epic, include:
1. Epic name and description
2. Which user type(s) it serves
3. Which strategic imperative it maps to
4. Priority — MVP (Phase 1) vs. Phase 2
5. MVP boundary rationale — why this epic is in or out

Let me review the epics before we move to user stories.
```

**What to expect:** The skill will produce a list of epics derived from the Product Brief. Review them before proceeding — this is your chance to adjust scope, merge overlapping epics, or split epics that are too broad.

**Tips for reviewing epics:**
- Each epic should map to a strategic imperative — if it doesn't, question whether it's in scope
- Epics should be roughly similar in size — if one is dramatically larger, consider splitting it
- Look for missing epics — is there a cross-cutting epic for performance, accessibility, or analytics?

### Step 2: Generate User Stories

Once you're satisfied with the epics, ask the skill to generate user stories within each one:

```
The epics look good. Now generate high-level user stories for each epic.

For each story:
1. Use "I want to..." format (one sentence, minimal description)
2. Identify which user type the story serves
3. Mark as MVP (Phase 1) or Phase 2
4. Note any dependencies on other stories

Keep stories high-level — these are NOT detailed requirements. The PRD (314) will elaborate on each story later.

Format as: User → Epic → Activity → Stories, with a clear MVP line.
```

**What to expect:** The skill will generate user stories within the epic structure. Each story should be a single sentence in "I want to..." format — no acceptance criteria, no edge cases, no technical detail.

### Step 3: Draw the MVP Line

After the stories are generated, refine the MVP boundary:

```
Now let's draw the MVP line. For each epic, mark which user stories are MVP (Phase 1) and which are deferred. Apply these prioritization criteria:
1. Must directly support the primary conversion goal ("Start a Conversation")
2. Must be achievable within the $500K / 6-month constraint
3. Must serve the primary audience (enterprise clients) first

For any story that's borderline, explain the trade-off and recommend in or out.
```

### Step 4: Identify Functional Gaps

```
Review the story map for functional gaps:
1. Are there any user journeys where a step is missing? (e.g., user can browse services but can't get to a related case study)
2. Are there any stories that assume functionality not covered elsewhere? (e.g., "filter case studies" assumes a taxonomy exists)
3. Are there any cross-cutting concerns not captured? (e.g., search, accessibility, performance)

List any gaps and recommend whether they should be added to MVP or deferred.
```

---

## Part 2: Validate the Story Map

### Quick Validation Checklist

- [ ] **Every user type has stories** — no audience is forgotten
- [ ] **Every Product Brief scope item has at least one story** — nothing dropped
- [ ] **Stories are "I want to..." format** — user-centred, not task-centred
- [ ] **MVP line is explicit** — clear boundary between Phase 1 and deferred
- [ ] **No functional gaps in key journeys** — enterprise client can get from homepage to contact form without a missing step
- [ ] **Cross-cutting concerns are captured** — accessibility, performance, analytics
- [ ] **Stories are minimal** — no detailed requirements or acceptance criteria (that's the PRD)

### Cross-Reference with Product Brief

```
Compare this High-Level User Story Map against the Product Brief. Check for:
1. Any Product Brief scope items that don't have corresponding stories
2. Any stories that weren't in the Product Brief (scope creep?)
3. MVP boundary consistency — does the story map's Phase 1 match the Product Brief's Phase 1?
4. User type coverage — does every user type from the Product Brief have stories?
```

---

## What Good Looks Like

**Strong High-Level User Story Map:**
- Organized by real user types, not internal team structure
- Activities describe what users are trying to accomplish, not what the system does
- Stories are minimal — one sentence, "I want to..." format
- MVP line is explicit with rationale for every boundary decision
- No functional gaps in critical journeys (especially the conversion flow)
- Deferred stories have a clear home (Phase 2 vs. Phase 3 vs. backlog)

**Weak High-Level User Story Map:**
- Stories are technical tasks disguised as user stories ("As a developer, I want to set up the CMS")
- No MVP line — everything is "important"
- Stories include detailed acceptance criteria (that belongs in the PRD)
- Missing stories for secondary audiences (prospective hires, existing clients)
- No rationale for priority decisions

---

## Common Mistakes

### Mistake 1: Writing detailed stories instead of high-level ones
**Problem:** Each story has paragraphs of requirements and acceptance criteria.
**Fix:** Keep stories to one sentence. "I want to browse open positions by department." The detail comes in the PRD (314).

### Mistake 2: Organizing by feature instead of by user
**Problem:** The map is structured around "Homepage Features" and "Contact Form Features" instead of user journeys.
**Fix:** Organize by user type → activity → stories. The user's perspective should drive the structure.

### Mistake 3: No MVP line
**Problem:** The story map lists everything with no prioritization — it's a wish list, not a plan.
**Fix:** Draw a clear horizontal line. Everything above ships in Phase 1, everything below is deferred. Every story needs to be on one side of that line.

### Mistake 4: Forgetting cross-cutting stories
**Problem:** Individual page stories are covered but nobody captured "I want the site to load fast" or "I want the site to be accessible."
**Fix:** Add a cross-cutting epic for non-functional requirements — performance, accessibility, SEO, analytics.

### Mistake 5: Story map doesn't match the Product Brief
**Problem:** The story map includes features that weren't in the Product Brief, or misses scope that was.
**Fix:** Cross-reference every story back to a Product Brief scope item. If a story doesn't trace back, question whether it's in scope.

---

## Saving Your Work

Save your story map to your `_bmad-output/` folder:
- `applydigital-high-level-user-story-map.md` (the full story map with MVP line)

This will be used as input in subsequent tutorials:
- **Tutorial 06** — Information Architecture, Wireframes & Production Design (305)
- **Tutorial 07** — Component Library and Design System
- **Tutorial 08** — PRD with detailed functional requirements (314)

---

## Next Steps

With your High-Level User Story Map complete:

1. **Information Architecture & Component Model:** Use the story map to validate the IA — every story should have a corresponding page or section (Tutorial 06)
2. **PRD:** Each high-level story becomes a detailed requirement with acceptance criteria (Tutorial 07)
3. **Technical Architecture:** The story map's scope and integration stories inform the architecture document (Tutorial 08)
4. **Workshop with stakeholders:** Use the story map's MVP line as the centrepiece of a scope review with the project owner

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
