<template>
<div>
  <div class="align-center d-flex justify-space-between mt-4">
    <Logo />
    <LoginMenu />
  </div>
  <v-card class="mx-auto auth-card pb-2 bg-blue">
    <v-card-title class="blue accent-4 white--text">Login</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form @submit.prevent="login" method="POST">
        <v-text-field type="email" v-model="form.email" dense required prepend-icon="mdi-email"/>
        <ul class="red--text ml-2" v-for="error in emailError" :key="error.id">
          <li>{{ error }}</li>
        </ul>
        <v-text-field type="password" v-model="form.password" dense required prepend-icon="mdi-lock" class="mt-3"/>
        <ul class="red--text ml-2" v-for="error in passwordError" :key="error.id">
          <li>{{ error }}</li>
        </ul>
        <p class="red--text ml-5 pl-3">{{ error }}</p>
        <div class="text-right mt-5 align-center">
          <NuxtLink to="/register" class="mr-5">会員登録はこちら</NuxtLink>
          <v-btn class="blue accent-4 white--text" type="submit">ログイン</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  layout: 'header',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      emailError: [],
      passwordError: [],
      error: '',
    };
  },
  methods: {
    async login() {
        this.$auth.loginWith('local', { data:this.form })
        .then((response) => {
          console.log(response);
          window.location.href = '/'
        })
        .catch((error) => {
          console.log(error)
          if(error.response.status == "401") {
            this.error = error.response.data.message
          }
          this.emailError = error.response.data.data.errors['email'];
          this.passwordError = error.response.data.data.errors['password'];
        })
    },
  },
}
</script>