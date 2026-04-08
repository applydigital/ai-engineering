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

This generates an `./openspec` directory containing `config.yaml`. This yaml file is where you can introduce product context. 

> ℹ️ The default setup installs the 4 `core` commands: explore, propose, apply, archive. 
> To enable expanded workflow commands, run `openspec config profile` in your terminal and select `workflows` to add additional commands..

### Step 2: Understanding project context

Take a read through this [doc](https://github.com/Fission-AI/OpenSpec/blob/main/docs/customization.md) on customization. Particularly on Project Configuration where it explains how `config.yaml` allows to you to add context like tech stack. Additionally, you're also able to 'configure' how Openspec behaves when it executes its commands so it gives you ability to customize the planning and development approach. 

When ready, take a moment to disuss with your peers what you'd consider important to add to `config.yaml`.

In the next few workshops, we'll be using the OpenSpec Workflow to perform some common development tasks.

---
## Notes
- The main approach we're using building towards is Spec Driven Development. While it requires an non-trivial amount of reading and context setting/writing to setup it fundamentally changes the way we work with Ai tools.
- Spec Driven Development pairs really well with Test Driven Development. Task Claude to scaffold the tests first and review that before proceeding to generate any code. To modify OpenSpec to follow TDD, simply add the direction to follow TDD in `openspec/config.yaml`
- This is an evolving area and there are also other contemporary approaches like BMAD and Spec-Kit which approach spec driven development slightly differently. We encourage you to explore these options as well to compare approaches.


## Further Reading
- [OpenSpec Repo](https://github.com/Fission-AI/OpenSpec)
- [BMAD Repo](https://github.com/bmad-code-org/BMAD-METHOD)
- [Spec-kit Repo](https://github.com/github/spec-kit)