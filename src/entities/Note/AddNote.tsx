import { ChangeEvent, useState } from 'react'
import { TextField } from '../../shared/form/TextField'
import { Box, Button } from '@mui/material'
import { useNote } from '../../shared/context/notes/notesProvider'
import { useNavigate } from 'react-router-dom'
import { INote } from '../../shared/types/type'

const INITIAL_STATE: INote = {
  title: '',
  discription: '',
}
export const AddNote = () => {
  const [data, setData] = useState<INote>(INITIAL_STATE)
  const { createNote } = useNote()
  const navigate = useNavigate()

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    createNote(data)
    setData(INITIAL_STATE)
    navigate('/notes')
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
