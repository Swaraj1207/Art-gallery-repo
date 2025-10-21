import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PaintingCard from "@/components/PaintingCard";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroArtwork from "@/assets/hero-artwork.jpg";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";

const paintings = [
  { id: 1, image: painting1, title: "Golden Sunset", size: "24\" x 36\"", medium: "Oil on Canvas", price: 1200, status: "available" as const },
  { id: 2, image: painting2, title: "Abstract Dreams", size: "30\" x 40\"", medium: "Acrylic on Canvas", price: 1500, status: "available" as const },
  { id: 3, image: painting3, title: "Portrait in Light", size: "18\" x 24\"", medium: "Oil on Canvas", price: 900, status: "sold" as const },
  { id: 4, image: painting4, title: "Minimal Geometry", size: "24\" x 24\"", medium: "Mixed Media", price: 850, status: "available" as const },
];

const Index = () => {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; painting: typeof paintings[0] | null }>({
    isOpen: false,
    painting: null,
  });

  const openLightbox = (painting: typeof paintings[0]) => {
    setLightbox({ isOpen: true, painting });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, painting: null });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroArtwork}
            alt="Featured Artwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Original Art,<br />Crafted with Passion
          </h1>
          <p className="font-inter text-lg md:text-xl mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Explore a curated collection of original paintings that bring warmth and character to any space.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            View Gallery <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Each piece is an original work of art, meticulously crafted to capture emotion and beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paintings.map((painting) => (
            <PaintingCard
              key={painting.id}
              {...painting}
              onClick={() => openLightbox(painting)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2">
            View All Paintings
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Commission a Custom Piece
          </h2>
          <p className="font-inter text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for something unique? I create custom paintings tailored to your vision and space.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightbox.painting && (
        <Lightbox
          isOpen={lightbox.isOpen}
          onClose={closeLightbox}
          {...lightbox.painting}
        />
      )}
    </div>
  );
};

export default Index;
