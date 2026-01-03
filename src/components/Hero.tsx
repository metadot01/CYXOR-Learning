import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, Landmark, Server, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const industries = [
    { name: "BFSI", icon: Building2, color: "from-ocean to-ocean/70" },
    { name: "Healthcare", icon: Heart, color: "from-emerald to-emerald/70" },
    { name: "Government", icon: Landmark, color: "from-slate to-slate/70" },
    { name: "Infrastructure", icon: Server, color: "from-gold to-gold/70" },
    { name: "Technology", icon: Cpu, color: "from-cyan to-cyan/70" },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden gradient-hero">
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
          {/* Main Heading */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight">
              <span className="relative inline-block text-cyan drop-shadow-[0_0_30px_rgba(0,217,255,0.5)]">
                Learn
                <span className="text-white/90">.</span>
              </span>{" "}
              <span className="relative inline-block text-gold drop-shadow-[0_0_30px_rgba(255,183,3,0.5)]">
                Compete
                <span className="text-white/90">.</span>
              </span>{" "}
              <span className="relative inline-block text-emerald drop-shadow-[0_0_30px_rgba(0,200,150,0.5)]">
                Verify
                <span className="text-white/90">.</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 8 Q25 2 50 8 T100 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Enterprise technology and compliance courses
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/courses">
              <Button variant="hero" size="lg" className="text-base px-8 h-12 shadow-[0_0_40px_rgba(0,200,150,0.3)] hover:shadow-[0_0_60px_rgba(0,200,150,0.5)] transition-all duration-300 group">
                Browse Courses
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="text-base px-8 h-12 border-2 border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan bg-white/5 backdrop-blur-sm transition-all duration-300">
                Enterprise Solutions
              </Button>
            </Link>
          </div>

          {/* Industries */}
          <div className="pt-14 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
              <p className="text-xs text-white/50 uppercase tracking-[0.2em] font-medium">
                Designed for regulated industries
              </p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {industries.map((item, index) => (
                <div 
                  key={item.name}
                  className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item.name}</span>
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
