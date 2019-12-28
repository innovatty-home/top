<template>
  <div class="home">
    <TopPage />
  </div>
</template>

<script>
// @ is an alias to /src
import TopPage from '@/components/TopPage.vue'

export default {
  name: 'home',
  components: {
    TopPage
  }
}
</script>
