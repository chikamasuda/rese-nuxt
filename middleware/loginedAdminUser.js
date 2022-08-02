export default function ({ store, redirect, app, $axios }) {
  if (store.state.adminAuth.admin_user) {
    const admin_token = app.$cookies.get('admin_token')
    $axios.defaults.headers.common['Authorization'] =  `Bearer ${admin_token}`
    redirect('/admin')
  }
}