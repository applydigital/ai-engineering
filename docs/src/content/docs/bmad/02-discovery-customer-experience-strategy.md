---
title: Discovery: Opportunity Identification, Digital Growth Strategy & Conceptual Design
description: Build the strategic foundation with opportunity identification, growth strategy, and conceptual design for executable roadmaps.
---

# Tutorial: Opportunity Identification, Digital Growth Strategy & Conceptual Design

> **Track:** Non-Technical
> **Audience:** Strategists, Product Managers, UX Leads, Design Leads
> **Time:** ~45 minutes
> **Blueprint Deliverables:** 201 — Opportunity Identification, 202 — Digital Growth Strategy, 203 — Conceptual Design
> **Prerequisite:** Tutorial 01 (read the Apply Digital use case and project context)

See the [Experience Delivery Blueprint](https://underground.applydigital.io) for full deliverable definitions.

---

## Overview

Discovery is where you build the strategic foundation for everything that follows. Before anyone writes a Product Brief, PRD, or line of code, the team needs to answer three questions:

1. **Where are we now?** — What does the current experience look like, and where are the gaps? (**201 — Opportunity Identification**)
2. **Where are we going?** — What's the North Star vision and how do we get there? (**202 — Digital Growth Strategy**)
3. **What could it look like?** — How do we make the future tangible for stakeholders? (**203 — Conceptual Design**)

These three deliverables form the discovery phase of the Experience Delivery Blueprint. They are the primary inputs into the **Product Brief (301)**, which you'll create in Tutorial 03.

### Why This Matters

Without discovery, product briefs are guesswork. Discovery gives you the evidence, alignment, and vision that make every downstream artifact — PRD, architecture, sprint plan — grounded in real insight rather than assumptions.

---

## How Discovery Works: Two Approaches

This tutorial shows you two ways to produce discovery outputs using AI. Each has different strengths, and in practice you'll often use both.

### Approach 1: BMAD Analyst Workflow (Mary Agent)

**What it is:** You activate Mary, the BMAD business analyst agent, and have a structured conversation. Mary asks probing questions, synthesizes your answers, and generates discovery artifacts.

**Best for:**
- Solo practitioners or small teams
- When you have existing research, audits, or stakeholder notes to feed in
- Rapid synthesis of known information into structured deliverables
- When you need a first draft quickly to react to or refine

**What you get:** Structured markdown documents — opportunity analysis, strategy narrative, and design direction — generated through an interactive Q&A session.

### Approach 2: WDS (Workshop / Discovery / Strategy) Workflow

**What it is:** You use AI agents as specialist participants in a facilitated workshop process. Instead of one agent doing everything, you bring in multiple perspectives — strategy, design, tech, data — and use collaborative sessions to build alignment.

**Best for:**
- Cross-functional teams with multiple stakeholders
- When you need to facilitate real workshops and want AI to help prepare, synthesize, and document
- When stakeholder alignment is as important as the deliverable itself
- Complex engagements where the "right answer" isn't obvious

**What you get:** Workshop-ready materials, multi-perspective synthesis, and artifacts designed to be presented and debated — closer to what you'd produce in a traditional consulting engagement.

---

## Apply Digital Use Case

> If you're following the Apply Digital scenario from `01-use-case-and-project-context.md`, use the context below for your discovery session.

**The situation:** Apply Digital's website hasn't had a significant refresh in several years. The marketing team has flagged it as a conversion bottleneck — low "Start a Conversation" form completions, outdated brand presentation, poor mobile performance. You've been brought in to lead discovery before the redesign kicks off.

**What you know so far:**
- Three primary audiences: enterprise clients, prospective hires, existing clients/partners
- $500K budget, 6-month timeline, headless CMS + Next.js stack
- Key stakeholders in Marketing and the Executive Leadership Team
- HubSpot CRM for Contact Us and Event sign-up forms
- Phase 1 covers: homepage, services, case studies, about, careers, and contact

**Key decisions to explore during discovery:**
- What is actually underperforming vs. what *feels* outdated?
- Where are visitors dropping off? Is it awareness, navigation, or conversion?
- What do enterprise clients care about most when evaluating a delivery partner?
- How does Apply Digital's current brand compare to competitors?
- What are the riskiest assumptions about the redesign scope?

---

## Part 1: Opportunity Identification (Blueprint 201)

> **Goal:** Translate immersion findings into a clear picture of current-state gaps and high-value opportunities.

### What Opportunity Identification Looks Like

The Opportunity Identification deliverable is a critical alignment milestone. It covers:
- **Findings** — current-state analysis across strategy, experience, brand, technology, and data
- **"So What" implications** — why each finding matters for this engagement
- **Opportunities** — high-value areas to explore further in the strategy phase

### Approach 1: Mary Agent

Open a new conversation in your AI tool. Paste this prompt:

```
/bmad-agent-analyst
```

Then provide this context:

```
I'm leading discovery for a website redesign for Apply Digital, a global digital consultancy. The current site (applydigital.com) is several years old and underperforming — low contact conversion rates, poor mobile experience, slow performance, and outdated brand presentation.

I need you to help me produce an Opportunity Identification deliverable (Blueprint 201). This should include:
- Current-state analysis across: strategy alignment, experience/UX audit, brand audit, technology assessment, and data/analytics gaps
- "So What" implications for each finding area
- High-value opportunity areas to pursue in the redesign

Our three audiences are: enterprise clients evaluating us as a delivery partner, prospective hires (senior engineers, designers, strategists), and existing clients looking for case studies.

Please ask me questions to gather the information you need, then produce the deliverable.
```

**What to expect:** Mary will ask you about the current site's strengths and weaknesses, analytics data, stakeholder feedback, and competitive landscape. Answer from the Apply Digital context — or make reasonable assumptions and note them.

#### Step 2: Run Competitive Research

A key input into the Opportunity Identification deliverable is understanding how you compare to the market. Use the BMAD market research skill to run a competitive analysis before (or alongside) your work with Mary.

Open a new conversation and invoke the market research workflow:

```
/bmad-market-research
```

Then provide this context:

```
I need competitive and comparative research for a website redesign for Apply Digital (applydigital.com), a global digital consultancy.

Research objectives:
1. Benchmark Apply Digital's website against 4-5 direct competitors (e.g., Publicis Sapient, Thoughtworks, Slalom, EPAM, Globant) across: messaging clarity, visual design quality, mobile experience, page performance, and conversion UX (contact/demo flows)
2. Identify 2-3 adjacent innovators outside the consulting space whose digital experiences set a higher bar for our audiences
3. For each competitor, document: what they do well, where they fall short, and what we can learn from their approach
4. Synthesize findings into a competitive positioning summary: where does Apply Digital have an opportunity to differentiate?

Our primary audiences are: enterprise clients evaluating delivery partners, senior hires (engineers, designers, strategists) and existing clients/partners.
```

**What you get:** A structured competitive analysis that feeds directly into Mary's Opportunity Identification work. Feed the key findings back to Mary:

```
Here are the competitive research findings to incorporate into the Opportunity Identification deliverable:
[paste the competitive analysis summary]

Please update the Opportunity Identification deliverable to include a competitive benchmarking section and adjust the opportunity areas based on where Apply Digital can differentiate.
```

**Why this matters:** The blueprint calls for "competitive and comparative research to benchmark against the market and adjacent innovators" as a key activity in the Opportunity Identification deliverable. Running this as a separate, focused step produces stronger evidence than asking Mary to do everything in one conversation.

#### Step 3: Run a Live Customer Experience & Performance Audit

Before relying on assumptions about the current site, run a live audit using Chrome DevTools to gather real performance data and experience evidence. This gives you concrete numbers to include in your Opportunity Identification findings.

**What you'll do:** Use the Chrome DevTools MCP integration to navigate the live applydigital.com site, run a Lighthouse audit, and capture screenshots of key pages — all from within your AI IDE.

##### Prerequisites: Chrome DevTools MCP Setup

Before you can run live audits, you need the Chrome DevTools MCP server installed and configured. This gives your AI IDE the ability to control Chrome, navigate pages, take screenshots, and run Lighthouse audits.

**1. Install the Chrome DevTools MCP package:**

```bash
npm install -g @anthropic/chrome-devtools-mcp
```

> If you don't have Node.js installed, see Tutorial 00b for setup instructions.

**2. Launch Chrome with remote debugging enabled:**

On macOS, open Terminal and run:

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

> This starts Chrome with a debugging port that the MCP server can connect to. You can still use Chrome normally — the debugging port runs in the background.

**3. Configure the MCP server in your AI IDE:**

If you're using Nimbalyst or Claude Code, add the Chrome DevTools MCP server to your MCP configuration. The exact setup depends on your tool:

- **Nimbalyst:** Go to Settings → MCP Servers → Add Server. Select "Chrome DevTools" from the plugin list, or add it manually with the server command `npx @anthropic/chrome-devtools-mcp` and ensure the debugging port matches (default: 9222).
- **Claude Code:** Add the server to your `.claude/settings.json` or project-level MCP config.

**4. Verify the connection:**

In a new conversation, ask your AI to list available Chrome pages:

```
List the open Chrome pages
```

If you see a list of your open tabs, the connection is working. If not, check that Chrome is running with the `--remote-debugging-port=9222` flag and that no firewall is blocking the connection.

> **Troubleshooting:** If the MCP server can't connect, make sure you don't have another Chrome instance already using port 9222. Close all Chrome windows and relaunch with the debugging flag. On macOS, you may also need to allow the connection in System Settings → Privacy & Security → Local Network.

##### Running the Audit

Once Chrome DevTools MCP is connected, you can run audits directly from your AI conversation.

**Run a Lighthouse audit on the homepage:**

```
Navigate to https://www.applydigital.com and run a Lighthouse audit. I want to assess:
- Performance score (LCP, CLS, FID/INP)
- Accessibility score
- SEO score
- Best practices score

Then take a screenshot of the homepage on both desktop and mobile viewports.
```

**Audit key conversion pages:**

```
Now navigate to the following pages and take screenshots on both desktop and mobile:
1. https://www.applydigital.com/contact-us/ (the "Start a Conversation" page)
2. https://www.applydigital.com/services (service offerings)
3. https://www.applydigital.com/work (case studies)
4. https://www.applydigital.com/careers (careers page)

For each page, note:
- Load time and visual stability
- Mobile layout issues
- Clarity of the call-to-action
- Content hierarchy and readability
```

**Audit the conversion flow:**

```
Walk through the "Start a Conversation" form flow as if you were an enterprise client:
1. How many clicks from the homepage to the contact form?
2. What fields does the form require?
3. Is there a clear value proposition on the form page?
4. Does the form work well on mobile?
5. Are there any friction points or unnecessary steps?
```

**What you get:** Real Lighthouse scores, screenshots, and a documented walkthrough of the conversion experience. Feed these findings back to Mary:

```
Here are the results from a live customer experience and performance audit of applydigital.com:

Lighthouse scores: [paste scores]
Key findings:
- [homepage observations]
- [contact form friction points]
- [mobile experience issues]
- [performance bottlenecks]

Please incorporate these into the Opportunity Identification deliverable under the Experience and Technology findings sections.
```

**Why this matters:** The blueprint's key activities for Opportunity Identification include "conduct experience/tech/data audits to identify current-state limitations." Running a live audit with real data turns subjective opinions ("the site feels slow") into evidence-based findings ("LCP is 4.2s, Lighthouse performance score is 52").

**Tips for a strong Opportunity Identification:**
- Push Mary to include specific "So What" implications, not just observations
- Ask her to identify which opportunities have the highest impact vs. effort
- Make sure findings span all five lenses: strategy, experience, brand, tech, data
- Feed in competitive research findings to strengthen the evidence base

### Approach 2: WDS Workshop

Instead of a single analyst conversation, simulate a multi-discipline discovery synthesis. Open a new conversation and paste:

```
I want to run an Opportunity Identification workshop for a website redesign for Apply Digital (applydigital.com). The site is underperforming as a sales and brand asset.

I'd like you to play the role of a facilitated workshop with multiple discipline perspectives. For each of these lenses, provide current-state findings and "So What" implications:

1. **Strategy lens** — Is the site aligned with Apply Digital's business goals and market positioning?
2. **Experience lens** — Where are the UX friction points, navigation gaps, and conversion blockers?
3. **Brand lens** — How does the visual and tonal presentation compare to market expectations?
4. **Technology lens** — What technical debt, performance issues, or integration blockers exist?
5. **Data lens** — What analytics gaps prevent the team from understanding what's working?

After presenting findings from each lens, synthesize them into 5-7 opportunity themes ranked by potential impact. Format this as a slide deck outline suitable for presenting to client stakeholders.

Context: Three audiences (enterprise clients, prospective hires, existing clients/partners). $500K budget, 6-month timeline, headless CMS + Next.js stack. HubSpot CRM integration.
```

**How the outputs differ:** The WDS approach produces a more presentation-ready artifact with explicit multi-discipline perspectives. The Mary approach produces a more narrative, consultant-style analysis. Both are valid starting points for the Digital Growth Strategy.

---

## Part 2: Digital Growth Strategy (Blueprint 202)

> **Goal:** Define the North Star vision, strategic imperatives, and a single-page strategic placemat that aligns all subsequent work.

### What Digital Growth Strategy Looks Like

The Digital Growth Strategy is the North Star reference for the engagement. Its centrepiece is **The Placemat** — a single-page visual framework that defines:
- **Vision** — a singular, aspirational statement for the future digital experience
- **Strategic Imperatives** — the 3–5 must-win battles to achieve the vision
- **Initiatives** — specific workstreams and feature sets that deliver the imperatives
- **Capabilities** — what must be built or changed across tech and data
- **Measures of Success** — key outcomes and KPIs

### Approach 1: Mary Agent

Continue your conversation with Mary (or start a new one with the Opportunity Identification output):

```
Now I need to build on the Opportunity Identification to create a Digital Growth Strategy (Blueprint 202). This should include:

1. A vision statement for the Apply Digital website redesign
2. 3-5 strategic imperatives (the must-win battles)
3. Initiatives that map to each imperative
4. Capability requirements (tech, data, content, design)
5. Measures of success / KPIs
6. A "Strategic Placemat" — a single-page summary that captures the full strategy

The strategy should directly address the opportunities we identified and be grounded in Apply Digital's context: $500K budget, 6-month phase 1 timeline, three core audiences, and a primary conversion goal of "Start a Conversation" form completions.
```

**Tips for a strong Digital Growth Strategy:**
- The placemat should fit on one page — push Mary to be concise
- Each imperative should clearly connect to an opportunity from your Opportunity Identification
- Make sure measures of success are specific and measurable (e.g., "Lighthouse ≥ 90" not "fast site")

### Approach 2: WDS Workshop

```
I want to facilitate a strategy workshop to build a Digital Growth Strategy for the Apply Digital website redesign. We have completed the Opportunity Identification deliverable and found these key themes: [paste your opportunity themes here, or summarize them].

Please help me run a collaborative strategy session:

1. **Visioning exercise:** Generate 3 candidate vision statements for the redesign. Each should be aspirational, specific to Apply Digital, and tie back to business objectives.
2. **Imperative mapping:** For each opportunity theme, define a strategic imperative (a must-win battle). Consolidate to 3-5 imperatives max.
3. **Initiative brainstorm:** For each imperative, brainstorm 2-4 initiatives. Have a product, design, and tech perspective weigh in on feasibility within the $500K / 6-month constraint.
4. **Capability gap analysis:** What needs to change in tech, data, content operations, and design to enable these initiatives?
5. **KPI definition:** Define 2-3 measurable outcomes per imperative.
6. **Placemat synthesis:** Combine everything into a single-page Strategic Placemat format.

Format the placemat as a structured markdown table or visual hierarchy that could be transferred to a slide.
```

**How the outputs differ:** The WDS approach produces workshop-style outputs with multiple options to debate (e.g., three candidate visions). The Mary approach produces a more opinionated, single-track strategy. The WDS version is better for stakeholder workshops; the Mary version is better for a solo strategist drafting a first pass.

---

## Part 3: Conceptual Design (Blueprint 203)

> **Goal:** Translate the strategy into a tangible visual "North Star" that builds client excitement and commitment.

### What Conceptual Design Looks Like

Conceptual Design is an early-stage visual artifact. It's not production design — it's about making the future *feel real*. It can take the form of:
- A low-fidelity sketch of a key user flow
- A high-fidelity page design (e.g., homepage concept)
- An interactive prototype

The aim is to **get the client excited and bought in on the future work.**

### Approach 1: Mary Agent

```
Based on our Digital Growth Strategy, I need to define the Conceptual Design direction (Blueprint 203) for the Apply Digital website redesign.

Help me:
1. Identify the single most important user journey to concept (the one that best demonstrates the strategic vision)
2. Define the key screens/moments in that journey
3. Describe what each screen should communicate and how it maps to our strategic imperatives
4. Recommend the right fidelity level for this concept (sketch, wireframe, or hi-fi prototype) given our timeline and audience (Marketing + ELT stakeholders)
5. List the design principles that should guide the concept

Note: The actual visual design would be done in Figma or a tool like Loveable — this deliverable is the brief and direction for that design work.
```

### Approach 2: WDS Workshop

```
I want to run a Conceptual Design direction session for the Apply Digital website redesign.

Our Digital Growth Strategy defines these imperatives: [paste your imperatives from the Digital Growth Strategy].
Our primary conversion goal is "Start a Conversation" form completions.
Our audiences are: enterprise clients, prospective hires, existing clients/partners.

Please facilitate:

1. **Journey selection:** Which user journey best demonstrates our strategic vision? Have strategy, design, and product perspectives each argue for their top pick. Recommend one.
2. **Moment mapping:** Map the 4-6 key moments in that journey. For each moment, define: what the user is thinking, what the page should communicate, and which imperative it serves.
3. **Concept brief:** Write a design brief for the concept that a designer could use to start working in Figma. Include tone, layout principles, content hierarchy, and references to the brand direction.
4. **Fidelity recommendation:** Given that our audience is Marketing + ELT, what level of fidelity will land best? Argue the trade-offs between sketch, wireframe, and hi-fi.

Format this as a document that could be handed to a design lead to begin concepting.
```

**How the outputs differ:** The WDS approach creates a more thorough design brief with explicit trade-off discussion. The Mary approach gives a quicker, more directive output. For Apply Digital, the WDS approach is likely better since the audience (Marketing + ELT) will want to feel involved in the direction.

---

## Comparing Outputs

After running both approaches for any of the three deliverables, compare what you got:

| Dimension | BMAD Analyst (Mary) | WDS Workshop |
| --- | --- | --- |
| **Speed** | Faster — single conversation thread | Slower — more prompts, more iteration |
| **Depth** | Good for synthesis and structure | Better for multi-perspective analysis |
| **Stakeholder readiness** | Needs editing for presentation | Closer to presentation-ready |
| **Best when** | You're the expert synthesizing known info | You're facilitating alignment across a team |
| **Output format** | Narrative / consultant-style document | Workshop artifacts / slide deck outlines |
| **Opinionation** | More opinionated (one recommended path) | More exploratory (options to debate) |

**In practice:** Start with Mary to get a fast first draft, then use WDS-style prompts to pressure-test it from multiple perspectives before presenting to stakeholders.

---

## What Good Looks Like

**Strong Opportunity Identification:**
- Findings organized by discipline lens (strategy, experience, brand, tech, data)
- Every finding has a "So What" implication
- Opportunities are ranked by impact and clearly scoped
- Evidence-based, not assumption-based

**Strong Digital Growth Strategy:**
- Vision statement is specific to this engagement, not generic
- Imperatives are truly "must-win" — not a wish list
- Placemat fits on one page and tells a clear story
- KPIs are measurable and time-bound

**Strong Conceptual Design:**
- Focuses on one key journey, not the whole site
- Design direction maps directly to strategic imperatives
- Fidelity level matches the audience and engagement stage
- Brief is actionable enough for a designer to start working

---

## Common Mistakes

### Mistake 1: Skipping Opportunity Identification and jumping to strategy
**Problem:** Without a grounded understanding of current state, your strategy is based on assumptions.
**Fix:** Always start with immersion and findings before visioning.

### Mistake 2: Strategy that reads like a feature list
**Problem:** "Build a new homepage" is not a strategic imperative — it's a task.
**Fix:** Imperatives should describe *outcomes* (e.g., "Establish Apply Digital as the obvious choice for enterprise digital transformation").

### Mistake 3: Conceptual design that overpromises
**Problem:** A hi-fi prototype that shows features outside the $500K scope.
**Fix:** Align the concept to the MVP scope. It should excite stakeholders about what *will* ship, not what *could* ship someday.

### Mistake 4: Not connecting the three deliverables
**Problem:** The Opportunity Identification, Digital Growth Strategy, and Conceptual Design feel like separate documents with no thread.
**Fix:** Each deliverable should explicitly reference the one before it. Opportunities feed imperatives, imperatives feed the concept.

---

## Saving Your Work

Save your discovery outputs to your `_bmad-output/` folder:
- `applydigital-opportunity-identification.md` (Opportunity Identification)
- `applydigital-digital-growth-strategy.md` (Digital Growth Strategy)
- `applydigital-conceptual-design-brief.md` (Conceptual Design)

These will be used as inputs in **Tutorial 03 — Product Brief**, where Sam will use your discovery work to build a structured Product Brief (Blueprint 301).

---

## Next Steps

Once your discovery deliverables are complete:

1. **Move to Product Brief:** Tutorial 03 — use Sam to translate your discovery outputs into a Product Brief (301)
2. **Share with stakeholders:** The Opportunity Identification and Digital Growth Strategy are designed to be presented — use the structural frameworks from the blueprint to build your slide decks
3. **Iterate:** Discovery is not a one-shot process. As you learn more, update your Opportunity Identification and Digital Growth Strategy

---

*This tutorial is part of the Apply Digital BMAD Training Series. Last updated: March 2026*
