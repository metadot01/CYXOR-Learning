import { useState } from "react";
import { Shield, FileCheck, Building, Cpu, ChevronDown } from "lucide-react";

const categories = [
  {
    icon: Shield,
    title: "Compliance Foundations",
    courses: [
      {
        name: "ISO 27001 Implementation Training",
        description: "Comprehensive information security management system training covering all Annex A controls. Prepares teams for certification audits with blockchain-verified completion recognized by accreditation bodies.",
      },
      {
        name: "GDPR for IT Professionals",
        description: "Role-specific data protection training meeting ICO enforcement guidelines. From awareness-level to Data Protection Officer expertise with immutable compliance records.",
      },
      {
        name: "NIS2 Directive Essentials",
        description: "Essential infrastructure security training for organizations in scope. Covers director-level accountability requirements with cryptographic proof of completion.",
      },
      {
        name: "UK Cyber Essentials Preparation",
        description: "NCSC-aligned training preparing technical teams for Cyber Essentials and Cyber Essentials Plus assessment. Blockchain credentials accepted in government procurement processes.",
      },
    ],
  },
  {
    icon: FileCheck,
    title: "Security Operations",
    courses: [
      {
        name: "Incident Response & Recovery",
        description: "Hands-on training in security incident detection, containment, eradication, and recovery. Develops muscle memory for high-pressure scenarios with verifiable competency demonstration.",
      },
      {
        name: "Threat Intelligence Analysis",
        description: "Practical threat hunting, indicator analysis, and intelligence-driven defense. Blockchain-verified skills that prove capability to security operations leadership.",
      },
      {
        name: "Security Operations Center (SOC) Skills",
        description: "Comprehensive SOC analyst training covering SIEM platforms, log analysis, alert triage, and investigation workflows. Verifiable evidence of technical proficiency.",
      },
      {
        name: "Vulnerability Management",
        description: "Asset discovery, risk assessment, patch management, and remediation prioritization. Demonstrates systematic approach to vulnerability lifecycle management.",
      },
    ],
  },
  {
    icon: Building,
    title: "Risk & Governance",
    courses: [
      {
        name: "Third-Party Risk Assessment",
        description: "Vendor security evaluation, contract review, and supply chain risk management. Critical for NIS2 compliance and cyber insurance requirements.",
      },
      {
        name: "Security Policy Development",
        description: "Creating enforceable, auditable security policies aligned to ISO 27001, NIST, and industry frameworks. Blockchain-verified expertise in governance documentation.",
      },
      {
        name: "Business Continuity Planning",
        description: "Disaster recovery, continuity of operations, and resilience planning for critical infrastructure. Verifiable training that satisfies board-level due diligence.",
      },
      {
        name: "Cyber Risk Quantification",
        description: "Translating technical risks into business impact metrics. Communicate security investments in language that CFOs and boards understand.",
      },
    ],
  },
  {
    icon: Cpu,
    title: "Advanced Technical Training",
    courses: [
      {
        name: "Cloud Security Architecture",
        description: "Multi-cloud security controls for AWS, Azure, and GCP. Zero-trust implementation, identity federation, and cloud-native security services.",
      },
      {
        name: "Zero Trust Implementation",
        description: "Moving beyond perimeter security to identity-centric access control. Practical implementation with blockchain-verified architectural expertise.",
      },
      {
        name: "AI Security & Governance",
        description: "Securing AI/ML systems, addressing algorithmic risks, and implementing responsible AI frameworks. Critical emerging competency with verifiable credentials.",
      },
      {
        name: "Blockchain Security Fundamentals",
        description: "Understanding distributed ledger security, smart contract vulnerabilities, and cryptographic principles. Technical foundation for organizations adopting blockchain.",
      },
    ],
  },
];

const CourseCatalog = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(categories[0].title);

  return (
    <section id="courses" className="py-24 bg-secondary/30 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Training Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Enterprise Cybersecurity & Compliance Training Catalog
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            Blockchain-verified courses designed for regulated UK industries. Every completion generates immutable credentials that auditors, insurers, and regulatory bodies trust.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="rounded-2xl bg-card border border-border overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                className="w-full flex items-center justify-between p-6 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-left">
                    {category.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                    expandedCategory === category.title ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Courses */}
              {expandedCategory === category.title && (
                <div className="px-6 pb-6 space-y-4">
                  {category.courses.map((course) => (
                    <div
                      key={course.name}
                      className="p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                    >
                      <h4 className="font-bold text-foreground mb-2">{course.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
