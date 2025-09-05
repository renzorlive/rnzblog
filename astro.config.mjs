import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // Replace with your actual domain
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag', 'plausible']
      }
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});