import { Button } from "@/components/ui/button";
import cyxorLogo from "@/assets/cyxor-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={cyxorLogo} 
              alt="CYXOR Learning" 
              className="h-14 lg:h-16 w-auto"
            />
          </div>

          {/* CTA */}
          <Button variant="hero" size="default">
            Explore the Platform
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
