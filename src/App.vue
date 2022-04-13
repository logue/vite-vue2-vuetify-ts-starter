<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-app-bar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="$store.dispatch('ConfigModule/toggleTheme')">
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
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
/** App */
export default class App extends Vue {
  /** Window title */
  title: string = import.meta.env.VITE_APP_TITLE;
  /** Drawer menu visibility */
  drawer: boolean = false;
  /** Snackbar visibility */
  snackbar: boolean = false;

  /** Theme dark mode */
  get '$vuetify.theme.dark'(): boolean {
    return this.$store.getters['ConfigModule/toggleTheme'];
  }
  /** Snackbar text */
  get snackbarText(): string {
    return this.$store.getters.message;
  }
  /** Get progress percentage */
  get progress(): number {
    return this.$store.getters.progress;
  }
  /**
   * Set progress percentage
   *
   * @param value - Percentage
   */
  set progress(value: number) {
    this.$store.dispatch('setProgress', value);
  }
  /** Get loading overlay visibility */
  get loading(): boolean {
    return this.$store.getters.loading;
  }
  /**
   * Set loading overlay
   *
   * @param value - Visibility
   */
  set loading(value: boolean) {
    this.$store.dispatch('setLoading', value);
  }
  /** Error Message */
  get error(): boolean {
    return this.$store.getters.error;
  }
  /** Toggle Theme Dark/Light mode */
  get themeDark(): boolean {
    return this.$store.getters['ConfigModule/themeDark'];
  }

  /** Theme Changer */
  @Watch('themeDark')
  onThemeChanged(): void {
    this.$vuetify.theme.dark = this.$store.getters['ConfigModule/themeDark'];
  }
  /** Modify snackbar text */
  @Watch('$store.getters.message')
  onSnackbarTextChanged(): void {
    this.snackbar = true;
  }

  /** When route change, hide snackbar */
  @Watch('$route')
  onRouteChanged(): void {
    this.snackbar = false;
  }
  /** When loading */
  @Watch('loading')
  onLoading() {
    // console.log('loading:', this.loading);
    // change cursor
    document.body.style.cursor = this.loading ? 'wait' : 'auto';
  }

  /** When error has occurred */
  @Watch('error')
  onError() {
    this.$router.push({ name: 'Error' });
  }

  /** Run once. */
  mounted() {
    this.$vuetify.theme.dark = this.$store.getters['ConfigModule/themeDark'];
    document.title = this.title;
  }
}
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
