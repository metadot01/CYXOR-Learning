import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import TrustSection from "@/components/TrustSection";
import TechnologyCredibility from "@/components/TechnologyCredibility";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <TrustSection />
        <TechnologyCredibility />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
