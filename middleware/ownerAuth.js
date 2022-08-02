export default function ({ store, redirect, $axios, app }) {
  if (!store.state.ownerAuth.owner_user) {
    redirect('/owner/login')
  } else {
    const owner_token = app.$cookies.get('owner_token')
    $axios.defaults.headers.common['Authorization'] =  `Bearer ${owner_token}`
  }
}