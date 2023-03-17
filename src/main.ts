/** Vue main script */
import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import teleport from '@logue/vue2-helpers/teleport';

import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
});

// Run!
router
  .isReady()
  .then(() => {
    vue.$mount('#app');
  })
  .catch(e => console.error(e));
