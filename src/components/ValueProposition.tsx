import { RotateCcw, ShieldCheck, Target, Zap } from "lucide-react";

const features = [
  {
    icon: RotateCcw,
    title: "Train Once, Verify Forever",
    description: "Credentials follow employees across organizations. Accept verified training from previous employers with confidence.",
    highlight: "Eliminate duplicate costs",
  },
  {
    icon: ShieldCheck,
    title: "Instant Audit Verification",
    description: "Auditors verify training in 60 seconds via blockchain. No more scrambling for certificates or LMS exports.",
    highlight: "Pass audits with ease",
  },
  {
    icon: Target,
    title: "Smart Skills Gap Analysis",
    description: "See exactly who needs training and who's current. Stop forcing refreshers on already-competent staff.",
    highlight: "Target real gaps",
  },
  {
    icon: Zap,
    title: "Tamper-Proof Records",
    description: "Cryptographic proof that can't be forged or altered. The gold standard in compliance evidence.",
    highlight: "Bulletproof compliance",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-20 relative scroll-mt-24">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Blockchain Verification That Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade training credentials trusted by auditors, insurers, and regulators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {feature.description}
                </p>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
