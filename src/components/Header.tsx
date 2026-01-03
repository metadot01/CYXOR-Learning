import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import cyxorIcon from "@/assets/cyxor-icon.png";

const navItems = [
  {
    label: "Courses",
    href: "/courses",
    items: [
      { label: "AI & Machine Learning", href: "/courses#ai" },
      { label: "Cloud & MLOps", href: "/courses#cloud" },
      { label: "Blockchain & Web3", href: "/courses#blockchain" },
      { label: "Compliance & Regulatory", href: "/courses#compliance" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Financial Services", href: "/industries#bfsi" },
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Government", href: "/industries#government" },
      { label: "Critical Infrastructure", href: "/industries#infrastructure" },
      { label: "Technology", href: "/industries#technology" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Team Licenses", href: "/solutions#team" },
      { label: "Enterprise Subscriptions", href: "/solutions#enterprise" },
      { label: "Custom eLearning", href: "/solutions#custom" },
      { label: "LMS Integration", href: "/solutions#integration" },
      { label: "Compliance Management", href: "/solutions#compliance" },
    ],
  },
  {
    label: "About",
    href: "/resources",
    items: [
      { label: "Our Instructors", href: "/resources#instructors" },
      { label: "Technology Stack", href: "/resources#tech" },
      { label: "Documentation", href: "/resources#docs" },
      { label: "Contact", href: "/resources#contact" },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileSection = (label: string) => {
    setExpandedMobileSection(expandedMobileSection === label ? null : label);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
            <img 
              src={cyxorIcon} 
              alt="CYXOR" 
              className="h-9 sm:h-10 lg:h-11 w-auto"
            />
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-[-0.02em] text-foreground">
                CYXOR
              </span>
              <span className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-[-0.01em] ml-1.5 text-emerald">
                LEARNING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActiveRoute(item.href) ? 'text-cyan' : 'text-foreground hover:text-cyan'
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Dropdown Menu */}
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-background rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-cyan/5 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/courses">
            <Button variant="hero" size="default" className="hidden lg:flex">
              Browse Courses
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
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button 
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-2.5 p-6 border-b border-border">
                  <img 
                    src={cyxorIcon} 
                    alt="CYXOR" 
                    className="h-9 w-auto"
                  />
                  <div className="flex items-center">
                    <span className="text-xl font-bold tracking-[-0.02em] text-foreground">
                      CYXOR
                    </span>
                    <span className="text-xl font-bold tracking-[-0.01em] ml-1.5 text-emerald">
                      LEARNING
                    </span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item) => (
                    <div key={item.label} className="border-b border-border/50">
                      <button
                        onClick={() => toggleMobileSection(item.label)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                      >
                        <span className="font-semibold text-foreground">
                          {item.label}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-cyan transition-transform duration-200 ${
                            expandedMobileSection === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Expandable Sub-items */}
                      {expandedMobileSection === item.label && (
                        <div className="bg-muted py-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-3 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-background transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-border">
                  <Link to="/courses" onClick={() => setMobileOpen(false)}>
                    <Button variant="hero" size="lg" className="w-full">
                      Browse Courses
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
                  </Link>
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
