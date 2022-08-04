<template>
  <div>
    <AdminHeader />
    <div class="admin-card-area">
      <h2 class="admin-title">メール送信</h2>
      <v-card class="admin-card">
        <v-card-title>ユーザー一覧</v-card-title>
          <v-simple-table>
            <thead class="">
              <tr>
                <th class="text-left" width="10%">
                  ID
                </th>
                <th class="text-left" width="70%">
                  名前
                </th>
                <th class="text-left" width="20%">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="pb-5 link-items" v-for="userList in userLists" :key="userList.id">
                <td>{{ userList.id }}</td>
                <td>{{ userList.name }}</td>
                <td class="text-right"><v-btn small color="primary" :to="'/admin/mail?id=' + userList.id">メール送信</v-btn></td>
              </tr>
            </tbody>
          </v-simple-table>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'adminAuth',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      alert: false,
      user: '',
      userLists: []
    };
  },
  methods: {
    async getAdminInformation() {
      await this.$axios.get('/api/v1/admins')
      .then((response) => {
        this.user = response.data.admin
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async getUserInformation() {
      await this.$axios.get('/api/v1/admins/mails/user-list')
      .then((response) => {
        this.userLists = response.data.users
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created() {
    this.getAdminInformation()
    this.getUserInformation()
  }
}
</script>