<template>
  <div>
    <v-card>
      <v-card-title class="d-flex">
        予約一覧
      </v-card-title>
      <v-simple-table>
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
            <td>{{ $dateFns.format(new Date(reservation.date.substr(0,15)), 'Y年M月d日  H:mm') }}</td>
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
  data () {
    return {
      ownerId: '',
      reservations: []
    }
  },
  methods: {
    async getReservationList() {
      const token = this.$cookies.get('owner.token')
      const headers = { Authorization: `Bearer ${token}` }
      await this.$axios.get('/api/v1/owners', { headers: headers })
      .then((response) => {
        this.ownerId = response.data.owner.id
        console.log(this.ownerId)
          this.$axios.get(`/api/v1/owners/${ this.ownerId }/reservations`, { headers: headers })
          .then((response) => {
            console.log(response)
            this.reservations = response.data.reservations;
          })
          .catch((error) => {
            console.log(error.response)
          })
      })
      .catch((error) => {
        console.log(error)
      })
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