import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`site-nav ${scrolled ? 'solid' : ''}`}>
            <div className="nav-inner">
                <div className="nav-left">
                    <div className="logo-circle">
                        <span>A</span>
                    </div>
                </div>
                <nav className="nav-center">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#offers">Offers</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="nav-right">
                    <button className="btn primary">Book Appointment</button>
                </div>
            </div>
        </header>
    )
}
