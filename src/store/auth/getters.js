export const getters = {
  isAuthenticated: (state) => {
    if (localStorage.getItem('user-token') != null) {
      state.status = 'login'
    }
    return !!localStorage.getItem('user-token')
  },
  authStatus: state => state.status
}
