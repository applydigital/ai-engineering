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