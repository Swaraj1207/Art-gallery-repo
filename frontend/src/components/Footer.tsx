import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Fine Art Gallery</h3>
            <p className="text-muted-foreground font-inter text-sm">
              Original paintings by a professional artist. Each piece is unique and crafted with passion.
            </p>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Shop</a></li>
              <li><a href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:artist@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground font-inter">
          © {new Date().getFullYear()} Fine Art Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
