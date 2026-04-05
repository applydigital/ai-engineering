// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://applydigital.github.io',
  base: '/ai-engineering',
  integrations: [
      starlight({
          title: 'Ai Engineering Workshop',
          favicon: '/favicon.ico',
          logo: {
            light: './src/assets/light-logo.png',
            dark: './src/assets/dark-logo.png',
          },
          social: [{ icon: 'github', label: 'Github', href: 'https://github.com/applydigital/ai-engineering' }],
          components: {
              Head: './src/components/starlight/Head.astro',
              Footer: './src/components/starlight/Footer.astro',
          },
          sidebar: [
              {
                  label: 'BMAD',
                  items: [
                      { label: 'Index', slug: 'bmad/00-index' },
                      { label: 'Level Zero Install - Technical', slug: 'bmad/00a-level-zero-install-technical' },
                      { label: 'Level Zero Install - Non-Technical', slug: 'bmad/00b-level-zero-install-nontechnical' },
                      { label: 'GitHub Team Collaboration', slug: 'bmad/00c-github-team-collaboration' },
                      { label: 'Use Case and Project Context', slug: 'bmad/01-use-case-and-project-context' },
                      { label: 'Discovery - Customer Experience Strategy', slug: 'bmad/02-discovery-customer-experience-strategy' },
                      { label: 'Product Brief', slug: 'bmad/03-product-brief' },
                      { label: 'Project Plan & Roadmap', slug: 'bmad/04-project-plan-roadmap' },
                      { label: 'High Level User Story Map', slug: 'bmad/05-high-level-user-story-map' },
                      { label: 'Information Architecture & Component Model', slug: 'bmad/06-information-architecture-component-model' },
                      { label: 'PRD', slug: 'bmad/07-prd' },
                      { label: 'Technical Architecture', slug: 'bmad/08-technical-architecture' },
                      { label: 'Sprint Plan & Transition', slug: 'bmad/09-sprint-plan-transition' },
                      { label: 'Dev Stories, Prototype & Tests', slug: 'bmad/10-dev-stories-prototype-tests' },
                      { label: 'Status Report', slug: 'bmad/11-status-report' },
                  ],
              },
              {
                  label: 'Claude + AWS Bedrock',
                  items: [
                      { label: 'Claude Setup - Terminal', slug: 'claude-bedrock/01-claude-setup-terminal' },
                      { label: 'Debug Exercise', slug: 'claude-bedrock/03-debugging-exercise'},
                      { label: 'Adding MCP', slug: 'claude-bedrock/04-adding-mcp'},
                      { label: 'Adding a Claude Hook', slug: 'claude-bedrock/05-add-a-claude-hook'},
                      { label: 'Install OpenSpec', slug: 'claude-bedrock/06-install-openspec'},
                      { label: 'Build a Feature', slug: 'claude-bedrock/07-build-a-feature'}
                  ],
              },
              {
                  label: 'Reference',
                  items: [
                      { label: 'Claude Setup - VS Code', slug: 'reference/claude-setup-vs-code' },
                  ],
              },
          ],
		  customCss: [
            './src/styles/global.css',
        ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});