<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4 mb-5">
      <Logo />
      <LoginMenu />
    </div>
    <v-row class="mb-5 justify-center pt-5">
      <v-col cols="12" xs="12" sm="9" md="6">
        <v-card>
          <v-card-title>{{ this.$route.query.shop_name }}の評価</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex align-center mt-2">
              <v-rating
                v-model="rating"
                :length="length"
                color="orange"
                background-color="grey lighten-1"
                empty-icon="$ratingFull"
                half-increments
                large
                class="p-0"
              ></v-rating>
              <span class="font-weight-bold ml-3 mt-1 mr-1 rating">{{ rating }}</span>
            </div>
          </v-card-text>
          <v-container fluid>
            <v-textarea
              label="コメント"
              v-model="comment"
              outlined
            ></v-textarea>
          </v-container>
          <div class="text-center pb-5">
            <v-btn class="mr-3 pr-5 pl-5" :to="`/detail?id=${this.$route.query.shop_id}`">戻る</v-btn>
            <v-btn color="orange darken-3" class="white--text pl-5 pr-5" @click="addReview()">評価する</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      length: 5,
      rating: 0,
      shop: [],
      reviews: [],
      comment: '',
    };
  },
  methods: {
    async getShop() {
      await this.$axios.get(`/api/v1/shops/${this.$route.query.shop_id}`)
      .then((response) => {
        this.shop = response.data.shop[0]
        this.reviews = this.shop.reviews
        console.log(this.reviews)
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
    async addReview() {
      const data = {
        shop_id: this.shop.id,
        user_id: this.$auth.user.id,
        rating: this.rating,
        comment: this.comment
      }
      await this.$axios.post('/api/v1/reviews', data)
      .then((response) => {
        this.reviews.push(response.data.reviews)
        this.$router.push("/reviewDone?shop_id=" + this.shop.id)
      })
      .catch((error) => {
        console.log(error.response);
        console.log(data);
        this.dateError = error.response.data.data.errors['date']
        this.numberError = error.response.data.data.errors['number']
      })
    },
  },
  created() {
    this.getShop()
    if (this.$auth.loggedIn) {
      const user_token = this.$cookies.get('auth._token.local')
      this.$axios.defaults.headers.common['Authorization'] = user_token
    }
  }
}
</script>

<style scoped>
.rating {
  font-size: 20px;
}
</style>