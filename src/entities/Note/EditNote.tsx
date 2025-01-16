import { useParams } from 'react-router-dom'
import { useNote } from '../../shared/context/notes/notesProvider'
import { ChangeEvent, useEffect, useState } from 'react'
import { INote } from '../../shared/types/type'
import { Box, Button } from '@mui/material'
import { TextField } from '../../shared/form/TextField'
import { INITIAL_STATE } from './AddNote'

export function EditNote() {
  const { id } = useParams()

  const { notes, editNote } = useNote()
  const currentNoteById = notes.find((note) => note.id === id)
  const [data, setData] = useState<INote>(INITIAL_STATE)
  const [isLoading, setIsloading] = useState<boolean>(true)

  useEffect(() => {
    if (data.title === '' && currentNoteById) {
      setData(currentNoteById)
    }
  }, [data, currentNoteById])

  useEffect(() => {
    if (data && isLoading) {
      setIsloading(false)
    }
  }, [data, isLoading])

  if (!id) return 'Something wrong'
  if (!data) return 'Loading...'

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    editNote(data, id)
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
      <h4>Edit Note</h4>
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
        <Button type="submit">Edit</Button>
      </form>
    </Box>
  )
}
