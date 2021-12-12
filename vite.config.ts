import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import eslintPlugin from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Vue2
    createVuePlugin(),
    // eslint
    eslintPlugin(),
    // Stylelint
    viteStylelint(),
    // fix .env file
    envCompatible(),
  ],
});
