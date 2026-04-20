import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ukexitadvisors.co.uk',
  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
