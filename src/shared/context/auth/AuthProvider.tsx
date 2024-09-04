import { createContext, useContext, useState } from 'react'

import { KEYUSER } from '../../../feature/registration/LoginForm'
import { AuthProp, NewUserProp } from '../../../feature/type/type'

const AuthContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem(KEYUSER) || null)

  const signIn = (newUser: NewUserProp, callback: () => void) => {
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

export default AuthProvider
