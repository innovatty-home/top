<template>
  <v-app light>
    <v-content>
      <TitleSection />

      <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Learn about this community's way.</h2>
              <span class="subheading">Read follow contents and join Slack.</span>
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
            <AboutUs :memberList="memberList" />
            <ContactUs />
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AboutUs from '@/components/AboutUs.vue'
import TopMenu from '@/components/TopMenu.vue'
import ContactUs from '@/components/ContactUs.vue'
import TitleSection from '@/components/TitleSection.vue'
import SubSection from '@/components/SubSection.vue'
import axios from 'axios'
const appConfig = require('@/constants/appConfig').default

@Component({
  components: { AboutUs, TopMenu, ContactUs, TitleSection, SubSection }
})
export default class TopPage extends Vue {
  memberList: any = []

  // @Prop()
  created() {
    axios
      .get(appConfig.memberListApi + 'memberList')
      .then(response => {
        this.memberList = response.data
      })
      .catch(reason => {
        console.log(reason)
      })
  }
}
</script>
