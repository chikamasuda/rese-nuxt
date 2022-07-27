export const state = () => ({
  owner_user: null
})

export const mutations = {
  setOwnerUser (state, owner_user) {
    state.owner_user = owner_user
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    const response = await this.$axios.post('/api/v1/owners/login', { email, password })
    .catch((error) => {
      throw error
    })
    commit('setOwnerUser', response)
  },

  async currentUser ({ commit }) {
    await this.$axios.get('/api/v1/owners')
    .then((response) => {
      commit('setOwnerUser', response.data.owner)
    })
    .catch((error) => {
      commit('setOwnerUser', null)
    })
  },

  async logout({ commit }) {
    await this.$axios.post('/api/v1/owners/logout')
    .catch((error) => {
      throw error
    })
    commit('setOwnerUser', null)
  }
}