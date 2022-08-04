<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4">
      <Logo />
      <LoginMenu />
    </div>
    <div>
      <v-row class="mt-5">
        <v-col cols="12" sm="12" md="6">
          <div class="d-flex mb-5">
            <v-btn color="white" class="mr-5 pre-btn" to="/"><v-icon>mdi-chevron-left</v-icon></v-btn>
            <h2>{{ shop.name }}</h2>
          </div>
          <v-img :src="`${shop.image_url}`" class="mt-5"></v-img>
          <div class="black--text mt-5 mb-2">
            <span v-if="shop.area" class="mr-2">#{{ shop.area.name }}</span>
            <span v-if="shop.genre">#{{ shop.genre.name }}</span>
          </div>
          <div class="d-flex align-center">
            <v-rating v-model="rating" :length="length" color="orange" background-color="grey lighten-1" empty-icon="$ratingFull" half-increments middle class="star-display p-0" v-show="star">
            </v-rating>
            <span class="font-weight-bold ml-2 mt-1 mr-1" v-show="star">{{ rating }}</span>
            <span class="mt-1" v-show="star">({{ reviews.length }}件)</span>
            <v-btn v-if="star && this.reservationCount > this.reviewCount" small color="orange darken-1" class="ml-3 white--text" :to="`/review?shop_id=${shop.id}&shop_name=${shop.name}`">
              評価する
            </v-btn>
          </div>
          <p class="mt-3">{{ shop.description }}</p>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="12" md="5">
          <v-card v-if="!$auth.loggedIn">
            <v-card-title>予約</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              ログインしていないため予約できません。
              予約する場合は以下のボタンをクリックしてログインしてください。
            </v-card-text>
            <div class="text-center pb-5">
              <v-btn color="blue accent-4 white--text pl-5 pr-5" to="/login">ログイン</v-btn>
            </div>
          </v-card>
          <v-card v-if="$auth.loggedIn">
            <v-card-title>予約</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="computedDateFormatted" prepend-icon="mdi-calendar" readonly placeholder="予約日" v-bind="attrs" v-on="on">
                  </v-text-field>
                </template>
              <v-date-picker v-model="date" no-title @input="menu = false" locale="ja-jp"></v-date-picker>
              </v-menu>
              <ul class="red--text ml-2" v-for="error in dateError" :key="error.id">
                <li>{{ error }}</li>
              </ul>
              <v-select v-model="time" :items="times" menu-props="auto" placeholder="予約時間" hide-details prepend-icon="mdi-clock" single-line class="pb-1 mt-4">
              </v-select>
              <ul class="red--text ml-2" v-for="error in dateError" :key="error.id">
                <li>{{ error }}</li>
              </ul>
              <v-select v-model="number" :items= "numbers" menu-props="auto" placeholder="人数" hide-details prepend-icon="mdi-account"
                single-line class="mt-5">
              </v-select>
              <ul class="red--text ml-2" v-for="error in numberError" :key="error.id">
                <li>{{ error }}</li>
              </ul>
            </v-card-text>
            <v-card class="ml-4 mr-4 mt-5">
              <v-card-title>予約内容</v-card-title>
              <v-simple-table class="table reservation-table">
                <tbody>
                  <tr>
                    <th class="text-left bg-gray border-top">店名</th>
                    <td class="border-top bg-white">{{ shop.name }}</td>
                  </tr>
                  <tr>
                    <th class="text-left bg-gray">予約日</th>
                    <td class="bg-white">{{computedDateFormatted }}</td>
                  </tr>
                  <tr>
                    <th class="text-left bg-gray">時間</th>
                    <td class="bg-white">{{ time }}</td>
                  </tr>
                  <tr>
                    <th class="text-left bg-gray">人数</th>
                    <td class="bg-white">{{ number }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
            <div class="text-center mt-5 pb-5 pt-3 mb-5">
              <v-btn class="blue accent-4 pl-5 pr-5 white--text reserve-button" @click="addReservation(shop)">予約する</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        shop: [],
        date: '',
        menu: false,
        time: "",
        number: "",
        times: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'],
        numbers: ['1名', '2名', '3名', '4名', '5名', '6名', '7名', '8名', '9名', '10名'],
        reservations: [],
        dateError: '',
        numberError: '',
        length: 5,
        rating: 0,
        reviews: [],
        star: false,
        reviewCount: 0,
        reservationCount:0,
      };
    },
    methods: {
      async getShop() {
        await this.$axios.get(`/api/v1/shops/${this.$route.query.id}`)
        .then((response) => {
          this.shop = response.data.shop[0]
          this.reviews = this.shop.reviews
          this.star = true
          let sum = 0;
          for(let i = 0; i < this.reviews.length; i++) {
            sum += Number(this.reviews[i].rating)
          }
          if(this.reviews.length == 0) {
              this.rating = 0
          } else {
            this.rating = Number(sum / this.reviews.length).toFixed(1)
          }
        })
        .catch((error) => {
          console.log(error.response);
        })
      },
      async isArrived() {
        if(this.$auth.loggedIn) {
          await this.$axios.get(`/api/v1/is-arrived?shop_id=${this.$route.query.id}&user_id=${this.$auth.user.id}`)
          .then((response) => {
              this.reviewCount = response.data.review_count
              this.reservationCount = response.data.reservation_count
              console.log(this.reviewCount)
              console.log(this.reservationCount)
          })
          .catch((error) => {
            console.log(error.response);
          })
        }
      },
      formatDate (date) {
        if (!date) return null
        let [year, month, day] = date.split('-')
        
        if(month.charAt(0) == 0)  month = month.slice(-1)
        if(day.charAt(0) == 0) day = day.slice(-1)
          
        return `${year}年${month}月${day}日`
      },
      async addReservation(shop) {
        let date = [this.date, this.time]
        const datetime = date.join(" ")
        const data = {
          shop_id: shop.id,
          user_id: this.$auth.user.id,
          date: datetime,
          number: this.number.slice(0, -1)
        }
        await this.$axios.post('/api/v1/reservations', data)
        .then((response) => {
          this.$router.push("/reservationDone")
        })
        .catch((error) => {
          console.log(error.response);
          console.log(data);
          this.dateError = error.response.data.data.errors['date']
          this.numberError = error.response.data.data.errors['number']
        })
      },
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    created() {
      this.getShop()
      this.isArrived()
      if (this.$auth.loggedIn) {
        const user_token = this.$cookies.get('auth._token.local')
        this.$axios.defaults.headers.common['Authorization'] = user_token
      }
    }
}
</script>
