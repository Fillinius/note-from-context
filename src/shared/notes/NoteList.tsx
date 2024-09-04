//MUI
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import { ListItemText } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Outlet } from 'react-router-dom'
//MUI

import { NavLink } from 'react-router-dom'
import { useNote } from '../../shared/context/notes/useNotes'

//MUI
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

export type NoteProp = {
  title: string
  id: string
  date?: string
  discription: string
}

export const NoteList = () => {
  const { notes, isLoading } = useNote()
  return (
    <>
      <h2>Список заметок</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Item>
              <NavLink to="/addNote"> Add Note</NavLink>
              {notes.length === 0 && <h5>'Список заметок пуст'</h5>}
              {isLoading && notes.length !== 0 && <p>Loading...</p>}
              <List>
                {notes &&
                  !isLoading &&
                  notes.map((note) => (
                    <NavLink to={`/notes/${note.id}`} key={note.id}>
                      <ListItem>
                        <ListItemText>
                          <h2>{note.title}</h2>
                          <div>
                            <span>{note.date}</span>
                            <p>{note.discription}</p>
                          </div>
                        </ListItemText>
                      </ListItem>
                    </NavLink>
                  ))}
              </List>
            </Item>
          </Grid>
          <Grid size={8}>
            <Item>
              <Outlet />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
