<template>
  <div>
    <AdminHeader />
    <div class="admin-card-area">
      <h2 class="admin-title">メール送信</h2>
      <v-card class="admin-card">
        <v-card-title>メール作成</v-card-title>
        <v-divider></v-divider>
        <v-alert type="success" color="green" v-if="alert" dismissible v-model="alert">メールを送信しました。</v-alert>
          <v-simple-table>
            <v-simple-table class="table reservation-table">
              <tbody>
                <tr>
                  <th class="text-left bg-gray border-top">ユーザー名</th>
                  <td>{{ mailUser.name }}</td>
                </tr>
                <tr>
                  <th class="text-left bg-gray">メールアドレス</th>
                  <td>{{ mailUser.email }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-simple-table>
          <v-card-text>
            <v-form @submit.prevent="createMail()" method="POST">
              <label for="">タイトル</label>
              <v-text-field v-model="title" outlined dense class="mb-3"></v-text-field>
              <label for="">メール本文</label>
              <v-textarea v-model="content" outlined></v-textarea>
              <div class="text-center mt-3">
                <v-btn class="black white--text mr-2" type="submit" to="/admin">戻る</v-btn>
                <v-btn class="primary" type="submit">メール送信</v-btn>
              </div>
            </v-form>
          </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'adminAuth',
  data() {
    return {
      user: '',
      userLists: [],
      mailUser: '',
      content: '',
      title: '',
      alert: false,
    };
  },
  methods: {
    async getAdminInformation() {
      await this.$axios.get('/api/v1/admins')
      .then((response) => {
        this.user = response.data.admin
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async getUserInformation() {
      await this.$axios.get('/api/v1/admins/mails/user-list')
      .then((response) => {
        this.userLists = response.data.users
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async getUserDetailInformation() {
      await this.$axios.get(`api/v1/admins/mails/user/${this.$route.query.id}`)
      .then((response) => {
        this.mailUser = response.data.user[0]
        console.log(this.mailUser)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async createMail() { 
      const data = {
        email: this.mailUser.email,
        title: this.title,
        content: this.content,
      }
      await this.$axios.post('/api/v1/admins/mails/send', data)
      .then((response) => {
        this.title = '',
        this.content = '',
        this.alert = true
      })
      .catch((error) => {
        console.log(error.response)
      })
    }
  },
  created() {
    this.getAdminInformation()
    this.getUserInformation()
    this.getUserDetailInformation()
  }
}
</script>