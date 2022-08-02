export const state = () => ({
  admin_user: null,
})

export const mutations = {
  setAdminUser(state, admin_user) {
    state.admin_user = admin_user
  },
}

export const actions = {
  async login ({ commit }, { email, password },) {
    const response = await this.$axios.post('/api/v1/admins/login', { email, password })
    .catch((error) => {
      throw error
    })
    commit('setAdminUser', response)
    this.$cookies.set('admin_token', response.data.token)
  },

  async logout({ commit }) {
    const admin_token = this.$cookies.get('admin_token')
    await this.$axios.delete('/api/v1/admins/logout')
    .catch((error) => {
      console.log(error)
    })
    commit('setAdminUser', null)
  }
}