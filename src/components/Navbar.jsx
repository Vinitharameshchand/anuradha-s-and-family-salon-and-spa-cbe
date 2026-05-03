import { Link, NavLink } from "react-router-dom";
import { Calendar } from "lucide-react";
import logo from "../assets/anulogo.png";

export default function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="navLogo">
                <img src={logo} alt="Anuradha's Logo" className="navLogoImg" />
            </Link>

            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/offers">Offers</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <Link to="/contact" className="goldBtn navBookBtn">
                <Calendar size={17} />
                Book Appointment
            </Link>
        </header>
    );
}