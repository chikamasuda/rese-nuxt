<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4 mb-5">
      <Logo />
      <LoginMenu />
    </div>
    <v-row class="mb-5 justify-center pt-5">
      <v-col cols="12" xs="12" sm="9" md="6">
        <v-card>
          <v-card-title>予約内容変更</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="computedDateFormatted" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                </v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu = false" locale="ja-jp"></v-date-picker>
            </v-menu>
            <ul class="red--text ml-2" v-for="error in dateError" :key="error.id"><li>{{ error }}</li></ul>
            <v-select v-model="time" :items="times" menu-props="auto" hide-details prepend-icon="mdi-clock" single-line class="mb-5 pb-1 mt-3">
            </v-select>
            <ul class="red--text ml-2" v-for="error in dateError" :key="error.id"><li>{{ error }}</li></ul>
            <v-select v-model="number" :items= "numbers" menu-props="auto" hide-detail prepend-icon="mdi-account" class="mt-5">
            </v-select>
            <ul class="red--text ml-2" v-for="error in numberError" :key="error.id"><li>{{ error }}</li></ul>
          </v-card-text>
          <v-card class="ml-4 mr-4 mt-3">
            <v-card-title>予約内容確認</v-card-title>
            <v-simple-table class="table reservation-table">
              <tbody>
                <tr>
                  <th class="text-left bg-gray border-top">店名</th>
                  <td class="border-top bg-white" v-if="reservation.shops">{{ reservation.shops.name }}</td>
                </tr>
                <tr>
                  <th class="text-left bg-gray">予約日</th>
                  <td class="bg-white">{{ computedDateFormatted }}</td>
                </tr>
                <tr>
                  <th class="text-left bg-gray" with="15%">時間</th>
                  <td class="bg-white">{{ time }}</td>
                </tr>
                <tr>
                  <th class="text-left bg-gray" with="15%">人数</th>
                  <td class="bg-white">{{ number }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
          <div class="text-center mt-5 pb-5 pt-3 mb-5">
            <v-btn color="black" class="white--text mr-2" to="/mypage">キャンセル</v-btn>
            <v-btn class="blue accent-4 pl-5 pr-5 white--text reserve-button" @click="updateReservation()">予約変更する</v-btn>
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
      reservation: [],
      menu: false,
      date: '',
      number: '',
      time: '',
      shop: '',
      times: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'],
      numbers: ['1名', '2名', '3名', '4名', '5名', '6名', '7名', '8名', '9名', '10名'],
      dateError: "",
      numberError: "",
    };
  },
  methods: {
    async getReservation() {
      await this.$axios.get(`/api/v1/reservations/${this.$route.query.id}`)
      .then((response) => {
        this.reservation = response.data.reservation[0];
        this.date = this.reservation.date.substr(0, 10)
        this.number = this.reservation.number + '名'
        this.time = this.reservation.date.substr(11, 5)
        console.log(this.date)
      })
      .catch((error) => {
        console.log(error.response);
      })
    },
    formatDate (date) {
      if (!date) return null
      let [year, month, day] = date.split('-')
      
      if(month.charAt(0) == 0)  month = month.slice(-1)
      if(day.charAt(0) == 0) day = day.slice(-1)
        
      return `${year}年${month}月${day}日`
    },
    async updateReservation() {
      let date = [this.date, this.time]
      const datetime = date.join(" ")
      const data = {
        user_id: this.$auth.user.id,
        shop_id: this.reservation.shops.id,
        date: datetime,
        number: this.number.slice(0, -1)
      }
      await this.$axios.put('/api/v1/reservations/' + this.reservation.id, data)
      .then((response) => {
        this.reservation.splice(this.reservation.id, 1,  data)
        this.$router.push("/editDone")
      })
      .catch((error) => {
        console.log(error.response)
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
    this.getReservation()
  },
}
</script>