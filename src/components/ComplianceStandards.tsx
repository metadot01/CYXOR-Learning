import { Shield, FileCheck, Building, Lock, Award, Landmark } from "lucide-react";

const standards = [
  {
    icon: Shield,
    title: "ISO 27001: Information Security Management",
    description: "Comprehensive training covering information security management system implementation. Addresses all Annex A controls with practical application guidance. Blockchain-verified completion provides auditable evidence for certification assessments and surveillance audits.",
  },
  {
    icon: FileCheck,
    title: "GDPR & UK Data Protection Act",
    description: "Role-specific data protection training meeting Information Commissioner's Office enforcement expectations. From basic awareness to Data Protection Officer-level expertise. Immutable records demonstrate continuous workforce competency in privacy regulations.",
  },
  {
    icon: Building,
    title: "NIS2 Directive: Essential Infrastructure Security",
    description: "Training for organizations in scope of the Network and Information Systems Directive. Covers security requirements, incident reporting obligations, and director-level accountability. Blockchain credentials provide evidence that leadership has received mandatory training.",
  },
  {
    icon: Lock,
    title: "UK Cyber Essentials & Cyber Essentials Plus",
    description: "NCSC-aligned training preparing technical teams for government-backed certification assessments. Blockchain-verified skills demonstrate readiness for technical verification. Credentials accepted in government procurement and supply chain due diligence.",
  },
  {
    icon: Award,
    title: "SOC 2: Security Operations Framework",
    description: "Service organization control training for SaaS providers and cloud service companies. Addresses security, availability, processing integrity, confidentiality, and privacy. Blockchain records support SOC 2 Type II audit evidence requirements.",
  },
  {
    icon: Landmark,
    title: "Financial Services: FCA Compliance",
    description: "Anti-money laundering, fraud prevention, operational resilience, and consumer duty training meeting Financial Conduct Authority handbook requirements. Immutable completion records satisfy regulatory examination expectations.",
  },
];

const ComplianceStandards = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Regulatory Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Training Aligned to UK Regulatory Requirements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            Course content designed for organizations facing stringent compliance obligations. Blockchain verification ensures regulatory bodies accept your training evidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard, index) => (
            <div
              key={standard.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <standard.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {standard.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">
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
