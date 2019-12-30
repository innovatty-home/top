<template>
  <v-layout row wrap>
    <v-flex xs12 md4>
      <v-card flat class="transparent">
        <v-card-text class="text-center">
          <v-icon x-large class="blue--text text--lighten-2">mdi-sprout</v-icon>
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline text-center">innovattyの理念</div>
        </v-card-title>
        <v-card-text>
          innovativeでありたいと思う人が「やりたい」を「やった」に変えるコミュニティ"innovatty"。
          その理念や活動についてご紹介します。
        </v-card-text>
        <DetailInfoModal :contentId="1" />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card flat class="transparent">
        <v-card-text class="text-center">
          <v-icon x-large class="blue--text text--lighten-2">mdi-walk</v-icon>
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline">innovattyの歩き方</div>
        </v-card-title>
        <v-card-text>
          innovattyに入ったらなにをすればよいの？
          そんなときはこれを見てinnovattyの歩き方を学ぼう！
          素敵な出会いがあなたを待っていることでしょう。
        </v-card-text>
        <DetailInfoModal :contentId="2" />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card flat class="transparent">
        <v-card-text class="text-center">
          <v-icon x-large class="blue--text text--lighten-2"
            >mdi-calendar-range</v-icon
          >
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline text-center">イベント情報</div>
        </v-card-title>
        <v-card-text>
          最新のイベントや活動の情報、過去の活動実績はここでご覧いただけます。
          あなたの興味を引くイベントが開催されるかもしれないので要チェックです。
        </v-card-text>
        <DetailInfoModal :contentId="3" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import DetailInfoModal from '@/components/DetailInfoModal.vue'

export default Vue.extend({
  name: 'TopMenue',
  components: { DetailInfoModal },

  data: () => ({})
})
</script>
