<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <v-container class="text-center">
    <v-row class="my-3">
      <v-col>
        <a href="https://vitejs.dev" target="_blank">
          <v-img
            :src="viteLogo"
            class="mx-auto logo"
            alt="Vite logo"
            contain
            width="200"
            height="200"
          />
        </a>
      </v-col>
      <v-col>
        <a href="https://v2.vuejs.org/" target="_blank">
          <v-img
            :src="vueLogo"
            class="mx-auto logo vue"
            alt="Vue logo"
            contain
            width="200"
            height="200"
          />
        </a>
      </v-col>
      <v-col>
        <a href="https://vuetifyjs.com/" target="_blank">
          <v-img
            :src="vuetifyLogo"
            class="mx-auto logo vuetify"
            alt="Vuetify logo"
            contain
            width="200"
            height="200"
          />
        </a>
      </v-col>

      <v-col cols="12">
        <p v-text="msg" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="text-h3 font-weight-bold mb-3">Welcome to Vuetify</h1>
        <p>
          <a
            href="https://github.com/logue/vite-vue2-vuetify-ts-starter#readme"
            target="_blank"
            rel="noopener"
          >
            vite-vue2-vuetify-ts-starter
          </a>
          Build:
          <time
            :datetime="meta.date"
            v-text="new Date(meta.date).toLocaleString()"
          />
        </p>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />
          please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">
            Discord Community
          </a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="text-h5 font-weight-bold mb-3">Installed Vite Plugins</h2>

        <v-row justify="center">
          <a
            v-for="(plugin, i) in plugins"
            :key="i"
            :href="plugin.href"
            class="subheading mx-3"
            target="_blank"
            v-text="plugin.text"
          />
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="text-h5 font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
            v-text="next.text"
          />
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="text-h5 font-weight-bold mb-3">Important Links</h2>
        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
            v-text="link.text"
          />
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="text-h5 font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
            v-text="eco.text"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Logo
import vueLogo from '@/assets/vue.svg';
import viteLogo from '@/assets/vite.svg';
import vuetifyLogo from '@/assets/vuetify.svg';

import type MetaInterface from '@/interfaces/MetaInterface';
import Meta from '@/Meta';

/** HelloWorld Component */
export default defineComponent({
  props: {
    /** Message */
    msg: { type: String, default: undefined },
  },
  setup() {
    /** Meta information */
    const meta: MetaInterface = Meta;

    /** Plugins */
    const plugins: Record<string, string>[] = [
      {
        text: 'vite-plugin-vue2',
        href: 'https://github.com/vitejs/vite-plugin-vue2#readme',
      },
      {
        text: 'unplugin-vue-components',
        href: 'https://github.com/antfu/unplugin-vue-components',
      },
      {
        text: 'typescript',
        href: 'https://vitejs.dev/guide/features.html#typescript',
      },
      {
        text: 'vite-plugin-checker',
        href: 'https://github.com/fi3ework/vite-plugin-checker',
      },
      {
        text: 'rollup-plugin-visualizer',
        href: 'https://github.com/btd/rollup-plugin-visualizer',
      },
    ];

    /** Whats next */
    const whatsNext: Record<string, string>[] = [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ];

    /** Important Links */
    const importantLinks: Record<string, string>[] = [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ];

    /** Ecosystem Links */
    const ecosystem: Record<string, string>[] = [
      {
        text: 'vue-router',
        href: 'https://v3.router.vuejs.org',
      },
      {
        text: 'vuex',
        href: 'https://v3.vuex.vuejs.org',
      },
      {
        text: 'vue-devtools',
        href: 'https://devtools.vuejs.org/',
      },
      {
        text: 'vitest',
        href: 'https://vitest.dev/',
      },
      {
        text: '@logue/vue2-helpers',
        href: 'https://github.com/logue/vue2-helpers',
      },
    ];

    return {
      meta,
      plugins,
      whatsNext,
      importantLinks,
      ecosystem,
      vueLogo,
      viteLogo,
      vuetifyLogo,
    };
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.vuetify:hover {
  filter: drop-shadow(0 0 2em #2196f3aa);
}
</style>
