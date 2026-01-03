import { Clock, Beaker, Gamepad2, Link2, Users, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

const benefits: Benefit[] = [
  {
    icon: Users,
    title: "Expert-Led",
    description: "Practitioners building production systems",
    highlight: "Industry Leaders",
  },
  {
    icon: Clock,
    title: "Microlearning",
    description: "5-15 min focused modules, maximum retention",
    highlight: "Learn Faster",
  },
  {
    icon: Beaker,
    title: "Hands-On",
    description: "Interactive labs, live environments",
    highlight: "Real Practice",
  },
  {
    icon: Gamepad2,
    title: "Gamified",
    description: "Leaderboards, challenges, competitions",
    highlight: "Stay Engaged",
  },
  {
    icon: Link2,
    title: "Blockchain-Verified",
    description: "Immutable, independently verifiable credentials",
    highlight: "Trusted Proof",
  },
  {
    icon: Award,
    title: "Audit-Ready",
    description: "Meets regulatory requirements",
    highlight: "Compliance Ready",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-24 relative scroll-mt-24">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block text-primary font-bold text-sm tracking-wider uppercase mb-4 px-4 py-1.5 bg-primary/5 rounded-full">
            Why Cyxor Learning
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-4 mb-5">
            Transform Learning Into{" "}
            <span className="text-primary">Competitive Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interactive, gamified, and verifiable courses designed for enterprise teams
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="icon-container w-14 h-14 mb-5 group-hover:scale-105">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{benefit.highlight}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
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
