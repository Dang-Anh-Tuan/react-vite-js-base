import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { commonInstance, factories } from '@plugin/axios'
import { useDispatch } from "react-redux";
import { setUser } from '@redux/slices/auth'

export const useAuth = function (data) {
  const formData = data?.formData || null
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirectPage = queryParams.get('redirectPage') || '/';

  const token = Cookies.get('access_token')
  const currentUser = JSON.parse(Cookies.get('auth_user') || '{}')

  function cookieRemoveAuthInfo() {
    Cookies.remove('access_token')
    Cookies.remove('auth_user')
    Cookies.remove('refresh_token')
  }

  async function login() {
    if (formData) {
      const response = await factories.auth.login({
        username: formData.username,
        password: formData.password
      })
      if (response?.status === 200 || response?.status === 201) {
        const token = response?.data?.access_token
        const refreshToken = response?.data?.refresh_token
        Cookies.set('access_token', token)
        Cookies.set('refresh_token', refreshToken)

        commonInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

        const respFetchUser = await factories.user.getUser(token)
        if (respFetchUser?.status === 200 || respFetchUser?.status === 201) {
          const user = respFetchUser?.data
          Cookies.set('auth_user', JSON.stringify(user))
          dispatch(setUser(user))
          navigate(redirectPage);
        } else {
          cookieRemoveAuthInfo()
          // TODO : show toast message
        }
      } else {
        // TODO : show toast error
      }
    }
  }

  function logout() {
    // TODO : Call API logout
    cookieRemoveAuthInfo()
    navigate("/login");
  }

  return {
    token,
    currentUser,
    login,
    logout
  }
}
