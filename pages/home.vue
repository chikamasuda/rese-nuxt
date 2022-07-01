<template>
  <div class="top-wrapper mt-4">
    <Logo />
    <div class="text-center wrapper">
      <h1>Rese</h1>
      <div class="d-flex justify-center mt-5">
        <v-btn class="mr-5" to="/register" color="blue accent-4 white--text">会員登録</v-btn>
        <v-btn to="/login" color="blue accent-4 white--text">ログイン</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu-link {
  color: #333;
  text-decoration: none;
}
.v-main__wrap {
  position: relative;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>

