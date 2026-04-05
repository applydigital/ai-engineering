---
title: Installation Guide
description: Install Node.js, Git, and an AI IDE via command line for technical users and engineers.
---

# Level Zero (0a): Technical Installation Guide

> **Type:** Installation Guide (Technical)
> **Audience:** Engineers and technical users
> **Time:** 20–45 minutes
> **Goal:** Install Node.js, Git, and an AI IDE via command line and get BMAD running

---

## Quick checklist (commands to run)

Run these to verify and install if missing:

```bash
node --version
git --version
npm --version
```

If any command is missing, follow the sections below.

---

## Install Node.js (v20+)

macOS (Homebrew):

```bash
brew install node
```

Windows (MSI installer recommended for simplicity) or use package manager (winget):

```powershell
# winget example
winget install OpenJS.NodeJS.LTS
```

Verify:

```bash
node --version
npm --version
```

---

## Install Git

macOS:

```bash
git --version || xcode-select --install
```

Windows (recommended installer):

Download from https://git-scm.com and install with default settings but ensure "Add to PATH" is selected.

Configure identity (required for commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## Install an AI IDE (CLI-first)

Preferred: Claude Code (CLI)

Requires Node/npm installed:

```bash
npm install -g @anthropic-ai/claude-code
```

Verify and launch in your project folder:

```bash
claude --version
cd /path/to/project
claude
```

Alternative: VS Code with GitHub Copilot — install `code` CLI and the Copilot extension. For automation, use `code --install-extension GitHub.copilot`.

---

## Create project and install BMAD (command-line)

```bash
mkdir -p ~/projects/bmad-practice
cd ~/projects/bmad-practice
git init

# Interactive installer (recommended first-run)
npx bmad-method install

# Or one-line install for Claude Code
npx bmad-method install --tools claude-code --yes
```

What to expect: `_bmad/`, `_bmad-output/`, and optional `.claude/` skills folders created. The installer writes config and may prompt for your name and language.

---

## Post-install (technical notes)

- If `npx` fails with permissions, update npm or run with `--yes` flag as above.
- On Windows, run PowerShell as Administrator for global `npm install -g` operations.
- For CI or reproducible installs, use the one-line `npx` command in scripts.

---

## Troubleshooting

- PATH issues: reopen terminal or restart the machine after installer updates PATH on Windows.
- Permission errors: use administrator privileges for global installs or configure npm to use a user directory.

---

You're ready to open the project in `claude` or `code` and start running BMAD agents.
