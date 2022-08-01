<template>
  <div>
    <v-toolbar color="white" class="pr-3">
      <v-toolbar-title class="title ml-4">Rese管理画面</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>メニュー</div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on"><v-icon class="">mdi-chevron-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item><v-list-item-title><v-icon class="mr-2">mdi-account</v-icon>{{ user.name }}</v-list-item-title></v-list-item>
          <v-divider></v-divider>
          <v-list-item to="/admin" router exact><v-list-item-title>メール作成</v-list-item-title></v-list-item>
          <v-list-item to="/admin/owner"><v-list-item-title>店舗代表者作成</v-list-item-title></v-list-item>
          <v-list-item @click="logout()"><v-list-item-title>ログアウト</v-list-item-title></v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
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
    async logout() {
      const admin_token = this.$cookies.get('admin_token')
      await this.$store.dispatch('adminAuth/logout', { headers: { Authorization: `Bearer ${admin_token}` } })
      window.location.href = '/admin/login'
    },
    async getAdminInformation() {
      const admin_token = this.$cookies.get('admin_token')
      await this.$axios.get('/api/v1/admins', { headers: { Authorization: `Bearer ${admin_token}` } })
      .then((response) => {
        this.user = response.data.admin
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async getUserInformation() {
      const admin_token = this.$cookies.get('admin_token')
      await this.$axios.get('/api/v1/admins/mails/user-list', { headers: { Authorization: `Bearer ${admin_token}`} })
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