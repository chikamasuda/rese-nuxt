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
        <div v-if="shop">
          <div class="mr-5 user">{{ shop.name }}</div>
        </div>
        <div v-if="!shop && user">
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
  middleware: 'ownerAuth',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      user: [],
      shop: {},
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch('ownerAuth/logout')
      .then((response) => {
        window.location.href = '/owner/login'
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async getOwnerInformation() {
      await this.$axios.get('/api/v1/owners')
      .then((response) => {
        this.user = response.data.owner
        this.$axios.get(`/api/v1/owners/${this.user.id}/shops`)
        .then((response) => {
          this.shop = response.data.shop[0]
          console.log(shop)
        })
        .catch((error) => {
          console.log(error.response)
        })
      })
      .catch((error) => {
        console.log(error.response)
      })
    },
  },
  created() {
    this.getOwnerInformation()
    if (this.$store.state.ownerAuth.owner_user) {
      const owner_token = this.$cookies.get('owner_token')
      this.$axios.defaults.headers.common['Authorization'] =  `Bearer ${owner_token}`
    }
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