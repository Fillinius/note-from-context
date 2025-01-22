import { useState, ChangeEvent } from 'react'
import { createContext, useContext } from 'react'
import { ProviderProps } from '../../types/type'

interface ISearchContext {
  search: string
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
const initialSearchContext = {
  search: '',
  handleChangeSearch: () => {},
}

const SeachContext = createContext<ISearchContext>(initialSearchContext)

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => {
  return useContext(SeachContext)
}

export const SeachProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState('')
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  return (
    <SeachContext.Provider value={{ search, handleChangeSearch }}>
      {children}
    </SeachContext.Provider>
  )
}
