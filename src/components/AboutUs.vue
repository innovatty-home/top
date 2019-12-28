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
          max-height="200"
          class="mx-auto"
          style="overflow: scroll"
        >
          <v-list three-line>
            <template v-for="item in items">
              <v-list-item :key="item.name">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.name"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.company"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar: require('@/assets/profile/uei.png'),
        name: 'Kentaroh Uei',
        company: '日本アイ・ビー・エム システムズエンジニアリング㈱'
      },
      {
        avatar: require('@/assets/profile/uchino.png'),
        name: 'Sohei Uchino',
        company: '日本アイ・ビー・エム システムズエンジニアリング㈱'
      },
      {
        avatar: require('@/assets/profile/sagawa.png'),
        name: 'Junki Sagawa',
        company: '日本アイ・ビー・エム システムズエンジニアリング㈱'
      },
      {
        avatar: require('@/assets/profile/kitamura.png'),
        name: 'Hiromichi Kitamura',
        company: '日本アイ・ビー・エム システムズエンジニアリング㈱'
      },
      {
        avatar: require('@/assets/profile/hanzawa.png'),
        name: 'Genki Hanzawa',
        company: '日本アイ・ビー・エム システムズエンジニアリング㈱'
      },
      {
        avatar: require('@/assets/profile/fujikawa.png'),
        name: 'Yuji Fujikawa',
        company: '日本アイ・ビー・エム ソリューションサービス㈱'
      },

      {
        avatar: require('@/assets/profile/nakamura.png'),
        name: 'Meri Nakamura',
        company: '日本アイ・ビー・エム㈱'
      }
    ]
  })
}
</script>
