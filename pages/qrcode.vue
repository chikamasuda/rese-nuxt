import VueQriously from 

<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4 mb-5">
      <Logo />
      <LoginMenu />
    </div>
    <v-row class="mb-5 justify-center pt-5">
      <v-col cols="12" xs="12" sm="6" md="5">
        <v-card>
          <v-card-title>QRコード</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <vue-qrcode value="https://www.1stg.me" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>