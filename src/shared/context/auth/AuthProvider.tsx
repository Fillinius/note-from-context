import { createContext, useContext, useState } from 'react'

import { KEYUSER } from '../../../feature/registration/LoginForm'
import { ProviderProps, TUser } from '../../types/type'
export interface NewUserProp {
  name: string
  email: string
  password: string
}
interface IAuthContext {
  user: TUser | null
  signIn: (data: TUser, callback: () => void) => void
  signOut: (callback: () => void) => void
}
const AuthContext = createContext<IAuthContext | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState(() => localStorage.getItem(KEYUSER) || null)

  const signIn = (newUser: TUser, callback: () => void) => {
    setUser(newUser)
    localStorage.setItem(KEYUSER, newUser)
    callback()
  }

  const signOut = (callback: () => void) => {
    console.log('singOut')

    setUser(null)
    localStorage.removeItem(KEYUSER)
    callback()
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
