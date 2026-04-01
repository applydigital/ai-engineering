---
title: Information Architecture & Component Model
description: Execute the full UX design workflow—from trigger mapping through opportunity scoping, wireframes, and component inventories.
---

# Tutorial 06: UX Discovery — From Trigger Mapping to Wireframes & Components

> **Track:** Non-Technical
> **Audience:** UX Designers, Design Leads, Product Managers
> **Time:** ~90 minutes
> **Blueprint Deliverables:** 302 — Information Architecture (Cornerstone), 306 — Component Library
> **Prerequisites:** Tutorial 03 (Product Brief), Tutorial 05 (High-Level User Story Map)

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

This tutorial walks you through the full WDS (Web Design System) design workflow — from understanding *who* your users are and *why* they come, through to a structured page inventory, UX design specification, wireframes, and component model.

The workflow has four phases:

| Phase | What You Produce | Skill |
| --- | --- | --- |
| 1. Trigger Mapping | Personas, triggers, drivers, fears, business goals | `/bmad-wds-trigger-mapping` |
| 2. Opportunity Scoping | Page inventory, user journeys, scenario outlines | `/bmad-wds-os` |
| 3. UX Design Specification | Design direction, visual foundation, experience strategy | `/bmad-create-ux-design` |
| 4. Wireframes & Component Model | IA sitemap, wireframe outlines, component inventory | `/bmad-agent-ux-designer` |

Each phase feeds directly into the next. The user-story spine from Phase 1 shapes the page structure in Phase 2, which in turn informs every decision in the UX design workflow and component model.

