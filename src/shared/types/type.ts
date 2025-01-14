export interface INote {
  id?: string
  title: string
  discription: string
  createAt?: Date | string
}

export interface ProviderProps {
  children: React.ReactNode
}

export type TUser = NonEmptyString<string>

type NonEmptyString<T extends string> = T extends '' ? never : T //user can't be empty
