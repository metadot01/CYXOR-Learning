import cyxorLogo from "@/assets/cyxor-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary border-t border-secondary-foreground/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={cyxorLogo} 
              alt="CYXOR Learning" 
              className="h-8 lg:h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-secondary-foreground/70">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-secondary-foreground/50">
            © {currentYear} CYXOR Learning. All rights reserved.
          </div>
        </div>

        {/* Powered by */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
          <span className="text-xs text-secondary-foreground/40">
            Powered by Xantum Computing Private Limited
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
