import VueQriously from 

<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4 mb-5">
      <Logo />
      <LoginMenu />
    </div>
    <v-row class="mb-5 justify-center pt-3 text-center">
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card class="text-center">
          <v-card-title class="text-center">QRコード</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <qrcode-vue value="http://localhost:3000/" tag="svg" :options="option" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  data() {
    return {
      value: 'https://example.com',
      size: 1000,
      option: {
        errorCorrectionLevel: "M",
        maskPattern: 0,
        margin: 10,
        scale: 2,
      }
    }
  },
  components: {
    QrcodeVue,
  },
}
</script>

<style scoped>
  canvas {
    width: 300px!important;
    height: 300px!important;
  }
</style>