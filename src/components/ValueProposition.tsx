import { Shield, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Blockchain Verified",
    description: "Tamper-proof, instantly verifiable credentials that employers trust.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready Skills",
    description: "Master AI, blockchain, and platform engineering with cutting-edge courses.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Award,
    title: "Professional Credibility",
    description: "Build a verifiable portfolio that sets you apart in the marketplace.",
    gradient: "from-primary/10 to-secondary/5",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Why Choose CYXOR Learning?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your professional development with enterprise-grade blockchain verification
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card card-hover border border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
