import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '@redux/slices/auth'

function FormLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  async function handleLogin() {
    dispatch(login({
      username,
      password,
      dispatch
    }))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user name"
        value={username}
        onInput={(e) => setUsername(e.target.value)} />
      <br />
      <input
        type="text"
        placeholder="Enter user password"
        value={password}
        onInput={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default FormLogin