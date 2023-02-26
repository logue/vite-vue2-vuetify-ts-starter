/* eslint-disable spaced-comment */
/// <reference types="vite/client" />
import {
  ComputedOptions,
  ComponentOptionsMixin,
  MethodOptions,
} from 'vue/types/v3-component-options';
import { ExtractPropTypes, ExtractDefaultPropTypes } from 'vue';
import { EmitsOptions } from 'vue/types/v3-setup-context';
import type { DefineComponent } from 'vue';
import type { Wrapper } from '@vue/test-utils';

/** Vue */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

/** VueRouter fix */
declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];
  }
}

/** Vuetify */
declare module 'vuetify/lib/framework' {
  import Vuetify from 'vuetify';
  export default Vuetify;
}

/**
 * Augment vue-test-utils to add support for Vue 2.7.
 *
 * @see {@link https://github.com/vuejs/vue-test-utils/issues/2026#issuecomment-1429963862}
 */
declare module '@vue/test-utils' {
  /** Component declared with defineComponent */
  export function mount<
    PropsOrPropOptions = {},
    RawBindings = {},
    D = {},
    C extends ComputedOptions = ComputedOptions,
    M extends MethodOptions = MethodOptions,
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
    E extends EmitsOptions = Record<string, any>,
    EE extends string = string,
    Props = Readonly<ExtractPropTypes<PropsOrPropOptions>>,
    Defaults extends {} = ExtractDefaultPropTypes<PropsOrPropOptions>
  >(
    component: DefineComponent<
      PropsOrPropOptions,
      RawBindings,
      D,
      C,
      M,
      Mixin,
      Extends,
      E,
      EE,
      Props,
      Defaults
    >,
    options?: any
  ): Wrapper<
    InstanceType<
      DefineComponent<
        PropsOrPropOptions,
        RawBindings,
        D,
        C,
        M,
        Mixin,
        Extends,
        EmitsOptions,
        EE,
        Props,
        Defaults
      >
    >
  >;

  /** Component declared with defineComponent */
  export function shallowMount<
    PropsOrPropOptions = {},
    RawBindings = {},
    D = {},
    C extends ComputedOptions = ComputedOptions,
    M extends MethodOptions = MethodOptions,
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
    E extends EmitsOptions = Record<string, any>,
    EE extends string = string,
    Props = Readonly<ExtractPropTypes<PropsOrPropOptions>>,
    Defaults extends {} = ExtractDefaultPropTypes<PropsOrPropOptions>
  >(
    component: DefineComponent<
      PropsOrPropOptions,
      RawBindings,
      D,
      C,
      M,
      Mixin,
      Extends,
      E,
      EE,
      Props,
      Defaults
    >,
    options?: any
  ): Wrapper<
    InstanceType<
      DefineComponent<
        PropsOrPropOptions,
        RawBindings,
        D,
        C,
        M,
        Mixin,
        Extends,
        EmitsOptions,
        EE,
        Props,
        Defaults
      >
    >
  >;
}

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_WEBSTORAGE_NAMESPACE: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
