<template>
<div>
  <v-card class="mx-auto auth-card pb-2 bg-blue">
    <v-card-title>Admin Login</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form @submit.prevent="login" method="POST">
        <v-text-field type="email" v-model="email" dense required prepend-icon="mdi-email"/>
        <ul class="red--text ml-2" v-for="error in emailError" :key="error.id">
          <li>{{ error }}</li>
        </ul>
        <v-text-field type="password" v-model="password" dense required prepend-icon="mdi-lock" class="mt-3"/>
        <ul class="red--text ml-2" v-for="error in passwordError" :key="error.id">
          <li>{{ error }}</li>
        </ul>
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
        password: this.password,
        withCredentials: true
      })
      .then((response) => {
          this.$router.push('/admin')
      })
      .catch((error) => {
        console.log(error)
        if(error.response.status == "401") {
          this.error = error.response.data.message
        } else {
          this.emailError = error.response.data.data.errors['email']
          this.passwordError = error.response.data.data.errors['password']
        }
      })
    },
  },
}
</script>