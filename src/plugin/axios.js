import axios from "axios"
import Cookies from "js-cookie"
import apiAuth from "@api/auth"
import apiUser from "@api/user"

const commonInstance = axios.create({
  baseURL:
    import.meta.env.VITE_ENV !== 'production'
      ? import.meta.env.VITE_BASE_URL_PRODUCT
      : import.meta.env.VITE_BASE_URL_DEVELOP,
})

const accessToken = Cookies.get('access_token')

commonInstance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      Object.assign(config.headers, {
        Authorization: `Bearer ${accessToken}`,
      })
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

commonInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return response
    }
  },
  (error) => {
    if (error.response) {
      // handle error
      // TODO: logout when 401
    }
    return Promise.reject(error.response.data)
  }
)

const factories = {
  auth: apiAuth(commonInstance),
  user: apiUser(commonInstance),
}


export { commonInstance, factories }