import { createContext, useContext, useState } from 'react'
import { ProviderProps, TUser } from '../../types/type'
import { auth } from '../../../../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router'

interface IAuthContext {
  currentUser: TUser | null
  signUp: (data: TUser) => void
  signIn: (data: TUser, callback: () => void) => void
  signOut: (callback: () => void) => void
  error: string | null
  isLoading: boolean
}
const AuthContext = createContext<IAuthContext | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: ProviderProps) => {
  // Блок регистрации посредством firebase
  const [currentUser, setCurrentUser] = useState<TUser | null>(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()

  // функция регистрации
  async function signUp(data: TUser | null) {
    if (!data) return 'Err'
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        // Signed up
        setCurrentUser({
          email: user.email,
          id: user.uid,
        })
        setError(null)
        setLoading(false)
        navigate('/notes')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
      })
  }

  async function signIn(data: TUser) {
    if (!data) return 'Err'
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        setCurrentUser({
          email: user.email,
          id: user.uid,
        })
        setError(null)
        setLoading(false)
        navigate('/notes')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setError(errorCode)
        console.log(errorMessage)
      })
  }
  function signOut() {
    setCurrentUser(null)
    setError(null)
    setLoading(false)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, signIn, signUp, signOut, error, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}
