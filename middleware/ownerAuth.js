export default function ({ store, redirect, $axios, app }) {
  if (!store.state.ownerAuth.owner_user) {
    redirect('/owner/login')
  } 
}