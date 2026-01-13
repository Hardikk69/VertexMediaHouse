import HeroNav from "./HeroNav";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import PlayButton from "./PlayButton";
// import HeroInfoCard from "./HeroInfoCard";

const HeroSection = () => {
  return (
    <section className="hero-slider rounded-xl max-h-[calc(100dvh-23px)] ">
      {/* Navigation */}
      <HeroNav />

      {/* Animated background */}
      <HeroBackground />

      {/* Main container */}
      <div className="hero-container">
        <div className="flex items-center h-full">
          {/* Left content */}
          <HeroContent />
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
