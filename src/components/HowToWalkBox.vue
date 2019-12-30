<template>
  <div class="bgBox" style="margin-bottom:30px">
    <v-container>
      <v-row>
        <span class="font-weight-black display-4 mt-10">{{ text.title }}</span>
      </v-row>
      <v-row>
        <div class="display-2 mt-10">
          {{ text.channelName }}
          <v-avatar size="42">
            <v-img :src="require('@/assets/icons/slack_icon.png')" alt="Slack" />
          </v-avatar>
        </div>
      </v-row>
      <v-container class="discription" style="margin-top:20px">
        <v-row>
          <div>{{ text.discription }}</div>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HowToWalkBox extends Vue {
  @Prop()
  text!: any
}
</script>

<style lang="scss" scoped>
.bgBox {
  background-color: black;
  height: 500px;
  color: #fff;
}

.discription {
  font-size: 24px;
}
</style>
