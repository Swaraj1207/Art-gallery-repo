import { X } from "lucide-react";
import { Button } from "./ui/button";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  size: string;
  medium: string;
  price: number;
  status: "available" | "sold";
}

const Lightbox = ({ isOpen, onClose, image, title, size, medium, price, status }: LightboxProps) => {
  if (!isOpen) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 text-foreground hover:bg-foreground/5"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
      
      <div className="flex items-center justify-center min-h-screen p-8">
        <div
          className="max-w-6xl w-full animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <img
                src={image}
                alt={title}
                className="w-full h-auto shadow-2xl"
              />
            </div>
            
            <div className="flex-1 max-w-md space-y-6">
              <div>
                <h2 className="font-playfair text-4xl font-semibold text-foreground mb-3">{title}</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-inter text-lg">{medium}</p>
                  <p className="font-inter text-lg">{size}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                {status === "available" ? (
                  <>
                    <p className="font-inter text-3xl font-semibold text-foreground mb-4">
                      ${price.toLocaleString()}
                    </p>
                    <Button 
                      className="w-full bg-foreground hover:bg-foreground/90 text-background font-inter"
                      onClick={() => window.location.href = '/shop'}
                    >
                      View in Shop
                    </Button>
                  </>
                ) : (
                  <div className="bg-muted/50 px-6 py-4 rounded-lg">
                    <p className="font-inter text-lg font-medium text-foreground">This piece has been sold</p>
                    <p className="font-inter text-sm text-muted-foreground mt-2">
                      Interested in commissioning a similar work? Contact us.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
