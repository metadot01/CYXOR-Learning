import { Users, Clock, FlaskConical, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: Users,
    title: "Expert-Led",
    description: "Training designed and delivered by industry practitioners with real-world experience, ensuring credible, practical judgement—not theory alone.",
    color: "text-ocean",
  },
  {
    icon: Clock,
    title: "Microlearning",
    description: "Short, focused modules that fit into working schedules, improving retention, completion rates, and speed to compliance.",
    color: "text-cyan",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Practice",
    description: "Interactive, real-world exercises that build demonstrable, applied competence regulators and employers can trust.",
    color: "text-emerald",
  },
  {
    icon: ClipboardCheck,
    title: "Audit-Ready",
    description: "Built-in evidence, tracking, and reporting aligned to UK regulatory and audit requirements—clear proof when it matters most.",
    color: "text-gold",
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
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground mt-4 mb-5 leading-tight">
            Transform Learning Into
            <br />
            <span className="text-emerald">Competitive Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interactive, gamified, and verifiable courses designed for enterprise teams
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={benefit.title}
              delay={index * 100}
              animation="fade-up"
            >
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-emerald/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex gap-6">
                  {/* Icon */}
                  <div className="icon-container w-14 h-14 flex-shrink-0 group-hover:scale-105">
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
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
