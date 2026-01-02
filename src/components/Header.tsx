import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import cyxorIcon from "@/assets/cyxor-icon.png";

const navItems = [
  {
    label: "Platform",
    items: [
      { label: "Courses", href: "#courses" },
      { label: "Training Catalog", href: "#courses" },
      { label: "Enterprise Dashboard", href: "#enterprise" },
      { label: "API Access", href: "#integrations" },
    ],
  },
  {
    label: "Why CYXOR",
    items: [
      { label: "Value Proposition", href: "#value" },
      { label: "The Training Problem", href: "#problem" },
      { label: "Blockchain Advantage", href: "#blockchain" },
      { label: "Case Study", href: "#case-study" },
    ],
  },
  {
    label: "Compliance",
    items: [
      { label: "ISO 27001", href: "#compliance" },
      { label: "GDPR Training", href: "#compliance" },
      { label: "NIS2 Directive", href: "#compliance" },
      { label: "UK Cyber Essentials", href: "#compliance" },
      { label: "SOC 2 Framework", href: "#compliance" },
    ],
  },
  {
    label: "Enterprise",
    items: [
      { label: "Dashboard", href: "#enterprise" },
      { label: "Integrations", href: "#integrations" },
      { label: "Why Traditional Fails", href: "#traditional" },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (label: string) => {
    setExpandedMobileSection(expandedMobileSection === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src={cyxorIcon} 
              alt="CYXOR" 
              className="h-9 sm:h-10 lg:h-12 w-auto"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight" style={{ color: '#0B2A3F' }}>
                CYXOR
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight" style={{ color: '#4EC3A5' }}>
                Learning
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <a href="#cta">
            <Button variant="hero" size="default" className="hidden lg:flex">
              Get Started
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
          </a>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button 
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" style={{ color: '#0B2A3F' }} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-2 p-6 border-b border-gray-100">
                  <img 
                    src={cyxorIcon} 
                    alt="CYXOR" 
                    className="h-9 w-auto"
                  />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold tracking-tight" style={{ color: '#0B2A3F' }}>
                      CYXOR
                    </span>
                    <span className="text-lg font-semibold tracking-tight" style={{ color: '#4EC3A5' }}>
                      Learning
                    </span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item) => (
                    <div key={item.label} className="border-b border-gray-50">
                      <button
                        onClick={() => toggleMobileSection(item.label)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                      >
                        <span className="font-semibold" style={{ color: '#0B2A3F' }}>
                          {item.label}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            expandedMobileSection === item.label ? 'rotate-180' : ''
                          }`} 
                          style={{ color: '#4EC3A5' }}
                        />
                      </button>
                      
                      {/* Expandable Sub-items */}
                      {expandedMobileSection === item.label && (
                        <div className="bg-gray-50 py-2">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-3 text-sm font-medium transition-colors hover:bg-gray-100"
                              style={{ color: '#3A5A6B' }}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-100">
                  <Button variant="hero" size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
                    Get Started
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
