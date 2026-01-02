import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import TrustCompliance from "@/components/TrustCompliance";
import UseCases from "@/components/UseCases";
import ROISection from "@/components/ROISection";
import TechnologyCredibility from "@/components/TechnologyCredibility";
import CourseFocus from "@/components/CourseFocus";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <TrustCompliance />
        <UseCases />
        <ROISection />
        <TechnologyCredibility />
        <CourseFocus />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
