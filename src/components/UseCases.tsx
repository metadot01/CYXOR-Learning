import { Landmark, Truck, AlertTriangle } from "lucide-react";

const useCases = [
  {
    icon: Landmark,
    title: "Regulatory Compliance",
    description: "Financial services firms use CYXOR Learning to maintain FCA-compliant training records with tamper-proof audit trails for anti-money laundering, fraud prevention, and data protection mandates.",
  },
  {
    icon: Truck,
    title: "Supply Chain Security",
    description: "Manufacturing and logistics enterprises verify third-party vendor security certifications through our blockchain registry, reducing supply chain risk and meeting NIS2 requirements.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response Readiness",
    description: "Healthcare and critical infrastructure operators certify their security operations teams in incident response protocols, with credentials instantly verifiable during security audits or breach investigations.",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Trusted by Security-First Organizations
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-card to-transparent border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
