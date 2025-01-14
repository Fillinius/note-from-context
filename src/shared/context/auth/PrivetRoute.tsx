import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import { ProviderProps } from '../../types/type'

export const PrivetRoute = ({ children }: ProviderProps) => {
  const auth = useAuth()

  const location = useLocation()
  if (auth === null) return
  if (auth.user === null) {
    return <Navigate to="/signIn" state={{ from: location.pathname }} replace />
  }
  return children
}
