<template>
  <v-layout row wrap class="px-3">
    <v-flex xs12 sm12 md6 lg4 xl3 v-for="(eventObj,index) in eventsArr" :key=index class="mb-4">    
      <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src=eventObj.イベント画像URL>
          <v-card-title class="subtitle-1 card-titile-background">{{eventObj.イベント名}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{eventObj.イベント開催日時}}@{{eventObj.イベント開催場所}}</v-card-subtitle>
        <div class="text-start">
          <v-chip class="ma-2" small color="primary">
          {{eventObj.イベント種類}}
          </v-chip>
          <v-chip class="ma-2" small :color="(eventObj.ステータス === 'イベント終了')?'default':'primary'">
          {{eventObj.ステータス}}
          </v-chip>          
        </div>        
        <v-card-text class="text--primary">
          <div>{{eventObj.イベント詳細}}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="orange"
            text
            :href=eventObj.イベントURL
            target="_blank'"
          >
            イベント開催ページへ
          </v-btn>
        </v-card-actions>
      </v-card> 
    </v-flex>   
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
const appConfig = require('@/constants/appConfig').default

@Component
export default class EventInfo extends Vue {


  eventsArr: any = []

  created() {
    axios
      .get(appConfig.memberListApi + 'eventList')
      .then(response => {
        // スプレッドシートは下の行に最新データが追加されるので、配列の中身を反転して、最新の情報がindexの上に来るようにする
        this.eventsArr = response.data.reverse()
      })
      .catch(reason => {
        console.log(reason)
      })
  }
}

</script>

<style lang="scss" scoped>
.card-titile-background{
  background-color: rgba(0, 0, 0, 0.6)
}
</style>