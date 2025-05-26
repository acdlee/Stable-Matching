import './App.css'
import { Routes, Route } from 'react-router'

import PublicLayout from './layouts/PublicLayout'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Demo from './pages/demo/Demo'

function App() {
  return (
    <PublicLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path='/demo' element={<Demo />} />
      </Routes>
    </PublicLayout>
  )
}

export default App
