import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../feature/context/AuthProvider'
import { AuthProp } from '../../feature/type/AuthProp'

const SignOut = () => {
  const auth: AuthProp | null = useAuth()
  const navigate = useNavigate()

  if (auth !== null) {
    return auth.signOut(() => {
      navigate('/signIn')
    })
  }

  return null
}

export default SignOut
