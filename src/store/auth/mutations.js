export const mutations = {
  AUTH_REQUEST: (state) => {
    state.status = 'loading'
  },
  AUTH_SUCCESS: (state, token) => {
    state.status = 'login'
    state.token = token
  },
  AUTH_ERROR: (state) => {
    state.status = 'error'
  },
  AUTH_LOGOUT: (state) => {
    state.status = 'logout'
    state.token = ''
  }
}
