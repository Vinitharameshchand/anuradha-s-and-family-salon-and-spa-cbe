import { Link } from "react-router-dom";
import { Calendar, Phone, MapPin, Clock, Scissors, Eye, Gift, UserRound, Smile } from "lucide-react";

const services = [
    { title: "Haircut & Styling", icon: Scissors },
    { title: "Hair Coloring", icon: UserRound },
    { title: "Facial & Skin Care", icon: Smile },
    { title: "D-Tan & Cleanup", icon: UserRound },
    { title: "Eyebrow & Threading", icon: Eye },
    { title: "Grooming Services", icon: UserRound },
    { title: "Kids Haircut", icon: Smile },
];

const gallery = [
    "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
];

export default function Home() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="hero">
                <div className="heroText">
                    <p className="script">Your Family Salon</p>
                    <h1>
                        For Everyday <br />
                        <span>Beauty &amp; Care</span>
                    </h1>
                    <p className="heroSub">
                        Hair, beauty, and grooming services for men, women, and kids in Coimbatore.
                    </p>
                    <div className="heroActions">
                        <Link to="/contact" className="goldBtn">
                            <Calendar size={17} /> Book Appointment
                        </Link>
                        <a href="tel:7222850505" className="outlineBtn">
                            <Phone size={17} /> Call Now
                        </a>
                    </div>
                </div>
                <div className="heroImage">
                    <img
                        src="https://images.unsplash.com/photo-1560066984-138daaa5a31c?q=80&w=1200&auto=format&fit=crop"
                        alt="Salon interior"
                    />
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="services sectionLight">
                <p className="sectionLabel">Our Services</p>
                <h2>Beauty. Style. Confidence.</h2>
                <div className="serviceGrid">
                    {services.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div className="serviceCard" key={item.title}>
                                <Icon size={46} />
                                <p>{item.title}</p>
                                <span />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ── ABOUT + WHY ── */}
            <div className="aboutWrap sectionLight">
                <div className="aboutCard darkCard">
                    <p className="sectionLabel">About Anuradha's</p>
                    <h3>About Anuradha's</h3>
                    <p>
                        Anuradha's Family Salon &amp; Spa offers reliable and professional beauty and
                        grooming services in a comfortable environment. We focus on quality service,
                        hygiene, and customer satisfaction for every visit.
                    </p>
                    <Link to="/about" className="outlineGold" style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8 }}>
                        Know More →
                    </Link>
                </div>
                <div className="aboutImage">
                    <img
                        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop"
                        alt="Salon interior"
                    />
                </div>
                <div className="whyCard">
                    <h3>Why Choose Us?</h3>
                    {[
                        { icon: <UserRound size={16} />, text: "Experienced Staff" },
                        { icon: <Smile size={16} />, text: "Hygienic Environment" },
                        { icon: <Gift size={16} />, text: "Affordable Pricing" },
                        { icon: <Scissors size={16} />, text: "Friendly Service" },
                        { icon: <UserRound size={16} />, text: "Suitable for All Age Groups" },
                    ].map((item) => (
                        <div className="whyItem" key={item.text}>
                            <span>{item.icon}</span>
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── OFFERS ── */}
            <section className="offers">
                <p className="sectionLabel">Special Offers</p>
                <div className="offerGrid">
                    <div className="offerCard">
                        <Scissors size={44} />
                        <div>
                            <p>Haircut Offer</p>
                            <h3>Flat 20% OFF</h3>
                            <small>On All Haircuts</small>
                        </div>
                    </div>
                    <div className="offerCard">
                        <UserRound size={44} />
                        <div>
                            <p>Clean-up Offer</p>
                            <h3>Flat 15% OFF</h3>
                            <small>On All Clean-up &amp; Facials</small>
                        </div>
                    </div>
                    <div className="offerCard">
                        <Gift size={44} />
                        <div>
                            <p>Combo Offer</p>
                            <h3>Upto 25% OFF</h3>
                            <small>On Selected Services</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GALLERY ── */}
            <section className="gallery sectionLight">
                <h2>Our Work</h2>
                <div className="galleryGrid">
                    {gallery.map((img, i) => (
                        <img key={i} src={img} alt="Salon work" />
                    ))}
                </div>
                <Link to="/gallery" className="goldBtn galleryBtn">
                    View More Gallery
                </Link>
            </section>

            {/* ── CONTACT ── */}
            <section className="contact">
                <div className="visitInfo">
                    <h3>Visit Us</h3>
                    <p><Phone size={18} /> 72228 50505 / 0422 4712742</p>
                    <p><MapPin size={18} /> II Floor, Kamarajan Towers, RS Puram, Coimbatore - 641002</p>
                    <p><Clock size={18} /> 10.00 AM – 8.30 PM (All Days)</p>
                </div>
                <div className="mapBox">
                    <iframe
                        title="Anuradha Map"
                        src="https://www.google.com/maps?q=Anuradha%27s+Family+Salon+%26+Spa+RS+Puram+Coimbatore&output=embed"
                        loading="lazy"
                    />
                </div>
                <div className="contactBtns">
                    <a href="tel:7222850505" className="goldBtn"><Phone size={17} /> Call Now</a>
                    <a href="https://www.google.com/maps/place/Anuradha%27s+Family+Salon+%26+Spa" target="_blank" rel="noreferrer" className="outlineBtn"><MapPin size={17} /> Get Directions</a>
                    <a href="tel:7222850505" className="outlineBtn"><Calendar size={17} /> Book Appointment</a>
                </div>
            </section>
        </>
    );
}