import { Quote, TrendingUp, Shield, Clock } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-24 relative scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4">
            How a Financial Services Firm Transformed Training Efficiency
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20 animate-fade-up">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-destructive font-bold">!</span>
                </div>
                The Challenge
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                A UK-based financial institution was re-training every new hire on GDPR and FCA compliance requirements—even when candidates had completed identical training recently at previous employers. Without verifiable credentials, the compliance team had no choice but to mandate duplicate foundational training, creating frustration among experienced professionals and straining the learning budget.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                The Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                By implementing CYXOR's blockchain-verified training platform, the organization gained cryptographic proof of external credentials. New hires with verified compliance training no longer repeat foundational courses. The compliance team redirects those resources to advanced certifications and emerging risk areas.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-extrabold text-primary mb-1">100s</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Hours Saved Annually</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-extrabold text-primary mb-1">18</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Clean Audits</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-extrabold text-primary mb-1">Lower</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Insurance Premiums</div>
            </div>
          </div>

          {/* Quote */}
          <div className="p-8 rounded-2xl bg-card border border-border glow-border animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-medium">
              "We've shifted from defensive compliance to strategic capability building. Instead of endless refresher training, we're developing advanced skills in threat intelligence, cloud security, and AI governance. The blockchain verification gives auditors confidence while giving our team time back for meaningful development."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">CISO</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Chief Information Security Officer</div>
                <div className="text-sm text-muted-foreground font-medium">UK Financial Institution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
