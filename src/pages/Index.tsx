import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import TrainingWasteProblem from "@/components/TrainingWasteProblem";
import CourseCatalog from "@/components/CourseCatalog";
import CaseStudy from "@/components/CaseStudy";
import EnterpriseDashboard from "@/components/EnterpriseDashboard";
import WhyTraditionalFails from "@/components/WhyTraditionalFails";
import BlockchainAdvantage from "@/components/BlockchainAdvantage";
import ComplianceStandards from "@/components/ComplianceStandards";
import APIIntegration from "@/components/APIIntegration";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <TrainingWasteProblem />
        <CourseCatalog />
        <CaseStudy />
        <EnterpriseDashboard />
        <WhyTraditionalFails />
        <BlockchainAdvantage />
        <ComplianceStandards />
        <APIIntegration />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
