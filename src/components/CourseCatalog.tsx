import { Brain, Cloud, Link2, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  title: string;
  courses: string[];
  href: string;
  color: string;
}

const categories: Category[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    courses: ["Enterprise GenAI & RAG", "LLM Fine-Tuning", "Multi-Agent Systems"],
    href: "/courses#ai",
    color: "from-violet-500/10 to-purple-500/5",
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    courses: ["MLOps Infrastructure", "Kubernetes", "Vector Databases"],
    href: "/courses#cloud",
    color: "from-sky-500/10 to-blue-500/5",
  },
  {
    icon: Link2,
    title: "Blockchain & Web3",
    courses: ["Smart Contracts", "DeFi Engineering", "Web3 Backend"],
    href: "/courses#blockchain",
    color: "from-amber-500/10 to-orange-500/5",
  },
  {
    icon: Shield,
    title: "Compliance & Regulatory",
    courses: ["ISO 27001", "GDPR", "NIS2", "Cyber Essentials", "SOC 2"],
    href: "/courses#compliance",
    color: "from-emerald-500/10 to-teal-500/5",
  },
];

const CourseCatalog = () => {
  return (
    <section id="courses" className="py-24 gradient-section relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block text-primary font-bold text-sm tracking-wider uppercase mb-4 px-4 py-1.5 bg-primary/5 rounded-full">
            Course Categories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-4 mb-5">
            Enterprise Technology &{" "}
            <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Microlearning modules with hands-on labs and blockchain-verified certificates
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="icon-container w-14 h-14 mb-5 group-hover:scale-105">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-5">
                  {category.title}
                </h3>
                
                <ul className="space-y-3 mb-6">
                  {category.courses.map((course) => (
                    <li key={course} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={category.href} 
                  className="inline-flex items-center gap-2 text-sm text-primary font-semibold group/link"
                >
                  <span className="link-underline">View Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
