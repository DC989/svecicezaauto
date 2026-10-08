import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://svecicezaauto.rs',
  base: '/',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/search') && !page.includes('/404')
    })
  ],
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
