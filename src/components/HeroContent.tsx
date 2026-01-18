import { ArrowRight } from "lucide-react";
import RotatingText from "./RotatingText";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import RotatingPill from "./RotatingPill";

type HeroContentProps = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

const HeroContent = ({ isOpen, setOpen }: HeroContentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screen = useScreenSize();

  const words = ["We offer Solution", "We easy you work", "do you need help"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl">
      {/* Rotating headline */}
      <RotatingText />

      {/* Rotating sub text */}
      <RotatingPill/>
      {/* <div className="text-rotate-wrap sm:-mt-12 static-text whitespace-nowrap ml-4 text-white text-3xl">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div> */}

      {/* MOBILE VIDEO PREVIEW */}
      {screen === "sm" && (
        <div className="mt-8 aspect-video bg-black border border-white/10 rounded-md flex items-center justify-center">
          <button
            onClick={() => setOpen(true)}
            className="block w-20"
            aria-label="Play video"
          >
            <img
              src="/images/play-button.svg"
              alt="Play"
              className="w-full h-full"
            />
          </button>
        </div>
      )}

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          className="
            inline-flex items-center gap-2
            px-6 py-3
            text-sm font-medium
            text-black
            bg-white
            rounded-[4px]
            transition-all duration-300
            hover:bg-white/90
            active:scale-95
          "
        >
          Book a Call
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          className="
            inline-flex items-center gap-2
            px-6 py-3
            text-sm font-medium
            text-white
            border border-white/70
            rounded-[4px]
            transition-all duration-300
            hover:bg-white hover:text-black
            active:scale-95
          "
        >
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
