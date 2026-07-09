import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen w-full flex flex-col">
      <LoadingScreen />
      <div className="container mx-auto flex-1 px-4">
        <Navbar />
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>,
)
