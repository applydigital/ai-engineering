---
title: Product Brief
description: Create a cornerstone document that bridges discovery and delivery, defining what you're building and how you'll know it works.
---

# Tutorial: Product Brief

> **Track:** Non-Technical
> **Audience:** Strategists, Product Managers, Design Leads
> **Time:** ~45 minutes
> **Blueprint Deliverable:** 301 — Product Brief (Cornerstone)
> **Prerequisite:** Tutorial 02 (Opportunity Identification, Digital Growth Strategy & Conceptual Design)

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

The Product Brief is the bridge between discovery and delivery. It takes everything you learned in Tutorial 02 — your Opportunity Identification findings, Digital Growth Strategy, and Conceptual Design direction — and distills it into a single document that answers: **What are we building, for whom, and how will we know it's working?**

In the Experience Delivery Blueprint, the Product Brief (301) is a **Cornerstone** deliverable. It defines the product's objectives, target audience, and success metrics so that all cross-functional teams are aligned on the "why" and "what" before significant resources are committed to the "how."

### What the Product Brief Enables

The Product Brief is the foundation for everything that follows:

- **302 — Information Architecture** (site structure and navigation)
- **303 — High-Level User Story Map** (epic-level feature mapping)
- **314 — Product Requirements Document** (detailed functional/non-functional requirements)
- **305 — Production Design** (visual design execution)
- **307 — Measurement Plan** (analytics tracking design)
- **309 — Wireframes** (if applicable)

### Why This Matters

Without a Product Brief, teams jump from strategy to execution with no shared definition of scope, priorities, or success. PRDs get written against assumptions. Designers build without knowing the user hierarchy. Engineers make trade-offs without understanding business priorities. The Product Brief prevents all of this.

---

## How This Tutorial Works: Two Approaches

Like Tutorial 02, this tutorial shows two ways to produce the Product Brief using AI. Each has different strengths.

### Approach 1: BMAD Product Brief Workflow

**What it is:** You invoke the BMAD Product Brief skill (`/bmad-product-brief`), which creates or updates product briefs through guided or autonomous discovery. It synthesizes your discovery outputs into a Product Brief, asking targeted questions to fill gaps.

**Best for:**
- Solo practitioners or small teams
- When you have strong discovery outputs and need to synthesize them into a brief quickly
- When one person owns the product definition
**What you get:** A structured Product Brief document generated through guided discovery and synthesis.

### Approach 2: WDS Product Brief Workflow

**What it is:** You invoke the WDS Project Brief workflow (`/wds-1-project-brief`), which runs a guided discovery process to build the brief. It brings in multiple discipline perspectives — product, strategy, design, tech, and data — and synthesizes them into a structured brief.

**Best for:**
- Cross-functional teams that need alignment before committing to scope
- When multiple stakeholders need to feel ownership of the brief
- When there are competing priorities or ambiguity about scope
- When you want a more structured, workflow-driven process than a freeform agent conversation

**What you get:** Workshop-ready materials with explicit trade-off discussions, prioritization exercises, and a brief that reflects multi-discipline input.

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario from `01-use-case-and-project-context.md`, use the context below for your Product Brief session.

**Where you are:** You've completed discovery (Tutorial 02) and have three deliverables ready:

- **Opportunity Identification** — current-state analysis, competitive benchmarking, performance audit findings, and prioritized opportunity areas
- **Digital Growth Strategy** — vision statement, strategic imperatives, Strategic Placemat, and KPIs
- **Conceptual Design** — design direction brief with key journey mapping and design principles

**Now you need to translate that into a Product Brief that:**
- Defines the scope boundary for the $500K / 6-month Phase 1
- Prioritizes which opportunities from discovery make it into Phase 1 vs. later phases
- Establishes epics that connect to the strategic imperatives
- Sets measurable success criteria that tie back to the Digital Growth Strategy KPIs
- Gives the design team a clear brief for production design

**Key decisions to make during the Product Brief:**

