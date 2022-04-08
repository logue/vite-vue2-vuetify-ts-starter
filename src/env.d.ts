/* eslint-disable */
/// <reference types="vite/client" />

declare module '*.vue' {
  import Vue from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

// Vuetify
declare module 'vuetify/lib/framework' {
  import 'vuetify/types';
  import Vuetify from 'vuetify';
  export default Vuetify;
}

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_WEBSTORAGE_NAMESPACE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
