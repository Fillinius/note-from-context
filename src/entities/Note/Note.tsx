//MUI
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
//MUI

import { NoteProp } from '../../shared/notes/NoteList'
import { useNote } from '../../shared/context/notes/useNotes'
import { useNavigate, useParams } from 'react-router-dom'

export const Note = () => {
  const { id } = useParams()

  const note = useNote()
  const getNoteById: NoteProp = note.getNoteById(id)
  const navigate = useNavigate()

  if (!getNoteById) return 'Вы еще не выбрали заметку'

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {getNoteById.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {getNoteById.discription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            navigate('/notes')
            return note.removeNote(getNoteById.id)
          }}
          size="small"
        >
          Delete
        </Button>
        {/* <Button size="small">Edit</Button> */}
      </CardActions>
    </Card>
  )
}
