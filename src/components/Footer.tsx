import cyxorIcon from "@/assets/cyxor-icon.png";
import { Shield, Headphones } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={cyxorIcon} 
                alt="CYXOR" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-foreground">
                  CYXOR
                </span>
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Learning
                </span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6 font-medium">
              Enterprise cybersecurity and compliance training platform with blockchain-verified credentials for regulated industries.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Standards */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Standards & Compliance
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li>UK Cyber Security Council aligned</li>
              <li>NCSC training guidelines</li>
              <li>Government security clearance compatible</li>
              <li>ISO 27001 framework ready</li>
            </ul>
          </div>

          {/* Enterprise Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Headphones className="w-4 h-4 text-primary" />
              Enterprise Support
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li>Dedicated implementation team</li>
              <li>SSO & LMS integration</li>
              <li>Custom compliance reporting</li>
              <li>24/7 technical support</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground font-medium">
              © {currentYear} CYXOR Learning. All rights reserved.
            </div>
          </div>

          {/* Powered by */}
          <div className="mt-6 text-center">
            <span className="text-xs text-muted-foreground/60 font-medium">
              Powered by Xantum Computing Private Limited
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
