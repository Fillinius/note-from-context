import { ListItemText } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { NavLink } from 'react-router-dom'

export type NoteProp = {
  title: string
  id: string
  date: string
  discription: string
}

export const NoteList = ({ notes }: { notes: NoteProp[] }) => {
  if (!notes) return null

  const handleClikForm = () => {
    return (
      <>
        <NavLink to="/addNote">Add</NavLink>
      </>
    )
  }

  return (
    <>
      <List>
        {notes.map((note) => (
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
            <NavLink to="addNote"> Add Note</NavLink>
          </div>
        ))}
      </List>
    </>
  )
}
