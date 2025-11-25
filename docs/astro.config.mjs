// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
      starlight({
          title: 'Apply Ai Engineering Workshop',
          social: [{ icon: 'external', label: 'Website', href: 'https://https://www.applydigital.com/' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      { label: 'Claude Setup - VS Code', slug: 'guides/claude-setup-vs-code' },
                      { label: 'Claude Setup - Terminal', slug: 'guides/claude-setup-terminal' },
                      { label: 'Adding a MCP', slug: 'guides/adding-mcp'},
                      { label: 'Adding a Claude Hook', slug: 'guides/add-a-claude-hook'}

                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
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