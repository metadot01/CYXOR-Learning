import { GraduationCap, Linkedin, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const expertise = ["AI Agent Architecture", "LLM Security", "Platform Engineering", "Blockchain", "Big Data"];

const FeaturedInstructor = () => {
  return (
    <section className="py-24 gradient-section">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block text-primary font-bold text-sm tracking-wider uppercase mb-4 px-4 py-1.5 bg-primary/5 rounded-full">
            Learn From The Best
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Featured <span className="text-primary">Instructor</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative p-10 rounded-3xl bg-card border border-border shadow-xl overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile section */}
              <div className="flex flex-col items-center text-center lg:w-1/3">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center mb-4">
                  <GraduationCap className="w-14 h-14 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Bharath Shivaram</h3>
                <p className="text-primary font-semibold mb-1">Founder & AI Platform Architect</p>
                <p className="text-sm text-muted-foreground mb-4">Defantra UK Ltd.</p>
                
                <div className="flex gap-3">
                  <Link to="/resources#instructors">
                    <Button variant="hero" size="sm">
                      <BookOpen className="w-4 h-4 mr-1" />
                      View Courses
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Details section */}
              <div className="lg:w-2/3 lg:pl-8 lg:border-l border-border">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Education</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        MSc Artificial Intelligence, University of Stirling
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        MS Analytics, University of Connecticut
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Senior engineering roles at Dell Technologies, EMC. Founder of Xantum Computing.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstructor;
