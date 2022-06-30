<template>
<div>
  <div class="mt-5">
    <img class="logo-image" alt="logo" src="/image/logo.png" width="140">
  </div>
  <v-card class="mx-auto v-card bg-blue text-center">
    <p class="thanks-text">会員登録ありがとうございます。</p>
    <div class="text-center" @click="toLogin()">
      <v-btn small class="blue accent-4 white--text mt-5" type="submit">ログインする</v-btn>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
.v-card {
  padding: 80px 20px;
  margin-top: 150px;
  width: 35%;
}
.thanks-text {
  font-size: 22px;
  font-weight: medium;
  color: #000;
}
</style>