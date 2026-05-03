import { Phone, MapPin, Clock, Calendar } from "lucide-react";

export default function Contact() {
    return (
        <main className="page contactPage">
            <p className="sectionLabel">Contact Us</p>
            <h1>Visit Anuradha’s Family Salon & Spa</h1>

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
                        src="https://www.google.com/maps?q=Anuradha's%20Family%20Salon%20%26%20Spa%20RS%20Puram%20Coimbatore&output=embed"
                        loading="lazy"
                    />
                </div>

                <div className="contactBtns">
                    <a href="tel:7222850505" className="goldBtn"><Phone size={17} /> Call Now</a>
                    <a
                        href="https://www.google.com/maps/place/Anuradha%27s+Family+Salon+%26+Spa"
                        target="_blank"
                        className="outlineBtn"
                    >
                        <MapPin size={17} /> Get Directions
                    </a>
                    <a href="tel:7222850505" className="outlineBtn">
                        <Calendar size={17} /> Book Appointment
                    </a>
                </div>
            </section>
        </main>
    );
}