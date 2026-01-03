import { TrendingUp, Clock, Shield, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Training Cost Reduction",
  },
  {
    icon: Clock,
    value: "60s",
    label: "Audit Verification Time",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Tamper-Proof Records",
  },
  {
    icon: Award,
    value: "ISO 27001",
    label: "Aligned & Compliant",
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
