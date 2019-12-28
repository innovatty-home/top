<template>
  <v-layout row wrap>
    <v-flex xs12 md4>
      <v-card flat class="transparent">
        <v-card-text class="text-center">
          <v-icon x-large class="blue--text text--lighten-2"
            >mdi-palette</v-icon
          >
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline text-center">innovattyの理念</div>
        </v-card-title>
        <v-card-text>
          <!-- I n n o v a t i v
          eでありたいと思う人が、本当にやりたいことを見つけられ、
          本当にやりたいことを実現できるよう、ここにI n n o v a t o
          rの輪を広げ、 I n n o v a t i o nの芽を育み、I n n o v a t o
          rが心から自由に輝ける場を実現する-->
          innovativeでありたいと思う人が「やりたい」を「やった」に変えるコミュニティ"innovatty"。
          その理念や活動についてご紹介します。
        </v-card-text>
        <DetailInfoModal :contentId="1" />
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card flat class="transparent">
        <v-card-text class="text-center">
          <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline">innovattyの歩き方</div>
        </v-card-title>
        <v-card-text>
          <!-- innovatty slackに入ったらまずやってみよう！
          <br />Step1) 自己紹介してみよう(#_自己紹介)
          <br />自分の興味ごとなどを自己紹介がてらアピールしちゃってください！
          <br />Step2) イベント情報を手に入れよう(#_post, #ide-event-live)
          <br />innovattyの公式企画の告知などはこちらに投下されます！
          こまめにチェックして、楽しそうなものには積極的に参加してみてください！
          <br />Step3) つぶやいてみよう&企画してみよう(#とりあえず雑談)
          <br />面白い記事を共有したり、ツイッター感覚でつぶやいてみよう！-->
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
          <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline text-center">イベント情報</div>
        </v-card-title>
        <v-card-text>
          <!-- 2020年一発目！！ IBM ×
          Panasonic有志によるイノベーション志向勉強会第２弾！
          ３月開催予定のハッカソンに向けて、各種テクノロジーの勉強会を実施していきます。
          今回のテーマは・・・IBM Watson × チャットボット。
          ハンズオン形式でお米を炊くくらい簡単にチャットボット作りを体験していただけます。-->
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
