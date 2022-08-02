export default function ({ store, redirect }) {
  if (store.state.ownerAuth.owner_user) {
    const owner_token = app.$cookies.get('owner_token')
    $axios.defaults.headers.common['Authorization'] =  `Bearer ${owner_token}`
    redirect('/owner')
  }
}