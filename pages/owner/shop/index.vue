<template>
  <div>
    <v-card>
      <v-card-title class="">
        <div class="mr-3">店舗一覧</div>
        <v-card-text>まだ店舗の登録はされていません。</v-card-text>
        <v-btn color="primary" class="ml-5"><v-icon>mdi-plus</v-icon>店舗登録</v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'ownerMenuBar',
  data() {
    return {
      shopList: [],
    }
  },
  methods: {
    async getShopList() {
      await this.$axios.get('/api/v1/shops')
      .then((response) => {
        console.log(response)
        this.shopList = response.data.shops
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
  },
  created() {
    this.getShopList()
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