<template>
  <v-layout row wrap class="px-3">
    <v-flex
      xs12
      sm12
      md6
      lg4
      xl3
      v-for="(eventObj, index) in eventsArr"
      :key="index"
      class="mb-4"
    >
      <v-card class="mx-auto" max-width="450" height="450">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="eventObj.イベント画像URL"
        >
          <v-card-title class="subtitle-1 card-titile-background">{{
            eventObj.イベント名
          }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0"
          >{{ eventObj.イベント開催日時 }}@{{
            eventObj.イベント開催場所
          }}</v-card-subtitle
        >
        <div class="text-start">
          <v-chip class="ma-2" small color="primary">
            {{ eventObj.イベント種類 }}
          </v-chip>
          <v-chip
            class="ma-2"
            small
            :color="eventObj.isEnded ? 'default' : 'primary'"
          >
            {{ eventObj.isEnded === true ? 'イベント終了' : '参加者募集中' }}
          </v-chip>
        </div>
        <v-card-text class="text--primary" style="padding-bottom: 0px">
          <div>{{ eventObj.イベント詳細 }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="eventObj.イベントURL"
            color="orange"
            text
            :href="eventObj.イベントURL"
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
const today = new Date()

// イベントが終了しているか否かを返す
const isEndedEvent = (eventDate: String): Boolean => {
  let dateArr: String[] = eventDate.split(/\/|\(/, 3)
  let tmpEventDate = new Date(
    Number(dateArr[0]),
    Number(dateArr[1]) - 1,
    Number(dateArr[2]),
    0,
    0
  )

  if (today > tmpEventDate) {
    return true
  } else {
    return false
  }
}

@Component
export default class EventInfo extends Vue {
  eventsArr: any = []

  created() {
    axios
      .get(appConfig.memberListApi + 'eventList')
      .then(response => {
        // スプレッドシートは下の行に最新データが追加されるので、配列の中身を反転して、最新の情報がindexの上に来るようにする
        this.eventsArr = response.data.reverse()
        this.eventsArr.map(
          (eventObj: any) =>
            (eventObj.isEnded = isEndedEvent(eventObj.イベント開催日時))
        )
      })
      .catch(reason => {
        console.log(reason)
      })
  }
}
</script>

<style lang="scss" scoped>
.card-titile-background {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
