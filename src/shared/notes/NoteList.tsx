import { ListItemText } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { NavLink } from 'react-router-dom'
import { useNote } from '../context/notes/useNotes'

export type NoteProp = {
  title: string
  id: string
  date?: string
  discription: string
}

export const NoteList = () => {
  const { notes, isLoading }: { notes: NoteProp[]; isLoading: boolean } =
    useNote()

  return (
    <>
      <NavLink to="addNote"> Add Note</NavLink>
      {notes.length === 0 && <h5>'Список заметок пуст'</h5>}
      {isLoading && notes.length !== 0 && <p>Loading...</p>}
      <List>
        {notes &&
          !isLoading &&
          notes.map((note) => (
            <div key={note.id}>
              <ListItem>
                <ListItemText>
                  <h2>{note.title}</h2>
                  <div>
                    <span>{note.date}</span>
                    <p>{note.discription}</p>
                  </div>
                </ListItemText>
              </ListItem>
            </div>
          ))}
      </List>
    </>
  )
}
