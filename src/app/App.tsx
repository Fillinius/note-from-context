import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../widgets/nav/NavBar'
import { About } from '../shared/about/About'
import { AddNote } from '../shared/addNote/AddNote'
import { NoteProvider } from '../shared/context/notes/notesProvider'
import { Note } from '../entities/Note/Note'
import { NoteList } from '../shared/notes/NoteList'
import NotFound from '../shared/404/NotFound'
import Home from '../shared/home/Home'
import { SeachProvider } from '../shared/context/search/searchProvider'
import { Login } from '../feature/login/Login'
import { PrivetRoute } from '../shared/context/auth/PrivetRoute'
import { AuthProvider } from '../shared/context/auth/AuthProvider'
import '../../firebase'

function App() {
  return (
    <>
      <AuthProvider>
        <NoteProvider>
          <SeachProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/notes"
                element={
                  <PrivetRoute>
                    <NoteList />
                  </PrivetRoute>
                }
              >
                <Route path="/notes/:id" element={<Note />} />
              </Route>
              <Route path="/addNote" element={<AddNote />} />
              <Route path="/about" element={<About />} />
              <Route path="/signIn/:idUser?/:type?" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SeachProvider>
        </NoteProvider>
      </AuthProvider>
    </>
  )
}

export default App
