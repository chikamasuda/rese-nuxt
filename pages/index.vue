<template>
  <div>
    <header class="d-flex align-center justify-space-between mt-1">
      <Logo />
      <v-col cols="12" sm="12" md="6" class="d-flex mt-1 search-wrapper">
        <v-select label="All area" tile solo class="search search-select"></v-select>
        <v-select label="All genre" tile solo  class="search search-select"></v-select>
        <v-text-field label="Search..." solo tile class="search" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
      <AfterLoginMenu />
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
                <v-btn small class=" blue accent-4 white--text">詳しくみる</v-btn>
                <v-icon large class="heart-icon" @click="">mdi-cards-heart</v-icon>
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
    middleware: 'auth',
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
li {
  list-style: none;
  
}
.photo-list {
  padding: 0;
  margin-top: 30px;
}

.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 0 16px;
}

.v-card__text {
  width: 100%;
  font-size: 11px;
  font-weight: normal;
}

.heart-icon {
  color: #E0E0E0;;
}

.search {
  border-radius: 0;
}

.search-select {
  width: 5%;
}

.search-wrapper {
  margin-left: 200px;
}
</style>
<style>
.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  max-height: 40px;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: 8px;
  display: none;
}
</style>