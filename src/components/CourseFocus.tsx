import { Shield, FileCheck, Building, Cpu } from "lucide-react";

const categories = [
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    courses: [
      "Threat modeling and risk assessment",
      "Network security and defense",
      "Incident response and recovery",
      "Security operations center (SOC) essentials",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance & Regulatory",
    courses: [
      "GDPR and UK data protection",
      "ISO 27001 implementation",
      "NIS2 Directive compliance",
      "Financial services regulations (FCA, PCI DSS)",
    ],
  },
  {
    icon: Building,
    title: "Governance & Risk Management",
    courses: [
      "Third-party risk assessment",
      "Security policy development",
      "Business continuity planning",
      "Cyber risk quantification",
    ],
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    courses: [
      "AI security and governance",
      "Blockchain security architecture",
      "Cloud security (AWS, Azure, GCP)",
      "Zero-trust architecture design",
    ],
  },
];

const CourseFocus = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Cybersecurity & Governance Curriculum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Comprehensive training programs aligned with industry frameworks and regulatory requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.courses.map((course) => (
                  <li key={course} className="flex items-start gap-3 text-muted-foreground font-medium">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFocus;
