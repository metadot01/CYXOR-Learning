import { AlertCircle, UserX, FileWarning, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Unverifiable Certificates",
    description: "Auditors can't trust PDF certificates. You re-train staff just to be safe.",
  },
  {
    icon: UserX,
    title: "Talent Mobility Penalty",
    description: "New hires repeat training they already completed at previous employers.",
  },
  {
    icon: FileWarning,
    title: "LMS Integrity Issues",
    description: "Database exports can be modified. Auditors default to skepticism.",
  },
  {
    icon: Clock,
    title: "Audit Panic Mode",
    description: "Weeks of preparation scrambling to reconstruct training records.",
  },
];

const TheProblem = () => {
  return (
    <section id="problem" className="py-20 bg-secondary/30 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-destructive font-bold text-sm tracking-wider uppercase">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Training Waste Is Costing You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            UK enterprises waste significant resources re-training staff on skills they've already mastered—simply because credentials can't be verified.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300 animate-fade-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
