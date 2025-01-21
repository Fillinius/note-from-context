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
  name?: string | null
  email: string | null
  password?: string | null
  id?: string | null
}
