---
title: How to install OpenSpec
description: This guide details how to install the OpenSpec CLI and how to  configure it for a project.
---

This guide details how to install the OpenSpec CLI and how to  configure it for a project.

## Prerequisites

- Node.js version `20.19` or higher
- Claude Code installed 

---

### Step 1: Install OpenSpec
1. Install OpenSpec with the following terminal command:
```bash
npm install -g @fission-ai/openspec@latest
```
2. Next, initialize OpenSpec with this command:
```bash
openspec init
```
3. When prompted:
      - Select AI Tool: Choose Claude Code.
      - Confirm: Accept default paths for now (don't worry, you can change these later)

This generates an `./openspec` directory containing `AGENTS.md` (the protocol) and `project.md` (project context). Note that at the project root level, `AGENTS.md` and `CLAUDE.md` have also been generated and overwritten to redirect to those two files.

### Step 2: Analyze and Understand the generated files

Take a read through `./openspec/AGENTS.md` and `./openspec/project.md` and assess how you'd personally modify/author these files to suite the delivery needs and style of your squad. 
 
When ready, take a moment to share your thoughts with your peers.

`project.md` is the technical context of the project (tech stack, patterns, ways of working ) while `AGENTS.md` directs the persona and approach Claude should apply. This is the global context we provide to Claude that enables it to execute with better accuracy.

In the next few workshops, we'll be using the OpenSpec Workflow to perform some common development tasks.

---
## Notes
- The main approach we're using building towards is Spec Driven Development. While it requires an non-trivial amount of reading and context setting/writing to setup it fundamentally changes the way we work with Ai tools.
- Spec Driven Development pairs really well with Test Driven Development. Task Claude to scaffold the tests first and review that before proceeding to generate any code. To modify OpenSpec to follow TDD, simply add the direction to follow TDD in the following files/sections:
      1. `openspec/Agents.md` - implementation workflow and tasks.md template sections
      2. `openspec/project.md` - testing strategy section
- This is an evolving area and there are also other contemporary approaches like BMAD and Spec-Kit which approach spec driven development slightly differently. We encourage you to explore these options as well to compare approaches.


## Further Reading
- [OpenSpec Repo](https://github.com/Fission-AI/OpenSpec)
- [BMAD Repo](https://github.com/bmad-code-org/BMAD-METHOD)
- [Spec-kit Repo](https://github.com/github/spec-kit)