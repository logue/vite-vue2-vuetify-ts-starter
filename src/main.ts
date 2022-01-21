/** Vuetify Vite */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = true;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
