import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IntroVideoModal from './components/IntroVideoModal'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import SalaDetail from './pages/SalaDetail'

function App() {
  return (
    <div className="min-h-screen bg-crema">
      <ScrollToTop />
      <IntroVideoModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salas/:slug" element={<SalaDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
