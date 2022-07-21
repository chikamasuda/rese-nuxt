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
            店舗名
          </th>
          <th></th>
        </tr>
      </thead>
        <tbody>
          <tr class="pb-5 link-items" v-for="reservation in reservations" :key="reservation.id">
            <td>{{ reservation.date }}</td>
            <td></td>
            <td></td>
            <td><v-btn small color="primary">メール送信</v-btn></td>
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
      const id = this.ownerId
      await this.$axios.get('/api/v1/owners/' + id + '/reservation')
      .then((response) => {
        console.log(response)
        this.reservations = response.data.reservations;
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
    async getOwnerInformation() {
      const token = this.$cookies.get('owner.token')
      const headers = { Authorization: `Bearer ${token}` }
      await this.$axios.get('/api/v1/owners/', { headers: headers })
      .then((response) => {
        this.ownerId = response.data.owner.id
        console.log(this.ownerId)
      })
      .catch((error) => {
        console.log(error)
      })
    },
  },
  created() {
    this.getOwnerInformation()
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