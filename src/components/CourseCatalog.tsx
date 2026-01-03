import { Shield, FileCheck, Building, Cpu } from "lucide-react";

const categories = [
  {
    icon: Shield,
    title: "Compliance Foundations",
    courses: ["ISO 27001", "GDPR", "NIS2", "Cyber Essentials"],
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Security Operations",
    courses: ["Incident Response", "Threat Intelligence", "SOC Skills", "Vulnerability Management"],
    color: "primary",
  },
  {
    icon: Building,
    title: "Risk & Governance",
    courses: ["Third-Party Risk", "Policy Development", "Business Continuity", "Risk Quantification"],
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Advanced Technical",
    courses: ["Cloud Security", "Zero Trust", "AI Security", "Blockchain Security"],
    color: "primary",
  },
];

const CourseCatalog = () => {
  return (
    <section id="courses" className="py-20 bg-secondary/30 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Training Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Enterprise Cybersecurity Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every course generates blockchain-verified credentials that auditors trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.courses.map((course) => (
                  <li key={course} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="#cta" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            View Full Training Catalog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
