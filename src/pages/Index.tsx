import IndexHeroSection from "@/components/IndexHeroSection";
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
import CalenderCard from "@/components/Calender-card";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="p-4 bg-[#efefef]">
        <IndexHeroSection />
      </div>
      <LogoList />
      {/* <JourneyMapSection/> */}
      {/* <div className="h-screen siri-gradient">

      </div> */}
      <ServicesSection />
      <PortfolioDrag />
      <ScrollStakeSection />
      <CalenderCard />
      {/* <OurServices /> */}
      {/* <BentoGrid/> */}
      <FaqSection />
      <FooterSection />
      {/* <ReviewSection/> */}
    </main>
  );
};

export default Index;

