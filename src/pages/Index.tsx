import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/Ourservices";
// import BentoGrid from "@/components/sections/BentoGrid";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
// import JourneyMapSection from "@/components/sections/JourneyMapSection";
import LogoList from "@/components/sections/LogoList";
import PortfolioDrag from "@/components/sections/PortfolioSection";
// import ReviewSection from "@/components/sections/ReviewsSection";
// import ScrollStack from "@/components/sections/ScrollItem";
import ScrollStakeSection from "@/components/sections/ScrollStack";
// import OurServices from "@/components/sections/ServicesSection";
// import LogoLoop from "@/components/sections/LogoLoop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="p-3 bg-white md:">
        <HeroSection />
      </div>
      <LogoList />
      {/* <JourneyMapSection/> */}
      <PortfolioDrag />
      <ScrollStakeSection />
      <ServicesSection/>
      {/* <OurServices /> */}
      {/* <BentoGrid/> */}
      <FaqSection/>
      <FooterSection />
      {/* <ReviewSection/> */}
    </main>
  );
};

export default Index;
