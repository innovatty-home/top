<template>
  <v-flex xs12 sm4>
    <v-card flat class="transparent">
      <v-card-title primary-title class="layout justify-center">
        <div class="headline">About us</div>
      </v-card-title>
      <v-flex xs12 sm12>
        <v-card
          flat
          max-width="650"
          max-height="250"
          class="mx-auto"
          style="overflow-y: scroll"
        >
          <v-list>
            <v-list-item v-for="item in this.memberList" :key="item.id">
              <v-dialog width="500">
                <template v-slot:activator="{ on }">
                  <v-layout raw v-on="on" style="margin-top:6px">
                    <v-list-item-avatar>
                      <v-img
                        :src="require('@/assets/profile/' + item.id + '.png')"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item['氏名']"
                      ></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon style="margin-right:10px">
                      <v-icon>mdi-open-in-new</v-icon>
                    </v-list-item-icon>
                  </v-layout>
                </template>
                <ProfileDetail :profile="item" />
              </v-dialog>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ProfileDetail from '@/components/ProfileDetail.vue'

@Component({
  components: { ProfileDetail }
})
export default class AboutUs extends Vue {
  @Prop()
  memberList!: any
}
</script>
