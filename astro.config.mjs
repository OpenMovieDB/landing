import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://openmoviedb.com',
  output: 'static',
  integrations: [react(), sitemap()],
  build: {
    assets: 'assets',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});
