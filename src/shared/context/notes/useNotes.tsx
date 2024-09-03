import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { NoteProp } from '../../notes/NoteList'

const NoteContext = createContext(null)

export const useNote = () => {
  return useContext(NoteContext)
}

export const NoteProvider = ({ children }) => {
  const [note, setNote] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = usestate(true)

  async function createNote(data: NoteProp) {
    try {
      const res = await axios.post('/notes', data)
      console.log('resadd', res)
      setNote(res)
    } catch (error) {
      console.log('creatNote', error)
      setErrors(error)
    }
  }

  async function removeNote(id: string) {
    await axios.delete(`/notes${id}`)
  }

  useEffect(() => {
    if (error !== null) {
      setError(error)
    }
  }, [error])

  return (
    <NoteContext.Provider value={{ note, createNote, removeNote, isLoading }}>
      {children}
    </NoteContext.Provider>
  )
}
