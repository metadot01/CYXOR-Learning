import { Clock, Beaker, Gamepad2, Link2, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Expert-Led",
    description: "Practitioners building production systems",
  },
  {
    icon: Clock,
    title: "Microlearning",
    description: "5-15 min focused modules, maximum retention",
  },
  {
    icon: Beaker,
    title: "Hands-On",
    description: "Interactive labs, live environments",
  },
  {
    icon: Gamepad2,
    title: "Gamified",
    description: "Leaderboards, challenges, competitions",
  },
  {
    icon: Link2,
    title: "Blockchain-Verified",
    description: "Immutable, independently verifiable credentials",
  },
  {
    icon: Award,
    title: "Audit-Ready",
    description: "Meets regulatory requirements",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-20 relative scroll-mt-24">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Why Cyxor Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Transform Learning Into Competitive Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive, gamified, and verifiable courses designed for enterprise teams
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default ValueProposition;
