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
          <v-list-item to="/admin/createOwner"><v-list-item-title>店舗代表者作成</v-list-item-title></v-list-item>
          <v-list-item @click="logout()"><v-list-item-title>ログアウト</v-list-item-title></v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <div class="admin-card-area">
      <h2 class="admin-title">メール送信</h2>
      <v-card class="admin-card pb-2">
        <v-card-title>ユーザー一覧</v-card-title>
        
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
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch('adminAuth/logout')
      window.location.href = '/admin/login'
    },
    async getAdminInformation() {
      await this.$axios.get('/api/v1/admins')
      .then((response) => {
        this.user = response.data.admin
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async createOwner() { 
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      await this.$axios.post('/api/v1/owners', data)
      .then((response) => {
        this.name = '',
        this.email = '',
        this.password = '',
        this.alert = true
      })
      .catch((error) => {
        console.log(error.response)
      })
    }
  },
  created() {
    this.getAdminInformation()
  }
}
</script>