import { ArrowRight, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const DualCTA = () => {
  return (
    <section className="py-20 lg:py-28 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Individual Learners */}
          <AnimatedSection animation="slide-left">
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-cyan/30 transition-all hover:shadow-card-hover h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-cyan uppercase tracking-wider">Individual Learners</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Start Learning Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Access 40+ courses in technology and compliance. Get blockchain-verified credentials employers trust.
              </p>

              <p className="text-lg font-bold text-foreground mb-6">
                From <span className="text-emerald">£149/month</span> or <span className="text-emerald">£1,499/year</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link to="/courses" className="flex-1">
                  <Button variant="hero" size="lg" className="w-full group">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/courses" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">
                    Browse Courses
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald" />
                  7-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Organizations */}
          <AnimatedSection animation="slide-right" delay={150}>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-ocean to-navy text-white border border-ocean/50 h-full relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Organizations & Teams</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Upskill Your Entire Team
                </h3>
                <p className="text-white/70 mb-6">
                  Team licenses, custom learning paths, dedicated support, and advanced analytics. Built for regulated enterprises.
                </p>

                <p className="text-lg font-bold text-white mb-6">
                  Custom pricing for <span className="text-emerald">5+ users</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Link to="/solutions" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full bg-white text-ocean hover:bg-white/90 border-white group">
                      Book Demo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/solutions" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10">
                      Get Quote
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" />
                    Dedicated account manager
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald" />
                    Custom reporting
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;
