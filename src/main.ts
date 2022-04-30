/** Vuetify Vite */
import VueCompositionAPI, { createApp } from '@vue/composition-api';
import Vue from 'vue';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

import App from './App.vue';

const app = createApp({
  render: h => h(App),
  router,
  store,
  vuetify,
});

app.mount('#app');
