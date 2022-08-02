export const actions = {
  async nuxtClientInit({ commit }) {
    const admin_token = this.$cookies.get('admin_token')
    await this.$axios.get('/api/v1/admins',  { headers: { Authorization: `Bearer ${admin_token}` } }) 
      .then(response => commit('adminAuth/setAdminUser', response.data.admin))
      .catch(() => commit('adminAuth/setAdminUser', null))
    
    const owner_token = this.$cookies.get('owner_token')
    await this.$axios.get('/api/v1/owners', { headers: { Authorization: `Bearer ${owner_token}` } })
      .then(response => commit('ownerAuth/setOwnerUser', response.data.owner))
      .catch(() => commit('ownerAuth/setOwnerUser', null))
  }
}