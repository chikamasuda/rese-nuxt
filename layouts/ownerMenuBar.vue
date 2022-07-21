<template>
  <v-app>
    <!-- サイドバー部分  -->
    <v-navigation-drawer
      class="sidebar white--text"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="blue darken-4"
      fixed
      app
    >
      <v-list>
        <v-list-item-title class="text-h6 text-center pt-3 pb-3">
            Rese店舗代表者画面
        </v-list-item-title>
        <v-divider></v-divider>
        <v-list-item class="white--text" v-for="(item, i) in items" :key="i" :to="item.to" router>
          <v-list-item-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <h1 class="menu-title">Rese</h1>
      <v-spacer />
        <div v-if="user">
          <div class="mr-5 user">{{ user }}</div>
        </div>
    </v-app-bar>
    <!-- コンテンツ部分 -->
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  namespaced: true, 
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      user: '',
      items: [
        {
          icon: 'mdi-store',
          title: '店舗管理',
          to: '/owner/shop'
        },
        {
          icon: 'mdi-pencil-plus',
          title: '予約管理',
          to: '/owner/reservation'
        },
      ],
      miniVariant: false,
      uid: null,
      name: "",
    }
  },
  methods: {
    async getOwnerInformation() {
      const token = this.$cookies.get('owner.token')
      const headers = { Authorization: `Bearer ${token}` }
      await this.$axios.get('/api/v1/owners/', { headers: headers })
      .then((response) => {
        console.log(response)
        this.user = response.data.owner.name 
      })
      .catch((error) => {
        this.$router.push('/owner/login')
        console.log(error)
      })
    },
    async logout() {
      const token = this.$cookies.get('owner.token')
      const headers = { Authorization: `Bearer ${token}` }
      this.$axios.delete('/api/v1/owners/logout', { headers: headers })
      .then((response) => {
        console.log(response)
        document.cookie = "admin.token=; max-age=0";
        this.$router.replace('/owner/login')
      })
      .catch((error) => {
        console.log(error)
      })
    },
  },
  created() {
    this.getOwnerInformation()
  }
}
</script>

<style scoped>
  .menu-title {
    font-size: 20px;
    font-weight: normal;
  }
  .v-navigation-drawer .v-list:not(.v-select-list) {
    background: inherit;
  }
  .v-list {
      color: inherit;
      margin-bottom: 10px;
  }
  li {
    list-style: none;
  }
</style>