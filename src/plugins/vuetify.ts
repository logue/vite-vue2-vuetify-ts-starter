import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// ロケール
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
    locales: { ja, en },
  },
  theme: {
    options: {
      themeCache: {
        get: (key: VuetifyParsedTheme) =>
          localStorage.getItem(key as unknown as string),
        set: (key: VuetifyParsedTheme, value: string) =>
          localStorage.setItem(key as unknown as string, value),
      },
    },
  },
});
