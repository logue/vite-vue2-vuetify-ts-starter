<template>
  <v-container class="home">
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
    <teleport to="head">
      <meta
        name="keyword"
        content="template, typescript, vue2, vue-property-decorator, vue-class-component, vite, vite-template, composition-api, volar"
      />
      <meta name="description" content="Vite Vue2 TypeScript Demo" />
      <component :is="'script'" type="application/ld+json" v-text="jsonLd" />
    </teleport>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Teleport from 'vue2-teleport';

@Component({ components: { HelloWorld, Teleport } })
/** Home */
export default class Home extends Vue {
  /*
  // Props
  @Prop({ type: String, default: 'prop' })
  readonly prop: string = 'prop';

  // Model and Data
  data: string | null = null;
  */
  jsonLd = JSON.stringify(
    {
      '@schema': 'https://json.schemastore.org/jsonld.json',
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'Vite Vue2 Vuetify TypeScript Startar',
      url: 'https://github.com/logue/vite-vue2-vuetify-ts-starter',
      description: 'Vite Vue2 Vuetify TypeScript Demo Page',
    },
    null,
    2
  );
  /*

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
