<template>
  <v-container class="home">
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({ components: { HelloWorld } })
/** Home */
export default class Home extends Vue {
  /*
  // Props
  @Prop()
  readonly prop: string = 'prop';

  // Model and Data
  data: string | null = null;

  // Computed
  get computed(): string {
    return this.$store.getters.computed;
  }

  // Watch
  @Watch('$route', { immediate: true })
  onRouteChanged(): void {
    // ...
  }

  // created or mounted etc.
  created(): void {
    // ...
  }

  // Methods
  methods(): string {
    return 'method';
  }
  */
}
</script>
