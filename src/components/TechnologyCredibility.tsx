import { Database, Zap, Shield, Users, FileText } from "lucide-react";

const features = [
  { icon: Database, title: "Immutable Records", description: "Cryptographic proof prevents credential fraud and backdating" },
  { icon: Zap, title: "Instant Verification", description: "Third-party verification via secure API or public blockchain registry" },
  { icon: Shield, title: "GDPR-Compliant", description: "Privacy-preserving credential design with selective disclosure controls" },
  { icon: Users, title: "SSO Integration", description: "Seamless deployment with existing identity management systems" },
  { icon: FileText, title: "Audit Logs", description: "Complete chain-of-custody for all credential issuance and verification events" },
];

const TechnologyCredibility = () => {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-muted-foreground font-semibold text-sm tracking-wider uppercase">
              Powered by Xantum Computing Private Limited
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-6">
              Enterprise-Grade{" "}
              <span className="text-primary">Security Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
              CYXOR Learning delivers institutional-grade blockchain verification infrastructure designed for regulated enterprises requiring the highest levels of data integrity and auditability.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Badge */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border border-primary/20 glow-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">SOC 2 Type II Compliant</div>
                <div className="text-sm text-muted-foreground font-medium">Enterprise-ready security infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCredibility;
