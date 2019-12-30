<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md6 lg4 xl3 v-for="eventObj in eventsArr" :key=eventObj.id>    
      <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src=eventObj.イベント画像URL>
          <v-card-title>{{eventObj.イベント名}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{eventObj.イベント開催日時}}</v-card-subtitle>
        <div class="text-end">
          <v-chip
            class="ma-2"
            small
            color="primary"
          >
          {{eventObj.イベント種類}}
          </v-chip>
        </div>        
        <v-card-text class="text--primary">
          <div>{{eventObj.イベント詳細}}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            イベント申込ページへ
          </v-btn>
        </v-card-actions>
      </v-card> 
    </v-flex>   
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class EventInfo extends Vue {


  eventsArr: any = []

  created() {
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbzWU10DBsN6XlYwLsoTIXE5PV-IWFMZ6k5guIKmTAWbFnkBVjg/exec?endPoint=eventInfo'
      )
      .then(response => {
        console.log(response)
        this.eventsArr = response.data
        console.log(this.eventsArr[0].イベント名)
      })
      .catch(reason => {
        console.log(reason)
      })
  }
}

</script>
