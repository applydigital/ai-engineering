---
title: Strategic Initiative Roadmap
description: Translate your digital growth strategy into a time-bound, executive-ready plan showing what gets built when and why.
---

# Tutorial: Strategic Initiative Roadmap

> **Track:** Non-Technical
> **Audience:** Product Managers, Strategists, Account Leads
> **Time:** ~30 minutes
> **Blueprint Deliverable:** 204 — Strategic Initiative Roadmap
> **Prerequisites:** Tutorial 02 (Digital Growth Strategy) and Tutorial 03 (Product Brief)

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

The Strategic Initiative Roadmap translates your Digital Growth Strategy into a **time-bound, executive-ready plan** that shows what gets built when and why. It's the deliverable that answers the question stakeholders always ask: **"What's the plan?"**

In the Experience Delivery Blueprint, the Strategic Initiative Roadmap (204) is a high-level timeline that prioritizes key strategic initiatives across broad time horizons and communicates to an executive audience what is required to achieve the future state for the business.

### What the Strategic Initiative Roadmap Enables

The roadmap feeds directly into:

- **213 — Executive Summary** (if applicable)
- **301 — Product Brief** (which you may have already started in Tutorial 03 — the roadmap refines and validates the phasing decisions you made there)

### Dependencies

The roadmap builds on:

- **202 — Digital Growth Strategy** (the strategic imperatives and vision from Tutorial 02)
- **205 — Technical Strategy Document** (technical constraints and platform decisions)

### Why This Matters

Without a roadmap, the Product Brief exists in a vacuum — it defines Phase 1 scope but doesn't show how Phase 1 connects to the larger vision. Stakeholders need to see the multi-horizon plan to approve scope decisions, allocate budget across phases, and understand what they're committing to beyond the first release.

---

## How This Tutorial Works: Two Approaches

### Approach 1: BMAD Analyst Workflow (Mary Agent)

**What it is:** You activate Mary, the BMAD business analyst agent (`/bmad-agent-analyst`), and have a structured conversation to build the roadmap from your Digital Growth Strategy and Product Brief outputs.

**Best for:**
- Solo practitioners who need a fast first draft
- When you have strong strategy outputs and clear phasing decisions
- When one person owns the roadmap narrative

**What you get:** A structured roadmap document with horizons, workstreams, and initiative mapping.

### Approach 2: WDS Workshop Workflow

**What it is:** You facilitate a multi-perspective workshop where strategy, product, design, tech, and data perspectives all weigh in on initiative sequencing and prioritization.

**Best for:**
- Cross-functional teams with competing priorities
- When stakeholder alignment on phasing is critical
- When there are dependencies across workstreams that need to be surfaced

**What you get:** A workshop-style roadmap with explicit trade-off rationale and multi-discipline input.

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario from `01-use-case-and-project-context.md`, use the context below for your roadmap session.

**Where you are:** You have a Digital Growth Strategy with strategic imperatives and a Product Brief that defines Phase 1 scope. Now you need to show the bigger picture — how Phase 1 connects to Phase 2 and beyond.

**What you know:**
- Phase 1 ($500K, 6 months): Core website redesign — homepage, services, case studies, about, careers, contact
- Strategic imperatives from your Digital Growth Strategy (3–5 must-win battles)
- Product Brief scope with Phase 1 vs. deferred decisions
- Tech stack: Next.js + Contentful + Vercel, HubSpot CRM integration

**Key roadmap decisions:**

| Decision | Considerations |
| --- | --- |
| How many horizons? | Typically 3: Now (Phase 1), Next (6–12 months), Later (12–18 months) |
| What workstreams? | E.g., Experience, Platform, Content Operations, Analytics, Integrations |
| What's deferred? | Items from the Product Brief that were explicitly pushed to Phase 2+ |
| What's new? | Strategic initiatives that weren't in the Product Brief but are part of the broader vision |
| Dependencies? | Which Phase 2 items depend on Phase 1 foundations being in place? |

---

## Part 1: Build the Strategic Initiative Roadmap

### What a Strategic Initiative Roadmap Looks Like

The blueprint defines a specific structural framework:

1. **Executive Summary** — description of the future state
2. **Time Horizons** — definition of each horizon (e.g., Now / Next / Later)
3. **Target Outcomes by Horizon** — what success looks like at each stage
4. **Workstream Definitions** — the major streams of work that span across horizons
5. **Roadmap Summary** — key initiatives mapped to workstreams and horizons
6. **Elaborated Details** — supporting context for key roadmap items as needed

The format is typically a **slide deck** for executive audiences — visual, concise, and story-driven.

### Approach 1: Mary Agent

Open a new conversation in your AI tool. Paste this prompt:

```
/bmad-agent-analyst
```

Then provide your strategy and product brief context:

