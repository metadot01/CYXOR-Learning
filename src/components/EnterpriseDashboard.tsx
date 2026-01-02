import { BarChart3, FileText, Workflow, Globe } from "lucide-react";

const capabilities = [
  {
    icon: BarChart3,
    title: "Real-Time Compliance Visibility",
    description: "See workforce certification status across departments, identify upcoming renewal requirements, analyze skills gaps by role, and track training completion rates—all in a single view that updates automatically as employees complete blockchain-verified courses.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Reporting",
    description: "Generate ICO inspection packages, ISO 27001 evidence bundles, cyber insurance verification reports, and NIS2 director accountability documentation with one click. Auditors receive cryptographically signed exports they can independently verify via blockchain—no more questioning data integrity.",
  },
  {
    icon: Workflow,
    title: "Automated Compliance Workflows",
    description: "Renewal reminders trigger automatically based on certification expiry dates. Role-based training assignments ensure new hires receive appropriate coursework. Manager approval workflows maintain oversight without creating bottlenecks. Blockchain credential issuance happens instantly upon verified completion.",
  },
  {
    icon: Globe,
    title: "Third-Party Verification Portal",
    description: "Enterprise clients, auditors, insurance providers, and regulatory bodies verify your workforce credentials independently through a public blockchain registry. No need to email certificates or grant LMS access—stakeholders get cryptographic proof of training instantly.",
  },
];

const EnterpriseDashboard = () => {
  return (
    <section id="enterprise" className="py-24 relative scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Enterprise Management
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Training Administration That Doesn't Waste Your Team's Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            Everything compliance officers need to demonstrate workforce competency. Nothing that creates unnecessary administrative burden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseDashboard;
