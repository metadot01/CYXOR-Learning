import { Quote, TrendingUp, Shield, Clock } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 relative scroll-mt-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 animate-fade-up">
            <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-primary mb-1">100s</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Hours Saved</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-primary mb-1">18</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Clean Audits</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-primary mb-1">40%</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Cost Reduction</div>
            </div>
          </div>

          {/* Quote */}
          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border glow-border animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              "We've shifted from defensive compliance to strategic capability building. The blockchain verification gives auditors confidence while giving our team time back for meaningful development."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">CISO</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Chief Information Security Officer</div>
                <div className="text-sm text-muted-foreground">UK Financial Institution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
