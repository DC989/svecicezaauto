import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGithub = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGithub ? 'https://svecicezaauto.rs' : 'http://localhost:4322',
  base: '/',
  integrations: [sitemap()],
});
