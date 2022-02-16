/** Vuetify Vite */
import Vue from 'vue';

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = true;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
