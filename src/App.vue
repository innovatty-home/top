<template>
  <v-app>
    <v-content>
      <TopPage />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import TopPage from './components/TopPage.vue'

export default Vue.extend({
  name: 'App',

  components: {
    TopPage
  },

  data: () => ({
    //
  })
})
</script>
