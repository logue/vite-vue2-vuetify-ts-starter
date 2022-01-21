<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1>
          <v-icon color="grey" size="96px">mdi-alert-circle-outline</v-icon>
        </h1>
        <p class="text-subtitle-1 has-text-grey m-t-30">
          {{ error || 'File not Found.' }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** Error */
export default class Error extends Vue {
  /** Get Error Message */
  get error(): string {
    return this.$store.getters.error;
  }
  /** Mounted */
  mounted() {
    this.$store.dispatch('setLoading', false);
  }
}
</script>
