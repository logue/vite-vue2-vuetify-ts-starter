import type {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

/** Config store */
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
  locale: window.navigator.languages[0] ?? window.navigator.language,
};

/** Getters */
const getters: GetterTree<ConfigState, RootState> = {
  themeDark: (s: ConfigState): boolean => s.themeDark,
  locale: (s: ConfigState): string => s.locale,
};

/** Mutations */
const mutations: MutationTree<ConfigState> = {
  storeThemeDark(s: ConfigState) {
    s.themeDark = !s.themeDark;
  },
  storeLocale(s: ConfigState, locale: string) {
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
  setThemeDark(context: ActionContext<ConfigState, RootState>, mode: boolean) {
    context.commit('storeThemeDark', mode);
  },
  /**
   * Change locale.
   *
   * @param context - Vuex Context
   * @param locale - Locale code
   */
  setLocale(context: ActionContext<ConfigState, RootState>, locale: string) {
    context.commit('storeLocale', locale);
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
