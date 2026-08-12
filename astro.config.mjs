// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://isergy.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
