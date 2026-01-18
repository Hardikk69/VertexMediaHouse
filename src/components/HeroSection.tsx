import HeroNav from "./HeroNav";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import PlayButton from "./PlayButton";
import { useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
// import HeroInfoCard from "./HeroInfoCard";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screen = useScreenSize()
  return (
<section
  className="
    hero-slider
    relative
    rounded-xl

    /* MOBILE (sm & below) */
    h-auto
    min-h-0
    max-h-none

    /* DESKTOP */
    md:h-[calc(100dvh-23px)]
    md:max-h-[calc(100dvh-23px)]

    /* LARGE SCREENS */
    2xl:max-h-[700px]
  "
>


      {/* Navigation */}
      <HeroNav />

      {/* Animated background */}
      <HeroBackground />

      {/* Main container */}
      <div className="hero-container pb-8 md:h-max">
        <div className="pt-[8dvh] md:h-max md:pt-36 md:pl-6 md:flex flex-none md:items-center h-min">
          {/* Left content */}
          <HeroContent setOpen={()=>{}} isOpen={isOpen} />
        </div>
      </div>

      {/* Play button */}
      {screen !== "sm" && <PlayButton />}

      {/* Info card */}
      {/* <HeroInfoCard /> */}
    </section>
  );
};

export default HeroSection;
