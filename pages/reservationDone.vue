<template>
<div>
  <div class="align-center d-flex justify-space-between mt-4">
    <Logo />
    <LoginMenu />
  </div>
  <v-card class="mx-auto message-card bg-blue text-center">
    <p class="thanks-text">ご予約ありがとうございます。</p>
    <div class="text-center">
      <v-btn small class="blue accent-4 white--text mt-5" type="submit" to="/">戻る</v-btn>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>