<template>
  <div>
    <div v-for="text in this.textList" :key="text.id">
      <HowToWalkBox :text="text" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Prop, Vue } from 'vue-property-decorator'
import HowToWalkBox from '@/components/HowToWalkBox.vue'
const appConfig = require('@/constants/appConfig').default

@Component({
  components: { HowToWalkBox }
})
export default class HowToWalk extends Vue {
  textList: any = []

  created() {
    axios
      .get(appConfig.memberListApi + 'howToWalk')
      .then(response => {
        this.textList = response.data
      })
      .catch(reason => {
        console.log(reason)
      })
  }
}
</script>
