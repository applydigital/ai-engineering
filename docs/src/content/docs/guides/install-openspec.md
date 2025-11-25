---
title: How to install OpenSpec
description: This guide details how to install the OpenSpec CLI, configure it for a project using Claude Code, and execute a standard change workflow.
---

This guide details how to install the OpenSpec CLI, configure it for a project using Claude Code, and execute a standard change workflow.

## Prerequisites

- Node.js version `20.19` or higher
- Claude Code installed 

---

### Step 1: Install OpenSpec
1. Create a folder in your project directory for your project-level Claude hooks:
```bash
npm install -g @fission-ai/openspec@latest
```
2. Initialize OpenSpec with this command in the terminal:
```bash
openspec init
```
3. When prompted:
      - Select AI Tool: Choose Claude Code.
      - Confirm: Accept default paths unless your architecture requires overrides.

This generates an `./openspec` directory containing AGENTS.md (the protocol) and project.md (project context).





---
## Notes
- The standard workflow loop is scaffold -> review -> apply -> archive. Do not skip the review step; this is quite possibly the most important step in this process.
- Spec Driven Development pairs reallty well with Test Driven Development. Task Claude to scaffold the tests first and review that before proceeding to write any code.


## Further Reading
- [OpenSpec Repo](https://github.com/Fission-AI/OpenSpec)

