<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <h1>
          <v-icon color="grey" size="96px">mdi-alert-circle-outline</v-icon>
        </h1>
        <p class="subtitle-1 has-text-grey m-t-30">
          {{ error || 'File not Found.' }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Error',
})
export default class Error extends Vue {
  get error(): string {
    return this.$store.getters.error;
  }
  mounted() {
    this.$store.dispatch('setLoading', false);
  }
}
</script>
