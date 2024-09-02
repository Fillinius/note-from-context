import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../shared/nav/NavBar'
import { NoteList } from '../shared/notes/NoteList'
import { About } from '../shared/about/About'

function App() {
  const notes = [
    {
      title: 'Note',
      id: '11',
      date: `${new Date().toLocaleDateString()}`,
    },
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<NoteList notes={notes} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
