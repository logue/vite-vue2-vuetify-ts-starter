<template>
  <v-container fluid class="fill-height d-flex align-center">
    <v-card elevation="0" class="mx-auto transparent">
      <v-card-title class="text-center">
        <v-icon color="grey" size="96px">mdi-alert-circle-outline</v-icon>
      </v-card-title>
      <v-card-subtitle class="text-center m-t-30">
        {{ error || 'File not Found.' }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, type Ref } from 'vue';
import { useStore } from '@logue/vue2-helpers/vuex';

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
