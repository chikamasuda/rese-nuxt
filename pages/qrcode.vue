<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4 mb-5">
      <Logo />
      <LoginMenu />
    </div>
    <v-row class="mb-5 justify-center pt-3">
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card class="text-center">
          <v-card-title class="text-center">QRコード</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p class="text-left">QRコードをスキャンして、予約情報の確認ができます。</p>
            <qrcode-vue :value="value" :size="size" level="H" />
          </v-card-text>
          <v-btn color="black" class="white--text mb-4 pr-5 pl-5" to="/mypage">戻る</v-btn>
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
      value: `https://moonlit-fudge-322432.netlify.app/reservationDetail?id=${this.$route.query.id}`,
      size: 300,
    }
  },
  components: {
    QrcodeVue,
  },
}
</script>