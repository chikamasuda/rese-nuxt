export const actions = {
  async nuxtClientInit({ commit }, context) {
    const admin_token = this.$cookies.get('admin_token')
    await this.$axios.get('/api/v1/admins',  { headers: { Authorization: `Bearer ${admin_token}` } }) 
      .then(response => commit('adminAuth/setAdminUser', response.data.admin))
      .catch(() => commit('adminAuth/setAdminUser', null))
    
    await this.$axios.get('/api/v1/owners')
      .then(response => commit('ownerAuth/setAdminUser', response.data.owner))
      .catch(() => commit('ownerAuth/setOwnerUser', null))
  }
}