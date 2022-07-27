export default function ({ store, redirect }) {
  if (store.state.ownerAuth.owner_user) {
    redirect('/owner')
  }
}