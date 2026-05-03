const gallery = [
    "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    "/salon-interior.jpg",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
    return (
        <main className="page sectionLight">
            <p className="sectionLabel">Gallery</p>
            <h1>Our Work</h1>

            <div className="galleryGrid pageGallery">
                {gallery.map((img, index) => (
                    <img src={img} alt="Salon work" key={index} />
                ))}
            </div>
        </main>
    );
}