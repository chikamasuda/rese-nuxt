export const actions = {
  async nuxtClientInit ({ commit }, context) {
    await this.$axios.get('/api/v1/admins')
      .then(response => commit('adminAuth/setAdminUser', response.data.admin))
      .catch(() => commit('adminAuth/setAdminUser', null))
    
    await this.$axios.get('/api/v1/owners')
      .then(response => commit('ownerAuth/setAdminUser', response.data.owner))
      .catch(() => commit('ownerAuth/setOwnerUser', null))
  }
}