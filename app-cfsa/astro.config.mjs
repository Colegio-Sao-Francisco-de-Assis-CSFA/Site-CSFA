// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

import icon from 'astro-icon';

export default defineConfig({
  output: 'server',

  adapter: netlify({
    edgeMiddleware: true
  }),

  integrations: [icon()],
});