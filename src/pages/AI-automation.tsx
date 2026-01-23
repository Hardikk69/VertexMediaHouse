import CalenderCard from "@/components/Calender-card";
import PainPointsSection from "@/components/PainPointsSection";
import PitchdeckHeroSection from "@/components/HeroSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";
import PortfolioDrag from "@/components/sections/PortfolioSection";
import Services from "@/components/Services";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";

export default function AIAutomation() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
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
