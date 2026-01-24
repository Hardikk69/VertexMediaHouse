import { ArrowRight } from "lucide-react";
import RotatingText from "./RotatingText";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import RotatingPill from "./RotatingPill";
import { useNavigate } from "react-router-dom";

type HeroContentProps = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.97,
  },
};

const HeroContent = ({ isOpen, setOpen }: HeroContentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screen = useScreenSize();
  const navigate = useNavigate();

  const words = ["We offer Solution", "We easy you work", "do you need help"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleBookCall = () => {
    window.location.href = "tel:+919909210605";
  };

  const handleExploreServices = () => {
    navigate("/#our-services");
  };

  return (
    <motion.div
      className="max-w-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Rotating headline */}
      <motion.div variants={itemVariants}>
        <RotatingText />
      </motion.div>

      {/* Rotating sub text */}
      <motion.div variants={itemVariants}>
        <RotatingPill />
      </motion.div>

      {/* MOBILE VIDEO PREVIEW */}
      {screen === "sm" && (
        <motion.div
          variants={itemVariants}
          className="mt-8 aspect-video bg-black border border-white/10 rounded-md flex items-center justify-center overflow-hidden"
        >
          <motion.button
            onClick={() => setOpen(true)}
            className="block w-20"
            aria-label="Play video"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/images/play-button.svg"
              alt="Play"
              className="w-full h-full"
            />
          </motion.button>
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <motion.a
          href="tel:+919909210605"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            text-sm font-medium
            text-black
            bg-white
            rounded-[4px]
            transition-shadow duration-300
            hover:shadow-lg hover:shadow-white/20
            cursor-pointer
          "
        >
          Book a Call
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.a>

        <motion.button
          onClick={handleExploreServices}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            text-sm font-medium
            text-white
            border border-white/70
            rounded-[4px]
            transition-all duration-300
            hover:bg-white hover:text-black
            hover:shadow-lg hover:shadow-white/10
          "
        >
          Explore Services
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