> **WDS Module Note:** Phases 1 and 2 require the BMAD WDS module (`bmad-wds-trigger-mapping` and `bmad-wds-os`). If these are not yet installed, see the [Fallback Options](#fallback-options-if-wds-is-not-installed) section below.

---

## Before You Start: Gather Brand Guidelines

The UX design workflow (Phase 3) will ask about colours, typography, tone of voice, and visual direction. Gather your existing brand guidelines first and save them as a markdown file the workflow can reference.

### Where to Find Brand Guidelines

For Apply Digital, brand assets live in Notion: [Brand Assets](https://www.notion.so/apply-digital/Brand-Assets-1e1772c709a64dcb8fe26a629103908d)

This page contains value proposition, tone of voice, visual language (colours, typography), logo files, and photography guidelines.

### Export Brand Guidelines to Markdown

1. Open the [Brand Assets](https://www.notion.so/apply-digital/Brand-Assets-1e1772c709a64dcb8fe26a629103908d) page in Notion
2. Click the **•••** menu (top right) → **Export** → **Markdown & CSV**
3. Save the exported `.md` file to your `_bmad-output/` folder as `brand-guidelines.md`

If you don't have Notion access, create `_bmad-output/brand-guidelines.md` manually with: hex colour palette, font families, logo usage rules, and tone of voice descriptors.

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario from `01-use-case-and-project-context.md`, use the context below throughout all four phases.

**Project:** Apply Digital website redesign — $500K budget, 6-month timeline, Next.js + Contentful + Vercel, HubSpot CRM integration.

**Phase 1 scope:** homepage, services, case studies, about, careers, contact.

**Primary audience:** enterprise clients evaluating Apply Digital as a delivery partner.

**Key conversion goal:** "Start a Conversation" form completions.

---

## Phase 1: Trigger Mapping

Trigger Mapping establishes the **user-story spine** — the personas, triggers, drivers, and fears that will determine what pages need to exist and how they should be structured. Without this, your IA is just a list of pages with no grounding in user intent.

Open a new conversation in your AI tool:

```
/bmad-wds-trigger-mapping
```

The skill walks you through:

1. **Persona identification** — who are the distinct user types coming to the site?
2. **Trigger analysis** — what event, need, or question brings each persona to the site right now?
3. **Driver mapping** — what is each persona ultimately trying to achieve (the deeper goal behind the trigger)?
4. **Fear and friction inventory** — what might stop each persona from converting or completing their journey?
5. **Prioritized business goals** — ranked list of what the business needs each persona to do

### Apply Digital Trigger Map Inputs

Guide the workflow with these inputs for the Apply Digital scenario:

| Persona | Trigger | Driver | Fear |
| --- | --- | --- | --- |
| Enterprise VP / CTO | Evaluating vendors for a digital transformation | Find a credible partner who reduces risk | "They'll oversell and underdeliver" |
| In-house Digital Lead | Benchmarking Apply Digital against known vendors | Validate the team's technical depth | "No evidence of work like ours" |
| Recruiter / Job Seeker | Researching Apply Digital as a potential employer | Understand culture, growth, craft | "Corporate spin with no substance" |

### Output

The workflow saves to `_bmad-output/trigger-map.md`. This file contains:
- Persona profiles with triggers, drivers, and fears
- Prioritized business goals per persona
- Scenario outlines: the key moments of decision each persona faces

This is the input for Phase 2.

---

## Phase 2: Opportunity Scoping

Opportunity Scoping takes the trigger map and turns it into a **structured page inventory tied to user stories** — the closest thing to a sitemap before any visual design begins. This is where scenario outlines become concrete page requirements.

Open a new conversation:

```
/bmad-wds-os
```

The skill takes `trigger-map.md` from `_bmad-output/` and walks you through:

1. **Scenario-to-page mapping** — each persona scenario gets matched to the pages and sections that serve it
2. **User journey outlines** — high-level flows (e.g. "VP evaluation path: homepage → services → case studies → contact")
3. **Page inventory** — a flat list of every page that needs to exist, with the user story or scenario that justifies it
4. **Content priority per page** — what does each persona need to see first?

### Apply Digital Opportunity Scope

The key journeys to map for Apply Digital:

- **Enterprise evaluation path:** `Homepage → Services → Case Studies → Contact`
- **Technical credibility path:** `Services → Case Study detail → About / Team → Contact`
- **Careers path:** `Homepage → Careers landing → Open roles → Apply`

### Output

The workflow saves to `_bmad-output/opportunity-scope.md`. This contains:
- Prioritized page inventory (every page with its justifying story)
- User journey flows
- Per-page content priorities

This is the input for Phase 3 alongside your brand guidelines.

---

## Phase 3: UX Design Specification

With personas, journeys, and a page inventory established, run the full `/bmad-create-ux-design` workflow to define the visual and experiential direction.

Open a new conversation:

```
/bmad-create-ux-design
```

The skill picks up `opportunity-scope.md`, `trigger-map.md`, and `brand-guidelines.md` from `_bmad-output/`. It walks you through 14 steps:

1. **Initialization** — loads project context and prior deliverables
2. **Discovery** — reviews the opportunity scope and identifies design inputs
3. **Core Experience Definition** — the ONE interaction the site must make effortless
4. **Emotional Response** — what users should feel at key moments
5. **Inspiration** — reference sites and design precedents
6. **Design System** — foundational design decisions
7. **Defining Experience** — detailed experience specifications
8. **Visual Foundation** — colour, typography, and visual language (references `brand-guidelines.md`)
9. **Design Directions** — 2–3 visual approaches to explore
10. **User Journeys** — map key user flows (references the journeys from Phase 2)
11. **Component Strategy** — define the component library approach
12. **UX Patterns** — specific interaction patterns and UI conventions
13. **Responsive & Accessibility** — breakpoints and inclusive design
14. **Complete** — final UX Design Specification

At each step, you'll see an **A/P/C menu:**
- **A (Advanced Elicitation)** — dig deeper into the current topic
- **P (Party Mode)** — bring multiple agent perspectives to the decision
- **C (Continue)** — save and move to the next step

**Take your time with Step 3 (Core Experience Definition).** For Apply Digital, the answer is: the enterprise client evaluation journey must be completely effortless. Every navigation, CTA, and content decision flows from this.

### Output

The workflow saves `ux-design-specification.md` to `_bmad-output/`. This contains design principles, visual direction, experience strategy, component strategy, and user journey specifications.

---

## Phase 4: IA Sitemap, Wireframes & Component Model

With the UX Design Specification and the page inventory from Phase 2, generate the concrete deliverables: the information architecture sitemap, wireframe outlines, and component inventory.

Open a new conversation:

```
/bmad-agent-ux-designer
```

Sally (the UX designer agent) will pick up your deliverables from `_bmad-output/`. Work through these requests in sequence:

### Step 1: Generate the Information Architecture

```
Using the UX Design Specification, opportunity scope, and Product Brief in _bmad-output/, generate the Information Architecture (Blueprint 302) for the Apply Digital website redesign.

Produce:
1. Current-state IA — structural map of existing applydigital.com navigation
2. Future-state IA — proposed navigation with rationale for each change
3. Navigation model — primary nav, secondary nav, footer nav, utility navigation
4. Content grouping rationale — why pages are organized the way they are

Format as a hierarchical sitemap. Save to _bmad-output/ as applydigital-information-architecture.md
```

**Validation check before moving on:**
- Every page in the Phase 2 page inventory has a place in the sitemap
- The enterprise evaluation path (homepage → services → case studies → contact) is 2 clicks or fewer
- "Start a Conversation" CTA is reachable from every page within 1 click
- Navigation is flat — no more than 2 levels

### Step 2: Generate Wireframes as Excalidraw Diagrams

WDS produces wireframes as Excalidraw diagrams — low-fidelity layout sketches showing content hierarchy, component placement, and key interactions. Each page gets its own diagram.

```
Based on the Information Architecture and UX Design Specification in _bmad-output/, generate Excalidraw wireframe diagrams for the primary pages of the Apply Digital website redesign.

For each page, produce an Excalidraw diagram showing:
1. Page layout structure — header, hero, body sections, footer
2. Content hierarchy — what appears above the fold vs. below
3. Component placement — where each component sits in the layout
4. CTA placement and primary interaction points
5. Cross-linking touchpoints to other pages

Priority pages: Homepage, Services overview, Case study listing, Case study detail, Contact
Save diagrams to _bmad-output/ as applydigital-wireframe-[page-name].excalidraw
```

The Excalidraw wireframes are low-fidelity by design — boxes, labels, and layout structure. They are the brief for your visual design team, not production-ready designs.

### Step 3: Generate the Component Inventory

```
Based on the Information Architecture, wireframe outlines, and UX Design Specification in _bmad-output/, generate a component inventory (Blueprint 306) for the Apply Digital website redesign.

For each component:
1. Component name and type (atom, molecule, organism)
2. Pages it appears on
3. Content fields it requires (for CMS content modelling)
4. Variants (e.g. hero with video vs. hero with image)
5. Whether it maps to an existing library (shadcn/ui) or needs custom design
6. Responsive behaviour

Group by type: navigation, heroes, content blocks, cards, forms, footers.
Save to _bmad-output/ as applydigital-component-inventory.md
```

### Step 4: Map Components to Pages and Define CMS Fields

```
Create a component-to-page matrix showing which components appear on which pages. Then, for each CMS-driven component, define the Contentful content fields:
1. High-reuse components — flag for early development (highest ROI)
2. CMS-driven components — field name, type, required/optional, validation rules
3. Reference relationships between content types
```

---

## Validate the Deliverables

### Quick Validation Checklist

**Information Architecture:**
- [ ] Every page in the Phase 2 page inventory is accounted for in the sitemap
- [ ] Each page traces back to a persona scenario from the trigger map
- [ ] Enterprise evaluation path is 2 clicks or fewer end-to-end
- [ ] "Start a Conversation" CTA is reachable from every page within 1 click
- [ ] Navigation depth is 2 levels maximum

**Wireframe Diagrams:**
- [ ] Every priority page has an Excalidraw diagram
- [ ] Content hierarchy matches the driver/fear priorities from the trigger map
- [ ] Cross-links between services and case studies are visible in the layout
- [ ] CTA placement is consistent with the conversion strategy

**Component Model:**
- [ ] Every page has its components listed
- [ ] High-reuse components are flagged for early development
- [ ] CMS-driven components have content fields defined
- [ ] Design token system covers colour, typography, spacing, shadows, breakpoints
- [ ] Responsive behaviour is specified for each component

---

## Fallback Options if WDS is Not Installed

If `bmad-wds-trigger-mapping` or `bmad-wds-os` are not installed, you can approximate the outputs using installed skills:

**For Trigger Mapping (Phase 1):**
Use `/bmad-agent-analyst` (Mary) with a brainstorming session:
```
/bmad-agent-analyst
```
Then ask Mary to run a persona and trigger mapping exercise: "For the Apply Digital website redesign, help me identify the distinct user personas, what triggers bring them to the site, their underlying drivers, and what fears or friction might prevent them from converting."

Save the output manually to `_bmad-output/trigger-map.md`.

**For Opportunity Scoping (Phase 2):**
Use `/bmad-agent-pm` (John) to map the trigger map outputs to a page inventory and user journeys. Ask John to produce a structured page inventory where each page is justified by a persona scenario.

Save the output manually to `_bmad-output/opportunity-scope.md`.

Phases 3 and 4 proceed identically regardless.

---

## What Good Looks Like

**Strong Trigger Map:**
- Every persona has a specific trigger (not just "researching solutions") — something that happened to make them go looking right now
- Fears are concrete (not just "trust") — specific objections the site must pre-empt
- Business goals are prioritized, not equal-weighted

**Strong Page Inventory:**
- Every page has a named user scenario that justifies its existence
- No pages exist just because competitors have them
- The enterprise evaluation path is a continuous, low-friction thread through the inventory

**Strong IA:**
- Flat navigation that maps to how enterprise clients think, not how Apply Digital is organized internally
- Cross-linking between services and case studies is structural, not an afterthought
- CTA strategy is visible in the sitemap structure

**Strong Component Model:**
- Atomic structure (atoms → molecules → organisms) is clear
- Every component has content fields defined for CMS modelling
- Responsive behaviour is specified, not assumed
- Design tokens are systematic — every visual property references a token

---

## Common Mistakes

### Mistake 1: Skipping Trigger Mapping
**Problem:** Building an IA from the sitemap out — "what pages should we have?" — instead of from user intent in.
**Fix:** Run Phase 1 before touching the sitemap. The trigger map tells you which pages *must* exist and what they need to accomplish.

### Mistake 2: Page inventory without story justification
**Problem:** Pages exist in the inventory with no scenario that explains why.
**Fix:** Every page in Phase 2 must trace back to a named persona scenario. If it can't, cut it.

### Mistake 3: Skipping Core Experience Definition
**Problem:** Jumping into visual design without agreeing on the one interaction the site must make effortless.
**Fix:** Take Step 3 of the UX design workflow seriously. For Apply Digital, this is the enterprise evaluation journey.

### Mistake 4: Components designed per-page instead of as a system
**Problem:** The homepage hero and the services hero become separate components when they're really variants of one.
**Fix:** Look for commonality across pages. Define components with variants before designing each page.

### Mistake 5: No CMS content fields defined
**Problem:** Beautiful wireframes, but nobody defined what content fields each component needs — causing CMS rework during build.
**Fix:** Every component in the inventory must list its Contentful content fields. This is what the content modeller builds from.

---

## Saving Your Work

All four phases save their outputs to `_bmad-output/` automatically (or manually if using fallback skills):

| File | Phase | Used By |
| --- | --- | --- |
| `trigger-map.md` | Phase 1 | Phase 2, 3 |
| `opportunity-scope.md` | Phase 2 | Phase 3, 4 |
| `ux-design-specification.md` | Phase 3 | Phase 4, Tutorial 07, 08 |
| `applydigital-information-architecture.md` | Phase 4 | Tutorial 07, 08 |
| `applydigital-wireframe-[page].excalidraw` | Phase 4 | Tutorial 07, design team handoff |
| `applydigital-component-inventory.md` | Phase 4 | Tutorial 08, development |

---

## Next Steps

1. **PRD (Tutorial 07):** The IA, wireframe outlines, and component model are key inputs into the detailed Product Requirements Document (Blueprint 314)
2. **Technical Architecture (Tutorial 08):** The component inventory and CMS field definitions inform the frontend architecture (Blueprint 304)

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
