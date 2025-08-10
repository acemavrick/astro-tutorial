// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://acemavrick.github.io',
  base: '/astro-tutorial',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});