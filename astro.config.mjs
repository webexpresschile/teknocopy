import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://webexpresschile.github.io',
  base: '/teknocopy',
  outDir: 'dist',
});
