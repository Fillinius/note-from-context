import * as React from 'react'
import { createContext, useContext } from 'react'

const SeachContext = createContext({
  search: '',
  handleChangeSearch: () => EventTarget,
})

export const useSearch = () => {
  return useContext(SeachContext)
}

export const SeachProvider = ({ children }) => {
  const [search, setSearch] = React.useState('')
  const handleChangeSearch = ({ target }: { target: EventTarget }) => {
    setSearch(target.value)
  }
  return (
    <SeachContext.Provider value={{ search, handleChangeSearch }}>
      {children}
    </SeachContext.Provider>
  )
}