```
I need to build a Strategic Initiative Roadmap (Blueprint 204) for a website redesign for Apply Digital, a global digital consultancy.

Here are my inputs:
- Digital Growth Strategy: [paste your strategy deliverable or key imperatives]
- Product Brief: [paste your product brief or summarize the Phase 1 scope and deferred items]

The roadmap should follow this structure:
1. Executive Summary — describe the future-state vision for Apply Digital's digital presence
2. Time Horizons — define three horizons: Now (Phase 1, 0–6 months), Next (Phase 2, 6–12 months), Later (12–18 months)
3. Target Outcomes by Horizon — what success looks like at each stage, tied to the Digital Growth Strategy KPIs
4. Workstream Definitions — the major streams of work that span across horizons (e.g., Experience, Platform, Content Operations, Analytics, Integrations)
5. Roadmap Summary — map each strategic initiative to a workstream and horizon, showing sequencing and dependencies
6. Elaborated Details — for any initiative that needs more context, provide supporting rationale

Context: $500K Phase 1 budget, 6-month timeline, Next.js + Contentful + Vercel stack, HubSpot CRM integration. Three audiences: enterprise clients, prospective hires, existing clients/partners.

Format this as a slide deck outline that could be presented to an executive audience.
```

**What to expect:** Mary will ask about items that were deferred from the Product Brief, whether there's a Phase 2 budget assumption, and which strategic imperatives span multiple horizons. Answer using your Digital Growth Strategy and Product Brief as evidence.

#### Step 2: Define Workstreams

Mary will help you organize initiatives into workstreams. For the Apply Digital use case, expect something like:

- **Experience** — UX redesign, conversion optimization, accessibility improvements
- **Platform** — CMS migration, performance optimization, headless architecture
- **Content Operations** — case study migration, blog setup, marketing self-serve publishing
- **Integrations** — HubSpot CRM, ATS for careers, analytics instrumentation
- **Analytics & Measurement** — GA4 setup, conversion tracking, Lighthouse monitoring

Each workstream should show what's in each horizon and why.

#### Step 3: Map Dependencies

Ask Mary to surface dependencies between initiatives:

```
For each Phase 2 and Phase 3 initiative, identify what Phase 1 foundations it depends on. Are there any Phase 1 items that are only valuable if we commit to the Phase 2 follow-through?
```

**Why this matters:** The roadmap should make implicit dependencies explicit. For example, if the Phase 1 CMS setup doesn't include a blog content model, Phase 2 blog launch requires rework. These dependency chains help executives understand the cost of deferring — or the cost of changing course later.

#### Step 4: Create the Executive Summary

```
Now write the executive summary section. It should:
1. Describe the future-state vision in 2–3 sentences (aligned to the Digital Growth Strategy vision)
2. Summarize the three horizons and their target outcomes
3. Highlight the 2–3 most critical initiatives that drive the most value
4. Call out the biggest risk or dependency that requires executive attention

Keep it to one slide's worth of content — concise and strategic, not detailed.
```

### Approach 2: WDS Workshop

Open a new conversation and facilitate a multi-perspective roadmap workshop:

```
I want to facilitate a Strategic Initiative Roadmap workshop for a website redesign for Apply Digital (applydigital.com). We have these inputs:

- Digital Growth Strategy: [paste or summarize vision, imperatives, and KPIs]
- Product Brief: [paste or summarize Phase 1 epics and deferred items]
- Technical constraints: Next.js + Contentful + Vercel, HubSpot CRM, $500K Phase 1 budget, 6-month timeline

Please facilitate a workshop with these discipline perspectives:

1. **Strategy perspective:** Define the time horizons and target outcomes. Which strategic imperatives are fully addressed in Phase 1 vs. requiring multi-phase investment?
2. **Product perspective:** Organize deferred Product Brief items into Phase 2 and Phase 3. What new initiatives should appear in later horizons that weren't in the original brief?
3. **Technology perspective:** What platform foundations in Phase 1 are prerequisites for Phase 2 and 3 initiatives? Flag any Phase 1 decisions that constrain or enable future options.
4. **Design perspective:** How does the design system and component library evolve across horizons? What design debt from Phase 1 needs to be addressed in Phase 2?
5. **Data perspective:** What analytics and measurement capabilities need to be built incrementally across horizons?

After all perspectives have contributed:
1. Define 4–6 workstreams that span all horizons
2. Map initiatives to workstreams and horizons
3. Identify the top 5 cross-horizon dependencies
4. Write an executive summary suitable for a slide deck

Format the roadmap as a structured outline ready for visual design in slides.
```

**How the outputs differ:** The WDS approach surfaces cross-discipline dependencies more effectively (e.g., tech flags that Phase 1 CMS decisions constrain Phase 2 blog capabilities). The Mary approach produces a more narratively cohesive roadmap faster. The WDS version is better for complex multi-phase programmes; the Mary version is better for straightforward phasing.

---

## Part 2: Validate the Roadmap

