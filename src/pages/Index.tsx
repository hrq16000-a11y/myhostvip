import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Performance from "@/components/landing/Performance";
import SiteCreation from "@/components/landing/SiteCreation";
import DecisionGuide from "@/components/landing/Testimonials";
import PricingSection from "@/components/landing/PricingSection";
import ConversionBanner from "@/components/landing/ConversionBanner";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <PricingSection />
      <Benefits />
      <Performance />
      <SiteCreation />
      <DecisionGuide />
      <ConversionBanner />
    </main>
    <Footer />
  </div>
);

export default Index;
