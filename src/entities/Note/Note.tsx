//MUI
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
//MUI

import { useNote } from '../../shared/context/notes/notesProvider'
import { useLocation, useParams } from 'react-router-dom'
import BasicModal from '../../feature/modal/Modal'
import React from 'react'
import { EditNote } from './EditNote'
import { Link } from 'react-router-dom'

export const Note = () => {
  const [open, setOpen] = React.useState(false)
  const { id, edit } = useParams()
  const { pathname } = useLocation()

  const { notes } = useNote()
  const getNoteById = notes.find((note) => note.id === id)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  if (!getNoteById) return 'Вы еще не выбрали заметку'
  if (!id) return 'Вы еще не выбрали заметку'

  return (
    <>
      {id && (
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
            <Button onClick={handleOpen} size="small">
              Delete
            </Button>
            <BasicModal open={open} handleClose={handleClose} />
            <Link to={`${pathname}/edit`}>Edit</Link>
          </CardActions>
        </Card>
      )}
      {edit && <EditNote />}
    </>
  )
}