| Area | Decision to Make |
| --- | --- |
| Scope | Which strategic imperatives are Phase 1 vs. Phase 2? |
| Audiences | Which audience gets priority? Enterprise clients, hires, or partners? |
| CMS | Contentful or Sanity? What's the authoring experience requirement? |
| Performance | Specific Lighthouse targets (e.g., 90+ on all categories)? |
| Accessibility | WCAG 2.1 AA required? Which pages are in scope? |
| Careers | ATS integration in Phase 1 or Phase 2? Which ATS? |
| Analytics | GA4? What events must be tracked from launch? |
| Localisation | English only for Phase 1? What about French Canada? |
| Case studies | How many to migrate? Self-serve publishing by marketing? |
| HubSpot | Which forms integrate with HubSpot CRM? What data flows back? |

---

## Part 1: Build the Product Brief

### What a Product Brief Looks Like

The blueprint defines a specific structural framework for the Product Brief:

1. **Business Context & Product Vision** — why this project exists and where it's heading
2. **Key Objectives & KPIs** — measurable outcomes that define success
3. **User Types & Needs** — who we're building for and what they need
4. **Prioritization Criteria** — how we'll decide what's in scope and what's not
5. **Epic-Level Descriptions** — the major workstreams, each connecting to business goals and user value
6. **Assumptions & Open Questions** — what we're assuming and what still needs answers
7. **Design Team Scope & Guiding Principles** — design brief and component strategy

### Approach 1: BMAD Product Brief

Open a new conversation in your AI tool. Invoke the Product Brief skill:

```
/bmad-product-brief
```

Then provide your discovery outputs and this context:

```
I've completed discovery for a website redesign for Apply Digital, a global digital consultancy ($500K budget, 6-month Phase 1 timeline). I need you to help me produce a Product Brief (Blueprint 301).

Here are my discovery inputs:
- Opportunity Identification: [paste your opportunity identification deliverable or file path]
- Digital Growth Strategy: [paste your strategy deliverable or file path]
- Conceptual Design brief: [paste your conceptual design deliverable or file path]

The Product Brief should follow this structure:
1. Business Context & Product Vision
2. Key Objectives & KPIs (tied to the Digital Growth Strategy measures of success)
3. User Types & Needs (enterprise clients, prospective hires, existing clients/partners — prioritized)
4. Prioritization Criteria (how we decide what's Phase 1 vs. later)
5. Epic-Level Descriptions (each tied to a strategic imperative, with core user goals and value drivers)
6. Assumptions & Open Questions
7. Design Team Scope & Guiding Principles

Tech stack context: Next.js + Contentful + Vercel, HubSpot CRM integration, headless architecture. Phase 1 pages: homepage, services, case studies, about, careers, and contact.

Please ask me questions to fill any gaps, then produce the full Product Brief.
```

**What to expect:** The skill will guide you through the Product Brief structure, asking about priority trade-offs, scope boundaries, and areas where the discovery outputs are ambiguous. This is the value of the exercise — the Product Brief forces decisions that discovery deliberately left open.

#### Step 2: Work Through Key Decisions

The skill will surface questions like:

- "Your strategy lists five imperatives but the budget supports three in Phase 1. Which do you prioritize?"
- "The Opportunity Identification flagged careers as a high-impact area, but ATS integration adds complexity. In or out for Phase 1?"
- "Your KPIs include Lighthouse 90+. Does that apply to all pages or just the homepage?"

**How to answer:** Use your discovery outputs as evidence. The Digital Growth Strategy's prioritization should guide scope decisions. The Opportunity Identification's impact vs. effort ranking should inform what makes the cut.

**Pro Tip:** If you're unsure about a decision, ask it to document it as an open question rather than making an assumption. The brief should be honest about what's still unresolved.

#### Step 3: Define Epics

The skill will help you define epics that connect business goals to delivery scope. For the Apply Digital use case, expect something like:

- **Epic 1: Enterprise Client Conversion Journey** — homepage through contact form, optimized for "Start a Conversation" completion
- **Epic 2: Brand & Services Showcase** — services pages that demonstrate expertise and differentiation
- **Epic 3: Proof Through Case Studies** — case study migration and self-serve publishing
- **Epic 4: Talent Attraction Experience** — careers pages with (or without) ATS integration
- **Epic 5: Foundation & Performance** — CMS setup, performance optimization, analytics instrumentation

