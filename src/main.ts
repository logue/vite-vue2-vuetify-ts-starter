/** Vue main script */
import store from '@/store';
import Vue from 'vue';

import teleport from '@logue/vue2-helpers/teleport';

import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

const vue = new Vue({
  router,
  store,
  vuetify,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  render: h => h(App),
});

// Run!
vue.$mount('#app');
