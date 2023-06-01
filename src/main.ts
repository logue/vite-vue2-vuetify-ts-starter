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
  // @ts-expect-error
  router,
  store,
  vuetify,
  render: h => h(App),
});

// Run!
vue.$mount('#app');
