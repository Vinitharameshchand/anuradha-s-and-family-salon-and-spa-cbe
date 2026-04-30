import React from 'react'
import heroImg from '../assets/salon.jpg'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-left">
                    <div className="kicker">Your Family Salon</div>
                    <h1>For Everyday <span className="accent">Beauty & Care</span></h1>
                    <p className="hero-sub">Hair, beauty, and grooming services for men, women, and kids in Coimbatore.</p>
                    <div className="hero-ctas">
                        <button className="btn primary">Book Appointment</button>
                        <button className="btn outline">Call Now</button>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="image-wrap">
                        <img src={heroImg} alt="Salon interior" />
                        <div className="dark-gradient"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
