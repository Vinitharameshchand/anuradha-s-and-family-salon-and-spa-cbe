import { Scissors, UserRound, Gift } from "lucide-react";

export default function Offers() {
    return (
        <main className="page offersPage">
            <p className="sectionLabel">Special Offers</p>
            <h1>Exclusive Salon Offers</h1>

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
                        <small>On All Clean-up & Facials</small>
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
        </main>
    );
}