---
title: How to build a simple Claude Hook
description: This guide shows how to build a simple Claude Stop Hook that plays an audio notification when Claude has finished executing.
---

This guide shows how to build a simple Claude Stop Hook that plays an audio notification when Claude has finished executing it's task.

## Prerequisites

- macOSX (for the `say` command)
- Node.js version `20.19` or higher

---

### Step 1: Create the Audio Notification Script
1. Create a folder in your project directory for your project-level Claude hooks:
```bash
mkdir -p .claude/hooks
```

2. Create the script file: 
```bash
touch .claude/hooks/notify-finished.js
```

3. Add the script code to the file:
```javascript
// .claude/hooks/notify-finished.js

const { exec } = require('child_process');

const message = "Claude task complete";

exec( `say "${message}"`, (error) => {
  if (error) {
    // Log errors to console
    console.error("error executing Claude stop hook: notify finished");
  }
});
```

### Step 2: Configure the Hook
1. Open or create your project's Claude settings file: `.claude/settings.json`
2. Add the hooks configuration. This JSON tells Claude to execute notify-finished.js when Claude is done.
```json
// .claude/settings.json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command":
			\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/notify-finished.js"
          }
        ]
      }
    ]
  }
}
```

The `$CLAUDE_PROJECT_DIR` variable ensures the hook can always find your script, regardless of where you run Claude.

### Step 3: Test the Hook
Ask Claude to write a file or perform another task. 
When Claude finishes its entire response, the `Stop` hook will fire, executing your script and triggering the audio notification.


---
## Notes
- Claude Hooks boil down to executing shell commands at key points in the Ai lifecycle, note that we use JS specifically here instead of TS to avoid needing to adding tsx or another dependency for typescript execution support
- A useful analogy is to think of claude.md and context files as providing the “should do” layer while claude hooks give you the “must do” layer
- Hooks have a 60 second execution limit, while they can be powerful, we strongly recommend keeping them simple and focused to avoid runtime errors


## Further Reading


- [Official Claude Hooks Reference](https://code.claude.com/docs/en/hooks)
- [Introduction to Hooks](https://code.claude.com/docs/en/hooks-guide)
- Steve Kinney's Blog Posts ( [1](https://stevekinney.com/courses/ai-development/claude-code-hook-examples), [2](https://stevekinney.com/courses/ai-development/claude-code-hook-control-flow) ) are a really good read on best practices and practical examples of Claude Hooks
