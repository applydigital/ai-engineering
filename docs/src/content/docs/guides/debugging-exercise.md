---
title: How to fix a small bug with Claude
description: This guide shows how to fix a bug with Claude.
---

Now that we've got Claude setup, let's take it for a quick test drive.
This guide shows how to fix a bug with Claude.

## Prerequisites

- Claude Code 
- A codebase you can experiement in

---

> ℹ️ We've provided a sandbox repo for your convenience, however feel free to adapt the steps to a repo of your choosing as well. 

### Step 1: Understand the Code

1. Get the sandbox repo installed and running locally
2. For context, it's a React SPA that simulates an auction application. Users add in Bids, current bid should so go up and the Users should not be able to bid lower than the current bid.  
    - You can also run this prompt to have Claude read:
    ```
    Explain the code in the "sandbox" folder to me   
    ``` 
3. We've left some deliberately awful and buggy code in the `src/hooks/useBidding.ts` file. Take a minute to read through and take note of what's wrong.

### Step 2: Prompt Claude to fix the bug

1. Open `./sandbox/src/useBidding.ts`
2. Open the Claude Extension and prompt Claude to fix it with the prompt below:

```
This logic in `useBidding.ts` isn't working, could you fix this?
```

3. You will be prompted before any edits are made, if Claude makes a mistake, this is when you can intervene.


### Step 3 (optional):
Some other follow up prompts you can try out: 
```
How can we make the `useBidding` hook better?
```

```
Explain how {{ insert filename or function here }} works
```

Feel free to continue to experiement too.

---
## Notes
- Claude is capable of taking plain language directions and traversing the file system to find the relevant files to pull in as context but this can sometimes backfire. For minimum friction we always encourage users to clearly instruct Claude which files it should look into as a starting point when debugging
- If tests are provided, Claude is also able to iterate upon itself and validate that the code modifications still adhere to the previous tests assertions. Taking a step back, we find Test Driven Development really flourishes with Ai Tooling.

## Further Reading
- [Prompt Engineering Guide](https://www.promptingguide.ai/) - a very thorough guide on Prompt engineering with some good explanations on how LLMs interpret plain language istructions