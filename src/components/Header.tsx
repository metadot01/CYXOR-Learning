import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import cyxorIcon from "@/assets/cyxor-icon.png";

const navItems = [
  {
    label: "Solutions",
    items: [
      { label: "Cybersecurity Training", href: "#" },
      { label: "Compliance Programs", href: "#" },
      { label: "Credential Verification", href: "#" },
      { label: "Enterprise Dashboard", href: "#" },
    ],
  },
  {
    label: "Compliance",
    items: [
      { label: "ISO 27001", href: "#" },
      { label: "GDPR Training", href: "#" },
      { label: "NIS2 Directive", href: "#" },
      { label: "UK Cyber Essentials", href: "#" },
      { label: "SOC 2 Framework", href: "#" },
    ],
  },
  {
    label: "For Enterprise",
    items: [
      { label: "API Access", href: "#" },
      { label: "Integration Partners", href: "#" },
      { label: "Custom Programs", href: "#" },
      { label: "Volume Licensing", href: "#" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Whitepapers", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
              <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase" style={{ color: '#4EC3A5' }}>
                Learning
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                  style={{ color: '#0B2A3F' }}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50"
                          style={{ color: '#3A5A6B' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#4EC3A5'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#3A5A6B'}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Button variant="hero" size="default">
            Explore Platform
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
