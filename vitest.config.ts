import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue2';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig({
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // plugins
  plugins: [
    {
      name: 'vitest-plugin-beforeall',
      config: () => ({
        test: {
          setupFiles: [
            fileURLToPath(new URL('./vitest/beforeAll.ts', import.meta.url)),
          ],
        },
      }),
    } as any,
    // Vue2
    // https://github.com/vitejs/vite-plugin-vue2
    vue(),
    // unplugin-vue-components
    // https://github.com/antfu/unplugin-vue-components
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
  test: {
    // https://vitest.dev/guide/#configuring-vitest
    globals: true,
    globalSetup: [fileURLToPath(new URL('./vitest/setup.ts', import.meta.url))],
    environment: 'jsdom',
    deps: {
      inline: ['vuetify'],
    },
  },
});
