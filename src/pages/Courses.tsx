import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Cloud, Link2, Database, Shield, ArrowRight, BookOpen } from "lucide-react";

const aiCourses = [
  {
    title: "Enterprise GenAI & RAG Systems",
    description: "Production AI with retrieval augmentation for regulated environments",
    modules: 18,
    hours: 3.5,
    labs: 6,
    price: 495,
  },
  {
    title: "LLM Fine-Tuning & Domain Adaptation",
    description: "Customize language models for enterprise use cases",
    modules: 15,
    hours: 2.8,
    labs: 5,
    price: 445,
  },
  {
    title: "Multi-Agent AI Systems & Orchestration",
    description: "Intelligent agent workflows for complex automation",
    modules: 16,
    hours: 3.2,
    labs: 7,
    price: 495,
  },
];

const cloudCourses = [
  {
    title: "Cloud-Native MLOps & AI Infrastructure",
    description: "Scalable, auditable ML deployment",
    modules: 20,
    hours: 4.2,
    labs: 8,
    price: 545,
  },
  {
    title: "Vector Databases & Semantic Search",
    description: "High-performance retrieval systems",
    modules: 12,
    hours: 2.4,
    labs: 5,
    price: 395,
  },
];

const blockchainCourses = [
  {
    title: "Blockchain & DeFi Engineering",
    description: "Secure smart contracts and Web3 infrastructure",
    modules: 17,
    hours: 3.6,
    labs: 6,
    price: 495,
  },
];

const dataCourses = [
  {
    title: "Big Data ML Engineering",
    description: "Distributed processing at scale",
    modules: 19,
    hours: 3.8,
    labs: 7,
    price: 495,
  },
];

const complianceCourses = [
  {
    title: "ISO 27001 Certification Pathway",
    description: "Information security management systems",
    modules: 14,
    hours: 2.6,
    scenarios: 8,
    price: 445,
  },
  {
    title: "GDPR Mastery & Data Protection",
    description: "Comprehensive privacy compliance",
    modules: 13,
    hours: 2.4,
    scenarios: 7,
    price: 395,
  },
  {
    title: "NIS2 Directive Implementation",
    description: "Network security for essential entities",
    modules: 12,
    hours: 2.3,
    scenarios: 6,
    price: 395,
  },
  {
    title: "UK Cyber Essentials Certification",
    description: "Government-backed cybersecurity prep",
    modules: 10,
    hours: 1.8,
    scenarios: 5,
    price: 345,
  },
  {
    title: "SOC 2 Framework Mastery",
    description: "Trust service principles",
    modules: 13,
    hours: 2.5,
    scenarios: 6,
    price: 395,
  },
];

const learningPaths = [
  {
    title: "AI Engineer Career Path",
    courses: 5,
    hours: 16,
    price: 1845,
    discount: "Save 25%",
  },
  {
    title: "Compliance Professional Pathway",
    courses: 5,
    hours: 12,
    price: 1495,
    discount: "Save 25%",
  },
  {
    title: "Blockchain Developer Track",
    courses: 3,
    hours: 10,
    price: 1180,
    discount: "Save 20%",
  },
];

interface CourseCardProps {
  title: string;
  description: string;
  modules: number;
  hours: number;
  labs?: number;
  scenarios?: number;
  price: number;
}

const CourseCard = ({ title, description, modules, hours, labs, scenarios, price }: CourseCardProps) => (
  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
    <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
      <span>{modules} modules</span>
      <span>•</span>
      <span>{hours} hrs</span>
      <span>•</span>
      <span>{labs ? `${labs} labs` : `${scenarios} scenarios`}</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-primary">£{price}</span>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="text-xs">Preview</Button>
        <Button variant="hero" size="sm" className="text-xs">Enroll Now</Button>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="absolute inset-0 blockchain-grid opacity-30" />
          <div className="section-container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Course <span className="text-primary">Catalog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise technology and compliance courses with blockchain-verified credentials
            </p>
          </div>
        </section>

        {/* AI & ML Courses */}
        <section className="py-12">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">AI & Machine Learning</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCourses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Cloud & MLOps */}
        <section className="py-12 bg-secondary/30">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Cloud & MLOps</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudCourses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Blockchain & Web3 */}
        <section className="py-12">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Blockchain & Web3</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blockchainCourses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Data Engineering */}
        <section className="py-12 bg-secondary/30">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Data Engineering</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataCourses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Regulatory */}
        <section className="py-12">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Compliance & Regulatory</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceCourses.map((course) => (
                <CourseCard key={course.title} {...course} scenarios={course.scenarios} />
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">Learning Paths</h2>
              <p className="text-muted-foreground">Structured career pathways with bundled savings</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {learningPaths.map((path) => (
                <div key={path.title} className="p-6 rounded-2xl bg-card border border-primary/20 text-center">
                  <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{path.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {path.courses} courses • {path.hours} hrs
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">£{path.price}</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">
                      {path.discount}
                    </span>
                  </div>
                  <Button variant="hero" className="w-full">View Path</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Licenses */}
        <section className="py-16">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Enterprise Licenses</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="px-6 py-4 rounded-xl bg-card border border-border">
                <span className="font-bold text-foreground">Team (10-49)</span>
                <span className="ml-2 text-primary font-semibold">20% off</span>
              </div>
              <div className="px-6 py-4 rounded-xl bg-card border border-border">
                <span className="font-bold text-foreground">Department (50-199)</span>
                <span className="ml-2 text-primary font-semibold">30% off</span>
              </div>
              <div className="px-6 py-4 rounded-xl bg-card border border-border">
                <span className="font-bold text-foreground">Unlimited</span>
                <span className="ml-2 text-primary font-semibold">Custom</span>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Request Enterprise Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
