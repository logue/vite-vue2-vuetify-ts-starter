import { defineConfig, type UserConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import checker from 'vite-plugin-checker';
import fs from 'node:fs';
import vue from '@vitejs/plugin-vue2';

/**
 * Vite Configure
 *
 * @see {@link https://vitejs.dev/config/}
 */
export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  const config: UserConfig = {
    // // https://vitejs.dev/config/shared-options.html#base
    base: './',
    // Resolver
    resolve: {
      // https://vitejs.dev/config/shared-options.html#resolve-alias
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // https://vitejs.dev/config/server-options.html
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
    plugins: [
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
      // vite-plugin-checker
      // https://github.com/fi3ework/vite-plugin-checker
      checker({
        typescript: true,
        vueTsc: true,
        eslint: {
          lintCommand: 'eslint', // for example, lint .ts & .tsx
        },
      }),
      // compress assets
      // https://github.com/vbenjs/vite-plugin-compression
      // viteCompression(),
    ],
    css: {
      postcss: {
        plugins: [
          // Fix vite build includes @charset problem
          // https://github.com/vitejs/vite/issues/5655
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: atRule => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
      // https://vitejs.dev/config/#css-preprocessoroptions
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
    // Build Options
    // https://vitejs.dev/config/build-options.html
    build: {
      // Build Target
      // https://vitejs.dev/config/build-options.html#build-target
      target: 'es2022',
      // Rollup Options
      // https://vitejs.dev/config/build-options.html#build-rollupoptions
      rollupOptions: {
        // @ts-ignore
        output: {
          manualChunks: {
            // Split external library from transpiled code.
            vue: [
              'vue',
              'vue-router',
              'vue-router/composables',
              'vuex',
              'vuex-persist',
              'deepmerge',
              '@logue/vue2-helpers',
              '@logue/vue2-helpers/teleport',
              '@logue/vue2-helpers/vue-router',
              '@logue/vue2-helpers/vuex',
            ],
            vuetify: [
              'vuetify/lib',
              '@logue/vue2-helpers/vuetify',
              'webfontloader',
            ],
            materialdesignicons: ['@mdi/font/css/materialdesignicons.css'],
          },
          plugins: [
            mode === 'analyze'
              ? // rollup-plugin-visualizer
                // https://github.com/btd/rollup-plugin-visualizer
                visualizer({
                  open: true,
                  filename: 'dist/stats.html',
                  gzipSize: true,
                  brotliSize: true,
                })
              : undefined,
            /*
            // if you use Code encryption by rollup-plugin-obfuscator
            // https://github.com/getkey/rollup-plugin-obfuscator
            obfuscator({
              globalOptions: {
                debugProtection: true,
              },
            }),
            */
          ].filter(item => item !== undefined),
        },
      },
      // Minify option
      // https://vitejs.dev/config/build-options.html#build-minify
      minify: 'esbuild',
    },
    esbuild: {
      // Drop console when production build.
      drop: command === 'serve' ? [] : ['console'],
    },
  };

  // Write meta data.
  fs.writeFileSync(
    fileURLToPath(new URL('./src/Meta.ts', import.meta.url)),
    `import type MetaInterface from '@/interfaces/MetaInterface';

// This file is auto-generated by the build system.
const meta: MetaInterface = {
  version: '${require('./package.json').version}',
  date: '${new Date().toISOString()}',
};
export default meta;
`
  );

  return config;
});
