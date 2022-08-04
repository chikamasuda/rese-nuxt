<template>
  <div>
    <v-card class="mx-auto message-card bg-blue text-center">
    <p class="thanks-text"> 店舗登録が完了しました。</p>
    <div class="text-center">
      <v-btn small class="blue accent-4 white--text mt-5" type="submit" to="/owner/shop">店舗管理TOPに戻る</v-btn>
    </div>
  </v-card>
  </div>
</template>


<script>
export default {
  layout: 'ownerMenuBar',
  middleware: 'ownerAuth',
}
</script>

<style>

</style>