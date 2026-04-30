import React from 'react'

const services = [
    'Haircut & Styling',
    'Hair Coloring',
    'Facial & Skin Care',
    'D-Tan & Cleanup',
    'Eyebrow & Threading',
    'Grooming Services',
    'Kids Haircut'
]

export default function Services() {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-head">
                    <h2>Our Services</h2>
                    <p>Beauty. Style. Confidence.</p>
                </div>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div className="service-card" key={i}>
                            <div className="icon-placeholder">✂️</div>
                            <div className="service-title">{s}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
