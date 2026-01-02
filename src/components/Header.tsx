import { Button } from "@/components/ui/button";
import cyxorIcon from "@/assets/cyxor-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={cyxorIcon} 
              alt="CYXOR" 
              className="h-12 lg:h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-extrabold tracking-tight" style={{ color: '#0B2A3F' }}>
                CYXOR
              </span>
              <span className="text-sm lg:text-base font-semibold tracking-widest uppercase" style={{ color: '#4EC3A5' }}>
                Learning
              </span>
            </div>
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
