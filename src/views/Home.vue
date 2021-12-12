<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  /*
  // Props
  @Prop()
  readonly prop: string = 'prop';

  // Model and Data
  private data: string | null = null;

  // Computed
  private get computed(): string {
    return this.$store.getters.computed;
  }

  // Watch
  @Watch('$route', { immediate: true })
  private onRouteChanged(): void {
    // ...
  }

  // created or mounted etc.
  private created(): void {
    // ...
  }

  // Methods
  public methods(): string {
    return 'method';
  }
  */
}
</script>
