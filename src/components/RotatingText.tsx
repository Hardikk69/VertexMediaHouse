import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScreenSize } from "@/hooks/useScreenSize";

const RotatingText = () => {
  const words = ["Strength", "Stamina", "Endurance"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const screen = useScreenSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-rotate-cell flex items-center flex-wrap mt-10 2xl:mt-0">
      <h1 className="static-text whitespace-nowrap text-5xl md:text-6xl xl:text-7xl">
        Creative & <br />
        <span className="text-[#ff4d31]"> Customised </span>  {screen == "sm" && <br />}
        Solutions.
      </h1>
    </div>
  );
};

export default RotatingText;
