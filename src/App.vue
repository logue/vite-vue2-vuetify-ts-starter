<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="$store.dispatch('ConfigModule/toggleTheme')">
        <v-icon v-text="'mdi-invert-colors'" />
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

    <v-navigation-drawer v-model="drawer" permanent app>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'About' }">
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

    <v-overlay v-model="loading">
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
/**
 * App
 */
export default class App extends Vue {
  /** window title */
  title: string = import.meta.env.VITE_APP_TITLE;
  /** drawer menu visibility */
  drawer = false;
  /** snackbar visibility */
  snackbar = false;

  /** theme dark mode */
  get '$vuetify.theme.dark'(): boolean {
    return this.$store.getters['ConfigModule/toggleTheme'];
  }
  /** snackbar text */
  get snackbarText(): string {
    return this.$store.getters.message;
  }
  /** get progress percentage */
  get progress(): number {
    return this.$store.getters.progress;
  }
  /**
   * set progress percentage
   * @param value percentage
   */
  set progress(value: number) {
    this.$store.dispatch('setProgress', value);
  }
  /** get loading overlay visibility */
  get loading(): boolean {
    return this.$store.getters.loading;
  }
  /**
   * set loading overlay
   * @param value visibility
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

  /** when route change, hide snackbar */
  @Watch('$route')
  onRouteChanged(): void {
    this.snackbar = false;
  }
  /** when loading */
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

  /** run once. */
  mounted() {
    this.$vuetify.theme.dark = this.$store.getters['ConfigModule/themeDark'];
    document.title = this.title;
  }
}
</script>

<style lang="scss">
@import 'node_modules/vuetify/src/styles/styles';

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0.75rem;
  background-color: rgba(map-get($grey, 'lighten-2'), 1);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0.25rem rgba(map-get($grey, 'base'), 0.1);
  background-color: map-get($grey, 'darken-1');
}
</style>
