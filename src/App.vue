<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer />
      <v-btn icon @click="themeDark = !themeDark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-progress-linear
        :active="loading"
        :indeterminate="progress === null"
        :value="progress"
        absolute
        bottom
        color="primary accent-3"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list link>
        <v-list-item :to="{ name: 'Home' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'About' }">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>

    <v-overlay v-show="loading" z-index="999">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <v-snackbar
      v-model="snackbar"
      app
      timeout="5000"
      transition="scroll-y-transition"
    >
      {{ snackbarText }}
      <template #action="{ attrs }">
        <v-btn color="primary" icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <teleport to="head">
      <meta
        name="theme-color"
        :content="vuetify.theme.currentTheme.primary?.toString()"
      />
      <link
        rel="icon"
        :href="require('@/assets/vuetify.svg')"
        type="image/svg+xml"
      />
    </teleport>
  </v-app>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type SetupContext,
} from 'vue';
import { useRoute, useRouter } from 'vue-router/composables';
import { useStore } from '@logue/vue2-helpers/vuex';
import { useVuetify } from '@logue/vue2-helpers/vuetify';

/** App */
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
    /** Router */
    const router = useRouter();
    /** Router */
    const route = useRoute();
    /** Vuetify */
    const vuetify = useVuetify();

    /** Title */
    const title: Ref<string> = ref(
      import.meta.env.VITE_APP_TITLE || 'Vite Vuetify Application'
    );
    /** Drawer menu visibility */
    const drawer: Ref<boolean> = ref(false);
    /** Snackbar visibility */
    const snackbar: Ref<boolean> = ref(false);
    /** current page name */
    const name: Ref<string | null | undefined> = ref(route?.name);

    /** Snackbar text */
    const snackbarText: Ref<string> = computed({
      get: () => store.getters.message,
      set: v => store.dispatch('setMessage', v),
    });

    /** progress percentage */
    const progress: Ref<number> = computed({
      get: () => store.getters.progress,
      set: v => store.dispatch('setProgress', v),
    });

    /** loading overlay visibility */
    const loading: Ref<boolean> = computed({
      get: () => store.getters.loading,
      set: v => store.dispatch('setLoading', v),
    });

    /** Toggle Theme Dark/Light mode */
    const themeDark: Ref<boolean> = computed({
      get: () => store.getters['ConfigModule/themeDark'],
      set: v => store.dispatch('ConfigModule/setThemeDark', v),
    });

    /** Error Message */
    const error: ComputedRef<boolean> = computed(() => store.getters.error);

    /** Modify snackbar text */
    watch(snackbarText, () => (snackbar.value = true));

    /** When route change, hide snackbar */
    watch(name, () => (snackbar.value = false));

    /** When loading */
    watch(
      loading,
      isloading => (document.body.style.cursor = isloading ? 'wait' : 'auto')
    );

    /** When error has occurred */
    watch(error, () => router.push({ name: 'Error' }));

    /** Toggle Dark Mode */
    watch(themeDark, current => (vuetify.theme.dark = current));

    /** Reset SnackbarText when snackbar closed. */
    watch(snackbar, visibility => {
      if (!visibility) {
        snackbarText.value = '';
      }
    });

    /** Run once. */
    onMounted(() => {
      document.title = title.value;
      loading.value = false;
    });

    return {
      vuetify,
      title,
      drawer,
      snackbar,
      snackbarText,
      progress,
      loading,
      error,
      themeDark,
    };
  },
});
</script>

<style lang="scss">
@import 'node_modules/vuetify/src/styles/styles';

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map-get($grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get($grey, 'base');
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

/*
// Color scheme of scroll bar according to the theme
.theme-- {
  &light {
    scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'lighten-2');
    }
  }
  &dark {
    scrollbar-color: map-get($grey, 'darken-2') map-get($grey, 'base');

    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'darken-2');
    }
  }
}
*/
</style>
