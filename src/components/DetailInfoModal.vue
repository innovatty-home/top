<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-layout wrap justify-center>
        <v-btn color="primary" dark v-on="on">Detail</v-btn>
      </v-layout>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ contentTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container v-if="contentId == 1" three-line>
        <PhilosophyInfo />      
      </v-container>
      <v-container v-if="contentId == 2" subheader>
        <HowToInfo />      
      </v-container>  
      <v-container v-if="contentId == 3">
        <EventInfo />      
      </v-container>        
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PhilosophyInfo from '@/components/PhilosophyInfo.vue'
import HowToInfo from  '@/components/HowToInfo.vue'
import EventInfo from  '@/components/EventInfo.vue'

@Component({
    components: {
        PhilosophyInfo,
        HowToInfo,
        EventInfo
}
})

export default class DetailInfoModal extends Vue {
    
  dialog: boolean = false
  notifications: Boolean = false
  contentTitle: String = 'test'
  contentImage: String = ''
  contentDetailText: String = ''

  @Prop()
  contentId!: string

  created() {
    var contentData = require('@/contents/content_' + this.contentId + '.json')
    this.contentTitle = contentData.contentTitle
    // this.contentImage = contentData.contentImage
    // this.contentDetailText = contentData.contentDetailText
  }
}
</script>
