import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden gradient-hero">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/10 to-navy/30 z-[1]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald/10 border border-emerald/30 text-emerald font-semibold text-sm mb-8 animate-fade-up glow-emerald">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Blockchain-Verified Credentials
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              <span className="text-cyan">Learn.</span>{" "}
              <span className="text-gold">Compete.</span>{" "}
              <span className="text-emerald relative">
                Verify.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 6 Q25 0 50 6 T100 6" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Enterprise technology and compliance courses with blockchain-verified credentials
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/courses">
              <Button variant="hero" size="lg" className="text-base px-8 h-14 shadow-lg hover:shadow-xl">
                Browse Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="text-base px-8 h-14 border-cyan/40 text-cyan hover:bg-cyan/10 hover:text-cyan bg-transparent">
                Enterprise Solutions
              </Button>
            </Link>
          </div>

          {/* Industries */}
          <div className="pt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xs text-white/60 uppercase tracking-widest mb-6 font-semibold">
              Designed for regulated industries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {[
                { name: "BFSI", color: "text-ocean bg-ocean/20 border-ocean/30" },
                { name: "Healthcare", color: "text-emerald bg-emerald/20 border-emerald/30" },
                { name: "Government", color: "text-slate bg-slate/20 border-slate/30" },
                { name: "Critical Infrastructure", color: "text-slate bg-slate/20 border-slate/30" },
                { name: "Technology", color: "text-cyan bg-cyan/20 border-cyan/30" },
              ].map((item) => (
                <div 
                  key={item.name} 
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full border ${item.color} transition-colors`}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
