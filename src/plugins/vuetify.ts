import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { VuetifyParsedTheme } from 'vuetify/types/services/theme';
import { loadFonts } from './webfontloader';
/*
// Locale
import i18n from './i18n';
import ja from 'vuetify/es5/locale/ja';
import en from 'vuetify/es5/locale/en';
*/

import '@mdi/font/css/materialdesignicons.css';
loadFonts();

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  /*
  lang: {
    current: navigator.language,
    locales: { ja, en },
    t: (key, ...params) => i18n.t(key, params) as string,
  },
*/
  theme: {
    options: {
      themeCache: {
        // https://vuetifyjs.com/features/theme/#section-30ad30e330c330b730e5
        get: (key: VuetifyParsedTheme) => {
          return localStorage.getItem(JSON.stringify(key));
        },
        set: (key: VuetifyParsedTheme, value: string) => {
          localStorage.setItem(JSON.stringify(key), value);
        },
      },
      customProperties: true,
    },
  },
});
