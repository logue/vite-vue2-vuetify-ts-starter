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
import { defineComponent, computed, onMounted, type Ref } from 'vue';
import { useStore } from '@logue/vue2-helpers/dist/vuex';

/** Error */
export default defineComponent({
  setup() {
    /** Vuex */
    const store = useStore();
    /** Get Error Message */
    const error: Ref<string> = computed(() => store.getters.error);

    /** Mounted */
    onMounted(() => store.dispatch('setLoading', false));

    return {
      error,
    };
  },
});
</script>
