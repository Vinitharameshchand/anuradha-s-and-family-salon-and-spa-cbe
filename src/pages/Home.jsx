import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="heroText">
                    <p className="script">Your Family Salon</p>
                    <h1>
                        For Everyday <br />
                        <span>Beauty & Care</span>
                    </h1>
                    <p className="heroSub">
                        Hair, beauty, and grooming services for men, women, and kids in
                        Coimbatore.
                    </p>

                    <div className="heroActions">
                        <Link to="/contact" className="goldBtn">
                            <Calendar size={17} />
                            Book Appointment
                        </Link>

                        <a href="tel:7222850505" className="outlineBtn">
                            <Phone size={17} />
                            Call Now
                        </a>
                    </div>
                </div>

                <div className="heroImage">
                    <img src="/salon-interior.jpg" alt="Salon interior" />
                </div>
            </section>

            <section className="sectionLight intro">
                <p className="sectionLabel">Welcome</p>
                <h2>Anuradha’s Family Salon & Spa</h2>
                <p>
                    A professional salon and spa experience for everyday beauty, bridal
                    care, grooming, skin care, and relaxing self-care.
                </p>
            </section>
        </>
    );
}