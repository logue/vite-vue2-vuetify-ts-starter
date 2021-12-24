import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';
import { Position } from 'vue-router/types/router';
import goTo from 'vuetify/lib/services/goto';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ErrorPage from '@/views/Error.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '*',
    name: 'Error',
    component: ErrorPage,
  },
];

const router: VueRouter = new VueRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (
    to: Route,
    from: Route,
    savedPosition: void | Position
  ) => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: number | string = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

/*
// @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
router.beforeEach(
  async (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
    await store.restored;
    next();
  }
);
*/
export default router;
