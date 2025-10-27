import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";
import painting5 from "@/assets/painting-5.jpg";
import painting6 from "@/assets/painting-6.jpg";

export interface Painting {
  id: number;
  image: string;
  title: string;
  size: string;
  medium: string;
  price: number;
  category: "abstract" | "landscape" | "portrait" | "still-life";
  status: "available" | "sold";
  year: number;
}

export const allPaintings: Painting[] = [
  { 
    id: 1, 
    image: painting1, 
    title: "Golden Sunset", 
    size: "24\" x 36\"", 
    medium: "Oil on Canvas", 
    price: 1200, 
    category: "landscape", 
    status: "available",
    year: 2024
  },
  { 
    id: 2, 
    image: painting2, 
    title: "Abstract Dreams", 
    size: "30\" x 40\"", 
    medium: "Acrylic on Canvas", 
    price: 1500, 
    category: "abstract", 
    status: "available",
    year: 2024
  },
  { 
    id: 3, 
    image: painting3, 
    title: "Portrait in Light", 
    size: "18\" x 24\"", 
    medium: "Oil on Canvas", 
    price: 900, 
    category: "portrait", 
    status: "sold",
    year: 2023
  },
  { 
    id: 4, 
    image: painting4, 
    title: "Minimal Geometry", 
    size: "24\" x 24\"", 
    medium: "Mixed Media", 
    price: 850, 
    category: "abstract", 
    status: "available",
    year: 2024
  },
  { 
    id: 5, 
    image: painting5, 
    title: "Serene Waters", 
    size: "30\" x 24\"", 
    medium: "Watercolor", 
    price: 1100, 
    category: "landscape", 
    status: "available",
    year: 2023
  },
  { 
    id: 6, 
    image: painting6, 
    title: "Floral Elegance", 
    size: "20\" x 30\"", 
    medium: "Oil on Canvas", 
    price: 950, 
    category: "still-life", 
    status: "sold",
    year: 2023
  },
];
