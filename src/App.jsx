import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

export default function App() {
    return (
        <div className="app-root">
            <Navbar />
            <main>
                <Hero />
                <Services />
            </main>
            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-left">
                        <div className="logo-circle">A</div>
                        <div>
                            <div className="tagline">Family Salon | Bridal Studio & Academy</div>
                        </div>
                    </div>
                    <div className="footer-center">© 2026 Anuradha's Family Salon & Spa</div>
                    <div className="footer-right">Follow us</div>
                </div>
            </footer>
        </div>
    )
}
