<template>
  <div>
    <v-toolbar color="white" class="pr-3">
      <v-toolbar-title class="title ml-4">Rese管理画面</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>{{ user }}</div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on"><v-icon class="">mdi-chevron-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout()"><v-list-item-title>ログアウト</v-list-item-title></v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <div>
      <v-card class="admin-card pb-2">
        <v-card-title>店舗代表者作成</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form @submit.prevent="createOwner()" method="POST">
            <v-alert type="success" color="green" v-if="alert" dismissible v-model="alert">店舗代表者を作成しました。</v-alert>
            <label for="">名前</label>
            <v-text-field type="text" v-model="name" outlined dense class="mb-3"/>
            <label for="">Eメールアドレス</label>
            <v-text-field type="email" v-model="email" outlined dense class="mb-3"/>
            <label for="">パスワード</label>
            <v-text-field type="password" v-model="password" outlined dense/>
            <div class="text-center mt-5">
              <v-btn class="primary" type="submit">店舗代表者を作成</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      user:'',
      name: '',
      email: '',
      password: '',
      alert: false,
    };
  },
  methods: {
    async logout() {
      const token = this.$cookies.get('admin.token')
      const headers = { Authorization: `Bearer ${token}` }
      this.$axios.delete('/api/v1/admins/logout', { headers: headers })
      .then((response) => {
        console.log(response)
        document.cookie = "admin.token=; max-age=0";
        this.$router.replace('/admin/login')
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async getAdminInformation() {
      const token = this.$cookies.get('admin.token')
      const headers = { Authorization: `Bearer ${token}` }
      await this.$axios.get('/api/v1/admins/', { headers: headers })
      .then((response) => {
        console.log(response)
        this.user = response.data.admin.name 
      })
      .catch((error) => {
        if(error.response.status == "401") {
          this.$router.replace('/admin/login')
        }
        console.log(error)
      })
    },
    async createOwner() { 
      const token = this.$cookies.get('admin.token')
      const headers = { Authorization: `Bearer ${token}` }
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      await this.$axios.post('/api/v1/owners', data, { headers: headers })
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