import { ArrowRight } from "lucide-react";
import RotatingText from "./RotatingText";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["We offer Solution", "We easy you work", "do you need help"];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);

  }, []);
  return (
    <div className="hero-text-col max-w-3xl">
      {/* Rotating headline */}
      <RotatingText />

      {/* Quote */}
      {/* <div className="mt-8 md:mt-12">
        <p className="lead-text">
          "Whatever the mind of man can conceive and believe, it can achieve."
        </p>
      </div> */}
      <div className="text-rotate-wrap ml-4 -mt-12 static-text whitespace-nowrap ml-4 text-[#ff1e00] text-6xl">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="rotating-text"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Caption */}
      {/* <div className="caption-wrap">
        <span className="text-grey">—</span>
        <span className="hero-caption">Napoleon Hill</span>
      </div> */}

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        {/* Primary Button */}
        <button
          className="
      inline-flex items-center gap-2
      px-6 py-3
      text-sm font-medium
      text-black
      bg-white
      rounded-md
      transition-all duration-300
      hover:bg-white/90
      active:scale-95
      focus:outline-none focus:ring-2 focus:ring-white/40
    "
        >
          Book a Call
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Secondary Button */}
        <button
          className="
            inline-flex items-center gap-2
            px-6 py-3
            text-sm font-medium
            text-white
            border border-white/70
            rounded-md
            bg-transparent
            transition-all duration-300
            hover:bg-white hover:text-black
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-white/30
          "
        >
          Explore Services
        </button>
      </div>

    </div>
  );
};

export default HeroContent;
