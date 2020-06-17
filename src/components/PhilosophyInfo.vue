<template>
  <v-layout row wrap aling-center justify-center>
    <v-flex xs12 sm12 md12 lg12 xl12>
      <v-parallax src="@/assets/bg1.png" height="350">
        <v-layout column align-center justify-center class="white--text">
          <div class="white--text font-weight-light text-center header_text">
            innovattyの理念
          </div>
          <!-- 一旦ベタ書き -->
          <div class="content_text">{{ philospohyText }}</div>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-flex xs12 sm12 md12 lg12 xl12>
      <br />
      <br />
      <div class="text-center header_text">innovattyの活動</div>
      <div class="text-center sub_header_text">
        innovattyでは、以下の活動を通して、社内外のInnovatorにとって面白い･楽しい･新しいが溢れる場を実現します
      </div>
    </v-flex>
    <v-flex xs12 sm12 md6 lg6 xl6 image-center>
      <img
        id="title_image"
        src="@/assets/innovatty_activity_offline.png"
        alt="Vuetify.js"
        width="70%"
        justify-center
      />
    </v-flex>
    <v-flex xs12 sm12 md6 lg6 xl6 image-center>
      <img
        id="title_image"
        src="@/assets/innovatty_activity_online.png"
        alt="Vuetify.js"
        width="70%"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PhilosophyInfo',
  data: () => ({
    philospohyText:
      'Innovativeでありたいと思う人が、本当にやりたいことを見つけられ、\n本当にやりたいことを実現できるよう、ここにInnovatorの輪を広げ、\nInnovationの芽を育み、Innovatorが心から自由に輝ける場を実現する'
  })
})
</script>

<style lang="scss" scoped>
.header_text {
  font-size: 2.2em;
  margin-bottom: 0.5em;
}
.content_text {
  font-size: 1.2em;
  white-space: pre-wrap;
}
.sub_header_text {
  font-size: 1em;
  margin-bottom: 0.5em;
}
.image-center {
  text-align: center;
}
</style>
