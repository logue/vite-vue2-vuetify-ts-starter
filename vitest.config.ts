import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue2';
import { configDefaults, defineConfig } from 'vitest/config';

import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig({
  // plugins
  plugins: [
    // Vue2
    // https://github.com/vitejs/vite-plugin-vue2
    // @ts-expect-error
    vue(),
    // unplugin-vue-components
    // https://github.com/antfu/unplugin-vue-components
    // @ts-expect-error
    Components({
      // generate `components.d.ts` global declarations
      // https://github.com/antfu/unplugin-vue-components#typescript
      dts: true,
      // auto import for directives
      directives: false,
      // resolvers for custom components
      resolvers: [
        // Vuetify
        VuetifyResolver(),
      ],
      // https://github.com/antfu/unplugin-vue-components#types-for-global-registered-components
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
  ],
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
  },
  test: {
    // https://vitest.dev/guide/#configuring-vitest
    environment: 'jsdom',
    globals: true,
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    silent: true,
    // deps: {
    //   inline: [/vuetify/],
    // },
  },
} as any);
