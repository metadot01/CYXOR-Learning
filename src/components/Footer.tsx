import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-navy text-white">
      <div className="section-container">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company + Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold tracking-tight text-white">CYXOR</span>
              <span className="text-xl font-bold ml-1.5 text-emerald">LEARNING</span>
            </div>
            <p className="text-sm text-white/60 mb-6">
              Enterprise training that counts.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              <a href="https://www.linkedin.com/company/cyxor-learninguk" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/cyxorlearning" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@CYXLEARN" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <p className="text-xs text-cyan font-semibold mb-2">Newsletter</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 text-sm h-9"
              />
              <Button size="sm" variant="hero" className="h-9 px-3">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Learn
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Courses</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/courses" className="hover:text-cyan transition-colors">All Courses</Link></li>
                  <li><Link to="/courses#compliance" className="hover:text-cyan transition-colors">Compliance</Link></li>
                  <li><Link to="/courses#ai" className="hover:text-cyan transition-colors">Technology</Link></li>
                  <li><Link to="/courses" className="hover:text-cyan transition-colors">Free Trial</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Industries</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/industries#bfsi" className="hover:text-cyan transition-colors">Financial</Link></li>
                  <li><Link to="/industries#healthcare" className="hover:text-cyan transition-colors">Healthcare</Link></li>
                  <li><Link to="/industries#government" className="hover:text-cyan transition-colors">Government</Link></li>
                  <li><Link to="/industries#infrastructure" className="hover:text-cyan transition-colors">Infrastructure</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/resources" className="hover:text-cyan transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan transition-colors">For Organizations</Link></li>
              <li><Link to="/solutions#pricing" className="hover:text-cyan transition-colors">Pricing</Link></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">FAQ</a></li>
              <li><Link to="/resources#contact" className="hover:text-cyan transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li><a href="#" className="hover:text-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Verify Certificate</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Blog</a></li>
            </ul>
            <div>
              <p className="text-xs text-cyan font-semibold mb-2">Legal</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
              <span>UK Company</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>

            {/* Copyright & Contact */}
            <div className="text-center md:text-right">
              <p className="text-sm text-white/50 mb-1">
                © {currentYear} CYXOR LEARNING UK. All rights reserved.
              </p>
              <p className="text-xs text-white/40">
                hello@cyxorlearning.co.uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
