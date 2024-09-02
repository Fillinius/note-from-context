//MUI
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
//MUI

import { NoteProp } from '../../shared/notes/NoteList'

export const Note = ({ note }: { note: NoteProp }) => {
  if (!note) return 'Вы еще не создали заметку'
  console.log(note)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {note.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {note.discription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  )
}
