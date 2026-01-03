import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block text-cyan font-bold text-base tracking-wider uppercase mb-4 px-5 py-2 bg-cyan/10 rounded-full border border-cyan/20">
              Get Started Today
            </span>
          </AnimatedSection>

          <AnimatedSection delay={50}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight">
              Ready to Transform
              <br />
              <span className="text-emerald">Your Team?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join leading enterprises transforming their workforce with our blockchain-verified training programs.
            </p>
          </AnimatedSection>

          {/* Benefits */}
          <AnimatedSection delay={150}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-emerald" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
