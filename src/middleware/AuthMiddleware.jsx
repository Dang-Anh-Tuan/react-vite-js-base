import { useAuth } from '@hooks/auth'
import { Navigate } from "react-router-dom";

export default function CheckAuthen({ children, needAuth }) {
  const { token } = useAuth()
  const isLoggined = !!token
  
  if (isLoggined) {
    if (!needAuth) {
      return <Navigate to="/" />;
    }
  } else if (needAuth) {
    return <Navigate to="/login" />;
  }
  
  return children
}