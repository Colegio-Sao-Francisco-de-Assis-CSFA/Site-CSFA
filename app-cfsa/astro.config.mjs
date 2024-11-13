// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  output: 'server',

  adapter: netlify({
    edgeMiddleware: true
  }),

  integrations: [icon(), tailwind(), react()],
});