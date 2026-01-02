import cyxorIcon from "@/assets/cyxor-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="section-container">
        {/* Enterprise Support Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-secondary/50 border border-border">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-bold text-foreground text-sm mb-2">Enterprise Support</h4>
              <p className="text-xs text-muted-foreground font-medium">
                Dedicated implementation team | SSO & LMS integration | Custom compliance reporting | Priority technical support
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm mb-2">Compliance Alignment</h4>
              <p className="text-xs text-muted-foreground font-medium">
                Built to support UK Cyber Security Council professional standards | Aligned with NCSC training guidelines | Compatible with government security frameworks
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm mb-2">Company Information</h4>
              <p className="text-xs text-muted-foreground font-medium">
                Powered by Xantum Computing Private Limited | Transforming professional cybersecurity training with blockchain verification technology
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src={cyxorIcon} 
                alt="CYXOR" 
                className="h-9 w-auto"
              />
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-foreground">
                  CYXOR
                </span>
                <span className="text-lg font-semibold tracking-tight text-primary">
                  Learning
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-medium mb-4">
              A unit of Xantum Computing Private Limited
            </p>
            <p className="text-sm text-muted-foreground font-medium mb-6">
              Enterprise cybersecurity and compliance training with blockchain-verified credentials.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Credential Verification</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Financial Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Government</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Critical Infrastructure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
            </ul>
          </div>

          {/* Column 4: Compliance Standards */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
              Compliance Standards
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">ISO 27001</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GDPR Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NIS2 Directive</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UK Cyber Essentials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SOC 2 Framework</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground font-medium">
              © {currentYear} CYXOR Learning. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
