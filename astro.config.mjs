import { defineConfig } from 'astro/config';

const isGithub = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGithub ? 'https://DC989.github.io' : 'http://localhost:4322',
  base: isGithub ? '/svecicezaauto/' : '/',
});
