import { Button } from "@/components/ui/button";
import BlockchainVisualization from "./BlockchainVisualization";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blockchain-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Blockchain-Verified Skills{" "}
                <span className="text-primary">for the UK</span>
              </h1>
              <p className="text-lg sm:text-xl text-accent max-w-xl leading-relaxed">
                Empowering professionals to learn, verify, and showcase skills with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Explore the Platform
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">UK Focused</span>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <BlockchainVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
