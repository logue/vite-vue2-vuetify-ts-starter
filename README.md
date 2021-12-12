# Vue 2 + Typescript + Vite + Vuetify

This is a [starter project](https://github.com/logue/vite-vue2-ts-starter) that uses [Vuetify](https://vuetifyjs.com/) as the UI framework. Please use scss version 1.32.12 due to a problem on the Vuetify side.

## Description

This template should help get you started developing with Vue 2 and Typescript in Vite.
The template uses Vue 2 `vue-property-decorator`. check out the [script setup docs](https://github.com/kaorun343/vue-property-decorator#readme) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Troubleshooting

When rewriting the import statement, the cache on the vite side may remain old and the changes may not be reflected. In that case, delete the files in `node_modules/.vite`.
