<template>
  <div class="text-right">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            dark
            v-bind="attrs"
            v-on="on"
            class="black--text"
          >
            {{ $auth.user.name }}
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link to="/">
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>マイページ</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style>

</style>