import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesShowcase from "@/components/ServicesShowcase";
import TechnologiesSection from "@/components/TechnologiesSection";
import PortfolioSection from "@/components/PortfolioSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ServicesShowcase />
        <TechnologiesSection />
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
