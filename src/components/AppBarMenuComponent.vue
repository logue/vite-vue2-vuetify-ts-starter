<template>
  <!-- Toggle Dark mode -->
  <v-btn icon @click="themeDark = !themeDark">
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  watch,
  type Ref,
  type SetupContext,
} from 'vue';
import { useStore } from '@logue/vue2-helpers/vuex';
import { useVuetify } from '@logue/vue2-helpers/vuetify';

export default defineComponent({
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup: (_props, _context: SetupContext) => {
    /** Vuex */
    const store = useStore();
    /** Vuetify */
    const vuetify = useVuetify();

    /** Toggle Theme Dark/Light mode */
    const themeDark: Ref<boolean> = computed({
      get: () => store.getters['ConfigModule/themeDark'],
      set: v => store.dispatch('ConfigModule/setThemeDark', v),
    });

    /** Toggle Dark Mode */
    watch(themeDark, current => (vuetify.theme.dark = current));

    return { themeDark };
  },
});
</script>
