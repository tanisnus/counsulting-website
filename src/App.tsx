import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollManager } from './components/ScrollManager'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Team } from './pages/Team'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}
