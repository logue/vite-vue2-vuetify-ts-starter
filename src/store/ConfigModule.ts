/** Config store */
import type {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

import type { RootState } from '.';

/** Config State */
export interface ConfigState {
  /** Dark Theme mode */
  themeDark: boolean;
  /** Language */
  locale: string;
}

/** Default Configure state value */
const state: ConfigState = {
  themeDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  locale:
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language,
};

/** Getters */
const getters: GetterTree<ConfigState, RootState> = {
  themeDark: (s): boolean => s.themeDark,
  locale: (s): string => s.locale,
};

/** Mutations */
const mutations: MutationTree<ConfigState> = {
  toggleTheme(s) {
    s.themeDark = !s.themeDark;
  },
  setLocale(s, locale: string) {
    s.locale = locale;
  },
};

/** Action */
const actions: ActionTree<ConfigState, RootState> = {
  /**
   * Switch Dark/Light mode.
   *
   * @param context - Vuex Context
   */
  toggleTheme(context: ActionContext<ConfigState, RootState>) {
    context.commit('toggleTheme');
  },
  /**
   * Change locale.
   *
   * @param context - Vuex Context
   * @param locale - Locale code
   */
  setLocale(context: ActionContext<ConfigState, RootState>, locale = 'en') {
    context.commit('setLocale', locale);
  },
};

/** VuexStore */
const ConfigModule: Module<ConfigState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default ConfigModule;
