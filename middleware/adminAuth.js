export default function ({ store, redirect }) {
  if (!store.state.adminAuth.admin_user) {
    redirect('/admin/login')
  }
}