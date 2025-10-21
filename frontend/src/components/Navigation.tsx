import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-playfair text-2xl font-semibold text-foreground hover:text-accent transition-colors">
            Fine Art Gallery
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-inter text-sm transition-colors ${
                isActive("/") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`font-inter text-sm transition-colors ${
                isActive("/shop") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/portfolio"
              className={`font-inter text-sm transition-colors ${
                isActive("/portfolio") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className={`font-inter text-sm transition-colors ${
                isActive("/about") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-inter text-sm transition-colors ${
                isActive("/contact") ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>
          
          <Button variant="ghost" size="icon" className="hover:bg-secondary">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
