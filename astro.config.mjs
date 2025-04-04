// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Ensures static site generation (SSG)
  build: {
    // Optimize assets during build
    assets: 'assets',
    inlineStylesheets: 'auto', // Inlines small stylesheets for better performance
  },
  // Enable compression for better performance
  compressHTML: true,
});
