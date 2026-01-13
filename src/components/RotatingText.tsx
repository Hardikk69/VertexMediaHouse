import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { useScreenSize } from "@/hooks/useScreenSize";

const RotatingText = () => {
  const words = ["Strength", "Stamina", "Endurance"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    // const screen = useScreenSize()
    // console.log(screen)

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="text-rotate-cell ">
      {/* Red dot that animates */}
      <motion.svg
        className="red-dot-icon flex-shrink-0"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={currentIndex}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="hsl(var(--primary))" />
      </motion.svg>

      {/* Static text */}
      <h1 className="static-text whitespace-nowrap ml-4 sm: text-7xl">Creative Solutions</h1>
      <h1 className="static-text whitespace-nowrap ml-4 sm: text-7xl">Solutions</h1>
      <h1 className="static-text whitespace-nowrap ml-4 sm: text-[#ff1e00]">.</h1>

      {/* Rotating words container */}
      {/* <div className="text-rotate-wrap ml-4">
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
            <span className="text-primary text-white">.</span>
          </motion.span>
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default RotatingText;
