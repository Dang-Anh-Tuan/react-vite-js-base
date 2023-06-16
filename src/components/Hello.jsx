import { useDispatch, useSelector } from "react-redux"
import { login } from "@redux/slices/auth"

function Hello() {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  
  function handleLogin() {
    dispatch(login())
  }
  
  return (
    <>
      <h1>Hello</h1>
      <h3>Token is : {token}</h3>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Hello