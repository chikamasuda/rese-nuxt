<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4 mb-5">
      <Logo />
      <LoginMenu />
    </div>
    <h2 class="mt-5 pt-5">{{ $auth.user.name }}さん</h2>
    <v-row class="mb-5">
      <v-overlay :value="cancelOverlay">
        <v-card light class="pb-3 pt-5 pr-5 pl-5">
          <div class="">
            予約{{ index }}を取り消します。よろしいですか？
          </div>
          <div class="text-center pb-3 mt-5">
            <v-btn color="blue accent-4 white--text pl-5 pr-5 mr-2" @click="cancelReservation(reservation_id)">取り消しする</v-btn>
            <v-btn color="black white--text" @click="closeCancelOverlay()">キャンセル</v-btn>
          </div>
        </v-card>
      </v-overlay>
      <v-col cols="12" xs="12" sm="12" md="5">
        <h3 class="mt-5 mb-3">予約状況</h3>
        <p>{{ reservationMessage }}</p>
        <v-row>
          <v-col cols="12" v-for="(reservation,index) in reservations" :key="reservation.id">
            <v-card class="reservation-card">
              <v-card-title class="pb-2 pt-2">
                <v-icon color="black" class="mr-2">mdi-clock</v-icon>予約<span class="ml-1">{{ index + 1 }}</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-simple-table class="table reservation-table">
                <tbody>
                  <tr>
                    <th class="text-left bg-gray border-top">店名</th>
                    <td class="border-top bg-white">{{ reservation.shops.name }}</td>
                  </tr>
                  <tr>
                    <th class="text-left bg-gray">予約日</th>
                    <td class="bg-white">{{ $dateFns.format(new Date(reservation.date.substr(0,10)), 'Y年M月d日') }}</td>
                  </tr>
                  <tr>
                    <th class="text-left bg-gray">時間</th>
                    <td class="bg-white">{{ $dateFns.format(new Date(reservation.date), 'H:mm') }}</td>
                  </tr>
                  <tr>
                    <th class="text-left bg-gray">人数</th>
                    <td class="bg-white">{{ reservation.number }}人</td>
                  </tr>
                </tbody>
              </v-simple-table>
              <div class="text-center pb-3 pt-3">
                <v-btn small color="blue accent-4 white--text" class="mr-2" :to="'/qrcode?id=' + reservation.id">QRコード</v-btn>
                <v-btn small color="blue accent-4 white--text" class="mr-2" :to="'/edit?id=' + reservation.id">予約変更</v-btn>
                <v-btn small color="blue accent-4 white--text" @click="openCancelOverlay(index, reservation.id)">予約を取り消す</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
      <v-col cols="12" xs="12" sm="12" md="6">
        <h3 class="mt-5 mb-3">お気に入り店舗</h3>
        <p>{{ favoriteMessage }}</p>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6" v-for="favorite in favorites" :key="favorite.id">
            <v-card class="shop-card">
              <v-img
                :src="`${favorite.shops.image_url}`"
                height="150"
              ></v-img>
              <v-card-title class="text-h6 mt-2 shop-title">
                {{ favorite.shops.name }}
              </v-card-title>
              <v-card-text class="mr-2 black--text shop-text">
                <span>#{{ favorite.shops.area.name }}</span>
                <span>#{{ favorite.shops.genre.name }}</span>
              </v-card-text>
              <div class="d-flex align-center justify-space-between ml-3 mr-3 pb-2">
                <v-btn small class=" blue accent-4 white--text" :to="'/detail?id=' + favorite.shops.id">詳しくみる</v-btn>
                <v-icon v-if="favorite.user_id == $auth.user.id" large color="red" @click="unlike(favorite.id)">mdi-cards-heart</v-icon>
                <v-icon v-else large color="grey lighten-2" @click="like(favorite.shops)">mdi-cards-heart</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
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
      cancelOverlay: false,
      index: '',
      reservation_id: "",
      favoriteMessage: '',
      reservationMessage: '',
    };
  },
  methods: {
    async getReservations() {
      await this.$axios.get(`/api/v1/users/${this.$auth.user.id}/reservations`)
      .then((response) => {
        this.reservations = response.data.reservations;
        if(this.reservations.length == 0) {
          this.reservationMessage = "予約はありません。"
        }
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
        if(this.favorites.length == 0) {
          this.favoriteMessage = "お気に入り店舗はありません。"
        }
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
      await this.$axios.delete('/api/v1/favorites/' + id)
      .then((response) => {
        const findLikeIdx = this.favorites.findIndex((e) => e.id === id)
        this.favorites.splice(findLikeIdx, 1);
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
    openCancelOverlay(index, id) {
      this.cancelOverlay = true
      this.index = index + 1
      this.reservation_id = id
    },
    closeCancelOverlay() {
      this.cancelOverlay = false
    },
    async cancelReservation(id) {
      await this.$axios.delete('/api/v1/reservations/' + id)
      .then((response) => {
        this.cancelOverlay = false
        const findIdx = this.reservations.findIndex((e) => e.id === id)
        this.reservations.splice(findIdx, 1)
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
  },
  created() {
    this.getReservations()
    this.getFavorites()
  }
}
</script>