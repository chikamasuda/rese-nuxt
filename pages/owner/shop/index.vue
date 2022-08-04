<template>
  <div>
    <v-card>
      <v-card-title class="align-center">
        店舗情報設定
        <v-btn to="/owner/shop/create" color="primary" class="mb-3 ml-5 mt-2" v-if="haveNoStore">
          <v-icon>mdi-plus</v-icon>店舗登録
        </v-btn>
      </v-card-title>
      <v-card-text v-if="haveNoStore">まだ店舗の登録はされていません。</v-card-text>
      <v-alert type="success" color="green" v-if="alert" dismissible v-model="alert">店舗情報を更新しました。</v-alert>
      <v-card-text v-if="storeAvailable">
        <label for="">店舗名</label>
        <v-text-field v-model="name" outlined dense class="mb-3"></v-text-field>
        <label for="">エリア</label>
        <v-select outlined dense class="mb-3" v-model="area" :items= "areas"></v-select>
        <label for="">ジャンル</label>
        <v-select outlined dense class="mb-3" v-model="genre" :items= "genres"></v-select>
        <label for="">店舗画像変更</label><br>
        <v-file-input v-model="image" outlined dense class="mb-3"></v-file-input>
        <v-img :src="`${shop.image_url}`" class="mt-5 mb-5"></v-img>
        <label for="">店舗説明文</label>
        <v-textarea v-model="description" outlined></v-textarea>
        <div class="text-center mt-3">
          <v-btn class="primary" type="submit" @click="updateShop(shop.id)">店舗情報を更新</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'ownerMenuBar',
  middleware: 'ownerAuth',
  data() {
    return {
      areas: ['東京都', '大阪府', '福岡県'],
      genres: ['寿司', '焼肉', '居酒屋', 'イタリアン', 'ラーメン'],
      shop: {},
      haveNoStore: false,
      alert: false,
      shops: [],
      owner: [],
      name: '',
      area: '',
      genre: '',
      image: [],
      description: '',
      storeAvailable: false,
    }
  },
  methods: {
    async getShopInformation() {
      await this.$axios.get('/api/v1/owners')
      .then((response) => {
        this.owner = response.data.owner
        this.$axios.get(`/api/v1/owners/${this.owner.id}/shops`)
        .then((response) => {
          this.shop = response.data.shop[0]
          this.name = this.shop.name
          this.area = this.shop.area.name
          this.genre = this.shop.genre.name
          this.description = this.shop.description
          console.log(this.shop)
          if(this.shop) {
            this.storeAvailable = true
          }
        })
        .catch((error) => {
          this.haveNoStore = true
          console.log(error.response)
        })
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
    async updateShop(id) {
      let formData = new FormData()
      formData.append("image", this.image)
      formData.append("owner_id", this.owner.id)
      formData.append("name", this.name)
      formData.append("area", this.area)
      formData.append("genre", this.genre)
      formData.append("description", this.description)
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      }
      const url = "/api/v1/shops/" + id
      await this.$axios.post(url,formData, config)
      .then((response) => {
        this.image = "",
        this.alert = true
        this.getShopInformation()
      })
      .catch((error) => {
        console.log(error.response);
      })
    }
  },
  created() {
    this.getShopInformation()
    if (this.$store.state.ownerAuth.owner_user) {
      const owner_token = this.$cookies.get('owner_token')
      this.$axios.defaults.headers.common['Authorization'] =  `Bearer ${owner_token}`
    }
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