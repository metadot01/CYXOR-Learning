import { ShieldCheck, Lock, Building2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Audit-Ready Credentials",
    description: "Blockchain-verified training records provide immutable proof of compliance training completion. Meet ISO 27001, GDPR, NIS2, and industry audit requirements with cryptographically secure evidence.",
  },
  {
    icon: Lock,
    title: "Critical Security Skills",
    description: "Develop your team's expertise in cybersecurity fundamentals, risk management, data protection, threat intelligence, and regulatory compliance frameworks essential for modern enterprises.",
  },
  {
    icon: Building2,
    title: "Enterprise Governance",
    description: "Centralized dashboards track workforce certification status, renewal requirements, and skills gaps. Demonstrate compliance readiness to auditors, regulators, and stakeholders instantly.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Why Choose CYXOR Learning?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Enterprise-grade training infrastructure designed for regulated industries
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
                <p className="text-muted-foreground leading-relaxed font-medium">
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
