import CalenderCard from "@/components/Calender-card";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";
import PortfolioDrag from "@/components/sections/PortfolioSection";
import Services from "@/components/Services";
export default function Pitchdeck() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="p-3 bg-[#efefef]">
          <HeroSection />
        </div>
        <LogoList />
        <PortfolioDrag />
        <Services />
        <PainPointsSection />
        <CalenderCard />
        <FaqSection />
        <FooterSection />
      </main>
    </>
  );
}
