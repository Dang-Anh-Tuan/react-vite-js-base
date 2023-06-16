
const AUTH_PREFIX = {
  LOGIN: '/login',
  LOGOUT: '/logout',
}

const apiAuth = (axios) => ({
  login(formData) {
    return axios.get(AUTH_PREFIX.LOGIN, formData)
  },

  logout(formData) {
    return axios.post(AUTH_PREFIX.LOGOUT, formData)
  }
})

export default apiAuth