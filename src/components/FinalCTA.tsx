import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 blockchain-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 animate-fade-up">
            Ready to Transform{" "}
            <span className="text-primary">Your Team?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Explore our full catalog of enterprise technology and compliance courses with blockchain-verified credentials.
          </p>

          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/courses">
              <Button variant="hero" size="lg">
                Browse All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
