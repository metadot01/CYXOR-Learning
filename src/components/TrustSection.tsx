import { Users, CheckCircle, Building2 } from "lucide-react";

const stats = [
  {
    icon: CheckCircle,
    value: "10,000+",
    label: "Skills Verified",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Professionals",
  },
  {
    icon: Building2,
    value: "250+",
    label: "Employer Partners",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Trusted Platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mt-4 mb-4">
            Trusted by Forward-Thinking Professionals
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Join thousands of UK professionals who are building their verified credentials
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-secondary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-secondary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* UK Focus Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-lg">🇬🇧</span>
            </div>
            <span className="text-secondary-foreground font-medium">
              Built for UK Professionals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
