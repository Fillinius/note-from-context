import { useState } from 'react'
import { TextField } from '../form/TextField'
import { Box, Button } from '@mui/material'

export const AddNote = ({ id }: { id: string }) => {
  const [data, setData] = useState({ title: '', id, discription: '' })

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
    console.log('add', data)
    setData({ title: '', id, discription: '' })
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
