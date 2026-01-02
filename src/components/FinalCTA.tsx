import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Phone, Users } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 blockchain-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-8 animate-fade-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Enterprise Ready
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Stop Wasting Resources on{" "}
            <span className="text-primary">Unverifiable Training</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 animate-fade-up font-medium" style={{ animationDelay: '0.2s' }}>
            See how blockchain-verified cybersecurity training eliminates redundant certifications while strengthening your compliance posture.
          </p>

          <div className="flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" className="min-w-[240px]">
              Explore Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Secondary Options */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Download Training Catalog</span>
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
              <Users className="w-4 h-4" />
              <span className="text-sm">Request Enterprise Demo</span>
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Speak with Training Specialist</span>
            </a>
          </div>

          {/* Trust Statement */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground font-medium">
              Trusted by UK organizations managing ISO 27001, GDPR, NIS2, and Cyber Essentials compliance requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
