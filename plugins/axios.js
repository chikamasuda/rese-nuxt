export default function ({ $axios, app, store, $auth}) {
  $axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
}