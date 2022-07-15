<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4">
      <Logo />
      <LoginMenu />
    </div>
    <v-card class="mx-auto v-card pb-2 bg-blue">
      <v-card-title class="blue accent-4 white--text">Register</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form @submit.prevent="register" method="POST">
          <v-text-field type="text" v-model="name" dense required prepend-icon="mdi-account" placeholder="Username"/>
          <ul class="red--text ml-2" v-for="error in nameError" :key="error.id">
            <li>{{ error }}</li>
          </ul>
          <v-text-field type="email" class="mt-3" v-model="email" dense required prepend-icon="mdi-email" placeholder="Email"/>
          <ul class="red--text ml-2" v-for="error in emailError" :key="error.id">
            <li>{{ error }}</li>
          </ul>
          <v-text-field type="password" class="mt-3" v-model="password" dense required prepend-icon="mdi-lock" placeholder="Password"/>
          <ul class="red--text ml-2" v-for="error in passwordError" :key="error.id">
            <li>{{ error }}</li>
          </ul>
          <span class="red--text">{{ error }}</span>
          <div class="text-right mt-5 align-center">
            <NuxtLink to="/login" class="mr-5 login-link">ログインはこちら</NuxtLink>
            <v-btn class="blue accent-4 white--text" type="submit">会員登録</v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      nameError: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    async register() {
        await this.$axios.post("/api/v1/users/registration", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$router.push('/thanks');
        })
        .catch((error) => {
          this.nameError = error.response.data.data.errors['name']
          this.emailError = error.response.data.data.errors['email']
          this.passwordError = error.response.data.data.errors['password']
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
.menu-link {
  text-decoration: none;
  color: #333;
}
.login-link {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .v-card {
    margin-top: 50px;
    width: 100%;
  }
}
</style>