import HeroNav from "./HeroNav";
import HeroContent from "./HeroContent";
import PlayButton from "./PlayButton";
import { useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import IndexHeroBackground from "./IndexHeroBackground";
// import HeroInfoCard from "./HeroInfoCard";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const screen = useScreenSize()
    return (
        <section className="hero-slider flex items-center pb-0 md:pb-20 pl-3 relative rounded-xl bg-[#0a0a0a]
    /* MOBILE (sm & below) */
    h-auto min-h-0 max-h-none

    /* DESKTOP */
    md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)]

    /* LARGE SCREENS */
    2xl:max-h-[700px]">

            {/* Navigation */}
            <HeroNav />

            {/* Background Pattern - subtle overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4d31] rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
            </div>

            {/* Main container */}
            <div className="hero-container pb-8 md:h-max relative z-10">
                <div className="pt-auto md:h-max md:pt-32 md:flex flex-none md:items-center h-min">
                    {/* Left content */}
                    <HeroContent isOpen={isOpen} setOpen={setIsOpen} />
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
