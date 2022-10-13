/** Vue main script */
import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import vuetify from './plugins/vuetify';
import teleport from '@logue/vue2-helpers/teleport';

import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
});

app.$mount('#app');
