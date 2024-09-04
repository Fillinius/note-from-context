import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../widgets/nav/NavBar'
import { About } from '../shared/about/About'
import { AddNote } from '../shared/addNote/AddNote'
import { NoteProvider } from '../shared/context/notes/useNotes'
import { Note } from '../entities/Note/Note'
import { NoteList } from '../shared/notes/NoteList'
import NotFound from '../shared/404/NotFound'
import Home from '../shared/home/Home'

function App() {
  return (
    <>
      <NoteProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NoteList />}>
            <Route path="/notes/:id" element={<Note />} />
          </Route>
          <Route path="/addNote" element={<AddNote />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NoteProvider>
    </>
  )
}

export default App
