const state = {
  token: null,
}

const getters = {
  isLogined: (state) => !!state.token,
}