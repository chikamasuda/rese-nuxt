<template>
  <div>
    <AdminHeader />
    <div class="admin-card-area">
      <h2 class="admin-title">店舗代表者作成</h2>
      <v-card class="admin-card pb-2">
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