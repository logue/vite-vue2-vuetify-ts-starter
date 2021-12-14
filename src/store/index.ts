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
  setLoading(s, display: boolean) {
    s.loading = display;
  },
  setProgress(s, progress: number) {
    s.progress = progress;
    s.loading = true;
  },
  setMessage(s, message: string) {
    s.message = message;
  },
  setError(s, error: string) {
    s.error = error;
  },
};

/** Actions */
const actions: ActionTree<RootState, RootState> = {
  setLoading(context: ActionContext<RootState, RootState>, display = false) {
    context.commit('setLoading', display);
  },
  setProgress(context: ActionContext<RootState, RootState>, progress = 0) {
    context.commit('setProgress', progress);
  },
  setMessage(context: ActionContext<RootState, RootState>, message = null) {
    context.commit('setMessage', message);
  },
  setError(context: ActionContext<RootState, RootState>, error = null) {
    context.commit('setError', error);
  },
};

/** VuexStore */
const store: StoreOptions<RootState> = {
  strict: import.meta.env.PROD,
  state,
  getters,
  mutations,
  actions,
  modules: {
    ConfigModule,
  },
  plugins: [
    new VuexPersistence({
      key: import.meta.env.VITE_APP_STORAGE_NAMESPACE,
      storage: window.localStorage,
      modules: ['ConfigModule'],
    }).plugin,
    /*
    new VuexPersistence({
      key: 'pipBoyA',
      storage: window.sessionStorage,
      modules: ['MapLocationModule', 'CheckModule'],
    }).plugin,
    createPersistedState({
      key: 'PipBoyA',
      paths: ['CategoryMarkerModule'],
    }),
    */
  ],
};

export default new Vuex.Store<RootState>(store);
