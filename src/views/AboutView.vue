<template>
  <v-container class="about">
    <h1>This is an about page</h1>
    <v-btn @click="showSnackbar('Test')">Snackbar test</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@logue/vue2-helpers/vuex';

/** About */
export default defineComponent({
  setup() {
    /** Vuex */
    const store = useStore();

    /** Display snackbar */
    const showSnackbar = (message: string) => {
      store.dispatch('setMessage', message);
    };

    return { showSnackbar };
  },
});
</script>
