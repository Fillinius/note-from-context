import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export const PrivetRoute = ({ children }) => {
  const auth = useAuth()

  const location = useLocation()
  if (auth === null) return
  if (auth.user === null) {
    return <Navigate to="/signIn" state={{ from: location.pathname }} replace />
  }
  return children
}
