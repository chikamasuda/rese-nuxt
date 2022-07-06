<template>
  <div>
    <header class="d-flex align-center mt-4">
        <v-row class="align-center">
        <v-col cols="3" class="d-flex search-wrapper text-right">
          <Logo />
        </v-col>
        <v-col cols="9" class="d-flex mt-1 search-wrapper text-right">
          <v-select label="All area" tile solo class="search search-select"></v-select>
          <v-select label="All genre" tile solo  class="search search-select"></v-select>
          <v-text-field label="Search..." solo tile class="search search-text" prepend-inner-icon="mdi-magnify"></v-text-field>
          <v-btn tile color="blue accent-4 white--text" class="search-btn pl-5 pr-5">検索</v-btn>
          <LoginMenu class="ml-5 menu" />
        </v-col>
        </v-row>
    </header>
    <ul class="photo-list mb-5">
      <li>
        <h3 class="estate-name"></h3>
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
              <v-card-text class="mr-2 black--text">
                <span>#{{ shop.area.name }}</span>
                <span>#{{ shop.genre.name }}</span>
              </v-card-text>
              <div class="d-flex align-center justify-space-between ml-3 mr-3 pb-2">
                <v-btn small class=" blue accent-4 white--text" :to="'/detail?id=' + shop.id">詳しくみる</v-btn>
                <v-icon large color="grey lighten-2" @click="">mdi-cards-heart</v-icon>
                <v-icon large color="red" @click="">mdi-cards-heart</v-icon>
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
        shopList: '',
      };
    },
    methods: {
      async getShopList() {
        await this.$axios.get('/api/v1/shops')
        .then((response) => {
          this.shopList = response.data.shops;
        })
        .catch((error) => {
          console.log(error.response);
        })
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

.v-card__text {
  width: 100%;
  font-size: 11px;
  font-weight: normal;
  padding-bottom: 3px;
}

.search {
  border-radius: 0;
}

.search-select {
  width: 15%;
}

.search-btn {
  min-height: 49px;
  width: 80px;
}
</style>