<template>
  <v-app light>
    <!-- <v-toolbar color="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>-->
    <v-content>
      <section>
        <v-parallax src="@/assets/hero.jpeg" height="600">
          <v-layout column align-center justify-center class="white--text">
            <img src="@/assets/innovatty_logo.png" alt="Vuetify.js" height="200" />
            <h1 class="white--text mb-2 display-1 text-center">innovators & developers community</h1>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">Cras facilisis mi vitae nunc</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">innovattyの理念</div>
                    </v-card-title>
                    <v-card-text>
                        I n n o v a t i v eでありたいと思う人が、本当にやりたいことを見つけられ、
                        本当にやりたいことを実現できるよう、ここにI n n o v a t o rの輪を広げ、
                        I n n o v a t i o nの芽を育み、I n n o v a t o rが心から自由に輝ける場を実現する
                    </v-card-text>
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
                      innovatty slackに入ったらまずやってみよう！
                      <br>
                      Step1) 自己紹介してみよう(#_自己紹介)
                      <br>
                      自分の興味ごとなどを自己紹介がてらアピールしちゃってください！
                      <br>
                      
                      
                      イベント情報を手に入れよう
                      postide-event-live
                      innovattyの公式企画の告知などはこちらに投下されます！
                      こまめにチェックして、楽しそうなものには積極的に参加してみてください！
                      イベントの実況中継用チャンネル#ide-event-liveなんかも用意されています♪
                      
                      つぶやいてみよう
                      とりあえず雑談
                      で面白い記事を共有したり、ツイッター感覚でつぶやいてみよう！
                      
                      企画してみよう
                      post とりあえず雑談
                      こんなことをしたい！仲間を集めたい！
                      そんなときは企画内容を投稿して仲間を募ってみよう！
                      
                      チャンネルを作ってみよう
                      new-channel-info
                      作ったチャンネルの情報を共有して新チャンネルに人を集めよう！
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">
                        イベント情報
                      </div>
                    </v-card-title>
                    <v-card-text>
                      2020年一発目！！
                      IBM × Panasonic有志によるイノベーション志向勉強会第２弾！
                      ３月開催予定のハッカソンに向けて、各種テクノロジーの勉強会を実施していきます。
                      今回のテーマは・・・IBM Watson × チャットボット。

                      ハンズオン形式でお米を炊くくらい簡単にチャットボット作りを体験していただけます。 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="@/assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              href="/pre-made-themes"
            >Get Started</v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
                  tincidunt ornare. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Nullam
                  in aliquet odio. Aliquam eu est vitae tellus bibendum
                  tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
                  tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>777-867-5309</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Chicago, US</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer color="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-4">
              Made with
              <v-icon class="red--text">mdi-heart</v-icon>by
              <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and
              <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({})
})
</script>
