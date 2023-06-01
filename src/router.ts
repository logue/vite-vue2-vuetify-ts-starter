/** Vue Router Configure */
import store from '@/store';
import { nextTick } from 'vue';
import type { NavigationGuardNext, Route } from 'vue-router';

import {
  createRouter,
  type RouteLocationNormalized,
  type Router,
  type RouteRecordRaw,
} from '@logue/vue2-helpers/vue-router';

// Vuetify
import goTo from 'vuetify/lib/services/goto';
import type { VuetifyGoToTarget } from 'vuetify/types/services/goto';

import ErrorView from '@/views/ErrorView.vue';
import HomeView from '@/views/HomeView.vue';

/** Router Config */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: async () => await import('@/views/AboutView.vue'),
  },
  {
    path: '*',
    name: 'Error',
    component: ErrorView,
  },
];

const router = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (to: Route, _from: Route, savedPosition) => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: VuetifyGoToTarget = 0;

    if (to.hash.length > 0) {
      scrollTo = to.hash;
    } else if (savedPosition != null) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    // Show Loading
    void store.dispatch('setLoading', true);
    await nextTick();

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  void store.dispatch('setLoading', false);
});

export default router as Router;
