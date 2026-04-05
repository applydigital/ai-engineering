---
title: Level Zero (0b) - Non-Technical Installation Guide
description: Get your computer ready to use BMAD with an AI assistant—GUI-focused installation for non-technical users.
---

# Level Zero (0b): Non-Technical Installation Guide

> **Type:** Installation Guide (Non-technical)
> **Audience:** Non-technical users — strategists, product managers, designers, and anyone who doesn't write code day-to-day
> **Time:** 30–60 minutes (mostly waiting for downloads)
> **Goal:** Get your computer ready to use BMAD with an AI assistant

---

## What you're setting up (and why)

BMAD is a methodology that uses AI agents to help you create product briefs, PRDs, roadmaps, and other project artifacts. To run it, you need a few things on your computer:

| What | Why you need it | What it is |
| --- | --- | --- |
| **Node.js** | Runs the BMAD installer | A program that lets your computer run tools built with JavaScript. You install it once and forget about it. |
| **Git** | Tracks changes to project files | A version control system — think of it like "Track Changes" in Word, but for entire folders of files. |
| **Claude Code Desktop** or **VS Code** | Your workspace for using BMAD | The app where you'll chat with AI agents and they'll create documents for you. |

You don't need to understand how these work — just install them and move on.

## Before you start

- You'll need your **Mac password** (the one you use to log in or install apps).
- You'll need an **internet connection** — some downloads are large (1–2 GB).
- You'll need an **Anthropic account** for Claude Code Desktop. If you don't have one, you can create it for free at https://claude.ai — click "Sign up" and follow the steps (email + verification).
- Set aside about **30–60 minutes**. Most of that is waiting for downloads — you can do other things while they run.

---

## Quick checklist

If you've done this before or just want a reminder, here's the short version:

