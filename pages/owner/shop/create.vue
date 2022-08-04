<template>
  <div>
    <v-card>
      <v-card-title class="align-center">
        店舗情報作成
      </v-card-title>
      <v-alert type="success" color="green" v-if="alert" dismissible v-model="alert">店舗情報を作成しました。</v-alert>
      <v-card-text>
        <label for="">店舗名</label>
        <v-text-field v-model="name" outlined dense class="mb-3"></v-text-field>
        <label for="">エリア</label>
        <v-select outlined dense class="mb-3" v-model="area" :items= "areas"></v-select>
        <label for="">ジャンル</label>
        <v-select outlined dense class="mb-3" v-model="genre" :items= "genres"></v-select>
        <label for="">店舗画像</label><br>
        <v-file-input v-model="image" outlined dense class="mb-3"></v-file-input>
        <label for="">店舗説明文</label>
        <v-textarea v-model="description" outlined></v-textarea>
        <div class="text-center mt-3">
          <v-btn class="black white--text mr-2" type="submit" to="/owner/shop">戻る</v-btn>
          <v-btn class="primary" type="submit" @click="createShop()">店舗情報を作成</v-btn>
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
      owner: [],
      alert: false,
      name: '',
      area: '',
      genre: '',
      image: [],
      description: '',
      shops:[],
    }
  },
  methods: {
    async getOwnerInformation() {
      await this.$axios.get('/api/v1/owners')
      .then((response) => {
        this.owner = response.data.owner
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
    async createShop() {
      let formData = new FormData();
      formData.append('name', this.name)
      formData.append('area', this.area)
      formData.append('description', this.description)
      formData.append('genre', this.genre)
      formData.append('owner_id', this.owner.id)
      formData.append("image", this.image);
      console.log(formData)
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      }
      await this.$axios.post('/api/v1/shops',formData, config)
      .then((response) => {
        this.name = '',
        this.area = '',
        this.description = '',
        this.genre = '',
        this.owner_id = '',
        this.image = '',
        this.alert = true
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
  },
  created() {
    this.getOwnerInformation()
    if (this.$store.state.ownerAuth.owner_user) {
      const owner_token = this.$cookies.get('owner_token')
      this.$axios.defaults.headers.common['Authorization'] =  `Bearer ${owner_token}`
    }
  },
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