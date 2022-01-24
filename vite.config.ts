import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitejs.dev/config/#base
  base: './',
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
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
  // https://vitejs.dev/config/#server-options
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  plugins: [
    // Vue2
    // https://github.com/underfin/vite-plugin-vue2
    createVuePlugin({
      target: 'esnext',
    }),
    // unplugin-vue-components
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // generate `components.d.ts` global declarations
      dts: true,
      // auto import for directives
      directives: false,
      // resolvers for custom components
      resolvers: [
        // Vuetify
        VuetifyResolver(),
      ],
    }),
    // eslint
    // https://github.com/gxmari007/vite-plugin-eslint
    eslintPlugin({
      fix: true,
      include: '**/*.{js,jsx,ts,tsx,vue,json,yml,yaml,htm,html}',
    }),
    // Stylelint
    // https://github.com/gxmari007/vite-plugin-eslint
    viteStylelint(),
    // compress assets
    // https://github.com/vbenjs/vite-plugin-compression
    viteCompression(),
  ],
  css: {
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
  // https://vitejs.dev/config/#build-options
  build: {
    rollupOptions: {
      output: {
        plugins: [
          /*
          // if you use Code encryption by rollup-plugin-obfuscator
          obfuscator({
            globalOptions: {
              debugProtection: true,
            },
          }),
          */
        ],
      },
    },
    target: 'es2021',
    /*
    // Minify option
    // https://vitejs.dev/config/#build-minify
    minify: 'terser',
    terserOptions: {
      ecma: 2020,
      parse: {},
      compress: { drop_console: true },
      mangle: true, // Note `mangle.properties` is `false` by default.
      module: true,
      output: { comments: true, beautify: false },
    },
    */
  },
});
