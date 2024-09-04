import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../widgets/nav/NavBar'

import { About } from '../shared/about/About'
import { NoteLayout } from '../widgets/noteLayout/NoteLayout'
import { AddNote } from '../shared/addNote/AddNote'
import { NoteProvider } from '../shared/context/notes/useNotes'

function App() {
  return (
    <>
      <NoteProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<NoteLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/addNote" element={<AddNote />} />
        </Routes>
      </NoteProvider>
    </>
  )
}

export default App
