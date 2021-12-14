import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ja from 'vuetify/es5/locale/ja';
import en from 'vuetify/es5/locale/en';

import { VuetifyParsedTheme } from 'vuetify/types/services/theme';

import '@mdi/font/css/materialdesignicons.css';
import '@fontsource/noto-sans-jp';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    current: navigator.language,
    locales: { ja, en },
  },
  theme: {
    options: {
      themeCache: {
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
