import { Shield, FileCheck, Globe, Lock, Building } from "lucide-react";

const badges = [
  { icon: Shield, label: "GDPR Compliant" },
  { icon: FileCheck, label: "ISO 27001 Aligned" },
  { icon: Globe, label: "NIS2 Directive Ready" },
  { icon: Lock, label: "UK Cyber Essentials" },
  { icon: Building, label: "SOC 2 Framework" },
];

const TrustCompliance = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Compliance Ready
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
            Built for Regulated Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CYXOR Learning meets the stringent requirements of finance, healthcare, government, and critical infrastructure sectors.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {badges.map((badge, index) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="max-w-3xl mx-auto text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="p-8 rounded-2xl bg-card/50 border border-border glow-border">
            <p className="text-muted-foreground leading-relaxed">
              Our blockchain verification infrastructure ensures training records cannot be altered, backdated, or disputed—providing the evidence base your compliance officers and auditors demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;
