import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlacementBanner from "@/components/PlacementBanner";
import StatsBar from "@/components/StatsBar";
import BriefDetails from "@/components/BriefDetails";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PlacementBanner />
      <StatsBar />
      <BriefDetails />
      <HowItWorks />
      <CTASection />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default Index;
