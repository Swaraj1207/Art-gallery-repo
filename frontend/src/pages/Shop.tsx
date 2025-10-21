import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PaintingCard from "@/components/PaintingCard";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";
import painting5 from "@/assets/painting-5.jpg";
import painting6 from "@/assets/painting-6.jpg";

const allPaintings = [
  { id: 1, image: painting1, title: "Golden Sunset", size: "24\" x 36\"", medium: "Oil on Canvas", price: 1200, category: "landscape", status: "available" as const },
  { id: 2, image: painting2, title: "Abstract Dreams", size: "30\" x 40\"", medium: "Acrylic on Canvas", price: 1500, category: "abstract", status: "available" as const },
  { id: 3, image: painting3, title: "Portrait in Light", size: "18\" x 24\"", medium: "Oil on Canvas", price: 900, category: "portrait", status: "sold" as const },
  { id: 4, image: painting4, title: "Minimal Geometry", size: "24\" x 24\"", medium: "Mixed Media", price: 850, category: "abstract", status: "available" as const },
  { id: 5, image: painting5, title: "Serene Waters", size: "30\" x 24\"", medium: "Watercolor", price: 1100, category: "landscape", status: "available" as const },
  { id: 6, image: painting6, title: "Floral Elegance", size: "20\" x 30\"", medium: "Oil on Canvas", price: 950, category: "still-life", status: "available" as const },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; painting: typeof allPaintings[0] | null }>({
    isOpen: false,
    painting: null,
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "abstract", label: "Abstract" },
    { id: "landscape", label: "Landscape" },
    { id: "portrait", label: "Portrait" },
    { id: "still-life", label: "Still Life" },
  ];

  const filteredPaintings = selectedCategory === "all"
    ? allPaintings
    : allPaintings.filter((p) => p.category === selectedCategory);

  const openLightbox = (painting: typeof allPaintings[0]) => {
    setLightbox({ isOpen: true, painting });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, painting: null });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop Original Paintings
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of available artwork. Each piece is an original, ready to ship.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-accent hover:bg-accent/90" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Paintings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaintings.map((painting) => (
            <PaintingCard
              key={painting.id}
              image={painting.image}
              title={painting.title}
              size={painting.size}
              medium={painting.medium}
              price={painting.price}
              status={painting.status}
              onClick={() => openLightbox(painting)}
            />
          ))}
        </div>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightbox.painting && (
        <Lightbox
          isOpen={lightbox.isOpen}
          onClose={closeLightbox}
          image={lightbox.painting.image}
          title={lightbox.painting.title}
          size={lightbox.painting.size}
          medium={lightbox.painting.medium}
          price={lightbox.painting.price}
          status={lightbox.painting.status}
        />
      )}
    </div>
  );
};

export default Shop;
