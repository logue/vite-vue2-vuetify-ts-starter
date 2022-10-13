/** Vuex Store */
import { createStore } from '@logue/vue2-helpers/vuex';
import VuexPersistence from 'vuex-persist';
import type {
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  StoreOptions,
} from 'vuex';

// Modules
import ConfigModule from './ConfigModule';

/** Root State Interface */
export interface RootState {
  /* + Loading overlay */
  loading: boolean;
  /** ProgressBar Percentage */
  progress: number | null;
  /** SnackBar Text */
  message: string;
  /** Error Message */
  error: string;
}

/** State Default value */
const state: RootState = {
  loading: false,
  progress: 0,
  message: '',
  error: '',
};

/** Getters */
const getters: GetterTree<RootState, RootState> = {
  loading: (s): boolean => s.loading,
  progress: (s): number | null => s.progress,
  message: (s): string => s.message,
  error: (s): string => s.error,
};

/** Mutations */
const mutations: MutationTree<RootState> = {
  /**
   * Store loading
   *
   * @param s - Vuex state
   * @param display - Payload
   */
  storeLoading(s, display: boolean) {
    s.loading = display;
    if (!display) {
      s.progress = 0;
    }
  },
  /**
   * Store progress
   *
   * @param s - Vuex state
   * @param progress - Payload
   */
  storeProgress(s, progress: number | null) {
    s.progress = progress;
    s.loading = true;
  },
  /**
   * Store snackbar text
   *
   * @param s - Vuex state
   * @param message - Payload
   */
  storeMessage(s, message: string) {
    s.message = message;
  },
  /**
   * Store error message
   *
   * @param s - Vuex state
   * @param error - Payload
   */
  storeError(s, error: string) {
    s.error = error;
  },
};

/** Actions */
const actions: ActionTree<RootState, RootState> = {
  /**
   * Loading overlay visibility
   *
   * @param context - Vuex Context
   * @param display - Visibility
   */
  setLoading(
    context: ActionContext<RootState, RootState>,
    display: boolean = false
  ) {
    context.commit('storeLoading', display);
  },
  /**
   * Loading progress bar value
   *
   * @param context - Vuex Context
   * @param progress - Percentage(0~100), null is intermediate
   */
  setProgress(
    context: ActionContext<RootState, RootState>,
    progress: number | null = 0
  ) {
    context.commit('storeProgress', progress);
  },
  /**
   * Set snackbar message.
   *
   * @param context - Vuex Context
   * @param message - Message text
   */
  setMessage(context: ActionContext<RootState, RootState>, message?: string) {
    context.commit('storeMessage', message);
  },
  /**
   * Set Error message
   *
   * @param context - Vuex Context
   * @param error - Error message etc.
   */
  setError(context: ActionContext<RootState, RootState>, error) {
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
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE || 'vuex',
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

export default createStore(store);
