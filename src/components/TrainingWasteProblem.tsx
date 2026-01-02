import { AlertCircle, UserX, Clock } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "The Verification Crisis",
    description: "An employee completed comprehensive GDPR training six months ago at their previous employer. You have their certificate. But can you prove to an ICO inspector that the training actually happened? That the certificate wasn't forged? That the content met regulatory standards? Without blockchain verification, the answer is no. So you pay for duplicate training to eliminate the risk.",
  },
  {
    icon: UserX,
    title: "The Mobility Penalty",
    description: "Workforce mobility should strengthen your security culture—experienced professionals bring valuable knowledge from previous organizations. Instead, it triggers costly re-certification cycles. Training investments don't follow talent. When skilled employees move between organizations, their verified competencies become unverifiable paper, forcing redundant foundational training that wastes both budget and their time.",
  },
  {
    icon: Clock,
    title: "The Audit Panic",
    description: "Compliance audits shouldn't require weeks of preparation and external consultants reconstructing training records. Yet traditional LMS systems produce exports that auditors question, certificates that can be altered, and completion records that lack cryptographic proof. The result: rushed remediation training, failed findings, and preventable compliance gaps that expose organizations to regulatory action and insurance premium increases.",
  },
];

const TrainingWasteProblem = () => {
  return (
    <section id="problem" className="py-24 bg-secondary/30 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            UK Enterprises Waste Massive Resources on Redundant Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            Every year, organizations hemorrhage budget re-training employees on cybersecurity fundamentals they've already completed—simply because previous credentials can't be verified with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-7 h-7 text-destructive" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingWasteProblem;
