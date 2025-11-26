// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
      starlight({
          title: 'Ai Engineering Workshop',
          social: [{ icon: 'external', label: 'Website', href: 'https://https://www.applydigital.com/' }],
          sidebar: [
              {
                  label: 'Claude + AWS Bedrock',
                  items: [
                      { label: 'Claude Setup - VS Code', slug: 'claude-bedrock/01-claude-setup-vs-code' },
                      { label: 'Claude Setup - Terminal', slug: 'claude-bedrock/02-claude-setup-terminal' },
                      { label: 'Debug Exercise', slug: 'claude-bedrock/03-debugging-exercise'},
                      { label: 'Adding MCP', slug: 'claude-bedrock/04-adding-mcp'},
                      { label: 'Adding a Claude Hook', slug: 'claude-bedrock/05-add-a-claude-hook'},
                      { label: 'Install OpenSpec', slug: 'claude-bedrock/06-install-openspec'},
                      { label: 'Build a Feature', slug: 'claude-bedrock/07-build-a-feature'}
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