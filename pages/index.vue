<template>
  <div>
    <header class="d-flex align-center mt-4">
        <v-row class="align-center">
        <v-col cols="3" class="d-flex search-wrapper text-right">
          <Logo />
        </v-col>
        <v-col cols="9" class="d-flex mt-1 search-wrapper text-right">
          <v-select label="All area" tile solo class="search search-select" v-model="area" :items= "areas"></v-select>
          <v-select label="All genre" tile solo  class="search search-select" v-model="genre" :items= "genres"></v-select>
          <v-text-field label="Search..." solo tile class="search search-text" prepend-inner-icon="mdi-magnify" v-model="keyword"></v-text-field>
          <v-btn tile color="blue accent-4 white--text" class="search-btn pl-5 pr-5" @click="searchShopList(area, genre, keyword)">検索</v-btn>
          <LoginMenu class="ml-5 menu" />
        </v-col>
        </v-row>
    </header>
    <v-overlay :value="overlay">
      <v-card v-if="!$auth.loggedIn" light>
        <div class="text-right pt-2 pr-3" @click="closeOverlay()">
          <v-icon large>mdi-close-circle-outline</v-icon>
        </div>
        <v-card-text class="mb-2">
          ログインしていないためお気に入り登録できません。<br>
          お気に入り登録する場合は以下のボタンをクリックしてログインしてください。
        </v-card-text>
        <div class="text-center pb-5">
          <v-btn color="blue accent-4 white--text pl-5 pr-5" to="/login">ログイン</v-btn>
        </div>
      </v-card>
    </v-overlay>
    <ul class="photo-list mb-5">
      <li>
        <v-row>
          <v-col cols="12" sm="12" md="3" v-for="shop in shopList" :key="shop.id">
            <v-card class="photo-card">
              <v-img
                :src="`${shop.image_url}`"
                height="150"
              ></v-img>
              <v-card-title class="text-h6 mt-2">
                {{ shop.name }}
              </v-card-title>
              <v-card-text class="mr-2 black--text shop-text">
                <span>#{{ shop.area.name }}</span>
                <span>#{{ shop.genre.name }}</span>
              </v-card-text>
              <div class="d-flex align-center justify-space-between ml-3 mr-3 pb-2">
                <v-btn small class=" blue accent-4 white--text" :to="'/detail?id=' + shop.id">詳しくみる</v-btn>
                <div v-if="$auth.loggedIn">
                  <v-icon v-if="shop.favorites.find(e => e.user_id == $auth.user.id)" large color="red" @click="unlike(shop)">
                    mdi-cards-heart
                  </v-icon>
                  <v-icon v-else large color="grey lighten-2" @click="like(shop)">
                    mdi-cards-heart
                  </v-icon>
                </div>
                <div v-if="!$auth.loggedIn">
                  <v-icon large color="grey lighten-2" @click="like(shop)">
                    mdi-cards-heart
                  </v-icon>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shopList: [],
        overlay: false,
        areas: [],
        genres: [],
        area: '',
        genre: '',
        keyword: '',
      };
    },
    methods: {
      async getShopList() {
        await this.$axios.get('/api/v1/shops')
        .then((response) => {
          this.shopList = response.data.shops
          this.genres = response.data.genres
          this.areas = response.data.areas
        })
        .catch((error) => {
          console.log(error.response)
        })
      },
      async like(shop) {
        if(!this.$auth.loggedIn) {
          this.overlay = true
        } else {
          const body = {
            shop_id: shop.id,
            user_id: this.$auth.user.id
          }
          await this.$axios.post("/api/v1/favorites", body)
            .then((response) => {
              console.log(response)
              shop.favorites.push(response.data.favorites)
            })
            .catch((error) => {
              console.log(error.response)
            })
        }
      },
      async unlike(shop) {
        const findLike = shop.favorites.find((e) => e.user_id === this.$auth.user.id)
        console.log(findLike)
        await this.$axios.delete(`/api/v1/favorites/${findLike.id}`)
        .then((response) => {
          const findLikeIdx = shop.favorites.findIndex((e) => e.id === findLike.id)
          shop.favorites.splice(findLikeIdx, 1)
        })
        .catch((error) => {
          console.log(error.response)
        })
      },
      async searchShopList(area, genre, keyword) {
        const area_id = this.areas.indexOf(area) + 1
        const genre_id = this.genres.indexOf(genre) + 1
        await this.$axios.get('/api/v1/search?keyword=' + keyword + '&area_id=' + area_id + '&genre_id=' + genre_id)
        .then((response) => {
          this.shopList = response.data.shops
        })
        .catch((error) => {
          console.log(error.response)
        })
      },
      closeOverlay() {
        this.overlay = false;
      },
    },
    created() {
      this.getShopList();
    }
  }
</script>

<style scoped>
.photo-list {
  padding: 0;
  margin-top: 30px;
}

.v-card__title {
  padding: 0 16px;
}

.shop-text {
  width: 100%;
  font-size: 11px;
  font-weight: normal;
  padding-bottom: 3px;
}

.search {
  border-radius: 0;
}

.search-select {
  width: 20%;
}

.search-btn {
  min-height: 49px;
  width: 80px;
}
</style>