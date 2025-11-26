# AI Engineering Workshop - Documentation Site

This is the documentation site for the AI Engineering Workshop, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build/).

## About

This workshop provides hands-on training for working with Claude AI and AWS Bedrock. The documentation covers:

- **Claude Setup**: Getting started with Claude in VS Code and Terminal
- **Debugging with Claude**: Practical debugging exercises
- **Model Context Protocol (MCP)**: Adding and configuring MCP servers
- **Claude Hooks**: Creating custom hooks to extend Claude's functionality
- **OpenSpec Integration**: Installing and using OpenSpec with Claude
- **Feature Development**: Building features using AI-assisted development

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or a package install of your choice

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
docs/
├── public/              # Static assets (images, favicons, etc.)
├── src/
│   ├── assets/         # Optimized images and assets
│   ├── components/     # Custom Astro components
│   │   └── starlight/  # Starlight component overrides
│   ├── content/
│   │   └── docs/       # Documentation content (.md, .mdx)
│   ├── styles/         # Global styles
│   └── content.config.ts
├── astro.config.mjs    # Astro and Starlight configuration
└── package.json
```

## 🧞 Commands

All commands are run from the `docs/` directory:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Installs dependencies                         |
| `npm run dev`     | Starts local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`            |
| `npm run preview` | Preview your build locally before deploying   |
| `npm run lint`    | Run Biome linter and auto-fix issues          |
| `npm run astro`   | Run Astro CLI commands                        |

## 📝 Adding Content

Documentation files are written in Markdown or MDX and stored in [src/content/docs/](src/content/docs/).

To add a new page:

1. Create a new `.md` or `.mdx` file in `src/content/docs/`
2. Add frontmatter with at least a `title`:
   ```md
   ---
   title: Your Page Title
   description: Optional description
   ---
   ```
3. Update the sidebar configuration in [astro.config.mjs](astro.config.mjs) if needed

---

Built with [Starlight](https://starlight.astro.build) by Astro
