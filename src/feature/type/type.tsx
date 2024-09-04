export interface RegistrationFormDataProp {
  name: string
  email: string
  password: string
}
export interface AuthProp {
  user: string
  signIn: (data: NewUserProp, callback: () => void) => void
  signOut: (callback: () => void) => void
}
export interface NewUserProp {
  name: string
  email: string
  password: string
}
