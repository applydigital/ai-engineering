---
title: Use Case: Apply Digital Website Redesign
description: The end-to-end scenario running through every tutorial—a real-world website redesign engagement with full project context.
---

# Use Case: Apply Digital Website Redesign

> **Type:** End-to-End Scenario
> **Audience:** All — this use case connects every tutorial in the series
> **Time:** Use as a reference throughout the full training path
> **Scenario:** A complete BMAD delivery workflow for a real-world website redesign

---

## Overview

This document provides a single, continuous scenario that runs through every tutorial in the series. Rather than isolated exercises, you'll be working on one real engagement from start to finish — a website redesign for Apply Digital.

Each tutorial asks you to play a different role on the engagement team (strategist, product manager, engineer, QA lead) and produce a real BMAD artifact. By the end, you'll have a complete set of delivery documents — from project brief through to test plan — all built using AI agents.

## How to use this document

- **Before each tutorial:** Each tutorial has its own "Apply Digital Use Case" section with the specific prompts and decisions for that stage — feel free to follow these as prompt instructions or get creative on how you engage BMAD agents with your own prompts to see the results.  
- **After each tutorial:** Documents should be saved automatically to your _bmad-output folder.
- **Throughout the series:** Refer back to this file for the overall scenario, project background, and the "Key Specifics" table whenever you need project context.

As you work through each tutorial, you'll play different roles on the engagement team — from Product Manager to Engineer to QA Lead — and produce a complete set of BMAD artifacts along the way.

---

## Tutorial Scenario
### Background
Apply Digital's website serves three primary audiences:
1. **Prospective clients** — enterprise businesses evaluating Apply Digital as a delivery partner
2. **Prospective hires** — senior engineers, designers, and strategists researching the company
3. **Existing clients and partners** — looking for case studies, contacts, and news

### Use Case
**The project:** Redesign of the Apply Digital corporate website (`applydigital.com`).
**The client:** Apply Digital — a global digital consultancy that helps clients modernize their digital experiences. The website is the company's primary sales and brand asset, but it hasn't had a significant refresh in several years. The marketing and growth team has flagged it as a conversion bottleneck.
The project has been scoped at a high level:
- **Phase 1 (this engagement):** Full redesign of the core website — homepage, services, case studies, about, careers, and contact
- **Budget:** $500K for phase 1
- **Timeline:** 6 months to launch
- **Stack:** Headless CMS (TBD between Contentful and Sanity), Next.js frontend, Vercel hosting
- **Team:** Apply Digital's delivery team in collaboration with key stakeholders in Marketing and the Executive Leadership Team

## How This Scenario Maps to Each Tutorial
| # | Tutorial | Your Role | What You're Doing |
| --- | --- | --- | --- |
| 02 | `02-discovery-customer-experience-strategy.md` | Strategist | Define the customer experience strategy and discovery insights for the redesign |
| 03 | `03-product-brief.md` | Product Manager | Create the product brief with Mary — goals, audiences, success metrics |
| 04 | `04-project-plan-roadmap.md` | Product Manager | Build a story map / roadmap with Sam, draw the MVP line, manage scope |
| 05 | `05-ux-production-design.md` | UX Designer / Strategist | Define UX production design deliverables for the redesign |
| 06 | `06-component-inventory.md` | UX Designer / Strategist | Run quick-spec / component inventory on a ticket from the backlog |
| 07 | `07-epics-user-stories-prd.md` | Product Manager | Generate the PRD, break into epics and user stories |
| 08 | `08-technical-architecture.md` | Architect | Define the technical architecture and tech spec |
| 09 | `09-sprint-plan-transition.md` | Scrum Master | Transition the backlog into a sprint plan and validate readiness |
| 10 | `10-dev-stories-prototype-tests.md` | Engineer / QA Lead | Implement the feature from the spec, prototype, and generate tests |
| 11 | `11-status-report.md` | Scrum Master | Generate a status report tracking progress and risks |
## Key Apply Digital Specifics to Keep in Mind
These details should show up in your brief, PRD, and specs. If they don't, push the AI to include them.
| Area | Detail |
| --- | --- |
| Primary conversion goal | "Start a conversation" form completions |
| Performance target | Lighthouse ≥ 90 on all core pages (mobile + desktop) |
| Accessibility | WCAG 2.1 AA across all pages |
| CMS | Contentful (content team owns all copy — no hardcoding) |
| Careers | ATS integration deferred to phase 2; interim: email application |
| Analytics | GA4 with custom events on CTA clicks, form submissions, case study views |
| Localisation | English only in phase 1; architecture must support French (Canada) in phase 2 |
| Brand | Design system in Figma; component library to be built from scratch in this project |
| CRM Integration | Hubspot CRM is used for Contact Us and Event sign up forms. |