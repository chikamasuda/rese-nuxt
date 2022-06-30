<template>
  <div class="text-right mt-4">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="white" dark v-bind="attrs" v-on="on" class="black--text">
          メニュー
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link to="/home">
          <v-list-item-title>ホーム</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/register">
          <v-list-item-title>会員登録</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-title>ログイン</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>