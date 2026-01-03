import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";

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
            Ready to Eliminate{" "}
            <span className="text-primary">Training Waste?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            See how blockchain-verified training can cut costs and simplify compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/30 text-foreground hover:bg-primary/5">
              <FileText className="w-5 h-5 mr-2" />
              Download Catalog
            </Button>
          </div>

          {/* Trust Statement */}
          <p className="text-sm text-muted-foreground mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Trusted by UK enterprises managing ISO 27001, GDPR, NIS2, and Cyber Essentials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
