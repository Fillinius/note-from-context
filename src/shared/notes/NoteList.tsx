import { ListItemText } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export type NoteProp = {
  title: string
  id: string
  date: string
  discription: string
}

export const NoteList = ({ notes }: { notes: NoteProp[] }) => {
  if (!notes) return null
  return (
    <>
      <List>
        {notes.map((note) => (
          <ListItem key={note.id}>
            <ListItemText>
              <h2>{note.title}</h2>
              <div>
                <p>{note.date}</p>|<p>{note.discription}</p>
              </div>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}
