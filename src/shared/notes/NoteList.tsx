import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

type Prop = {
  title: string
  id: string
  date: string
}

export const NoteList = ({ notes }: { notes: Prop[] }) => {
  if (!notes) return null
  return (
    <>
      <List>
        {notes.map((note) => (
          <ListItem key={note.id}>
            <span>{note.date}</span>
            <h2>{note.title}</h2>
          </ListItem>
        ))}
      </List>
    </>
  )
}
