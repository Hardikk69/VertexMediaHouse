import HeroNav from "./HeroNav";
import HeroBackground from "./HeroBackground.tsx";
import HeroContent from "./HeroContent";
import { useState } from "react";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="
        relative overflow-hidden rounded-xl
        flex items-center
        px-4 sm:px-6 lg:px-10 2xl:px-16
        pt-8 sm:pt-10 md:pt-0
        pb-10 md:pb-20

        /* MOBILE */
        min-h-[520px] h-auto

        /* DESKTOP */
        md:min-h-[calc(100dvh-24px)]
        md:h-[calc(100dvh-24px)]

        /* LARGE */
        2xl:min-h-[700px]
        2xl:h-[700px]

        /* LED TV / ULTRA WIDE */
        3xl:min-h-[800px]
        3xl:h-[800px]
        4xl:min-h-[900px]
        4xl:h-[900px]
      "
    >
      {/* Navigation */}
      <HeroNav />

      {/* Animated background */}
      <HeroBackground />

      {/* Main container */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex items-center md:min-h-[500px]">
          {/* Left content */}
          <HeroContent isOpen={isOpen} setOpen={setIsOpen} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
