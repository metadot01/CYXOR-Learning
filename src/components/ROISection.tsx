import { TrendingDown, ShieldCheck, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduced Audit Costs",
    stat: "70%",
    statLabel: "Less prep time",
    description: "Eliminate hours of manual verification. Auditors access cryptographic proof of training completion instantly—cutting audit preparation time significantly.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Confidence",
    stat: "100%",
    statLabel: "Compliance visibility",
    description: "Demonstrate continuous compliance posture to regulators, board members, and cyber insurers with real-time workforce certification dashboards.",
  },
  {
    icon: Award,
    title: "Brand Protection",
    stat: "24/7",
    statLabel: "Verification access",
    description: "Minimize breach risk through verified security competencies. Show customers and partners your commitment to data protection and operational resilience.",
  },
];

const ROISection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 blockchain-grid opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Business Value
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
            Reduce Risk. Prove Compliance. Protect Reputation.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{benefit.stat}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{benefit.statLabel}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
