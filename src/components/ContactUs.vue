<template>
  <v-flex xs12 sm4 offset-sm1>
    <v-card flat class="transparent">
      <v-card-title primary-title class="layout justify-center">
        <div class="headline">
          Join innovatty !
          <v-avatar size="32">
            <v-img :src="slackicon" alt="Slack" />
          </v-avatar>
        </div>
      </v-card-title>
      <v-card-text>
        メンバーとの情報交換やイベントの告知はSlackを使用しています。下記URLかQRコードからJoin
        !
      </v-card-text>
    </v-card>
    <v-row>
      <v-img :src="qr" contain :height="150" alt="Slack" />
    </v-row>
    <v-row :justify="'center'">
      <a
        href="http://ibm.biz/innovatty-register"
        style="color: gray;"
        target="_blank'"
      >
        http://ibm.biz/innovatty-register
      </a>
    </v-row>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    slackicon: require('@/assets/icons/slack_icon.png'),
    qr: require('@/assets/icons/joinnovatty_qr.png')
  })
}
</script>
