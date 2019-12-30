<template>
  <v-app light>
    <v-content>
      <TitleSection />

      <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Learn about this community's way.</h2>
              <span class="subheading"
                >Read follow contents and join Slack.</span
              >
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <TopMenu />
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <SubSection />
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
import TitleSection from '@/components/TitleSection.vue'
import SubSection from '@/components/SubSection.vue'
// import axios from 'axios'

export default Vue.extend({
  name: 'TopPage',
  components: { AboutUs, TopMenu, ContactUs, TitleSection, SubSection },

  data: () => ({
    hoge: ''
  })

  // created() {
  //   axios
  //     .get(
  //       'https://script.google.com/macros/s/AKfycbzWU10DBsN6XlYwLsoTIXE5PV-IWFMZ6k5guIKmTAWbFnkBVjg/exec'
  //     )
  //     .then(response => {
  //       console.log(response)
  //       this.hoge = response.data.hogehoge
  //     })
  //     .catch(reason => {
  //       console.log(reason)
  //     })
  // }
})
</script>
