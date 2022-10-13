/** Vue Router Configure */
import { createRouter } from '@logue/vue2-helpers/vue-router';
import { nextTick } from 'vue';
import store from '@/store';
import type VueRouter from 'vue-router';
import type { NavigationGuardNext, Route } from 'vue-router';
import type { RouteRecordRaw } from '@logue/vue2-helpers/vue-router';
import type { Position, PositionResult } from 'vue-router/types/router';

// Vuetify
import goTo from 'vuetify/lib/services/goto';
import type { VuetifyGoToTarget } from 'vuetify/types/services/goto';

/** Router Config */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/ErrorPage.vue'),
  },
];

const router: VueRouter = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (
    to: Route,
    _from: Route,
    savedPosition: void | Position
  ): Promise<PositionResult> => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: VuetifyGoToTarget = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

router.beforeEach(
  async (_to: Route, _from: Route, next: NavigationGuardNext<Vue>) => {
    // Show Loading
    store.dispatch('setLoading', true);
    await nextTick();

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  store.dispatch('setLoading', false);
});

export default router;
