import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      {/* Background image 1 */}
      <div
        className="hero-bg-image animate-bg-fade-1"
        style={{
          backgroundImage: `url('/images/hero-image-1.jpg')`,
        }}
      />

      {/* Background image 2 */}
      <div
        className="hero-bg-image animate-bg-fade-2"
        style={{
          backgroundImage: `url('/images/hero-image-2.jpg')`,
        }}
      />

      {/* Swipe panel overlay that reveals on load */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{
          duration: 1.5,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="absolute inset-0 bg-background z-20"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-[1]" />
    </>
  );
};

export default HeroBackground;
