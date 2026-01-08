// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [react(), mdx()],
});
