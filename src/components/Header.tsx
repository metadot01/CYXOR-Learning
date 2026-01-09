import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import cyxorIcon from "@/assets/cyxor-icon.png";
import ContactDialog from "@/components/ContactDialog";

const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Enterprise Subscriptions", href: "/solutions#enterprise" },
      { label: "Custom eLearning", href: "/solutions#custom" },
      { label: "LMS Integration", href: "/solutions#integration" },
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
    items: [
      { label: "Finance & Banking", href: "/#industries" },
      { label: "Healthcare", href: "/#industries" },
      { label: "Government", href: "/#industries" },
      { label: "Infrastructure", href: "/#industries" },
    ],
  },
  {
    label: "About",
    href: "/resources",
    items: [
      { label: "Learning That Works", href: "/learning-that-works" },
      { label: "Our Instructors", href: "/resources#instructors" },
      { label: "Contact", href: "contact-dialog", isDialog: true },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  const toggleMobileSection = (label: string) => {
    setExpandedMobileSection(expandedMobileSection === label ? null : label);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const handleContactClick = () => {
    setOpenDropdown(null);
    setContactOpen(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={cyxorIcon} 
              alt="CYXOR" 
              className="h-10 sm:h-11 lg:h-12 w-auto"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
              <span className="text-foreground">CYXOR</span>
              <span className="text-emerald ml-1">LEARNING</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Learn Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown("Learn")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors text-foreground hover:text-cyan"
              >
                Learn
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "Learn" ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === "Learn" && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-background rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                    <a
                      href="https://cyxorlearning.com/technologyskills"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-cyan/5 transition-colors"
                    >
                      Technology Skills
                    </a>
                    <a
                      href="https://cyxorlearning.com/complianceskills"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-cyan/5 transition-colors"
                    >
                      Compliance Skills
                    </a>
                  </div>
                </div>
              )}
            </div>
            
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
                        'isDialog' in subItem && subItem.isDialog ? (
                          <button
                            key={subItem.label}
                            onClick={handleContactClick}
                            className="block w-full text-left px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-cyan/5 transition-colors"
                          >
                            {subItem.label}
                          </button>
                        ) : (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-cyan/5 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
          </div>

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
                <div className="flex items-center gap-3 p-6 border-b border-border">
                  <img 
                    src={cyxorIcon} 
                    alt="CYXOR" 
                    className="h-10 w-auto"
                  />
                  <span className="text-lg font-bold tracking-tight">
                    <span className="text-foreground">CYXOR</span>
                    <span className="text-emerald ml-1">LEARNING</span>
                  </span>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {/* Learn Section */}
                  <div className="border-b border-border/50">
                    <button
                      onClick={() => toggleMobileSection("Learn")}
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                    >
                      <span className="font-semibold text-foreground">Learn</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-cyan transition-transform duration-200 ${
                          expandedMobileSection === "Learn" ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {expandedMobileSection === "Learn" && (
                      <div className="bg-muted py-2">
                        <a
                          href="https://cyxorlearning.com/technologyskills"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="block px-8 py-3 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-background transition-colors"
                        >
                          Technology Skills
                        </a>
                        <a
                          href="https://cyxorlearning.com/complianceskills"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="block px-8 py-3 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-background transition-colors"
                        >
                          Compliance Skills
                        </a>
                      </div>
                    )}
                  </div>
                  
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
                            'isDialog' in subItem && subItem.isDialog ? (
                              <button
                                key={subItem.label}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setContactOpen(true);
                                }}
                                className="block w-full text-left px-8 py-3 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-background transition-colors"
                              >
                                {subItem.label}
                              </button>
                            ) : (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-8 py-3 text-sm font-medium text-muted-foreground hover:text-cyan hover:bg-background transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
