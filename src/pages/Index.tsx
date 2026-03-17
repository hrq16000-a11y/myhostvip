import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import InfraGrid from "@/components/landing/InfraGrid";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <InfraGrid />
      <Footer />
    </div>
  );
};

export default Index;
