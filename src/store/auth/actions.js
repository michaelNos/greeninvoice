import axios from 'axios'

export const actions = {
  AUTH_REQUEST: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      let url = 'https://sandbox.d.greeninvoice.co.il/api/v1/account/token'
      axios({url: url, data: user, method: 'POST'})
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('user-token', token)
          commit('AUTH_SUCCESS', token)
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('user-token')
          reject(err)
        })
    })
  },
  AUTH_LOGOUT: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit('AUTH_LOGOUT')
      localStorage.removeItem('user-token')
      resolve()
    })
  }
}