1. Install Node.js (LTS) from https://nodejs.org
2. Install Git (via Xcode Command Line Tools on macOS, or from https://git-scm.com on Windows)
3. Install Claude Code Desktop from https://claude.ai/download (or VS Code as an alternative)
4. Create a project folder and run `npx bmad-method install`

If any of that sounds unfamiliar, follow the detailed steps below.

---

## macOS (GUI steps)

1. Install Node.js:
  - Go to https://nodejs.org in your web browser.
  - Click the big green button that says **"LTS"** (Long Term Support) — this downloads an installer file (`.pkg`).
  - Open the downloaded file — it will be in your **Downloads** folder (check the bottom of your browser or open Finder → Downloads).
  - The installer will open with a series of screens. Click **Continue** on each screen, then click **Install**. You may need to enter your Mac password.
  - When you see "The installation was successful", click **Close**.

2. Install Xcode Command Line Tools and Git:
  - On macOS, Git and other developer tools are bundled with **Xcode Command Line Tools**. You need to install this before using Git, Claude Code, or BMAD.
  - Open **Terminal**: press `Cmd + Space` (this opens Spotlight search), type `Terminal`, and press Enter. A window with a dark or light background and a blinking cursor will appear.
  - Type `git --version` and press Enter.
  - If Git is already installed, you'll see a version number (e.g., `git version 2.x.x`) — skip to step 3.
  - If Git is **not** installed, macOS will show a pop-up asking you to install **Xcode Command Line Tools**. Click **Install**, then click **Agree** to the license agreement.
  - The download is around 1–2 GB and may take 10–20 minutes depending on your internet speed. Wait for it to finish — don't close the Terminal window.
  - Once the install completes, type `git --version` again to confirm it worked.
  - **Note:** If you skip this step, Claude Code Desktop or other tools may prompt you to install Xcode Command Line Tools later — it's the same install, just triggered at a different time. It's best to do it now so everything works smoothly.

3. Install your AI IDE:
  - **Claude Code Desktop** (recommended):
    1. Go to https://claude.ai/download in your browser.
    2. Download the macOS installer.
    3. Open the downloaded `.dmg` file — a window will appear showing the Claude icon and an Applications folder.
    4. Drag the Claude icon onto the Applications folder.
    5. Open **Applications** in Finder and double-click **Claude**. If macOS asks "Are you sure you want to open this?", click **Open**.
    6. Sign in with your Anthropic account when prompted.
  - **VS Code** (alternative):
    1. Go to https://code.visualstudio.com in your browser and click the download button.
    2. Open the downloaded `.zip` file — it will unzip automatically.
    3. Drag the **Visual Studio Code** app to your **Applications** folder.
    4. Open it from Applications. If macOS asks "Are you sure you want to open this?", click **Open**.
    5. Inside VS Code, click the square icon on the left sidebar (Extensions), search for "GitHub Copilot", and click **Install**. Sign in with your GitHub account when prompted.

---

## Windows (GUI steps)

1. Install Node.js:
  - Go to https://nodejs.org in your web browser.
  - Click the big green button that says **"LTS"** (Long Term Support) — this downloads an installer file (`.msi`).
  - Open the downloaded file — it will be in your **Downloads** folder (check the bottom of your browser or open File Explorer → Downloads).
  - The installer will open with a series of screens. Click **Next** on each screen, then click **Install**. If Windows asks "Do you want to allow this app to make changes?", click **Yes**.
  - When you see "Completed", click **Finish**.

2. Install Git:
  - Go to https://git-scm.com in your browser and click **Download for Windows**.
  - Open the downloaded installer.
  - The installer has many screens with options — **click Next on every screen using the default settings**. The defaults are fine.
  - **Important:** On the screen that mentions "Adjusting your PATH", make sure **"Git from the command line and also from 3rd-party software"** is selected (this is the default). This ensures Git works everywhere.
  - Click **Install**, then **Finish** when done.

3. Install your AI IDE:
  - **Claude Code Desktop** (recommended):
    1. Go to https://claude.ai/download in your browser.
    2. Download the Windows installer.
    3. Open the downloaded `.exe` file. If Windows asks "Do you want to allow this app to make changes?", click **Yes**.
    4. Follow the installer screens — click **Next** and then **Install**.
    5. When the install finishes, Claude will open automatically. Sign in with your Anthropic account.
  - **VS Code** (alternative):
    1. Go to https://code.visualstudio.com in your browser and click the download button.
    2. Open the downloaded installer. If Windows asks "Do you want to allow this app to make changes?", click **Yes**.
    3. Click **Next** through the installer screens, then click **Install**.
    4. When done, check "Launch Visual Studio Code" and click **Finish**.
    5. Inside VS Code, click the square icon on the left sidebar (Extensions), search for "GitHub Copilot", and click **Install**. Sign in with your GitHub account when prompted.

---

## Create a project folder and install BMAD

### What is a project folder?

Your computer organises everything into **folders** (also called "directories"). You already use them — Documents, Downloads, Desktop, Photos — these are all folders that hold files.

A **project folder** is simply a folder you create to keep all the files for one project together. Think of it like a physical filing cabinet drawer labelled with the project name — everything related to that project goes inside it.

When you use an AI tool like Claude Code Desktop or VS Code, the first thing you do is tell it which folder to work in. It will read files from that folder and save new files there. This is called "opening a project" — you're really just pointing the tool at a folder.

**Where do folders live on your computer?**

Every user on a computer has a **home folder**. This is your personal space where all your files are stored:
- **macOS:** Your home folder is at `/Users/yourname/` — you can see it in Finder by clicking **Go → Home** in the menu bar, or pressing `Cmd + Shift + H`.
- **Windows:** Your home folder is at `C:\Users\yourname\` — you can see it in File Explorer by typing `%USERPROFILE%` in the address bar and pressing Enter.

Inside your home folder, you'll find familiar folders like Documents, Downloads, and Desktop.

**For this tutorial**, we'll create a new folder called `bmad-practice` inside a `projects` folder in your home directory:
- **macOS:** `/Users/yourname/projects/bmad-practice`
- **Windows:** `C:\Users\yourname\projects\bmad-practice`

This keeps your BMAD work separate from your other files and easy to find.

### Using the terminal

This step requires a **terminal** — a text-based window where you type commands. Think of it like a chat window, but instead of chatting with a person, you're giving instructions to your computer. You type a command, press Enter, and the computer does it.

### Opening a terminal on macOS

1. Open **Finder** and go to **Applications → Utilities → Terminal**. (Or press `Cmd + Space`, type "Terminal", and press Enter.)
2. You'll see a window with a blinking cursor — this is your terminal.
3. Create and navigate to your project folder by typing the following lines one at a time, pressing Enter after each:
```bash
   mkdir -p ~/projects/bmad-practice
   cd ~/projects/bmad-practice
```
   > `mkdir -p` means "make directory" — it creates the folder (and any parent folders) if they don't already exist. `cd` means "change directory" — it moves the terminal into that folder. The `~` symbol means your home folder (e.g., `/Users/yourname`).

4. **To see this folder in Finder:** open Finder, press `Cmd + Shift + G`, type `~/projects/bmad-practice` and press Enter. You'll see the folder you just created. You can drag it to your Finder sidebar for easy access later.

### Opening a terminal on Windows

1. Click the **Start** button and type "PowerShell". Click **Windows PowerShell** when it appears.
2. You'll see a blue window with a blinking cursor — this is your terminal.
3. Create and navigate to your project folder by typing the following lines one at a time, pressing Enter after each:
```powershell
   mkdir -Force ~\projects\bmad-practice
   cd ~\projects\bmad-practice
```
   > `mkdir -Force` means "make directory" — it creates the folder (and any parent folders) if they don't already exist. `cd` means "change directory" — it moves the terminal into that folder. The `~` symbol means your home folder (e.g., `C:\Users\yourname`).

4. **To see this folder in File Explorer:** open File Explorer (press `Win + E`), click the address bar at the top, type `%USERPROFILE%\projects\bmad-practice` and press Enter. You'll see the folder you just created. You can right-click it and choose "Pin to Quick access" for easy access later.

### Opening a terminal in VS Code (either OS)

If you installed VS Code, you can open a terminal inside it:
1. Open VS Code and go to **File → Open Folder** — select your project folder.
2. In the menu bar, click **Terminal → New Terminal** (or press `` Ctrl + ` ``).
3. The terminal opens at the bottom of VS Code, already inside your project folder — no `cd` needed.

