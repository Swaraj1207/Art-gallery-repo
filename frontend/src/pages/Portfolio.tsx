import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PaintingCard from "@/components/PaintingCard";
import Lightbox from "@/components/Lightbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";
import painting5 from "@/assets/painting-5.jpg";
import painting6 from "@/assets/painting-6.jpg";

const portfolioItems = [
  { id: 1, image: painting1, title: "Golden Sunset", size: "24\" x 36\"", medium: "Oil on Canvas", price: 1200, category: "landscape", status: "available" as const },
  { id: 2, image: painting2, title: "Abstract Dreams", size: "30\" x 40\"", medium: "Acrylic on Canvas", price: 1500, category: "abstract", status: "available" as const },
  { id: 3, image: painting3, title: "Portrait in Light", size: "18\" x 24\"", medium: "Oil on Canvas", price: 900, category: "portrait", status: "sold" as const },
  { id: 4, image: painting4, title: "Minimal Geometry", size: "24\" x 24\"", medium: "Mixed Media", price: 850, category: "abstract", status: "available" as const },
  { id: 5, image: painting5, title: "Serene Waters", size: "30\" x 24\"", medium: "Watercolor", price: 1100, category: "landscape", status: "available" as const },
  { id: 6, image: painting6, title: "Floral Elegance", size: "20\" x 30\"", medium: "Oil on Canvas", price: 950, category: "portrait", status: "sold" as const },
];

const Portfolio = () => {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; painting: typeof portfolioItems[0] | null }>({
    isOpen: false,
    painting: null,
  });

  const openLightbox = (painting: typeof portfolioItems[0]) => {
    setLightbox({ isOpen: true, painting });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, painting: null });
  };

  const renderPaintings = (category: string) => {
    const filtered = category === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === category);

    return (
      <div className="masonry-grid">
        {filtered.map((painting) => (
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
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore the collection. Each piece represents a moment of creative exploration, 
            captured in color and form.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="inline-flex mx-auto mb-16 bg-transparent border-b border-border rounded-none h-auto p-0">
            <TabsTrigger value="all" className="font-inter text-sm uppercase tracking-wider px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent">All Works</TabsTrigger>
            <TabsTrigger value="abstract" className="font-inter text-sm uppercase tracking-wider px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent">Abstract</TabsTrigger>
            <TabsTrigger value="landscape" className="font-inter text-sm uppercase tracking-wider px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent">Landscape</TabsTrigger>
            <TabsTrigger value="portrait" className="font-inter text-sm uppercase tracking-wider px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent">Portrait</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            {renderPaintings("all")}
          </TabsContent>

          <TabsContent value="abstract" className="animate-fade-in">
            {renderPaintings("abstract")}
          </TabsContent>

          <TabsContent value="landscape" className="animate-fade-in">
            {renderPaintings("landscape")}
          </TabsContent>

          <TabsContent value="portrait" className="animate-fade-in">
            {renderPaintings("portrait")}
          </TabsContent>
        </Tabs>
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

export default Portfolio;
