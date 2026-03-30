---
title: Technical Architecture Document
description: Translate product requirements into a comprehensive system design covering architecture, data models, integrations, and infrastructure.
---

# Tutorial: Technical Architecture Document

> **Track:** Technical
> **Audience:** Tech Leads, Architects, Senior Engineers
> **Time:** ~45 minutes
> **Blueprint Deliverable:** 304 — Technical Architecture Document (Cornerstone)
> **Prerequisites:** Tutorial 05 (High-Level User Story Map), Tutorial 07 (PRD)

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

The Technical Architecture Document (TAD) translates product requirements into a system design that the engineering team can build from. It covers application architecture, data models, integrations, infrastructure, security, and delivery methodology.

In the blueprint, the TAD is a **Cornerstone** deliverable — it's the engineering team's single source of truth for *how* the solution is built.

### What the TAD Enables

The TAD feeds directly into:

- **402 — Solution Implementation** (developers build from this)
- **403 — Monitoring & Performance Dashboard** (observability architecture)
- **407 — Run Book** (operational procedures)
- **408 — Content Model** (CMS architecture)

### Dependencies

- **205 — Technical Strategy Document** (platform decisions and future-state ecosystem)
- **303 — High-Level User Story Map** (what needs to be built)
- **314 — PRD** (functional and non-functional requirements)

### Why This Matters

Without a TAD, engineers make architecture decisions ad hoc during sprints. Integration patterns are inconsistent. Security is bolted on rather than designed in. Performance problems are discovered in production rather than prevented by design. The TAD prevents all of this.

---

## How This Tutorial Works

You'll use the BMAD `/bmad-create-architecture` skill to generate the architecture document from your existing deliverables. The skill reads your Product Brief, story map, PRD, and technical strategy from `_bmad-output/` and produces a structured architecture document.

For interactive architecture discussions, use `/bmad-agent-architect` (Winston) — the BMAD system architect agent.

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario from `01-use-case-and-project-context.md`, use the context below.

**Where you are:** You have a PRD with detailed requirements and a tech stack already defined:
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **CMS:** Contentful (headless)
- **Hosting:** Vercel
- **CRM:** HubSpot (contact forms, lead capture)
- **Analytics:** GA4

**Key architecture decisions:**

| Area | Decision to Make |
| --- | --- |
| Rendering strategy | SSG, SSR, ISR — which pages use which? |
| API layer | Direct Contentful SDK calls or API routes as proxy? |
| HubSpot integration | Server-side form submission or client-side embed? |
| Image optimization | Contentful Images API or Next.js Image component? |
| Preview mode | Contentful preview API with Next.js draft mode? |
| Caching | Vercel Edge Cache, ISR revalidation intervals? |
| Search | Client-side filtering or external search service? |
| Monitoring | Vercel Analytics, custom dashboards, error tracking? |

---

## Part 1: Build the Technical Architecture Document

### What the TAD Looks Like

The blueprint defines a comprehensive structural framework:

1. **Executive Summary**
   - High-level architecture: system diagram & integration map
   - Infrastructure: cloud provider, architecture overview, IaC, security, environments
2. **Backend Services**
   - Architecture patterns, data persistence, authentication, API specs, webhooks, email/notification services
3. **Frontend Application**
   - Framework, state management, rendering strategy, localization, SEO, styling, responsive design, accessibility, design system, atomic design principles
4. **Data and Analytics**
   - Consent management, analytics solution, data acquisition, reporting, AI/ML services, CDP, marketing automation
5. **Third-Party Integrations**
   - CMS, DAM, search, forms/lead capture, social media, cookie/privacy compliance
6. **Delivery Methodology and Tools**
   - Code repository, branching strategy, code review, CI/CD, feature flags, static analysis, quality engineering

### Step 1: Generate the Architecture Document

Open a new conversation in your AI tool:

```
/bmad-create-architecture
```

The skill will pick up your deliverables from `_bmad-output/`. Provide context:

```
I need to create a Technical Architecture Document (Blueprint 304) for the Apply Digital website redesign. The Product Brief, User Story Map, IA, and PRD are in _bmad-output/.

Tech stack:
- Frontend: Next.js 14 (App Router), TypeScript strict mode, Tailwind CSS
- CMS: Contentful (headless)
- Hosting: Vercel
- CRM/Forms: HubSpot
- Analytics: GA4
- Component library: shadcn/ui as base

Please produce a TAD following the blueprint structure:
1. Executive Summary with high-level system diagram
2. Frontend Application architecture (rendering strategy, state management, design system)
3. Third-Party Integrations (Contentful, HubSpot, GA4)
4. Data and Analytics architecture
5. Infrastructure (Vercel, environments, caching strategy)
6. Security (CSP, form data handling, API keys)
7. Delivery Methodology (repo structure, branching, CI/CD, code review)
```

**What to expect:** The skill will produce a structured architecture document. It will ask clarifying questions about rendering strategy (SSG vs. SSR vs. ISR per page), caching approach, and integration patterns.

### Step 2: Define the Integration Architecture

```
Elaborate the integration architecture for the three key integrations:

1. **Contentful CMS:**
   - Content delivery API vs. preview API usage
   - Content type structure (map to component inventory from Tutorial 06)
   - Webhook strategy for content updates → Vercel rebuild triggers
   - Image optimization pipeline (Contentful Images API + Next.js Image)
   - Preview mode implementation with Next.js draft mode

2. **HubSpot CRM:**
   - Form submission flow (server-side API route vs. client-side embed)
   - Data mapping: which form fields map to which HubSpot properties?
   - Error handling: what happens when the HubSpot API is unavailable?
   - GDPR/consent: how is consent captured and passed to HubSpot?

3. **GA4 Analytics:**
   - Event taxonomy (map to the measurement plan requirements from the PRD)
   - Consent-gated tracking (cookie consent → analytics initialization)
   - Server-side vs. client-side event firing
   - Conversion event definitions
```

