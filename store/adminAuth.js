export const state = () => ({
  admin_user: null
})

export const mutations = {
  setAdminUser (state, admin_user) {
    state.admin_user = admin_user
  }
}

export const actions = {
  async login({ commit }, { email, password },) {
    await this.$axios.get('/sanctum/csrf-cookie').then(async (res) => {
      const response = await this.$axios.post('/api/v1/admins/login', { email, password })
        .catch((err) => {
          throw err
        })
      commit('setAdminUser', response)
    })
  },

  async logout({ commit }) {
    await this.$axios.post('/api/v1/admins/logout')
    .catch((error) => {
      throw error
    })
    commit('setAdminUser', null)
  }
}