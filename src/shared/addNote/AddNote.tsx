import { useState } from 'react'
import { TextField } from '../form/TextField'
import { Box, Button } from '@mui/material'
import { useNote } from '../context/notes/useNotes'
import { useNavigate } from 'react-router-dom'
import { NoteProp } from '../notes/NoteList'

const INITIAL_STATE: NoteProp = { title: '', id: '', discription: '' }
export const AddNote = () => {
  const [data, setData] = useState(INITIAL_STATE)
  const note: {
    notes: []
    isLoading: boolean
    createNote: (data: { title: string; id: string; discription: string }) => []
    error: string
  } = useNote()
  const navigate = useNavigate()

  const handleChange = ({
    target,
  }: {
    target: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  }) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (note == null) return null
    note.createNote(data)
    setData(INITIAL_STATE)
    navigate('/')
  }

  return (
    <Box
      sx={{
        width: 200,
        height: 100,
        margin: 'auto',
        pt: 10,
      }}
    >
      {note.error && <h3>{note.error}</h3>}
      <h4>Add Note</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Note"
          label="title"
          type="text"
        />
        <TextField
          name="discription"
          value={data.discription}
          onChange={handleChange}
          placeholder="Note"
          label="discription"
          type="text"
        />
        <Button type="submit">Add</Button>
      </form>
    </Box>
  )
}
