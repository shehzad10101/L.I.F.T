import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { MessageCircle, Briefcase, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import JobBoardPage from './components/JobBoardPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false)

  const toggleFloatingMenu = () => {
    setFloatingMenuOpen(!floatingMenuOpen)
  }

  const FloatingActionButton = () => (
    <div className="fixed bottom-6 right-6 z-50">
      {floatingMenuOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2">
          <Button
            className="floating-button w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => window.location.href = 'mailto:contact@lift.com'}
            aria-label="Contact us"
          >
            <MessageCircle size={20} />
          </Button>
          <Button
            className="floating-button w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => window.location.href = '/jobs'}
            aria-label="View jobs"
          >
            <Briefcase size={20} />
          </Button>
        </div>
      )}
      <Button
        className="floating-button sine-wave-animation"
        onClick={toggleFloatingMenu}
        aria-label="Main menu"
      >
        {floatingMenuOpen ? <X size={24} /> : <Plus size={24} />}
      </Button>
    </div>
  )

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/jobs" element={<JobBoardPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </Router>
  )
}

export default App

