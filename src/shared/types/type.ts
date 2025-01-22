export interface INote {
  id?: string
  title: string
  discription: string
  createAt?: Date | string
}

export interface ProviderProps {
  children: React.ReactNode
}

export type TUser = NewUserProp | never | undefined

export interface NewUserProp {
  name?: string
  email: string | undefined | null
  password?: string
  id?: string
}
