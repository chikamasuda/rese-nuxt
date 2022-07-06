<template>
<div>
  <div class="align-center d-flex justify-space-between mt-4">
    <Logo />
    <LoginMenu />
  </div>
  <v-card class="mx-auto v-card bg-blue text-center">
    <p class="thanks-text">ご予約ありがとうございます。</p>
    <div class="text-center">
      <v-btn small class="blue accent-4 white--text mt-5" type="submit" to="/">戻る</v-btn>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
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

<style>
.v-picker__title {
  color: #FFFFFF;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 16px;
  display: none!important;
}
</style>