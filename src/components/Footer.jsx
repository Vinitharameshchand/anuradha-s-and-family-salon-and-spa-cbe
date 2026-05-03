import { MessageCircle } from "lucide-react";

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export default function Footer() {
    return (
        <footer>
            <div className="footerBrand">
                <div className="logoCircle small">
                    <span>ANURADHA'S</span>
                </div>
                <p>Your Family Salon for Beauty, Care & Confidence.</p>
            </div>

            <div>
                <h4>Quick Links</h4>
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
            </div>

            <div>
                <h4>Links</h4>
                <p>Offers</p>
                <p>Gallery</p>
                <p>Contact</p>
            </div>

            <div>
                <h4>Follow Us</h4>
                <div className="socials">
                    <FacebookIcon />
                    <InstagramIcon />
                    <MessageCircle />
                </div>
            </div>
        </footer>
    );
}