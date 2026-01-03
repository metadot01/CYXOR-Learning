import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, GraduationCap, Linkedin, BookOpen, FileText, HelpCircle, Mail, MapPin, ArrowRight } from "lucide-react";

const approach = [
  { title: "Microlearning", description: "5-15 minute focused modules" },
  { title: "Hands-On", description: "Interactive labs, live environments" },
  { title: "Gamification", description: "Leaderboards, challenges, eSports" },
  { title: "Blockchain", description: "Immutable, verifiable credentials" },
  { title: "Industry Focus", description: "Regulated sector expertise" },
];

const techStack = {
  "AI/ML": ["PyTorch", "TensorFlow", "Transformers", "LangChain", "LlamaIndex", "LangGraph", "AutoGen"],
  "Cloud": ["AWS", "Azure", "GCP"],
  "MLOps": ["Kubernetes", "Docker", "MLflow", "Kubeflow", "Terraform", "Airflow", "Prometheus"],
  "Data": ["Spark", "Kafka", "Flink", "Delta Lake", "Snowflake", "dbt"],
  "Blockchain": ["Solidity", "Hardhat", "ethers.js", "Ethereum", "Polygon"],
  "Vector DBs": ["Pinecone", "Weaviate", "FAISS", "pgVector", "Qdrant"],
};

const resources = [
  { title: "Blockchain Verification Guide", icon: FileText },
  { title: "Integration Documentation", icon: FileText },
  { title: "Case Studies", icon: BookOpen },
  { title: "Blog & Insights", icon: BookOpen },
  { title: "FAQs", icon: HelpCircle },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="absolute inset-0 blockchain-grid opacity-30" />
          <div className="section-container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              <span className="text-primary">Resources</span> & About
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about Cyxor Learning, our approach, technology experts, and helpful resources
            </p>
          </div>
        </section>

        {/* About Cyxor */}
        <section className="py-12">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">About Cyxor Learning</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Vision: </span>
                    Transform corporate learning through interactive, gamified, verifiable courses.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Mission: </span>
                    Make enterprise learning measurable, engaging, and verifiable.
                  </p>
                  <div className="pt-4">
                    <h3 className="font-bold text-foreground mb-3">We Deliver:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Future-ready teams
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Regulatory compliance
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Security culture
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Verified credentials
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Approach</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {approach.map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-card border border-border">
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Instructor */}
        <section className="py-12 bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">Technology Expert</h2>
            </div>
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card border border-primary/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Bharath Shivaram</h3>
                  <p className="text-sm text-primary font-medium">Founder & AI Platform Architect</p>
                  <p className="text-sm text-muted-foreground">Defantra UK Ltd.</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-1" />
                      Connect
                    </Button>
                    <Button variant="hero" size="sm">View Courses</Button>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Specialization</h4>
                    <p>AI Agent Architecture, Development & Implementation. Deep expertise in agentic AI systems, LLM optimization, AI security, platform engineering.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Education</h4>
                    <ul className="space-y-1">
                      <li>• MSc Artificial Intelligence, University of Stirling, Scotland, UK</li>
                      <li>• MS Business Analytics & Project Management, University of Connecticut, USA</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Research</h4>
                    <p>Dissertation: "Analyzing Chain-of-Thought Vulnerabilities in LLMs using Interpretation and Quantization"</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Experience</h4>
                    <p>Senior advisory & engineering roles at Dell Technologies, EMC, healthcare analytics organizations. Founder of Xantum Computing (enterprise AI & blockchain solutions).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["AI Agent Architecture", "LLM Security", "Platform Engineering", "Blockchain", "Big Data", "Cloud Infrastructure"].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-12">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Technology Stack</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-primary mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-12 bg-secondary/30">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Additional Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {resources.map((resource) => (
                <a
                  key={resource.title}
                  href="#"
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center group"
                >
                  <resource.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-12">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Company Information</h2>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="font-bold text-foreground mb-2">Cyxor Learning UK</p>
                <p className="text-sm text-muted-foreground mb-4">A unit of Xantum Computing Private Limited</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    University of Stirling Innovation Park, Stirling, Scotland, UK
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    contact@cyxorlearning.co.uk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
