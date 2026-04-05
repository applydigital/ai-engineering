---
title: How to Connect Claude Code for VS Code Extension to AWS Bedrock
description: This guide walks you through how to configure the official Anthropic Claude Code VS Code extension to use your secure AWS Bedrock endpoint.
---
> ℹ️ The Claude VS code extension is still a little immature and lacks full support for all of Claude's features (e.g. MCP). This guide is here for your reference but we recommend interfacing with Claude code via the terminal.

This guide walks you through how to configure the official Anthropic Claude Code VS Code extension to use your secure AWS Bedrock endpoint.

## Prerequisites

- VS Code installed
- An AWS account
- Access to Claude models (e.g., `Claude 4.5 Sonnet` ) enabled in your AWS Bedrock console.
- **AWS credentials configured locally**. The simplest method is to install the AWS CLI and run `aws configure` but check with your IT/infrastructure team. Claude will automatically find these credentials once configured to use Bedrock.

---

### Step 1: Install the Claude Code for VS code Extension
1. Open VS Code
2. Use this link [Claude Code for VS Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) or search for the extension via the VS marketplace browser.
3. Install the extension published by Anthropic


### Step 2: Bypass the Default Login
1. After installation, the extension will open a tab asking you to sign in to Anthropic.
2. Close this tab. **Do not sign in.** We will proceed to configure the extension manually.

### Step 3: Add the Bedrock Configuration to VS Code settings.json
> ⚠️ Please validate that your AWS credentials are configured before proceeding ⚠️

1. Open the Command Palette (Ctrl+Shift+P)
2. Select "Preferences: Open User Settings (JSON)"
3. Add the following JSON block to your `settings.json` file:
   - Note: You might need to modify the `region` and `model` values to match your AWS Bedrock setup.


```json
// VS Code settings.json
{
    // ... your other settings

 "claudeCode.environmentVariables": [
    {
      "name": "CLAUDE_CODE_USE_BEDROCK",
      "value": "1"
    },
    {
      "name": "AWS_REGION",
      "value": "us-west-2"
    }
  ]
}

```

### Step 5: Verify the Bedrock Connection
1. Reload or restart VS Code to apply the new settings.
2. Open the Claude Code panel from the Activity Bar (it's usually under the "Anthropic" icon).
3. The chat window should open without asking for an API key or login.
4. In the chat input, type "Hello" and press Enter.

If you get a response, you are successfully connected. The extension is now using your local AWS credentials to send all requests securely to your Bedrock endpoint.



---
## Further Reading

- [Official Claude Documentation](https://code.claude.com/docs/en/vs-code#using-third-party-providers)
- A detailed [Medium post](https://aws.plainenglish.io/configuring-claude-code-extension-with-aws-bedrock-and-how-you-can-avoid-my-mistakes-090dbed5215b) with additional debugging tips and strategies
