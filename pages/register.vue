<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4">
      <Logo />
      <PreLoginMenu />
    </div>
    <v-card class="mx-auto v-card pb-2 bg-blue">
      <v-card-title class="blue accent-4 white--text">Register</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form @submit.prevent="register" method="POST">
          <v-text-field type="text" v-model="name" dense required prepend-icon="mdi-account" placeholder="Username"/>
          <v-text-field type="email" v-model="email" dense required prepend-icon="mdi-email" placeholder="Email"/>
          <v-text-field type="password" v-model="password" dense required prepend-icon="mdi-lock" placeholder="Password"/>
          <span class="red--text">{{ error }}</span>
          <div class="text-right mt-2 align-center">
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
      error: '',
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("/api/v1/users/registration", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/thanks");
      } catch {
        this.error = "登録内容をご確認ください。"
      }
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
</style>