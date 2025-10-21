import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface PaintingCardProps {
  image: string;
  title: string;
  size: string;
  medium: string;
  price: number;
  status: "available" | "sold";
  onClick: () => void;
}

const PaintingCard = ({ image, title, size, medium, price, status, onClick }: PaintingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="group cursor-pointer animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            {status === "available" ? (
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-inter text-xs font-medium text-foreground">Available</span>
              </div>
            ) : (
              <div className="bg-foreground/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <span className="font-inter text-xs font-medium text-background">Sold</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-1">
        <h3 className="font-playfair text-xl font-semibold text-foreground">{title}</h3>
        <p className="font-inter text-sm text-muted-foreground">{medium}</p>
        <p className="font-inter text-sm text-muted-foreground">{size}</p>
      </div>
    </div>
  );
};

export default PaintingCard;
