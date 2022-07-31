<template>
<div>
  <v-card class="mx-auto auth-card pb-2 bg-blue">
    <v-card-title>Admin Login</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form @submit.prevent="login" method="POST">
        <v-text-field type="email" v-model="email" dense required prepend-icon="mdi-email"/>
        <v-text-field type="password" v-model="password" dense required prepend-icon="mdi-lock" class="mt-3"/>
        <p class="red--text ml-5 pl-3">{{ error }}</p>
        <div class="text-center mt-5 align-center">
          <v-btn class="blue darken-2 white--text" type="submit">ログイン</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  middleware: 'loginedAdminUser',
  data() {
    return {
      email: '',
      password: '',
      emailError: [],
      passwordError: [],
      error: '',
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch('adminAuth/login', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        this.$axios.get('/api/v1/admins')
        .then((response) => {
          this.$router.push('/admin')
        })
        .catch((error) => {
          this.error = "エラーです。"
        })
      })
      .catch((error) => {
        this.error = "エラーです。"
      })
    },
  },
}
</script>