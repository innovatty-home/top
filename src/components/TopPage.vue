<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax src="@/assets/bg1.png" height="500">
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
        <v-parallax src="@/assets/meetup_photo.png" height="380">
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
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutUs from '@/components/AboutUs.vue'
import TopMenu from '@/components/TopMenu.vue'
import ContactUs from '@/components/ContactUs.vue'

export default Vue.extend({
  name: 'TopPage',
  components: { AboutUs, TopMenu, ContactUs },

  data: () => ({})
})
</script>
