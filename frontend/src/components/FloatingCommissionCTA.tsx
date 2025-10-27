import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Palette } from "lucide-react";

const FloatingCommissionCTA = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Hide on contact page since we're already there
  const shouldHide = location.pathname === "/contact";
  
  if (shouldHide) return null;
  
  const handleClick = () => {
    navigate("/contact");
    // Scroll to top of contact page after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  
  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 bg-foreground hover:bg-foreground/90 text-background shadow-lg hover:shadow-xl transition-all duration-300 font-inter px-6 py-6 text-sm rounded-full group"
      aria-label="Inquire about commissions"
    >
      <Palette className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
      <span className="hidden sm:inline">Start a Custom Painting</span>
      <span className="sm:hidden">Commission</span>
    </Button>
  );
};

export default FloatingCommissionCTA;
