import Vue from 'vue';
import Vuex, {
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  StoreOptions,
} from 'vuex';
import VuexPersistence from 'vuex-persist';
// import createPersistedState from 'vuex-persist-indexeddb';

import ConfigModule from './ConfigModule';

Vue.use(Vuex);

/** Root State Interface */
export interface RootState {
  // Loading overlay
  loading: boolean;
  // ProgressBar Percentage
  progress: number;
  // SnackBar Text
  message: string | null;
  // Error Message
  error: string | null;
}

/** State Default value */
const state: RootState = {
  loading: false,
  progress: 0,
  message: null,
  error: null,
};

/** Getters */
const getters: GetterTree<RootState, RootState> = {
  loading: (s): boolean => s.loading,
  progress: (s): number => s.progress,
  message: (s): string | null => s.message,
  error: (s): string | null => s.error,
};

/** Mutations */
const mutations: MutationTree<RootState> = {
  /**
   * Store loading
   * @param s Vuex state
   * @param display payload
   */
  storeLoading(s, display: boolean) {
    s.loading = display;
  },
  /**
   * store progress
   * @param s Vuex state
   * @param progres spayload
   */
  storeProgress(s, progress: number) {
    s.progress = progress;
    s.loading = true;
  },
  /**
   * Store snackbar text
   * @param s Vuex state
   * @param message payload
   */
  storeMessage(s, message: string) {
    s.message = message;
  },
  /**
   * Store error message
   * @param s Vuex state
   * @param error payload
   */
  storeError(s, error: string) {
    s.error = error;
  },
};

/** Actions */
const actions: ActionTree<RootState, RootState> = {
  /**
   * Loading overlay visibility
   * @param context Vuex Context
   * @param display visibility
   */
  setLoading(
    context: ActionContext<RootState, RootState>,
    display: boolean = false
  ) {
    context.commit('storetLoading', display);
  },
  /**
   * Loading progress bar value
   * @param context Vuex Context
   * @param progress percentage(0~100)
   */
  setProgress(
    context: ActionContext<RootState, RootState>,
    progress: number = 0
  ) {
    context.commit('storeProgress', progress);
  },
  /**
   * Set snackbar message.
   * @param context Vuex Context
   * @param message message text
   */
  setMessage(
    context: ActionContext<RootState, RootState>,
    message: string = null
  ) {
    context.commit('storeMessage', message);
  },
  /**
   * Set Error message
   * @param context Vuex Context
   * @param error error message etc.
   */
  setError(context: ActionContext<RootState, RootState>, error = null) {
    context.commit('storeError', error);
  },
};

/** VuexStore */
const store: StoreOptions<RootState> = {
  // https://vuex.vuejs.org/guide/strict.html#development-vs-production
  strict: import.meta.env.DEV,
  state,
  getters,
  mutations,
  actions,
  modules: {
    ConfigModule,
  },
  plugins: [
    new VuexPersistence({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE,
      storage: window.localStorage,
      modules: ['ConfigModule'],
    }).plugin,
    /*
    // store as session storage
    new VuexPersistence({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE,
      storage: window.sessionStorage,
      modules: ['SomeModule'],
    }).plugin,
    // store as Indexed DB (using vuex-persist-indexeddb)
    createPersistedState({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE,
      paths: ['SomeLargeModule'],
    }),
    */
  ],
};

export default new Vuex.Store<RootState>(store);
