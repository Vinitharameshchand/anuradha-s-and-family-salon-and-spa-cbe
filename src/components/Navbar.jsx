import { Link, NavLink } from "react-router-dom";
import { Calendar } from "lucide-react";

export default function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="logoCircle">
                <span>ANURADHA'S</span>
                <small>Family Salon & Spa</small>
            </Link>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/offers">Offers</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <Link to="/contact" className="goldBtn">
                <Calendar size={17} />
                Book Appointment
            </Link>
        </header>
    );
}