import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Heart, Landmark, Factory, Cpu, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Financial Services (BFSI)",
    challenges: "AI regulations, FCA guidance, MiFID II, SMCR, AML/KYC, NIS2",
    courses: ["GenAI & RAG", "MLOps", "GDPR", "NIS2", "ISO 27001", "SOC 2"],
    custom: ["FCA AI governance", "Financial crime detection", "Algorithmic trading"],
    cta: "View BFSI Bundle",
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    challenges: "Patient data, NHS requirements, medical devices, clinical governance",
    courses: ["GenAI & RAG", "GDPR", "ISO 27001", "Cyber Essentials", "Multi-Agent AI"],
    custom: ["NHS Toolkit", "Caldicott principles", "Clinical AI governance"],
    cta: "View Healthcare Bundle",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    challenges: "Security standards, data governance, procurement, digital transformation",
    courses: ["Cyber Essentials", "ISO 27001", "GDPR", "NIS2", "MLOps"],
    custom: ["G-Cloud readiness", "Security clearance", "FOI compliance"],
    cta: "View Public Sector Bundle",
  },
  {
    icon: Factory,
    title: "Critical Infrastructure",
    challenges: "NIS2 compliance, ICS security, supply chain, operational resilience",
    courses: ["NIS2", "Cyber Essentials", "ISO 27001", "Multi-Agent AI", "Big Data"],
    custom: ["ICS/SCADA security", "Incident response", "Supply chain risk"],
    cta: "View Infrastructure Bundle",
  },
  {
    icon: Cpu,
    title: "Technology & Software",
    challenges: "AI innovation, SDLC security, API security, open source compliance",
    courses: ["LLM Fine-Tuning", "Blockchain", "Vector Databases", "SOC 2", "ISO 27001"],
    custom: ["DevSecOps", "API security", "Cloud-native architecture", "AI ethics"],
    cta: "View Technology Bundle",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="absolute inset-0 blockchain-grid opacity-30" />
          <div className="section-container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored training solutions for regulated industries: BFSI, healthcare, government, critical infrastructure, and technology
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-12">
          <div className="section-container">
            <div className="space-y-8">
              {industries.map((industry, index) => (
                <div
                  key={industry.title}
                  className={`p-8 rounded-2xl border border-border ${
                    index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                  }`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <industry.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">{industry.title}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-semibold text-foreground">Challenges: </span>
                        {industry.challenges}
                      </p>
                      <Button variant="hero">
                        {industry.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {/* Courses */}
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                        Recommended Courses
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Custom Training */}
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                        Custom Training Options
                      </h3>
                      <ul className="space-y-2">
                        {industry.custom.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Industry Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our team can create tailored training packages aligned with your specific regulatory requirements.
            </p>
            <Button variant="hero" size="lg">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
