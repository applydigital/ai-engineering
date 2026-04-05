---
title: Product Requirements Document (PRD)
description: The single source of truth for functional and non-functional requirements, acceptance criteria, and scope for the solution.
---

# Tutorial: Product Requirements Document (PRD)

> **Track:** Non-Technical
> **Audience:** Product Managers, Design Leads, Tech Leads
> **Time:** ~45 minutes
> **Blueprint Deliverable:** 314 — Product Requirements Document (Cornerstone)
> **Prerequisites:** Tutorial 03 (Product Brief), Tutorial 05 (High-Level User Story Map), Tutorial 06 (IA & Component Model)

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

The PRD is the **single source of truth** for functional and non-functional requirements, acceptance criteria, and scope for the solution. It takes every high-level user story from Tutorial 05 and elaborates it into detailed, implementable requirements.

If the Product Brief says "what" and "why," and the User Story Map says "what does it need to do," the PRD says **"exactly how should it behave, and how do we know it's done?"**

### What the PRD Enables

The PRD feeds directly into:

- **401 — Detailed User Story Backlog** (sprint-ready stories pulled from the PRD)
- **408 — Content Model** (content requirements defined in the PRD)

### Dependencies

- **301 — Product Brief** (scope and objectives)
- **303 — High-Level User Story Map** (epics and stories to elaborate)
- **305 — Production Design** (if applicable — visual specs inform functional requirements)
- **304 — Technical Architecture Document** (technical constraints)
- **307 — Measurement Plan** (if applicable — analytics requirements)

### Why This Matters

Without a PRD, developers interpret user stories however they see fit. QA doesn't know what "done" looks like. Scope debates happen during sprints instead of before them. The PRD prevents ambiguity from becoming rework.

---

## How This Tutorial Works

This tutorial uses the BMAD `/bmad-create-prd` skill — a **12-step guided workflow** that walks you through building a comprehensive PRD collaboratively. It will ask you questions, present options, and build up the PRD section by section.

You don't need to prompt it with a detailed structure up front — the skill guides you through each step. After completing the workflow, this tutorial adds focused validation steps for Apply Digital–specific requirements.

Additional skills for validation:
- **`/bmad-validate-prd`** — validates the PRD against quality standards
- **`/bmad-review-adversarial-general`** — adversarial review to find gaps and weaknesses

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario from `01-use-case-and-project-context.md`, use the context below.

**Where you are:** You have:
- A **Product Brief** defining scope, objectives, and user types
- A **High-Level User Story Map** with epics, stories, and MVP boundary
- An **Information Architecture** defining site structure and navigation
- A **UX Design Specification** with component strategy and design direction

**Now you need:** Detailed functional and non-functional requirements with acceptance criteria for every story in the MVP scope.

**Key PRD areas for Apply Digital:**

| Area | What Needs to Be Specified |
| --- | --- |
| Contact form | HubSpot integration, required fields, validation rules, success/error states |
| Case studies | Content model, filtering logic, CMS authoring workflow |
| Services pages | Content hierarchy, cross-linking to case studies, CTA placement |
| Careers | ATS integration (if in scope), application flow, job listing source |
| Performance | Lighthouse targets per page, Core Web Vitals thresholds |
| Accessibility | WCAG 2.1 AA compliance scope, testing requirements |
| Analytics | GA4 events, conversion tracking, attribution requirements |
| CMS | Contentful content types, preview mode, publishing workflow |

---

## Run the PRD Workflow

Open a new conversation in your AI tool:

```
/bmad-create-prd
```

The skill will pick up your deliverables from `_bmad-output/`. It walks you through these steps:

1. **Initialization** — loads your project context and existing deliverables
2. **Project Discovery** — reviews your Product Brief, story map, and IA to understand scope
3. **Product Vision** — confirms the product vision and strategic alignment
4. **Executive Summary** — drafts the PRD executive summary
5. **Success Criteria** — defines measurable success metrics for the product
6. **User Journey Mapping** — maps key user flows and identifies requirements from each
7. **Domain Requirements** (optional) — industry-specific requirements
8. **Innovation Focus** — identifies innovative aspects and their requirements
9. **Project Type Deep Dive** — tailors requirements to your specific project type (website, app, etc.)
10. **Scoping — MVP & Future** — draws the line between MVP and deferred features
11. **Functional Requirements** — synthesizes all functional requirements with acceptance criteria
12. **Non-Functional Requirements** — performance, security, accessibility, analytics
13. **Document Polish** — reviews and refines the complete PRD
14. **Complete** — final PRD output

At each step, the skill presents an **A/P/C menu**:
- **A (Advanced Elicitation)** — dig deeper into the current topic
- **P (Party Mode)** — bring multiple agent perspectives to the decision
- **C (Continue)** — save and move to the next step

**Take your time with Steps 5–6 (Success Criteria and User Journeys).** These steps define what "done" looks like for the product and map the flows that generate most of your functional requirements. Rushing through them leads to vague acceptance criteria later.

---

## After the Workflow: Apply Digital–Specific Validation

