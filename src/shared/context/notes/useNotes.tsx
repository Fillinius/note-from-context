import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { NoteProp } from '../../notes/NoteList'

const NoteContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useNote = () => {
  return useContext(NoteContext)
}

const baseUrl = import.meta.env.VITE_REACT_APP_FB_URL
console.log(baseUrl)

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchNote()
  }, [])

  async function createNote(data: NoteProp) {
    try {
      const res = await axios.post(
        'https://note-fa692-default-rtdb.europe-west1.firebasedatabase.app/notes.json',
        data
      )
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
    await axios.delete(
      `https://note-fa692-default-rtdb.europe-west1.firebasedatabase.app/notes${id}.json`
    )
  }
  async function fetchNote() {
    try {
      const res = await axios.get(
        'https://note-fa692-default-rtdb.europe-west1.firebasedatabase.app/notes.json'
      )
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

  return (
    <NoteContext.Provider value={{ notes, createNote, removeNote, isLoading }}>
      {children}
    </NoteContext.Provider>
  )
}
