import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PaintingCard from "@/components/PaintingCard";
import Lightbox from "@/components/Lightbox";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { allPaintings } from "@/data/paintings";

const Gallery = () => {
  const [statusFilter, setStatusFilter] = useState<"all" | "available" | "sold">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; painting: typeof allPaintings[0] | null }>({
    isOpen: false,
    painting: null,
  });

  // Extract unique years for potential future filtering
  const uniqueYears = useMemo(() => {
    return Array.from(new Set(allPaintings.map(p => p.year))).sort((a, b) => b - a);
  }, []);

  // Filter paintings based on status and category
  const filteredPaintings = useMemo(() => {
    return allPaintings.filter(painting => {
      const matchesStatus = statusFilter === "all" || painting.status === statusFilter;
      const matchesCategory = categoryFilter === "all" || painting.category === categoryFilter;
      return matchesStatus && matchesCategory;
    });
  }, [statusFilter, categoryFilter]);

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
        <BackButton />
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Master Gallery
          </h1>
          <p className="font-inter text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore the complete collection of original paintings. Each piece tells a unique story.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 space-y-6">
          {/* Status Filter */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-inter text-sm uppercase tracking-wider text-muted-foreground">
              Availability
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
                className={statusFilter === "all" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                All Works
              </Button>
              <Button
                variant={statusFilter === "available" ? "default" : "outline"}
                onClick={() => setStatusFilter("available")}
                className={statusFilter === "available" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                Available for Sale
              </Button>
              <Button
                variant={statusFilter === "sold" ? "default" : "outline"}
                onClick={() => setStatusFilter("sold")}
                className={statusFilter === "sold" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                Sold/Archive
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-inter text-sm uppercase tracking-wider text-muted-foreground">
              Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={categoryFilter === "all" ? "default" : "outline"}
                onClick={() => setCategoryFilter("all")}
                className={categoryFilter === "all" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                All
              </Button>
              <Button
                variant={categoryFilter === "abstract" ? "default" : "outline"}
                onClick={() => setCategoryFilter("abstract")}
                className={categoryFilter === "abstract" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                Abstract
              </Button>
              <Button
                variant={categoryFilter === "landscape" ? "default" : "outline"}
                onClick={() => setCategoryFilter("landscape")}
                className={categoryFilter === "landscape" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                Landscape
              </Button>
              <Button
                variant={categoryFilter === "portrait" ? "default" : "outline"}
                onClick={() => setCategoryFilter("portrait")}
                className={categoryFilter === "portrait" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                Portrait
              </Button>
              <Button
                variant={categoryFilter === "still-life" ? "default" : "outline"}
                onClick={() => setCategoryFilter("still-life")}
                className={categoryFilter === "still-life" ? "bg-foreground hover:bg-foreground/90 text-background" : ""}
              >
                Still Life
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="font-inter text-muted-foreground">
            Showing {filteredPaintings.length} {filteredPaintings.length === 1 ? 'painting' : 'paintings'}
          </p>
        </div>

        {/* Paintings Grid - Masonry Layout */}
        <div className="masonry-grid mb-16 animate-fade-in">
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

        {/* Empty State */}
        {filteredPaintings.length === 0 && (
          <div className="text-center py-16">
            <p className="font-inter text-muted-foreground text-lg mb-4">
              No paintings match your current filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setStatusFilter("all");
                setCategoryFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
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
          year={lightbox.painting.year}
        />
      )}
    </div>
  );
};

export default Gallery;
