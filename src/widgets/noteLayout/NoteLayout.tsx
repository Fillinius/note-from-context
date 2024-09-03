//MUI
// import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import { NoteList } from '../../shared/notes/NoteList'
import { Note } from '../../entities/Note/Note'
//MUI
// import { Note } from '../../entities/Note/Note'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}))
//MUI

//mock data
const notes = [
  {
    title: 'Note',
    discription: 'Discription',
    id: '11',
    date: `${new Date().toLocaleDateString()}`,
  },
  {
    title: 'Note',
    id: '1',
    date: `${new Date().toLocaleDateString()}`,
    discription: 'Discription',
  },
]
const ID = '11'
const noteById = notes.find((note) => note.id === ID)
// console.log(noteById)

//mock data

export const NoteLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Item>
            <NoteList />
          </Item>
        </Grid>
        <Grid size={8}>
          <Item>
            <Note note={noteById} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
