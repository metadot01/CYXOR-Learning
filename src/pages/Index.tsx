import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import CourseCatalog from "@/components/CourseCatalog";
import SocialProof from "@/components/SocialProof";
import FeaturedInstructor from "@/components/FeaturedInstructor";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <CourseCatalog />
        <SocialProof />
        <FeaturedInstructor />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
