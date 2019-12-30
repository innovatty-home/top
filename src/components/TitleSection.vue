<template>
  <section>
    <v-parallax src="@/assets/bg1.png" height="500">
      <v-layout column align-center justify-center class="white--text">
        <img
          id="title_image"
          src="@/assets/innovatty_logo.png"
          alt="Vuetify.js"
          width="80%"
        />
        <h1 id="title_text" class="white--text font-weight-light text-center">
          innovators & developers community
        </h1>
      </v-layout>
    </v-parallax>
  </section>
</template>

<style lang="scss" scoped>
#title_text {
  font-size: 3vw;
}
</style>
