import { Clock, Beaker, Gamepad2, Link2, Users, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: Users,
    title: "Expert-Led",
    description: "Practitioners building production systems",
    highlight: "Industry Leaders",
    color: "text-ocean",
  },
  {
    icon: Clock,
    title: "Microlearning",
    description: "5-15 min focused modules, maximum retention",
    highlight: "Learn Faster",
    color: "text-cyan",
  },
  {
    icon: Beaker,
    title: "Hands-On",
    description: "Interactive labs, live environments",
    highlight: "Real Practice",
    color: "text-lavender",
  },
  {
    icon: Gamepad2,
    title: "Gamified",
    description: "Leaderboards, challenges, competitions",
    highlight: "Stay Engaged",
    color: "text-gold",
  },
  {
    icon: Link2,
    title: "Blockchain-Verified",
    description: "Immutable, independently verifiable credentials",
    highlight: "Trusted Proof",
    color: "text-emerald",
  },
  {
    icon: Award,
    title: "Audit-Ready",
    description: "Meets regulatory requirements",
    highlight: "Compliance Ready",
    color: "text-ocean",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-24 relative scroll-mt-24 bg-soft">
      <div className="absolute inset-0 blockchain-grid" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-cyan font-bold text-base tracking-wider uppercase mb-4 px-5 py-2 bg-cyan/10 rounded-full border border-cyan/20">
            Why CYXOR LEARNING
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-4 mb-5">
            Transform Learning Into{" "}
            <span className="text-emerald">Competitive Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interactive, gamified, and verifiable courses designed for enterprise teams
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={benefit.title}
              delay={index * 100}
              animation="fade-up"
            >
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-emerald/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="icon-container w-14 h-14 mb-5 group-hover:scale-105">
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>

                  {/* Content */}
                  <span className={`text-xs font-bold ${benefit.color} uppercase tracking-wider`}>{benefit.highlight}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
