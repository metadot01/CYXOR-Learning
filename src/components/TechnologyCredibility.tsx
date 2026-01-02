import { Lock, Zap, Globe, Database } from "lucide-react";

const features = [
  { icon: Lock, label: "Enterprise Security" },
  { icon: Zap, label: "Instant Verification" },
  { icon: Globe, label: "Global Recognition" },
  { icon: Database, label: "Immutable Records" },
];

const TechnologyCredibility = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-muted-foreground font-medium text-sm tracking-wider uppercase">
              Powered by Xantum Computing Private Limited
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-4 mb-6">
              Enterprise-Grade{" "}
              <span className="text-primary">Blockchain Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              CYXOR Learning transforms professional development with enterprise-grade 
              blockchain verification, ensuring your achievements are secure, portable, 
              and recognized across industries.
            </p>
          </div>

          {/* Tech Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="flex flex-col items-center p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* Security Badge */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-muted border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">SOC 2 Compliant</div>
                <div className="text-sm text-muted-foreground">Enterprise-ready security standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCredibility;
