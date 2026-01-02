import { Key, Users, BookOpen, Code } from "lucide-react";

const integrations = [
  {
    icon: Key,
    title: "Single Sign-On (SSO) Integration",
    description: "Native support for SAML 2.0, OAuth 2.0, and OpenID Connect. Integrate with Okta, Azure AD, Google Workspace, or any enterprise identity provider. Employees access training with existing corporate credentials—no additional password management.",
  },
  {
    icon: Users,
    title: "HR System Integration",
    description: "Bi-directional sync with Workday, SAP SuccessFactors, BambooHR, and major HRIS platforms. Automatically assign role-based training when employees join or change positions. Sync organizational hierarchies for manager approval workflows.",
  },
  {
    icon: BookOpen,
    title: "Learning Management System (LMS) Compatibility",
    description: "CYXOR complements existing LMS investments rather than replacing them. Host proprietary content in your current LMS while using CYXOR for compliance-critical training that requires blockchain verification. Unified dashboards provide complete training visibility.",
  },
  {
    icon: Code,
    title: "Verification API",
    description: "RESTful API enables automated credential verification in hiring workflows, client onboarding processes, and vendor risk assessments. Enterprises, recruitment firms, and auditing organizations query blockchain records programmatically without manual certificate review.",
  },
];

const APIIntegration = () => {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Enterprise Integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Enterprise Integration for Existing Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            CYXOR connects to your current HR, LMS, and identity management infrastructure—no wholesale platform replacement required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={integration.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <integration.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {integration.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                    {integration.description}
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

export default APIIntegration;
