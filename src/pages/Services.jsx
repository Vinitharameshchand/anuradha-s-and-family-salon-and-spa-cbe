import { Scissors, UserRound, Smile, Eye } from "lucide-react";

const services = [
    { title: "Haircut & Styling", icon: Scissors },
    { title: "Hair Coloring", icon: UserRound },
    { title: "Facial & Skin Care", icon: Smile },
    { title: "D-Tan & Cleanup", icon: UserRound },
    { title: "Eyebrow & Threading", icon: Eye },
    { title: "Grooming Services", icon: UserRound },
    { title: "Kids Haircut", icon: Smile },
];

export default function Services() {
    return (
        <main className="page sectionLight">
            <p className="sectionLabel">Our Services</p>
            <h1>Beauty. Style. Confidence.</h1>

            <div className="serviceGrid pageGrid">
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
        </main>
    );
}