import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ValueProposition from "@/components/ValueProposition";
import TheProblem from "@/components/TheProblem";
import CourseCatalog from "@/components/CourseCatalog";
import CaseStudy from "@/components/CaseStudy";
import ComplianceStandards from "@/components/ComplianceStandards";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <TheProblem />
        <ValueProposition />
        <CourseCatalog />
        <CaseStudy />
        <ComplianceStandards />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
