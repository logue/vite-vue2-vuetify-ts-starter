import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import eslintPlugin from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import envCompatible from 'vite-plugin-env-compatible';
import viteComponents, { VuetifyResolver } from 'vite-plugin-components';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  plugins: [
    // Vue2
    createVuePlugin(),
    // Vuetify
    viteComponents({
      customComponentResolvers: [VuetifyResolver()],
    }),
    // eslint
    eslintPlugin(),
    // Stylelint
    viteStylelint(),
    // fix .env file
    envCompatible(),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: [
          // vuetify variable overrides
          '@import "@/styles/variables.scss"',
          '',
        ].join('\n'),
      },
    },
  },
});
