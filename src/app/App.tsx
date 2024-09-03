import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../widgets/nav/NavBar'

import { About } from '../shared/about/About'
import { NoteLayout } from '../widgets/noteLayout/NoteLayout'
import { AddNote } from '../shared/addNote/AddNote'

function App() {
  const ID = '000'
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<NoteLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/addNote" element={<AddNote id={ID} />} />
      </Routes>
    </>
  )
}

export default App
