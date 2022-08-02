<template>
  <div>
    <v-card>
      <v-card-title class="d-flex">
        予約一覧
      </v-card-title>
      <v-card-text>{{ reservationMessage }}</v-card-text>
      <v-simple-table v-if="reservations.length > 0">
      <thead class="">
        <tr>
          <th class="text-left">
            予約日時
          </th>
          <th class="text-left">
            人数
          </th>
          <th class="text-left">
            予約者名
          </th>
        </tr>
      </thead>
        <tbody>
          <tr class="pb-5 link-items" v-for="reservation in reservations" :key="reservation.id">
            <td>{{ $dateFns.format(new Date(reservation.date), 'Y年M月d日  H:mm') }}</td>
            <td>{{ reservation.number }}</td>
            <td>{{ reservation.users.name }}</td>
          </tr>
        </tbody>
    </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'ownerMenuBar',
  middleware: 'ownerAuth',
  data () {
    return {
      reservations: [],
      ownerId: '',
      reservationMessage: '',
      date: '',
    }
  },
  methods: {
    async getReservationList() {
      await this.$axios.get('/api/v1/owners')
      .then((response) => {
        this.ownerId = response.data.owner.id
        this.$axios.get(`/api/v1/owners/${this.ownerId}/reservations`)
        .then((response) => {
          this.reservations = response.data.reservations
          if(this.reservations.length == 0) {
            this.reservationMessage = '予約はありません。'
          }
        })
        .catch((error) => {
          console.log(error.response)
        })
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
    async logout() {
      await this.$store.dispatch('ownerAuth/logout')
      window.location.href = '/owner/login'
    },
  },
  created() {
    this.getReservationList()
  }
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