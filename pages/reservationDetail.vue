<template>
  <div>
    <v-row class="mb-5 justify-center pt-5">
      <v-col cols="12" xs="12" sm="9" md="6">
        <v-card class="">
          <v-card-title>予約情報</v-card-title>
          <v-divider></v-divider>
          <v-simple-table class="table reservation-table">
            <tbody>
              <tr>
                <th class="text-left bg-gray border-top">店名</th>
                <td class="border-top bg-white" v-if="reservation.shops">{{ reservation.shops.name }}</td>
              </tr>
              <tr>
                <th class="text-left bg-gray border-top">予約者名</th>
                <td class="border-top bg-white" v-if="reservation.users">{{ reservation.users.name }}</td>
              </tr>
              <tr>
                <th class="text-left bg-gray" with="15%">人数</th>
                <td class="bg-white">{{ number }}</td>
              </tr>
              <tr>
                <th class="text-left bg-gray">予約日</th>
                <td class="bg-white">{{ computedDateFormatted }}</td>
              </tr>
              <tr>
                <th class="text-left bg-gray" with="15%">時間</th>
                <td class="bg-white">{{ time }}</td>
              </tr>
            </tbody>
          </v-simple-table>
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
    };
  },
  methods: {
    async getReservation() {
      await this.$axios.get(`/api/v1/reservations/${this.$route.query.id}`)
      .then((response) => {
        this.reservation = response.data.reservation[0];
        this.date = this.reservation.date.substr(0, 10)
        this.number = this.reservation.number + '名'
        this.time =  this.$dateFns.format(new Date(this.reservation.date), 'H:mm')
        console.log(this.reservation.date)
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