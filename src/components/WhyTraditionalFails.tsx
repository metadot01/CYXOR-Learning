import { FileWarning, Database, Building2, ClipboardList } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Certificates Can Be Forged",
    description: "Standard PDF certificates are trivially easy to alter or fabricate. Auditors know this. When you present traditional certificates during compliance reviews, they're presenting evidence that lacks cryptographic integrity. Smart auditors request additional verification—creating delays, follow-up questions, and potential findings.",
  },
  {
    icon: Database,
    title: "LMS Exports Lack Integrity",
    description: "Learning management system exports are database dumps that administrators can modify. Completion dates can be changed, course requirements can be softened retroactively, and records can be deleted. Auditors can't distinguish legitimate records from altered data—so they default to skepticism and request supplementary evidence.",
  },
  {
    icon: Building2,
    title: "No Cross-Organization Trust",
    description: "When employees move between organizations, their training credentials become organizational hearsay. You can't independently verify that external training actually occurred, met specific standards, or covered required content. This forces defensive re-training and signals to auditors that you can't verify your own workforce competency claims.",
  },
  {
    icon: ClipboardList,
    title: "Manual Tracking Creates Gaps",
    description: "Spreadsheet-based training tracking introduces human error. Certificates stored in shared drives get lost. Email-based renewals get ignored. Manual processes don't scale, break down under turnover, and create the compliance gaps that trigger audit findings and regulatory action.",
  },
];

const WhyTraditionalFails = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 blockchain-grid opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-destructive font-bold text-sm tracking-wider uppercase">
            The Problem with Traditional Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Why Auditors Question Your Current Training Records
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm">
                    {problem.description}
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

export default WhyTraditionalFails;
