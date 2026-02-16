// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en', 'pt'],
      routing: {
          prefixDefaultLocale: true,
          redirectToDefaultLocale: false,
      }
  },

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [icon()],
});