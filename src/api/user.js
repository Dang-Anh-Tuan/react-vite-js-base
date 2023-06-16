
const USER_PREFIX = {
  USER: '/user',
}

const apiUser = (axios) => ({
  getUser(id) {
    return axios.get(`${USER_PREFIX.USER}/${id}`)
  },
})

export default apiUser