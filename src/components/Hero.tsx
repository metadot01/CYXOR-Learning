import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden gradient-hero">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan/20 to-transparent rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald/15 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-gold/10 to-transparent rounded-full blur-[80px]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge - Overline */}
          <div className="animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90 font-medium mb-6">
              <Shield className="w-4 h-4 text-emerald" />
              Blockchain-verified certificates
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Workforce Learning – Tech &{" "}
              <span className="relative inline-block text-emerald drop-shadow-[0_0_30px_rgba(0,200,150,0.5)]">
                Compliance Skills
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 8 Q25 2 50 8 T100 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Empower your teams with{" "}
              <span className="text-cyan">enterprise tech training</span>,{" "}
              <span className="text-cyan">compliance certifications</span>, and{" "}
              <span className="text-cyan">blockchain-verified credentials</span>{" "}
              that drive real business results.
            </p>
          </div>

          {/* Social Proof Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">4.9/5 from 2,300+ learners</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald" />
              <span className="text-white/80 text-sm font-medium">95% completion rate</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center mt-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <a href="https://cyxorlearning.com/technologyskills" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-8 h-12 shadow-[0_0_40px_rgba(0,200,150,0.3)] hover:shadow-[0_0_60px_rgba(0,200,150,0.5)] transition-all duration-300 group">
                View Courses
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>


          {/* Client Trust */}
          <div className="pt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
              <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-medium">
                Trusted by teams at
              </p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 font-medium">
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Financial Services</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Healthcare</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Government</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
