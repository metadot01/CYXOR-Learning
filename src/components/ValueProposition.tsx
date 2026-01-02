import { RotateCcw, ShieldCheck, Target } from "lucide-react";

const features = [
  {
    icon: RotateCcw,
    title: "Train Once, Verify Forever",
    description: "Blockchain credentials follow employees across roles and organizations. When someone joins your team with verified GDPR training from their previous employer, auditors accept the cryptographic proof. No more paying to re-train people on skills they've already demonstrated—redirect that investment to advanced capabilities your workforce actually needs.",
  },
  {
    icon: ShieldCheck,
    title: "Instant Compliance Verification",
    description: "Auditors verify any employee's complete cybersecurity training history via blockchain in seconds, not days. ICO inspectors, cyber insurers, and enterprise clients receive tamper-proof evidence of workforce competency. No more digging through LMS exports, tracking down certificates, or reconstructing paper trails during high-pressure audits.",
  },
  {
    icon: Target,
    title: "Train for Skills Gaps, Not Compliance Theatre",
    description: "Enterprise dashboards reveal exactly who needs ISO 27001 updates, who's current on NIS2, and who requires advanced threat intelligence training. Stop forcing entire departments through annual refreshers they don't need. Target development where it drives real security posture improvement while maintaining continuous compliance.",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-24 relative scroll-mt-24">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Stop Redundant Re-Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            End Training Waste. Start Verifying.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Transform how your organization approaches cybersecurity training investment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
