<template>
  <v-app light>
    <!-- <v-toolbar color="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>-->
    <v-content>
      <section>
        <v-parallax src="@/assets/hero.jpeg" height="600">
          <v-layout column align-center justify-center class="white--text">
            <img
              src="@/assets/innovatty_logo.png"
              alt="Vuetify.js"
              height="200"
            />
            <h1 class="white--text mb-2 display-1 text-center">
              innovators & developers community
            </h1>
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
              <TopMenu />
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="@/assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">
              Web development has never been easier
            </div>
            <em>Kick-start your application today</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
              href="/pre-made-themes"
              >Get Started</v-btn
            >
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <AboutUs />
            <ContactUs />
          </v-layout>
        </v-container>
      </section>

      <v-footer color="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-4">
              Made with
              <v-icon class="red--text">mdi-heart</v-icon>by
              <a
                class="white--text"
                href="https://vuetifyjs.com"
                target="_blank"
                >Vuetify</a
              >
              and
              <a class="white--text" href="https://github.com/vwxyzjn"
                >Costa Huang</a
              >
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutUs from '@/components/AboutUs.vue'
import TopMenu from '@/components/TopMenu.vue'
import ContactUs from '@/components/ContactUs.vue'

export default Vue.extend({
  name: 'HelloWorld',
  components: { AboutUs, TopMenu, ContactUs },

  data: () => ({})
})
</script>
