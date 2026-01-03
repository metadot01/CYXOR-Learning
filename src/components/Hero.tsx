import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-[1]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6 animate-fade-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Blockchain-Verified Credentials
          </div>

          <div className="space-y-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.08]">
              Learn. Compete.{" "}
              <span className="text-primary">Verify.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enterprise technology and compliance courses with blockchain-verified credentials
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/courses">
              <Button variant="hero" size="lg">
                Browse Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Industries */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="w-full text-xs text-muted-foreground uppercase tracking-wider mb-2">Designed for regulated industries</p>
            {["BFSI", "Healthcare", "Government", "Critical Infrastructure", "Technology"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
