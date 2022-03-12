<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
        <p v-text="msg" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="text-h3 font-weight-bold mb-3">Welcome to Vuetify</h1>
        <p>
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
import { Component, Prop, Vue } from 'vue-property-decorator';

import type MetaInterface from '@/interfaces/MetaInterface';
import Meta from '@/Meta';

@Component
/** HelloWorld Component */
export default class HelloWorld extends Vue {
  /** Meta information */
  meta: MetaInterface = Meta;

  /** Whats next */
  whatsNext: Record<string, string>[] = [
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
  importantLinks: Record<string, string>[] = [
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
  ];

  /** Ecosystem Links */
  ecosystem: Record<string, string>[] = [
    {
      text: 'unplugin-vue-components',
      href: 'https://github.com/antfu/unplugin-vue-components',
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

  /** Message */
  @Prop({ type: String })
  readonly msg!: string;
}
</script>
