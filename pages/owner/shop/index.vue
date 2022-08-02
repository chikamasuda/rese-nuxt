<template>
  <div>
    <v-card>
      <v-card-title class="align-center">
        店舗情報設定
        <v-btn to="/owner/shop/create" color="primary" class="mb-3 ml-5 mt-2"><v-icon>mdi-plus</v-icon>店舗登録</v-btn>
      </v-card-title>
      <v-card-text>まだ店舗の登録はされていません。</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'ownerMenuBar',
  middleware: 'ownerAuth',
  data() {
    return {
      shopList: [],
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style scoped>
.v-card {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
@media screen and (max-width: 768px) {
  .v-card {
    width: 100%;
  }
}
</style>