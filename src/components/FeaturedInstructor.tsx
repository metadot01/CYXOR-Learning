import { GraduationCap, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedInstructor = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-10 animate-fade-up">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Featured Instructor
          </span>
        </div>

        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-border animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground">Bharath Shivaram</h3>
              <p className="text-sm text-primary font-medium mb-2">Founder & AI Platform Architect, Defantra UK Ltd.</p>
              <p className="text-sm text-muted-foreground mb-3">
                MSc AI (Stirling) | MS Analytics (UConn) | Ex-Dell/EMC
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Expertise:</span> AI Agents | LLM Security | Platform Engineering
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <Link to="/resources#instructors">
                  <Button variant="hero" size="sm">Meet Our Instructors</Button>
                </Link>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-1" />
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstructor;