### Step 3: Define the Rendering Strategy

```
Define the rendering strategy per page type:

For each Phase 1 page, specify:
1. Rendering method: SSG (Static Site Generation), SSR (Server-Side Rendering), or ISR (Incremental Static Regeneration)
2. Revalidation interval (if ISR)
3. Data fetching approach (Contentful SDK, API route, or static)
4. Caching strategy (Vercel Edge Cache, CDN)
5. Rationale — why this rendering method for this page?

Pages: homepage, services landing, service detail (template), case studies listing, case study detail (template), about, careers listing, contact.
```

### Step 4: Define the Delivery Methodology

```
Define the delivery methodology:
1. Repository structure — monorepo or separate repos?
2. Branching strategy — trunk-based, Gitflow, or GitHub Flow?
3. CI/CD pipeline — build, test, preview deploy, production deploy
4. Environment strategy — development, staging, production. How does Contentful preview work across environments?
5. Code review process — required reviewers, automated checks
6. Feature flags — how are features toggled for progressive rollout?
7. Quality gates — Lighthouse CI, accessibility checks, type checking, linting
```

---

## Part 2: Interactive Architecture Review

For complex architecture decisions, use Winston (the BMAD architect agent) for an interactive discussion:

```
/bmad-agent-architect
```

```
I'd like to review the Technical Architecture Document for the Apply Digital website redesign. The TAD is in _bmad-output/.

Let's focus on:
1. Are there any architectural risks I haven't addressed?
2. Is the rendering strategy optimal for performance?
3. Are the integration patterns resilient (especially HubSpot failover)?
4. Is the caching strategy appropriate for content freshness requirements?
5. Are there any security concerns with the current design?
```

---

## Part 3: Validate the Architecture

### Quick Validation Checklist

- [ ] **Every PRD requirement has an architecture solution** — no functional gaps
- [ ] **Non-functional requirements are addressed** — performance, security, accessibility, analytics
- [ ] **Integration patterns are defined** — Contentful, HubSpot, GA4
- [ ] **Rendering strategy is per-page** — not a one-size-fits-all approach
- [ ] **Error handling is defined** — what happens when integrations fail?
- [ ] **Environments are defined** — dev, staging, production with clear promotion path
- [ ] **CI/CD pipeline is defined** — automated builds, tests, and deploys
- [ ] **Security is addressed** — CSP, HTTPS, API key management, form data handling

### Use BMAD Adversarial Review

```
/bmad-review-adversarial-general
```

Ask for a review focused on:
- Single points of failure in the integration architecture
- Performance bottlenecks (especially CMS API calls and image loading)
- Security gaps (API keys in client-side code, CSP configuration)
- Missing non-functional requirements coverage
- Scalability concerns for content growth (more case studies, more pages)

---

## What Good Looks Like

**Strong TAD:**
- System diagram is clear — a new engineer can understand the architecture in 5 minutes
- Rendering strategy is page-specific with clear rationale
- Integration patterns include error handling and failover
- Security is designed in, not bolted on
- CI/CD pipeline enforces quality gates automatically
- The TAD evolves throughout the build (it's a living document)

**Weak TAD:**
- Generic architecture that could apply to any Next.js project
- No per-page rendering strategy
- Integrations assume happy path only
- Security is a single bullet point ("use HTTPS")
- No CI/CD or delivery methodology defined
- Written once and never updated

---

## Common Mistakes

### Mistake 1: Architecture that doesn't match the PRD
**Problem:** The architecture describes capabilities that aren't in the PRD, or misses requirements that are.
**Fix:** Cross-reference every PRD requirement against the architecture. Every functional and non-functional requirement should have an architectural solution.

### Mistake 2: One rendering strategy for all pages
**Problem:** "We'll use SSG for everything" — ignoring that some pages need dynamic data.
**Fix:** Define rendering strategy per page type. Static content (about) → SSG. Frequently updated content (case studies) → ISR. Preview mode → SSR.

### Mistake 3: No error handling for integrations
**Problem:** The architecture assumes Contentful and HubSpot are always available.
**Fix:** Define fallback behaviour for every integration. What does the user see if Contentful is down? What happens if HubSpot form submission fails?

### Mistake 4: Security as an afterthought
**Problem:** Security is a paragraph at the end instead of integrated throughout.
**Fix:** Address security in every section — API key management in infrastructure, CSP in frontend, data handling in integrations, consent in analytics.

### Mistake 5: No living document plan
**Problem:** The TAD is written before build and never updated.
**Fix:** The blueprint explicitly says "TAD should be updated throughout the build process to reflect any architecture changes." Plan for this in your delivery methodology.

---

## Saving Your Work

Save your architecture document to your `_bmad-output/` folder:
- `applydigital-technical-architecture.md` (the full TAD)

This will be used as input in subsequent tutorials:
- **Tutorial 09** — Sprint Planning and Story Backlog (401)
- **Tutorial 10** — Content Model (408)

---

## Next Steps

With your Technical Architecture Document complete:

1. **Sprint Planning:** Use the TAD to inform story sizing — architecture complexity affects estimates
2. **Content Model:** Define Contentful content types based on the component inventory and integration architecture
3. **Development Kickoff:** The TAD is the engineering team's reference document — present it to the team before sprint 1
4. **Share with tech stakeholders:** The executive summary and system diagram are designed for IT/tech stakeholder review

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
