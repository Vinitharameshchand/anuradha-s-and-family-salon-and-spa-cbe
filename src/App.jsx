import React from 'react'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Offers from './pages/Offers'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-root">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
