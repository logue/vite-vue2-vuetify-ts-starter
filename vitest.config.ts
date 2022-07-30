import { defineConfig } from 'vitest/config';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue2';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig({
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: [
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  // plugins
  plugins: [
    {
      name: 'vitest-plugin-beforeall',
      config: () => ({
        test: { setupFiles: ['./vitest/beforeAll.ts'] },
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
    globalSetup: ['./vitest/setup.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['vuetify'],
    },
  },
});
