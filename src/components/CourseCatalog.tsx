import { Brain, Cloud, Link2, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    courses: ["Enterprise GenAI & RAG", "LLM Fine-Tuning", "Multi-Agent Systems"],
    href: "/courses#ai",
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    courses: ["MLOps Infrastructure", "Kubernetes", "Vector Databases"],
    href: "/courses#cloud",
  },
  {
    icon: Link2,
    title: "Blockchain & Web3",
    courses: ["Smart Contracts", "DeFi Engineering", "Web3 Backend"],
    href: "/courses#blockchain",
  },
  {
    icon: Shield,
    title: "Compliance & Regulatory",
    courses: ["ISO 27001", "GDPR", "NIS2", "Cyber Essentials", "SOC 2"],
    href: "/courses#compliance",
  },
];

const CourseCatalog = () => {
  return (
    <section id="courses" className="py-20 bg-secondary/30 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Course Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
            Enterprise Technology & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Microlearning modules with hands-on labs and blockchain-verified certificates
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-2 mb-6">
                {category.courses.map((course) => (
                  <li key={course} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {course}
                  </li>
                ))}
              </ul>

              <Link 
                to={category.href} 
                className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
              >
                View Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
