export const state = () => ({
  admin_user: null
})

export const mutations = {
  setAdminUser (state, admin_user) {
    state.admin_user = admin_user
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    const response = await this.$axios.$post('/api/v1/admins/login', { email, password })
    .catch((error) => {
      throw error
    })
    commit('setAdminUser', response)
  },

  async currentUser ({ commit }) {
    await this.$axios.get('/api/v1/admins')
    .then((admin_user) => {
      commit('auth/setAdminUser', admin_user)
    })
    .catch((error) => {
      commit('auth/setAdminUser', null)
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