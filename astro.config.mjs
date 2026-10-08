import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://svecicezaauto.rs',
  base: '/',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
