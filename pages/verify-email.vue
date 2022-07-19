<template>
<div>
  <div class="align-center d-flex justify-space-between mt-4">
    <Logo />
    <LoginMenu />
  </div>
  <v-card class="mx-auto message-card bg-blue text-left">
    <p class="thanks-text">メール認証が完了しました。<br>ログイン画面からログインをお願いします。</p>
    <div class="text-center">
      <v-btn small class="blue accent-4 white--text mt-5" type="submit" to="/login">ログインする</v-btn>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
}
</script>