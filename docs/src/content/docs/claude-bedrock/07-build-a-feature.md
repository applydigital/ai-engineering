---
title: How to implement a feature using OpenSpec
description: This guide details the workflow for implementing a new software capability using the OpenSpec framework and Claude Code. It covers the lifecycle from proposal scaffolding to final archival.
---

This guide details the workflow for implementing a new software capability using the OpenSpec framework and Claude Code. It covers the lifecycle from proposal scaffolding to final archival.

## Prerequisites

- OpenSpec Initialized
- Claude Code setup

---

> ℹ️ We've provided a sandbox repo that's already been initialized with Openspec. That being said, feel free to adapt the steps to a repo of your choosing as well. 

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


3. Claude will proceed to generate a unique directory under `openspec/changes/` (e.g., openspec/changes/add-timer/). You will be required to approve and review as changes come through. At the end, Claude will generate three key files:

- `proposal.md`: The business case and high-level scope.
- `tasks.md`: The implementation checklist.
- `specs/`: The directory for requirement deltas.


### Step 2: Implementation
1. Tell Claude to implement the changes.
```
Let's proceed to implement the changes
```

2. As Claude proceeds through the tasks, you will be asked to read through and approve the changes and generated code. This is the primary shift with using Spec Driven Development, with enough Context and the right scope, you write less but direct and read more.
    - Don't forget, you can always stop Claude and instruct it to adjust it's direction at any point

3. Go through the motion, take your time to review and observe how Claude and OpenSpec implements code.

### Step 3: Human Review

1. Take a step back from Claude and do a smoke test on your own. 
    - Usually at this point, we suggest spinning up the local environment and testing the new functionality by hand, but do your due dilligence as you see fit. 

2. Sometimes you'll discover intergration failures, lack of test coverage, or new side effects from reviewing the generated code. 
    - At this point, you can choose to manually fix any bugs or instruct Claude to do so for you.
    - One thing you should definitely consider though, is _why_ the bug slipped through. Claude and Ai Tools can hallucinate, but there is sometimes a deeper reason that is worth investigating. 

 > ℹ️ During the development of this workshop, we found the Artwork rotation functionality sometimes was not invoked when the timer expired. We realized this was because there was no test to cover this side effect between hooks so Claude was unable to catch it when it was generating the code. Once test coverage was added, this bug ceased to occur. We've left the imperfect code here for you to experiment with. 


3.

### Step 4: Archive the Spec
1. Once the feature is complete, we must archive it so Claude knows it can move on and remove it from it's context memory. 
```
openspec:archive {{ name of the spec we previously generated eg. "add-artwork-timer" }}
```

2. Claude will take care of the rest from there. Usually there's little to intervention needed except some approvals to markdown file changes.

3. Congratulations, you're done!

---
## Notes
1. It is important to remember that as we continue to automate and delegate tasks to the Ai, our craftsmanship does not disappear. If anything, Ai allows us to generate sloppy code easier than ever. Rhe true value Engineers bring to the table is how we can effectively leverage our experience alongside these tools to better deliver quality code.
2. Archiving is critical step in this process, once the code has been shipped, it allows Claude to reduce context clutter and furthermore, this gives a documentation trail behind the changes in the repo that can be picked up later if necessary.


## Further Reading
-[OpenSpec](https://github.com/Fission-AI/OpenSpec/) Github
- A decent [Article](https://medium.com/coding-nexus/openspec-a-spec-driven-workflow-for-ai-coding-assistants-no-api-keys-needed-d5b3323294fa) explaining OpenSpec