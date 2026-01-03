import { Shield, FileCheck, Building, Lock, Award, Landmark } from "lucide-react";

const standards = [
  { icon: Shield, title: "ISO 27001", description: "Information Security Management" },
  { icon: FileCheck, title: "GDPR", description: "UK Data Protection Act" },
  { icon: Building, title: "NIS2", description: "Essential Infrastructure Security" },
  { icon: Lock, title: "Cyber Essentials", description: "NCSC-Aligned Certification" },
  { icon: Award, title: "SOC 2", description: "Security Operations Framework" },
  { icon: Landmark, title: "FCA", description: "Financial Services Compliance" },
];

const ComplianceStandards = () => {
  return (
    <section id="compliance" className="py-20 bg-secondary/30 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Regulatory Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Built for UK Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Training aligned to every major regulatory framework you face.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {standards.map((standard, index) => (
            <div
              key={standard.title}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <standard.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">
                {standard.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceStandards;
