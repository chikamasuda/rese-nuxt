<template>
<div>
  <div class="align-center d-flex justify-space-between mt-4 mb-5">
    <Logo />
    <LoginMenu />
  </div>
  <h2 class="mt-5 pt-5">{{ $auth.user.name }}さん</h2>
  <v-row>
    <v-col cols="5">
      <h3 class="mt-5">予約状況</h3>
    </v-col>
    <v-spacer />
    <v-col cols="6">
      <h3 class="mt-5">お気に入り店舗</h3>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="5">
      <div v-for="(reservation,index) in reservations" :key="reservation.id">
        <p v-if="!reservation">予約は現在ありません。</p>
        <v-card class="mr-5 reservation-card">
          <v-card-title class="pb-2 pt-2"><v-icon color="black" class="mr-2">mdi-clock</v-icon>予約<span class="ml-1">{{ index + 1 }}</span></v-card-title>
          <v-divider></v-divider>
          <v-simple-table class="table">
            <tbody>
              <tr>
                <th class="text-left bg-gray border-top" width="15%">Shop</th>
                <td class="border-top bg-white">{{ reservation.shop.name }}</td>
              </tr>
              <tr>
                <th class="text-left bg-gray" with="15%">Date</th>
                <td class="bg-white">{{ $dateFns.format(new Date(reservation.date.substr(0,10)), 'M/d') }}</td>
              </tr>
              <tr>
                <th class="text-left bg-gray" with="15%">Time</th>
                <td class="bg-white">{{ $dateFns.format(new Date(reservation.date), 'H:mm') }}</td>
              </tr>
              <tr>
                <th class="text-left bg-gray" with="15%">Number</th>
                <td class="bg-white">{{ reservation.number }}人</td>
              </tr>
            </tbody>
          </v-simple-table>
          <div class="text-center pb-3 pt-3">
            <v-btn small color="blue accent-4 white--text" class="mr-2">予約変更</v-btn>
            <v-btn small color="blue accent-4 white--text">予約を取り消す</v-btn>
          </div>
        </v-card>
      </div>
    </v-col>
    <v-spacer />
    <div class="favorite">
      <v-col cols="6" v-for="favorite in favorites" :key="favorite.id" class="favorite-card">
        <p v-if="favorites.length == 0">予約は現在ありません。</p>
        <v-card class="photo-card">
          <v-img
            :src="`${favorite.shop.image_url}`"
            height="150"
          ></v-img>
          <v-card-title class="text-h6 mt-2">
            {{ favorite.shop.name }}
          </v-card-title>
          <v-card-text class="mr-2 black--text">
            <span>#{{ favorite.shop.area.name }}</span>
            <span>#{{ favorite.shop.genre.name }}</span>
          </v-card-text>
          <div class="d-flex align-center justify-space-between ml-3 mr-3 pb-2">
            <v-btn small class=" blue accent-4 white--text" :to="'/detail?id=' + favorite.shop.id">詳しくみる</v-btn>
            <v-icon v-if="favorite.user_id == $auth.user.id" large color="red" @click="unlike(favorite.id)">mdi-cards-heart</v-icon>
            <v-icon v-else large color="grey lighten-2" @click="like(favorite.shop)">mdi-cards-heart</v-icon>
          </div>
        </v-card>
      </v-col>
    </div>
  </v-row>
</div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      favorites: [],
      reservations: [],
    };
  },
  methods: {
    async getReservations() {
    await this.$axios.get(`/api/v1/users/${this.$auth.user.id}/reservations`)
      .then((response) => {
        this.reservations = response.data.reservations;
        console.log(this.reservations);
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    async getFavorites() {
    await this.$axios.get(`/api/v1/users/${this.$auth.user.id}/favorites`)
      .then((response) => {
        this.favorites = response.data.favorites;
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    async like(shop) {
      const body = {
        shop_id: shop.id,
        user_id: this.$auth.user.id
      }
      await this.$axios.post("/api/v1/favorites/", body)
      .then((response) => {
        console.log(response)
        this.favorites.push(response.data.favorites)
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
    async unlike(id) {
      await this.$axios.delete('/api/v1/favorites/' + id);
      const findLikeIdx = this.favorites.findIndex(
        (e) => e.id === id
      );
      this.favorites.splice(findLikeIdx, 1);
    },
  },
  created() {
    this.getReservations();
    this.getFavorites();
  }
}
</script>

<style scoped>
th, td {
  border-bottom: none!important;  
}

.reservation-card {
  margin-bottom: 40px;
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

.favorite {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}

.favorite-card {
  height: 300px;
}

.photo-card {
  height: 260px;
}
</style>