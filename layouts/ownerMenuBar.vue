<template>
  <v-app>
    <!-- サイドバー部分  -->
    <v-navigation-drawer class="sidebar white--text" v-model="drawer" fixed app>
      <v-list>
        <v-list-item class="white--text" router exact to="/owner">
          <v-list-item-action>
            <v-icon class="white--text">mdi-calendar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>予約管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="white--text" router to="/owner/shop">
          <v-list-item-action>
            <v-icon class="white--text">mdi-store</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>店舗管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="logout()" router exact class="white--text">
          <v-list-item-action>
            <v-icon class="white--text">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><a class="logout white--text">ログアウト</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ヘッダー部分 -->
    <v-app-bar :clipped-left="clipped" fixed app class="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <h1 class="menu-title">Rese</h1>
      <v-spacer />
        <div v-if="user">
          <div class="mr-5 user">{{ user.name }}</div>
        </div>
    </v-app-bar>
    <!-- コンテンツ部分 -->
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      name: "",
    }
  },
  computed: {
    user() {
      return this.$store.state.ownerAuth.owner_user
    }
  },
  methods: {
    async getOwnerInformation() {
      await this.$store.dispatch('ownerAuth/currentUser')
    },
    async logout() {
      await this.$store.dispatch('ownerAuth/logout')
      window.location.href = '/owner/login'
    },
  },
  created() {
    this.getOwnerInformation()
  }
}
</script>

<style scoped>
  .menu-title {
    font-size: 24px;
    font-weight: normal;
  }
  .sidebar {
    background-color: #011849!important;
  }
  .v-list {
      color: inherit;
      margin-bottom: 10px;
  }
  li {
    list-style: none;
  }
</style>