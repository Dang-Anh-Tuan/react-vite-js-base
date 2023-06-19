import { useAuth } from '@hooks/auth'
import { useState } from 'react'


function FormLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dataAuthHook = {
    formData: {
      username,
      password
    }
  }
  
  const { login } = useAuth(dataAuthHook)

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
      <button onClick={async () => { await login() }}>Login</button>
    </div>
  )
}

export default FormLogin