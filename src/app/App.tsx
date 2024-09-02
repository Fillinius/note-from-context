import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../widgets/nav/NavBar'

import { About } from '../shared/about/About'
import { NoteLayout } from '../widgets/noteLayout/NoteLayout'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<NoteLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