Each epic should include: the user goal it serves, the strategic imperative it maps to, and the value it delivers.

#### Step 4: Review and Iterate

Common refinements:

```
The enterprise client audience should be the primary focus — reorder the user types section to reflect that priority and ensure Epic 1 gets the most detail.
```

```
Add more specificity to the KPIs. Instead of "improve conversion rate," define a baseline and target (e.g., "increase Start a Conversation form completions from X to Y within 90 days of launch").
```

```
The design team scope section needs to address the component strategy — are we building a design system from scratch or adapting an existing one?
```

### Approach 2: WDS Product Brief

Open a new conversation in your AI tool. Invoke the WDS Project Brief workflow:

```
/wds-1-project-brief
```

The WDS workflow will guide you through a structured discovery process. When prompted, provide your discovery context:

```
I've completed discovery for a website redesign for Apply Digital (applydigital.com), a global digital consultancy. Here are my discovery outputs:

- Opportunity Identification: [paste or summarize key findings and opportunity themes]
- Digital Growth Strategy: [paste or summarize vision, imperatives, and KPIs]
- Conceptual Design: [paste or summarize design direction]

Constraints: $500K budget, 6-month Phase 1 timeline, Next.js + Contentful + Vercel stack, HubSpot CRM integration. Phase 1 pages: homepage, services, case studies, about, careers, and contact.

Three audiences: enterprise clients evaluating us as a delivery partner, prospective hires, and existing clients/partners.
```

**What to expect:** The WDS Project Brief workflow will systematically work through each section of the brief, drawing on your discovery inputs. It brings in multiple discipline perspectives — product, strategy, design, tech, and data — to surface trade-offs and build a comprehensive brief.

**How to get the most out of it:** When the workflow asks you to make prioritization decisions, use your Digital Growth Strategy imperatives as the guide. Push for specificity — "which imperatives are Phase 1?" is more useful than "everything is important."

#### Workshop-Style Extension

If you want the WDS approach to feel more like a facilitated stakeholder workshop, add this follow-up prompt after the initial brief is generated:

```
Now I'd like to stress-test this Product Brief from multiple discipline perspectives:

1. **Technology perspective:** Review the scope, constraints, and proposed tech stack. Flag risks, dependencies, and integration complexity (especially HubSpot CRM and CMS) within the $500K / 6-month constraint.
2. **Design perspective:** Is the design team scope section actionable enough to start production design? Are guiding principles and component strategy clear?
3. **Data perspective:** What analytics and measurement requirements need to be in the brief to ensure we can track KPIs from launch?

For each perspective, identify what should change in the brief and why.
```

**How the outputs differ:** The `/wds-1-project-brief` workflow produces a more structured, template-driven brief with built-in completeness checks and multi-discipline perspectives. The `/bmad-product-brief` approach produces a more focused, guided brief where you control the flow. The WDS version is better when you want a rigorous, multi-perspective process; the BMAD version is better when you need to move fast and want a streamlined conversation.

---

## Part 2: Validate the Product Brief

Once you have a draft, validate it before sharing with stakeholders.

### Quick Validation Checklist

- [ ] **Every epic maps to a strategic imperative** — nothing in the brief should be disconnected from the Digital Growth Strategy
- [ ] **KPIs are specific and measurable** — baselines and targets, not vague aspirations
- [ ] **Scope is honest** — what's in Phase 1 and what's explicitly out is clear
- [ ] **User types are prioritized** — the team knows which audience matters most
- [ ] **Assumptions are documented** — nothing is silently assumed
- [ ] **Open questions have owners** — someone is responsible for resolving each one
- [ ] **Design brief is actionable** — a design lead could start production design from this

### Use BMAD Adversarial Review (Optional)

For a more rigorous validation, use the BMAD adversarial review skill:

```
/bmad-review-adversarial-general
```

Provide your Product Brief and ask for a critical review focused on:
- Gaps between discovery outputs and the brief (did anything get lost in translation?)
- Scope creep risk (are any epics too broad for the budget/timeline?)
- Missing acceptance criteria or success metrics
- Assumptions that should be open questions

---

## Comparing Outputs