### Run the BMAD installer

Once your terminal is open and you're in your project folder, you have two options:

**Option A: Interactive install (recommended for first-timers)**

Type the following and press Enter:

```bash
npx bmad-method install
```

> **What is ****`npx`****?** It's a tool that comes with Node.js. It downloads and runs a program for you — in this case, the BMAD installer. You don't need to understand how it works; just type the command exactly as shown.

You'll see text appear in the terminal — the installer will ask you questions. Here's what to expect:

1. It may ask "Need to install the following packages... Ok to proceed?" — type `y` and press Enter.
2. It will ask which **IDE/tool** you're using — select **Claude Code** (or VS Code if that's what you installed).
3. It may ask for your **name** and **language** — just type your answers and press Enter.
4. When it's done, you'll see a message saying the install is complete. You can close the terminal.

**Option B: One-line install (no prompts)**

If you'd rather skip the questions and install everything at once, copy and paste this single command:

```bash
npx bmad-method install --modules "bmm,cis" --tools "claude-code" --directory ~/projects/bmad-practice -y
```

This installs BMAD with all modules (BMM and CIS), configured for Claude Code, into your project folder — no prompts or questions. You can close the terminal when it finishes.

### How do I know it worked?

After the installer finishes, open Finder and navigate to your project folder (`~/projects/bmad-practice`). You should see new folders inside it:

- `_bmad/` — contains the BMAD configuration and agent definitions
- `_bmad-output/` — where the AI will save documents it creates for you

If you see these folders, you're all set.

---

## Open your project and start using BMAD

Now that everything is installed, here's how to open your project:

**If you installed Claude Code Desktop:**
1. Open **Claude** from your Applications folder.
2. Claude will ask you to open a folder — click **Open Folder** (or go to **File → Open Folder**).
3. Navigate to your project folder: go to your home folder → `projects` → `bmad-practice`. Select it and click **Open**.
4. You'll see a chat interface. This is where you'll talk to BMAD agents. Try typing: `Tell me about the BMAD agents available in this project.`

**If you installed VS Code:**
1. Open **Visual Studio Code** from your Applications folder (or Start menu on Windows).
2. Go to **File → Open Folder**.
3. Navigate to your project folder: go to your home folder → `projects` → `bmad-practice`. Select it and click **Open**.
4. You'll see the project files in the sidebar on the left.

---

## Tips and troubleshooting

- **If an install step asks for your password:** this is your Mac login password (or Windows admin password). This is normal — installers need permission to add programs to your computer.
- **If something fails or shows red text:** take a screenshot and share it with a technical teammate. Most errors are caused by missing permissions or an interrupted download.
- **If the terminal feels scary:** that's normal! You only need it for this one-time setup. After BMAD is installed, you'll work entirely in Claude Code Desktop or VS Code — no more terminal needed.
- **If you need to redo the BMAD install:** just open the terminal again, navigate to your project folder (`cd ~/projects/bmad-practice`), and run `npx bmad-method install` again. It won't break anything.

---

## What's next?

You're ready to start using BMAD! Head to **Tutorial 01 — Use Case and Project Context** (`01-use-case-and-project-context.md`) to see the scenario you'll be working through, then continue to **Tutorial 02** to start your first BMAD session with an AI agent.
