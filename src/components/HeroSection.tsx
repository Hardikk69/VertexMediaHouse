import HeroNav from "./HeroNav";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import PlayButton from "./PlayButton";
import { useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import PitchdeckHeroBackground from "./PitchdeckHeroBackground";
// import HeroInfoCard from "./HeroInfoCard";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screen = useScreenSize()
  return (
    <section className="hero-slider flex items-center pb-0 md:pb-20 pl-3 relative rounded-xl
    /* MOBILE (sm & below) */
    h-auto min-h-0 max-h-none

    /* DESKTOP */
    md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)]

    /* LARGE SCREENS */
    2xl:max-h-[700px]">

      {/* Navigation */}
      <HeroNav />

      {/* Animated background */}
      <PitchdeckHeroBackground />

      {/* Main container */}
      <div className="hero-container pb-8  md:h-max">
        <div className="pt-auto md:h-max md:pt-32 md:flex flex-none md:items-center h-min">
          {/* Left content */}
          <HeroContent setOpen={() => { }} isOpen={isOpen} />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