| Dimension | BMAD Product Brief | WDS Project Brief |
| --- | --- | --- |
| **Skill** | `/bmad-product-brief` | `/wds-1-project-brief` |
| **Speed** | Faster — guided discovery in a single conversation | Moderate — structured workflow with built-in steps |
| **Depth** | Good for synthesis and focused structure | Better for surfacing trade-offs and multi-discipline tensions |
| **Stakeholder readiness** | Needs review before presenting | Closer to presentation-ready with completeness checks |
| **Best when** | One person owns the brief and needs to move fast | Multiple stakeholders need alignment across disciplines |
| **Output format** | Structured Product Brief document | Multi-perspective brief with trade-off rationale |
| **Opinionation** | More opinionated (single recommended path) | More balanced (multiple perspectives synthesized) |

**In practice:** Use `/bmad-product-brief` when you need a fast, focused brief — it's great for solo practitioners or small teams. Use `/wds-1-project-brief` when you want a more rigorous, multi-perspective process that surfaces cross-discipline tensions. Either way, run the adversarial review step to catch gaps before presenting to stakeholders.

---

## What Good Looks Like

**Strong Product Brief:**
- Business context is specific to this engagement, not boilerplate
- Objectives are tied directly to Digital Growth Strategy imperatives
- User types are described with real needs and behaviours, not generic personas
- Epics tell a story: user goal → business value → scope boundary
- Prioritization criteria are explicit (e.g., "Phase 1 includes only epics that directly impact enterprise client conversion")
- Assumptions and open questions are honest — the brief doesn't pretend to have answers it doesn't have
- Design brief gives enough direction for a designer to start, without over-constraining

**Weak Product Brief:**
- Vision statement is generic ("deliver a best-in-class digital experience")
- KPIs are unmeasurable ("improve user satisfaction")
- Scope is ambiguous (no clear Phase 1 boundary)
- Epics are feature lists with no connection to strategy
- No open questions documented (everything is assumed to be decided)
- Design section says "follow brand guidelines" with no further direction

---

## Common Mistakes

### Mistake 1: Treating the Product Brief as a PRD
**Problem:** Including detailed functional requirements, API specifications, or acceptance criteria in the Product Brief.
**Fix:** The Product Brief defines the "what" and "why" at an epic level. The PRD (314) breaks that into detailed requirements later. Keep the brief strategic.

### Mistake 2: Ignoring discovery outputs
**Problem:** Writing the brief from scratch instead of building on your Opportunity Identification, Digital Growth Strategy, and Conceptual Design.
**Fix:** Every section of the Product Brief should trace back to a discovery deliverable. If you can't point to the evidence, you're making assumptions.

### Mistake 3: Trying to include everything
**Problem:** The brief covers every possible feature and audience without prioritization, making it impossible to deliver in Phase 1.
**Fix:** Use your prioritization criteria ruthlessly. A strong brief says "no" to good ideas that don't fit the budget, timeline, or primary audience.

### Mistake 4: No design brief
**Problem:** The brief defines product scope but gives design no direction, leading to misalignment when production design starts.
**Fix:** Include a dedicated design team scope section with guiding principles, component strategy, and fidelity expectations.

### Mistake 5: Static document syndrome
**Problem:** The brief is written once and never updated as the team learns more.
**Fix:** Treat the Product Brief as a living document. As open questions get resolved and assumptions get validated (or invalidated), update the brief.

---

## Saving Your Work

Save your Product Brief to your `_bmad-output/` folder:
- `applydigital-product-brief.md` (the full Product Brief)

This will be used as input in subsequent tutorials:
- **Tutorial 04** — Information Architecture (302)
- **Tutorial 05** — High-Level User Story Map (303)
- **Tutorial 06** — PRD with Sam (314)

---

## Next Steps

With your Product Brief complete:

1. **Information Architecture:** Use the Product Brief's epic structure and user types to define site navigation and content hierarchy (302)
2. **High-Level User Story Map:** Break epics into user stories mapped across the journey (303)
3. **PRD:** Hand the Product Brief to Sam for detailed requirements — functional, non-functional, and acceptance criteria (314)
4. **Share with stakeholders:** The Product Brief's structural framework is designed as a slide deck — use the blueprint format to present to the project owner and business stakeholders

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
