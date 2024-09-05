import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { NoteProp } from '../../notes/NoteList'
import { app } from '../../../../firebase'

const NoteContext = createContext({
  notes: [{ id: '', title: '', discription: '', date: '' }],
  createNote: () => [],
  removeNote: () => [],
  getNoteById: () => {},
  isLoading: false,
})

// eslint-disable-next-line react-refresh/only-export-components
export const useNote = () => {
  return useContext(NoteContext)
}

const URL = import.meta.env.VITE_BASE_URL

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchNote()
  }, [])

  async function createNote(data: NoteProp) {
    try {
      const res = await axios.post(`${URL}/notes.json`, data)
      const content = {
        ...data,
        id: res.data.name,
        date: new Date().toLocaleTimeString(),
      }
      setLoading(false)
      setNotes((prev) => [...prev, content])
    } catch (error) {
      console.log(error.message)
    }
  }

  async function removeNote(id: string) {
    try {
      await axios.delete(`${URL}/${id}.json`)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }
  async function fetchNote() {
    try {
      const res = await axios.get(`${URL}/notes.json`)
      const content = Object.keys(res.data).map((key) => ({
        ...res.data[key],
        id: key,
      }))
      setLoading(false)
      setNotes(content)
    } catch (error) {
      console.log(error.message)
    }
  }

  function getNoteById(id: string) {
    return notes.find((note) => note.id === id)
  }

  return (
    <NoteContext.Provider
      value={{ notes, createNote, removeNote, isLoading, getNoteById }}
    >
      {children}
    </NoteContext.Provider>
  )
}
