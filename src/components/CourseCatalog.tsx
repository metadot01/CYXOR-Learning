import { useState } from "react";
import { Shield, Brain, ArrowRight, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const complianceCourses = [
  {
    badge: "ISO 27001",
    title: "ISO 27001:2022 Implementation & Auditing",
    description: "Learn to implement and audit information security management systems.",
    duration: "24 hours",
    modules: "12 modules",
    level: "Intermediate",
    rating: 4.9,
    reviews: 234,
    price: "£499",
    features: ["Hands-on implementation", "Audit preparation", "Blockchain certificate"],
    industries: ["Banking", "Healthcare", "Government"],
    color: "bg-ocean",
  },
  {
    badge: "GDPR",
    title: "GDPR Practitioner Certification",
    description: "Comprehensive GDPR training for data protection practitioners.",
    duration: "18 hours",
    modules: "10 modules",
    level: "Beginner-Intermediate",
    rating: 4.9,
    reviews: 312,
    price: "£399",
    features: ["Article 30 compliance", "DPO requirements", "Real-world case studies"],
    industries: ["All Industries"],
    color: "bg-emerald",
  },
  {
    badge: "NIS2",
    title: "NIS2 Directive: Network & Information Security",
    description: "Implement NIS2 requirements for essential and important entities.",
    duration: "16 hours",
    modules: "8 modules",
    level: "Intermediate",
    rating: 4.8,
    reviews: 156,
    price: "£449",
    features: ["Compliance framework", "Risk management", "Incident reporting"],
    industries: ["Infrastructure", "Healthcare"],
    color: "bg-cyan",
  },
];

const technologyCourses = [
  {
    badge: "AI/ML",
    title: "Enterprise GenAI & RAG Systems",
    description: "Build production-ready RAG systems and enterprise AI applications.",
    duration: "32 hours",
    modules: "16 modules",
    level: "Advanced",
    rating: 4.9,
    reviews: 189,
    price: "£599",
    features: ["Hands-on RAG implementation", "Vector databases", "Production deployment"],
    industries: ["FinTech", "Technology"],
    color: "bg-lavender",
  },
  {
    badge: "MLOps",
    title: "MLOps for Production Environments",
    description: "Deploy and manage ML models at enterprise scale with CI/CD pipelines.",
    duration: "28 hours",
    modules: "14 modules",
    level: "Intermediate-Advanced",
    rating: 4.8,
    reviews: 145,
    price: "£549",
    features: ["CI/CD pipelines", "Model monitoring", "Infrastructure as code"],
    industries: ["Technology", "Banking"],
    color: "bg-slate",
  },
  {
    badge: "Cloud",
    title: "Kubernetes for Enterprise",
    description: "Master container orchestration for regulated enterprise environments.",
    duration: "24 hours",
    modules: "12 modules",
    level: "Intermediate",
    rating: 4.7,
    reviews: 203,
    price: "£499",
    features: ["Security hardening", "Multi-cluster management", "Compliance controls"],
    industries: ["All Industries"],
    color: "bg-gold",
  },
];

const CourseCatalog = () => {
  const [activeTab, setActiveTab] = useState<"compliance" | "technology">("compliance");
  const courses = activeTab === "compliance" ? complianceCourses : technologyCourses;

  return (
    <section id="courses" className="py-20 lg:py-28 gradient-section relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 circuit-pattern" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block text-white font-bold text-sm tracking-wider uppercase mb-4 px-4 py-2 bg-ocean rounded-full">
            Course Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 leading-tight">
            Enterprise-Ready{" "}
            <span className="text-emerald">Courses</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Technology and compliance training for regulated teams
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("compliance")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === "compliance"
                ? "bg-ocean text-white shadow-lg"
                : "bg-card border border-border text-foreground hover:border-cyan/30"
            }`}
          >
            <Shield className="w-4 h-4" />
            Compliance Courses
          </button>
          <button
            onClick={() => setActiveTab("technology")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              activeTab === "technology"
                ? "bg-ocean text-white shadow-lg"
                : "bg-card border border-border text-foreground hover:border-cyan/30"
            }`}
          >
            <Brain className="w-4 h-4" />
            Technology Courses
          </button>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <AnimatedSection
              key={course.title}
              delay={index * 100}
              animation="fade-up"
            >
              <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-cyan/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full flex flex-col">
                {/* Badge */}
                <div className={`inline-flex items-center self-start px-3 py-1 rounded-full ${course.color} text-white text-xs font-bold mb-4`}>
                  {course.badge}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </div>
                  <span>•</span>
                  <span>{course.modules}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm font-semibold text-foreground">{course.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({course.reviews} reviews)</span>
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                    course.level.includes("Beginner") ? "bg-emerald/10 text-emerald" :
                    course.level.includes("Advanced") ? "bg-lavender/10 text-lavender" :
                    "bg-ocean/10 text-ocean"
                  }`}>
                    {course.level}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-1.5 mb-4">
                  {course.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <div>
                    <span className="text-lg font-bold text-foreground">{course.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">or included in Annual</span>
                  </div>
                  <Link to="/courses" className="text-cyan text-sm font-semibold flex items-center gap-1 group/link">
                    View
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All */}
        <AnimatedSection className="text-center mt-10">
          <Link to="/courses">
            <Button variant="outline" size="lg" className="border-2">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CourseCatalog;
