import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programme from './pages/Programme'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App