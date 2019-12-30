<template>
  <v-card class="mx-auto">
    <v-img
      :src="require('@/assets/profile/' + this.profile.id + '.png')"
      height="200px"
    ></v-img>

    <v-card-title style="margin-bottom:10px">
      {{ this.profile['氏名'] }}
    </v-card-title>

    <v-card-subtitle
      v-for="(value, name, index) in this.profile"
      :key="name.id"
      v-show="index > 1"
    >
      <v-chip class="ma-2" color="green" text-color="white">{{ name }}</v-chip>
      <span>{{ value }}</span>
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class ProfileDetail extends Vue {
  @Prop()
  profile!: any
}
</script>
