const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary border-t border-secondary-foreground/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex items-baseline">
              <span className="text-lg font-bold text-secondary-foreground">CYXOR</span>
              <span className="text-lg font-medium text-secondary-foreground/70 ml-1">LEARNING</span>
            </div>
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
