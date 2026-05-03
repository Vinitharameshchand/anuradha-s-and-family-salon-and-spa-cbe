import { Link } from "react-router-dom";

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

export default function Footer() {
    return (
        <footer>
            <div className="footerBrand">
                <div className="footerLogo">
                    <div className="logoCircle small">
                        <span>ANURADHA'S</span>
                        <small>Family Salon &amp; Spa</small>
                    </div>
                </div>
                <p>Your Family Salon for Beauty, Care &amp; Confidence.</p>
            </div>

            <div>
                <h4>Quick Links</h4>
                <p><Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></p>
                <p><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About Us</Link></p>
                <p><Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>Services</Link></p>
            </div>

            <div>
                <p><Link to="/offers" style={{ color: "inherit", textDecoration: "none" }}>Offers</Link></p>
                <p><Link to="/gallery" style={{ color: "inherit", textDecoration: "none" }}>Gallery</Link></p>
                <p><Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link></p>
            </div>

            <div>
                <h4>Follow Us</h4>
                <div className="socials">
                    <a href="#" aria-label="Facebook" style={{ color: "inherit" }}><FacebookIcon /></a>
                    <a href="#" aria-label="Instagram" style={{ color: "inherit" }}><InstagramIcon /></a>
                    <a href="https://wa.me/917222850505" aria-label="WhatsApp" style={{ color: "inherit" }}><WhatsappIcon /></a>
                </div>
            </div>
        </footer>
    );
}