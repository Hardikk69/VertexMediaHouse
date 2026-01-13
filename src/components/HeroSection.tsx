import HeroNav from "./HeroNav";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import PlayButton from "./PlayButton";
import { useState } from "react";
// import HeroInfoCard from "./HeroInfoCard";

const HeroSection = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <section className="hero-slider rounded-xl max-h-[70vh] md:max-h-[calc(100dvh-23px)] ">
      {/* Navigation */}
      <HeroNav />

      {/* Animated background */}
      <HeroBackground />

      {/* Main container */}
      <div className="hero-container">
        <div className="pt-[8dvh] md:pt-20 md:flex flex-none md:items-center h-full">
          {/* Left content */}
          <HeroContent isOpen={isOpen} />
        </div>
      </div>

      {/* Play button */}
      <PlayButton />

      {/* Info card */}
      {/* <HeroInfoCard /> */}
    </section>
  );
};

export default HeroSection;
