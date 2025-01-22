import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../shared/context/auth/AuthProvider'

const SignOut = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  if (auth !== null) {
    return auth.signOut(() => {
      navigate('/login')
    })
  }

  return null
}

export default SignOut
