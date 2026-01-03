import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Blockchain-verified certificates",
  "Hands-on labs & scenarios",
  "Gamified learning experience",
  "Enterprise-ready content",
];

const FinalCTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden scroll-mt-24 gradient-cta">
      {/* Background Elements */}
      <div className="absolute inset-0 blockchain-grid opacity-50" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block text-primary font-bold text-sm tracking-wider uppercase mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              Get Started Today
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.05s' }}>
            Ready to Transform{" "}
            <span className="text-primary">Your Team?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Join leading enterprises transforming their workforce with our blockchain-verified training programs.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/courses">
              <Button variant="hero" size="lg" className="text-base px-10 h-14 shadow-lg hover:shadow-xl">
                Browse All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/resources#contact">
              <Button variant="outline" size="lg" className="text-base px-10 h-14">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
