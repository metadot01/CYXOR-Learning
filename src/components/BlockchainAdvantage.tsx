import { Database, Zap, Users, Clock } from "lucide-react";

const advantages = [
  {
    icon: Database,
    title: "Immutable Audit Trail",
    description: "Every training completion, credential issuance, and verification check is recorded permanently on the blockchain. Timestamps can't be altered. Completion records can't be backdated. Credentials can't be revoked without creating a visible historical record. This cryptographic integrity satisfies the most rigorous audit requirements.",
  },
  {
    icon: Zap,
    title: "Instant Third-Party Verification",
    description: "Auditors, insurers, and enterprise clients verify credentials independently without contacting your organization. They query the public blockchain registry, receive cryptographic proof of training completion, and confirm that credentials haven't been revoked—all in under sixty seconds. No email delays, no certificate authenticity questions.",
  },
  {
    icon: Users,
    title: "Cross-Organizational Portability",
    description: "Blockchain credentials follow employees throughout their career. When experienced professionals join your organization with verified security training from previous employers, you accept those credentials with confidence. Industry-wide, this reduces duplicate training, accelerates onboarding, and creates stronger security communities.",
  },
  {
    icon: Clock,
    title: "Future-Proof Compliance Records",
    description: "Organizations change LMS platforms. Vendors go out of business. Digital systems migrate. Blockchain credentials persist independently of any single organization's infrastructure. Your training records remain verifiable decades into the future—critical for industries with long audit windows and historical compliance requirements.",
  },
];

const BlockchainAdvantage = () => {
  return (
    <section id="blockchain" className="py-24 relative scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            The Blockchain Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            What Blockchain Verification Actually Means for Your Organization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            Beyond the buzzword: practical advantages that strengthen compliance posture and reduce administrative burden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up glow-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainAdvantage;
