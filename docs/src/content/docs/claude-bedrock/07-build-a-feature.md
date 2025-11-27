---
title: How to implement a feature using OpenSpec
description: This guide details the workflow for implementing a new software capability using the OpenSpec framework and Claude Code. It covers the lifecycle from proposal scaffolding to final archival.
---

This guide details the workflow for implementing a new software capability using the OpenSpec framework and Claude Code. It covers the lifecycle from proposal scaffolding to final archival.

## Prerequisites

- OpenSpec Initialized
- Claude Code setup

---

> ℹ️ We've provided a [sandbox repo](https://github.com/applydigital/ai-engineering/tree/openspec/sandbox) that's already been initialized with Openspec. That being said, feel free to adapt the steps to a repo of your choosing as well. 

### Step 1. Scaffold the Change Proposal
1. Initiate the OpenSpec workflow by using this command in Claude:
```
openspec:proposal
```

2. OpenSpec will kick in and prompt you to describe the functionality so it can create the spec artifacts. For this guide, let's add a timer feature to this app:

```
Task: Implement a countdown timer feature that rotates artwork.

New Components:
1.  AtTimer (Atom): A display component showing the remaining time (mm:ss).
2.  MlBidInfo (Molecule): A wrapper component that composes the existing AtBidTicker atom and the new AtTimer atom.
3.  useArtworkTimer() (Custom Hook): Manages the countdown logic.

Requirements:
- Logic: The timer should countdown from 60 seconds. When it hits 0, it must trigger an action to change the current artwork and reset the timer automatically.
- The Hook: Should return the current time remaining and a reset function.
- The Molecule: `BidInfo` should accept props necessary to pass down to `BidTicker` and `Timer`.
```
> 💡 Note how the above prompt essentially replicates a well written Jira Ticket. With the Atlassian MCP, it's possible to skip this step entirely and generate a spec off a Jira ticket.

> ℹ️ Alternatively, you can combine both steps into one prompt: 
> `Help me create an OpenSpec proposal to Implement a countdown timer feature that rotates the artwork....etc`


3. Claude will proceed to generate a unique directory under `openspec/changes/` (e.g., `openspec/changes/add-timer/`). You will be required to approve and review as changes come through. At the end, Claude will generate three key files:

- `proposal.md`: The business case and high-level scope.
- `tasks.md`: The implementation checklist.
- `specs/`: The directory for requirement deltas.


### Step 2: Implementation
1. Tell Claude to implement the changes.
```
Let's proceed to implement the changes
```

2. As Claude iterates through the tasks, you will be asked to read through and approve the changes and generated code.
    - You can always stop Claude and instruct it to adjust it's approach at any point
    - If you find the code generated being completely offtrack from your expectations, you need to take a step back and revisit your specs.
3. Go through the motion, take your time to review and observe how Claude and OpenSpec implements code.

### Step 3: Human Review

1. Take a step away from Claude and test the changes. 
    - Usually at this point, we suggest spinning up the local environment and testing the new functionality by hand, but do your own due dilligence as you see fit. 

### Step 4a: Making small Changes
1. If the bugs/adjustments are trivial (i.e. the spec does not need to be modified), you can choose to manually fix it or instruct Claude to do so for you.
    - e.g. the timer component is functional but aligned in the wrong direction.

### Step 4b: Making Big Changes
⚠️ If you notice the outputted functionality is completely off from your expectations, then your specs are probably inaccurate and you must go back and rectify it. You can choose to do so manually or with Claude but it is important that the `Spec` files are accurate as future work builds upon it. 
1. Once you've made the changes, validate the new specs:
```
openspec validate {{ name of the change eg. "add-artwork-timer" }} --strict
```
2. Once validated, go back to __Step 2__ and task Claude to implement the changes.

 > ℹ️ These specs will become a codified source of truth in the next step, it is crucial to the entire process that these specs are comprehensive
  
### Step 5: Archive the Spec
1. Once the feature is complete and deployed, we must archive it so Claude knows it can move on and remove it from it's context memory. 
```
openspec:archive {{ name of the change eg. "add-artwork-timer" }}
```

2. Claude will validate that all the tasks are done . Usually there's little intervention needed except some approvals to markdown file changes.

### Step 6: Making Future Changes
1. If you need to make further changes at a later date (i.e. after it's archived),  simply go back to __Step 1__ and restart this process.
2. The only thing you need to watch for is to make sure Claude is modifying the preexisting specs and not writing new ones unintentionally.

---
## Notes
1. It is important to remember that as we continue to automate and delegate tasks to the Ai, our craftsmanship does not disappear. If anything, Ai allows us to generate sloppy code easier than ever. Rhe true value Engineers bring to the table is how we can effectively leverage our experience alongside these tools to better deliver quality code.
2. Archiving is critical step in this process, once all tasks have been completed and code has been shipped, it allows Claude to establish a source of truth and reduce context clutter. This gives a documentation trail behind the changes in the repo that can be picked up later if necessary.
3. A good way to think about the various folders OpenSpec uses is:
    - `/specs` are the present source of truth
    - `/Changes/specs` are the future state that you might not enact 
    - `/Chanes/archives` are the past

## Further Reading
- [OpenSpec](https://github.com/Fission-AI/OpenSpec/) Github
- A decent [Article](https://medium.com/coding-nexus/openspec-a-spec-driven-workflow-for-ai-coding-assistants-no-api-keys-needed-d5b3323294fa) explaining OpenSpec