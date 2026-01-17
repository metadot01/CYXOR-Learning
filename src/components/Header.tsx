import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import cyxorLogo from "@/assets/cyxor-logo-full.png";
import ContactDialog from "@/components/ContactDialog";

const navItems = [
  {
    label: "Upskill",
    href: "/solutions#upskill",
    description: "Employee Development",
    items: [
      { label: "Digital Skills", href: "/solutions#digital-skills", description: "Modern technology proficiency" },
      { label: "Leadership Training", href: "/solutions#leadership", description: "Develop future leaders" },
      { label: "Soft Skills", href: "/solutions#soft-skills", description: "Communication & collaboration" },
      { label: "Career Pathways", href: "/solutions#career", description: "Growth & advancement tracks" },
    ],
  },
  {
    label: "Enterprise Tech",
    href: "/solutions#enterprise",
    description: "Technology Training",
    items: [
      { label: "Cloud Computing", href: "/solutions#cloud", description: "AWS, Azure, GCP training" },
      { label: "Cybersecurity", href: "/solutions#cybersecurity", description: "Security best practices" },
      { label: "Data & AI", href: "/solutions#data-ai", description: "Analytics & machine learning" },
      { label: "DevOps", href: "/solutions#devops", description: "CI/CD & automation" },
    ],
  },
  {
    label: "Compliance",
    href: "/solutions#compliance",
    description: "Regulatory Training",
    items: [
      { label: "GDPR & Privacy", href: "/solutions#gdpr", description: "Data protection compliance" },
      { label: "Health & Safety", href: "/solutions#health-safety", description: "Workplace safety standards" },
      { label: "Financial Regulations", href: "/solutions#financial", description: "FCA & industry standards" },
      { label: "Industry Standards", href: "/solutions#standards", description: "Sector-specific requirements" },
    ],
  },
  {
    label: "Learning Paths",
    href: "/learning-that-works",
    description: "Structured Programs",
    items: [
      { label: "Role-Based Learning", href: "/learning-that-works#role-based", description: "Job-specific curricula" },
      { label: "Skill Assessments", href: "/learning-that-works#assessments", description: "Identify skill gaps" },
      { label: "Custom Programs", href: "/learning-that-works#custom", description: "Tailored for your org" },
      { label: "Progress Tracking", href: "/learning-that-works#tracking", description: "Monitor employee growth" },
    ],
  },
  {
    label: "Certifications",
    href: "/resources#certifications",
    description: "Verified Credentials",
    items: [
      { label: "Blockchain Credentials", href: "/resources#blockchain", description: "Tamper-proof verification" },
      { label: "Industry Certifications", href: "/resources#industry-certs", description: "Recognized qualifications" },
      { label: "Digital Badges", href: "/resources#badges", description: "Shareable achievements" },
      { label: "Verification Portal", href: "/resources#verification", description: "Validate credentials" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Support & Insights",
    items: [
      { label: "Case Studies", href: "/resources#case-studies", description: "Success stories" },
      { label: "Blog & Insights", href: "/resources#blog", description: "Industry knowledge" },
      { label: "Our Instructors", href: "/resources#instructors", description: "Expert educators" },
      { label: "Contact Us", href: "contact-dialog", isDialog: true, description: "Get in touch" },
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src={cyxorLogo} 
                alt="CYXOR Learning" 
                className="h-10 sm:h-11 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      isActiveRoute(item.href) 
                        ? 'text-emerald bg-emerald/5' 
                        : 'text-foreground hover:text-emerald hover:bg-emerald/5'
                    }`}
                  >
                    {item.label}
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-background rounded-xl shadow-xl border border-border py-3 min-w-[280px]">
                        <div className="px-4 pb-2 mb-2 border-b border-border/50">
                          <p className="text-xs font-semibold text-emerald uppercase tracking-wider">
                            {item.description}
                          </p>
                        </div>
                        {item.items.map((subItem) => (
                          'isDialog' in subItem && subItem.isDialog ? (
                            <button
                              key={subItem.label}
                              onClick={handleContactClick}
                              className="block w-full text-left px-4 py-2.5 group transition-colors hover:bg-muted/50"
                            >
                              <span className="block text-sm font-medium text-foreground group-hover:text-emerald transition-colors">
                                {subItem.label}
                              </span>
                              <span className="block text-xs text-muted-foreground mt-0.5">
                                {subItem.description}
                              </span>
                            </button>
                          ) : (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-2.5 group transition-colors hover:bg-muted/50"
                            >
                              <span className="block text-sm font-medium text-foreground group-hover:text-emerald transition-colors">
                                {subItem.label}
                              </span>
                              <span className="block text-xs text-muted-foreground mt-0.5">
                                {subItem.description}
                              </span>
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
            <div className="hidden xl:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="border-emerald/30 text-emerald hover:bg-emerald/10 hover:border-emerald"
                onClick={() => setContactOpen(true)}
              >
                Request Demo
              </Button>
              <Button 
                size="sm"
                className="bg-emerald hover:bg-emerald/90 text-white"
                onClick={() => setContactOpen(true)}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button 
                  className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-background p-0 overflow-hidden">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <img 
                      src={cyxorLogo} 
                      alt="CYXOR Learning" 
                      className="h-9 w-auto"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto">
                    {navItems.map((item) => (
                      <div key={item.label} className="border-b border-border/30">
                        <button
                          onClick={() => toggleMobileSection(item.label)}
                          className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-muted/30 transition-colors"
                        >
                          <div>
                            <span className="block font-semibold text-foreground">
                              {item.label}
                            </span>
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-emerald transition-transform duration-200 flex-shrink-0 ${
                              expandedMobileSection === item.label ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        {/* Expandable Sub-items */}
                        {expandedMobileSection === item.label && (
                          <div className="bg-muted/30 py-2 px-4">
                            {item.items.map((subItem) => (
                              'isDialog' in subItem && subItem.isDialog ? (
                                <button
                                  key={subItem.label}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setContactOpen(true);
                                  }}
                                  className="block w-full text-left py-3 px-3 rounded-lg hover:bg-background transition-colors"
                                >
                                  <span className="block text-sm font-medium text-foreground">
                                    {subItem.label}
                                  </span>
                                  <span className="block text-xs text-muted-foreground mt-0.5">
                                    {subItem.description}
                                  </span>
                                </button>
                              ) : (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-3 px-3 rounded-lg hover:bg-background transition-colors"
                                >
                                  <span className="block text-sm font-medium text-foreground">
                                    {subItem.label}
                                  </span>
                                  <span className="block text-xs text-muted-foreground mt-0.5">
                                    {subItem.description}
                                  </span>
                                </Link>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Mobile CTAs */}
                  <div className="p-4 border-t border-border space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-emerald/30 text-emerald hover:bg-emerald/10"
                      onClick={() => {
                        setMobileOpen(false);
                        setContactOpen(true);
                      }}
                    >
                      Request Demo
                    </Button>
                    <Button 
                      className="w-full bg-emerald hover:bg-emerald/90 text-white"
                      onClick={() => {
                        setMobileOpen(false);
                        setContactOpen(true);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Contact Dialog */}
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Header;
