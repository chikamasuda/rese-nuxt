<template>
  <div>
    <v-card>
      <v-card-title class="d-flex">
        <div class="mr-3">店舗一覧</div>
        <v-btn color="primary" class="ml-5"><v-icon>mdi-plus</v-icon>店舗追加</v-btn>
      </v-card-title>
      <v-simple-table>
      <thead class="">
        <tr>
          <th class="text-left">
            店舗名
          </th>
          <th class="text-left">
            エリア
          </th>
          <th class="text-left">
            ジャンル
          </th>
          <th></th>
        </tr>
      </thead>
        <tbody>
          <tr class="pb-5 link-items" v-for="shop in shopList" :key="shop.id">
            <td>{{ shop.name }}</td>
            <td>{{ shop.area.name }}</td>
            <td>{{ shop.genre.name }}</td>
            <td><v-btn small color="primary">編集</v-btn></td>
          </tr>
        </tbody>
    </v-simple-table>
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