Once you've completed the full PRD workflow, validate these areas that are critical for the Apply Digital use case.

### Step 1: Validate HubSpot Integration Requirements

```
Review the HubSpot integration requirements in the PRD. Confirm that the following are specified:
1. Which forms integrate with HubSpot (contact, careers, newsletter)?
2. What data flows to HubSpot on each form submission?
3. What happens if the HubSpot API is unavailable? (fallback behaviour)
4. Are there any HubSpot workflows triggered by form submissions?
5. What are the rate limits and how do we handle them?
```

### Step 2: Validate Acceptance Criteria Quality

```
Review the acceptance criteria for each MVP story. Make sure every criterion is:
1. Testable — a QA engineer can write a test case from it
2. Specific — includes concrete values (e.g., "form submits in under 2 seconds" not "form is fast")
3. Complete — covers success states, error states, and edge cases
4. Measurable — defines what "done" looks like

Flag any criteria that are too vague and suggest improvements.
```

### Step 3: Validate Launch Considerations

```
Review the PRD for launch considerations. Confirm these are documented:
1. Content migration plan — how many case studies need migrating, what format?
2. Redirect map — existing URLs that need 301 redirects
3. QA scope — which pages get manual testing vs. automated?
4. Performance baseline — what are the current Lighthouse scores to beat?
5. Rollback plan — what happens if the launch has critical issues?
```

---

## Validate the PRD

### Quick Validation Checklist

- [ ] **Every MVP story has acceptance criteria** — nothing is left to interpretation
- [ ] **Acceptance criteria are testable** — QA can write test cases from them
- [ ] **Non-functional requirements are specific** — concrete numbers, not vague aspirations
- [ ] **Technical constraints are documented** — platform, integration, and browser support
- [ ] **Design requirements reference the component inventory** — no disconnect between design and requirements
- [ ] **Launch considerations are defined** — migration, redirects, QA, and rollback

### Use BMAD PRD Validation

```
/bmad-validate-prd
```

This skill validates the PRD against standards, checking for completeness, consistency, and quality.

### Use BMAD Adversarial Review

```
/bmad-review-adversarial-general
```

Ask for a review focused on:
- Stories with missing or vague acceptance criteria
- Non-functional requirements that aren't measurable
- Integration requirements that assume happy-path only (no error handling)
- Scope gaps between the story map and the PRD

---

## What Good Looks Like

**Strong PRD:**
- Every story has specific, testable acceptance criteria
- Non-functional requirements include concrete targets (Lighthouse 90+, LCP < 2.5s)
- Error states and edge cases are documented, not just happy paths
- Technical constraints are specific (Contentful content types, HubSpot form IDs)
- Launch considerations cover migration, redirects, QA, and rollback
- The PRD can stand alone — a new team member could understand the full scope

**Weak PRD:**
- Acceptance criteria are vague ("the page should load quickly")
- No non-functional requirements section
- Only happy paths documented
- No launch considerations
- Assumes the reader has context from conversations (not self-contained)

---

## Common Mistakes

### Mistake 1: PRD that duplicates the Product Brief
**Problem:** The PRD restates objectives and strategy instead of focusing on detailed requirements.
**Fix:** The PRD should reference the Product Brief, not repeat it. Focus on "how it behaves" not "why we're doing it."

### Mistake 2: Vague acceptance criteria
**Problem:** "The contact form should work correctly" — this tells QA nothing.
**Fix:** "When a user submits the contact form with all required fields, the form data is sent to HubSpot via the Forms API, a success message is displayed within 2 seconds, and the user receives a confirmation email within 5 minutes."

### Mistake 3: Missing error states
**Problem:** Requirements only describe what happens when things go right.
**Fix:** For every interaction, define: what happens on success, what happens on failure, what happens on timeout, what happens with invalid input.

### Mistake 4: No non-functional requirements
**Problem:** The PRD is all features with no performance, accessibility, or security requirements.
**Fix:** Non-functional requirements are requirements. They need the same rigour as functional stories.

### Mistake 5: PRD written in isolation
**Problem:** The PRD doesn't reference the IA, component model, or story map — it exists in a vacuum.
**Fix:** Every story should trace back to the story map. Every page reference should match the IA. Every component reference should match the component inventory.

---

## Saving Your Work

The `/bmad-create-prd` workflow saves its output automatically to `_bmad-output/`. After the validation steps, ensure the final PRD is saved:
- `applydigital-prd.md` (the full Product Requirements Document)

This will be used as input in subsequent tutorials:
- **Tutorial 08** — Technical Architecture (304)
- **Tutorial 09** — Sprint Planning and Story Backlog (401)

---

## Next Steps

With your PRD complete:

1. **Technical Architecture (Tutorial 08):** The PRD's functional and non-functional requirements inform the architecture document
2. **Sprint Planning:** Break PRD stories into sprint-ready tickets with estimates
3. **QA Planning:** Use acceptance criteria to build test plans
4. **Share with stakeholders:** The PRD is the scope contract — present it to the project owner for sign-off

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
