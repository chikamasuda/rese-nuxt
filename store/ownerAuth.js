export const state = () => ({
  owner_user: null
})

export const mutations = {
  setOwnerUser (state, owner_user) {
    state.owner_user = owner_user
  }
}

export const actions = {
  async login({ commit }, { email, password }) {
    const response = await this.$axios.post('/api/v1/owners/login', { email, password })
    .catch((error) => {
      throw error
    })
    commit('setOwnerUser', response)
    this.$cookies.set('owner_token', response.data.token)
  },

  async logout({ commit }) {
    const owner_token = this.$cookies.get('owner_token')
    await this.$axios.delete('/api/v1/owners/logout', { headers: { Authorization: `Bearer ${owner_token}` }})
    .catch((error) => {
      throw error
    })
    commit('setOwnerUser', null)
  }
}