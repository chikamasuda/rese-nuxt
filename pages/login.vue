<template>
<div>
  <div class="align-center d-flex justify-space-between mt-4">
    <Logo />
    <LoginMenu />
  </div>
  <v-card class="mx-auto v-card pb-2 bg-blue">
    <v-card-title class="blue accent-4 white--text">Login</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form @submit.prevent="login" method="POST">
        <v-text-field type="email" v-model="form.email" dense required prepend-icon="mdi-email"/>
        <v-text-field type="password" v-model="form.password" dense required prepend-icon="mdi-lock"/>
        <span class="red--text">{{ error }}</span>
        <div class="text-right mt-2 align-center">
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
      error: '',
    };
  },
  methods: {
    async login() {
        this.$auth.loginWith('local', { data:this.form })
        .then((response) => {
          console.log(response);
          this.$router.push('/');
        })
        .catch((error) => {
          this.emailError = error.response.data.data.errors['email'];
          this.passwordError = error.response.data.data.errors['password'];
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.v-card {
  margin-top: 150px;
  width: 40%;
}
a {
  text-decoration: none;
}
.menu-link {
  color: #333;
}
</style>