### Quick Validation Checklist

- [ ] **Every Phase 1 scope item from the Product Brief is accounted for** — nothing got dropped in translation
- [ ] **Deferred items have a home** — everything that was "out of Phase 1" is placed in a specific horizon
- [ ] **Dependencies are explicit** — Phase 2 items show what Phase 1 foundations they require
- [ ] **Target outcomes are measurable** — each horizon has KPIs tied to the Digital Growth Strategy
- [ ] **Workstreams are balanced** — no single workstream dominates all horizons
- [ ] **Executive summary tells a story** — a non-technical stakeholder can understand the plan in 60 seconds

### Cross-Reference with Product Brief

Run a quick consistency check:

```
Compare this Strategic Initiative Roadmap against the Product Brief. Check for:
1. Any Product Brief scope items that are missing from the roadmap
2. Any roadmap initiatives that weren't discussed in the Product Brief or Digital Growth Strategy (new scope creep?)
3. Any KPIs in the strategy that don't have an initiative mapped to them
4. Phase 1 scope differences between the roadmap and the Product Brief
```

---

## Comparing Outputs

| Dimension | BMAD Analyst (Mary) | WDS Workshop |
| --- | --- | --- |
| **Skill** | `/bmad-agent-analyst` | Freeform workshop prompt |
| **Speed** | Faster — single conversation thread | Slower — more prompts and perspectives |
| **Depth** | Good for narrative cohesion and executive storytelling | Better for surfacing cross-discipline dependencies |
| **Stakeholder readiness** | Closer to presentation-ready narrative | More thorough but needs editing for flow |
| **Best when** | Phasing is relatively straightforward | Multiple workstreams with complex dependencies |
| **Output format** | Slide deck outline with executive narrative | Multi-perspective roadmap with dependency analysis |

**In practice:** Use Mary for a fast first draft, then use the WDS workshop prompt to pressure-test the phasing from tech and design perspectives before presenting to executives.

---

## What Good Looks Like

**Strong Strategic Initiative Roadmap:**
- Horizons are defined with specific timeframes and outcomes, not vague labels
- Every initiative traces back to a strategic imperative
- Dependencies between horizons are explicit — stakeholders can see the cost of deferring
- The executive summary tells a clear story: where we are, where we're going, and what it takes
- Format is visual and concise — designed for a slide deck, not a document

**Weak Strategic Initiative Roadmap:**
- Horizons are just "Phase 1, Phase 2, Phase 3" with no outcomes defined
- Initiatives are a feature list with no connection to strategy
- Dependencies are implicit — Phase 2 assumes Phase 1 foundations that nobody committed to
- Everything is in Phase 1 because nobody made prioritization decisions
- Format is a dense document that no executive will read

---

## Common Mistakes

### Mistake 1: Roadmap contradicts the Product Brief
**Problem:** The roadmap shows different Phase 1 scope than the Product Brief.
**Fix:** The roadmap should be built from the Product Brief, not independently. Cross-reference before sharing.

### Mistake 2: No target outcomes per horizon
**Problem:** The roadmap shows what gets built but not why — there's no definition of success at each stage.
**Fix:** Each horizon needs measurable outcomes tied to the Digital Growth Strategy KPIs.

### Mistake 3: Phase 2 is a dumping ground
**Problem:** Everything that didn't make Phase 1 gets thrown into Phase 2 with no prioritization.
**Fix:** Phase 2 and Phase 3 need the same rigour as Phase 1 — prioritized, sequenced, and justified.

### Mistake 4: Missing dependencies
**Problem:** Phase 2 initiatives assume Phase 1 foundations that weren't actually scoped.
**Fix:** Explicitly map "depends on" relationships. If Phase 2 blog launch requires a blog content model in the CMS, that model needs to be in Phase 1 scope.

### Mistake 5: Too detailed for the audience
**Problem:** The roadmap reads like a project plan with tasks and dates, not a strategic document.
**Fix:** The Strategic Initiative Roadmap is for executives — it should show initiatives and horizons, not sprints and tickets. Save the detail for the project plan (108).

---

## Saving Your Work

Save your roadmap to your `_bmad-output/` folder:
- `applydigital-strategic-initiative-roadmap.md` (the full roadmap)

This will be used as:
- An input to refine the **Product Brief (301)** if phasing decisions changed
- Context for **Tutorial 05** and subsequent delivery-focused tutorials
- A presentation artifact for executive stakeholders

---

## Next Steps

With your Strategic Initiative Roadmap complete:

1. **Refine the Product Brief:** If the roadmap surfaced new phasing decisions, update the Product Brief to reflect them
2. **Present to stakeholders:** The roadmap's structural framework is designed as a slide deck — use the horizon and workstream structure to build your executive presentation
3. **Continue to delivery planning:** The next tutorials move into design and requirements (Information Architecture, User Story Map, PRD)

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
