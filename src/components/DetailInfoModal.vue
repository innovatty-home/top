<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Detail</v-btn>
    </template>        
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{contentTitle}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list three-line subheader>
          <v-list-item>              
            <v-list-item-content>
<!--
                <v-img
                :src=contentImage
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="500"
                max-height="300"
                ></v-img>
-->                
            </v-list-item-content>
          </v-list-item>
          <v-list-item>              
            <v-list-item-content>
                {{contentDetailText}}
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        contentTitle: "test",
        contentImage: "",
        contentDetailText: ""
      }
    },

    props:['contentId'],    

    created () {
        var contentData = require("@/contents/content_" + this.contentId + ".json");
        this.contentTitle = contentData.contentTitle;
        this.contentImage = contentData.contentImage;
        this.contentDetailText = contentData.contentDetailText;
    }
  }
</script>
