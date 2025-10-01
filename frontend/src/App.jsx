import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import CreateNotes from './pages/CreateNotes'
import NoteDetails from './pages/NoteDetails'

const App = () => {
  return (
    <div data-theme="coffee">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateNotes/>} />
        <Route path="/note/:id" element={<NoteDetails/>} />
      </Routes>
    </div>
  )
}

export default App
