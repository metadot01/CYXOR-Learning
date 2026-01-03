import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-navy text-white">
      <div className="section-container">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Courses */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Courses
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Technology</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/courses#ai" className="hover:text-cyan transition-colors">AI/ML</Link></li>
                  <li><Link to="/courses#cloud" className="hover:text-cyan transition-colors">Cloud/MLOps</Link></li>
                  <li><Link to="/courses#blockchain" className="hover:text-cyan transition-colors">Blockchain</Link></li>
                  <li><Link to="/courses#data" className="hover:text-cyan transition-colors">Data Engineering</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Compliance</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/courses#compliance" className="hover:text-cyan transition-colors">ISO 27001</Link></li>
                  <li><Link to="/courses#compliance" className="hover:text-cyan transition-colors">GDPR</Link></li>
                  <li><Link to="/courses#compliance" className="hover:text-cyan transition-colors">NIS2</Link></li>
                  <li><Link to="/courses#compliance" className="hover:text-cyan transition-colors">Cyber Essentials</Link></li>
                  <li><Link to="/courses#compliance" className="hover:text-cyan transition-colors">SOC 2</Link></li>
                </ul>
              </div>
              <Link to="/courses" className="inline-flex items-center text-sm text-cyan font-semibold hover:underline">
                View All Courses →
              </Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Solutions
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">For Organizations</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/solutions#team" className="hover:text-cyan transition-colors">Team Licenses</Link></li>
                  <li><Link to="/solutions#enterprise" className="hover:text-cyan transition-colors">Enterprise Subscriptions</Link></li>
                  <li><Link to="/solutions#custom" className="hover:text-cyan transition-colors">Custom eLearning</Link></li>
                  <li><Link to="/solutions#integration" className="hover:text-cyan transition-colors">LMS Integration</Link></li>
                  <li><Link to="/solutions#compliance" className="hover:text-cyan transition-colors">Compliance Management</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">For Industries</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/industries#bfsi" className="hover:text-cyan transition-colors">BFSI</Link></li>
                  <li><Link to="/industries#healthcare" className="hover:text-cyan transition-colors">Healthcare</Link></li>
                  <li><Link to="/industries#government" className="hover:text-cyan transition-colors">Government</Link></li>
                  <li><Link to="/industries#infrastructure" className="hover:text-cyan transition-colors">Infrastructure</Link></li>
                  <li><Link to="/industries#technology" className="hover:text-cyan transition-colors">Technology</Link></li>
                </ul>
              </div>
              <Link to="/solutions" className="inline-flex items-center text-sm text-cyan font-semibold hover:underline">
                Explore Solutions →
              </Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">About</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/resources#about" className="hover:text-cyan transition-colors">Vision/Mission</Link></li>
                  <li><Link to="/resources#about" className="hover:text-cyan transition-colors">Why CYXOR LEARNING</Link></li>
                  <li><Link to="/resources#instructors" className="hover:text-cyan transition-colors">Our Experts</Link></li>
                  <li><Link to="/resources#tech" className="hover:text-cyan transition-colors">Tech Stack</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Resources</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link to="/courses" className="hover:text-cyan transition-colors">Catalog</Link></li>
                  <li><Link to="/resources#docs" className="hover:text-cyan transition-colors">Verification Guide</Link></li>
                  <li><Link to="/resources#docs" className="hover:text-cyan transition-colors">Documentation</Link></li>
                  <li><a href="#" className="hover:text-cyan transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-cyan transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-cyan transition-colors">FAQs</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Contact</p>
                <p className="text-sm text-white/70">contact@cyxorlearning.co.uk</p>
                <p className="text-xs text-white/50 mt-1">University of Stirling Innovation Park</p>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Connect */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Legal & Connect
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Legal</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-cyan transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-cyan transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-cyan transition-colors">Security</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-cyan font-semibold mb-2">Connect</p>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/company/cyxor-learninguk" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@CYXLEARN" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-cyan hover:bg-cyan/10 transition-colors border border-white/10">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Brand Name & Tagline */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <div className="flex items-center">
                <span 
                  className="text-lg font-bold tracking-[-0.02em] text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  CYXOR
                </span>
                <span 
                  className="text-lg font-bold tracking-[-0.01em] ml-1.5 text-emerald"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  LEARNING
                </span>
                <span className="text-lg font-bold text-white ml-1">UK</span>
                <span className="text-white/50 mx-2">•</span>
                <span className="text-sm text-white/50">
                  A unit of XCPL
                </span>
              </div>
              <span className="text-sm hidden sm:inline">
                <span className="text-cyan">Learn.</span>{" "}
                <span className="text-gold">Compete.</span>{" "}
                <span className="text-emerald">Verify.</span>
              </span>
            </div>

            {/* Copyright */}
            <div className="text-sm text-white/50">
              © {currentYear} CYXOR LEARNING UK. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
