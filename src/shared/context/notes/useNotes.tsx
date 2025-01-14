import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { app } from '../../../../firebase'
import { INote, ProviderProps } from '../../types/type'

interface INotesContext {
  notes: Array<INote>
  createNote: (data: INote) => void
  removeNote: (id: string) => void
  getNoteById: (id: string) => void
  isLoading: boolean
}
const initialNotes: Array<INote> = []

const initialNotesContext: INotesContext = {
  notes: initialNotes,
  createNote: () => {},
  removeNote: () => {},
  getNoteById: () => {},
  isLoading: false,
}
export const NotesContext = createContext<INotesContext>(initialNotesContext)

// eslint-disable-next-line react-refresh/only-export-components
export const useNote = () => {
  return useContext(NotesContext)
}

const URL = app.options.databaseURL

export const NoteProvider = ({ children }: ProviderProps) => {
  const [notes, setNotes] = useState<Array<INote>>(initialNotes)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchNotes()
  }, [])

  async function createNote(data: INote) {
    try {
      const serverData: INote = {
        ...data,
        id: '21',
        createAt: new Date(),
      }
      const res = await axios.post(`${URL}/notes.json`, serverData)
      console.log(data, 'data')

      const content = {
        ...data,
        id: res.data.name,
        createAt: new Date(),
      }
      setLoading(false)
      setNotes((prev) => [...prev, content])
    } catch (error) {
      console.log(error)
    }
  }

  async function removeNote(id: string) {
    try {
      await axios.delete(`${URL}/${id}.json`)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  async function fetchNotes() {
    try {
      const res = await axios.get(`${URL}/notes.json
        `)

      const content = Object.keys(res.data).map((key) => ({
        ...res.data[key],
        id: key,
      }))
      console.log('cont', content)

      setLoading(false)
      setNotes(content)
    } catch (error) {
      console.log(error)
    }
  }

  function getNoteById(id: string) {
    return notes.find((note) => note.id === id)
  }
  const valueNotesContext = {
    notes,
    createNote,
    removeNote,
    isLoading,
    getNoteById,
  }
  return (
    <NotesContext.Provider value={valueNotesContext}>
      {children}
    </NotesContext.Provider>
  )
}
