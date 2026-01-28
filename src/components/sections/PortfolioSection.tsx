import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const cards = [
  {
    title: "Project Alpha",
    desc: "Branding & Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=800&fit=crop&q=80",
    cta: "View Project",
  },
  {
    title: "Project Beta",
    desc: "Web Experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop&q=80",
    cta: null,
  },
  {
    title: "Project Gamma",
    desc: "Product UI",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=800&fit=crop&q=80",
    cta: "Explore",
  },
  {
    title: "Project Delta",
    desc: "Motion Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=800&fit=crop&q=80",
    cta: "See Case Study",
  },
];

// Section entrance animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

interface PortfolioProps {
  twoCardMode?: boolean;
  accentColor?: string;
}

export default function InfinitePortfolioDrag({ twoCardMode = false, accentColor = "#ffffff" }: PortfolioProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Get card at specific position with infinite wrapping
  const getCardIndex = useCallback((offset: number) => {
    const index = (currentIndex + offset) % cards.length;
    return index < 0 ? index + cards.length : index;
  }, [currentIndex]);

  // Move to next card
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, []);

  // Move to previous card
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, []);

  // Auto-rotation effect - infinite loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Get all visible cards (left, center, right)
  const leftCard = cards[getCardIndex(-1)];
  const centerCard = cards[getCardIndex(0)];
  const rightCard = cards[getCardIndex(1)];

  return (
    <motion.section
      className="bg-[#101010] text-white py-14 overflow-hidden"
      id="our-portfolio"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.span
        variants={titleVariants}
        className="block mb-4 text-sm tracking-wide text-center"
        style={{ color: `${accentColor}99` }}
      >
        Our Portfolio
      </motion.span>
      <motion.h2
        variants={titleVariants}
        className="text-4xl font-bold mb-12 px-10 text-center"
      >
        Real projects. Real impact.
      </motion.h2>

      {/* Carousel Container - Flexbox for perfect centering */}
      <div
        className="relative w-full px-4 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Cards Container - Always centered */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left Side Card */}
          <motion.div
            key={`left-${getCardIndex(-1)}`}
            className="hidden md:block w-[20%] h-[220px] flex-shrink-0 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 0.9 }}
            whileHover={{ opacity: 0.7, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={handlePrev}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={leftCard.image}
                alt={leftCard.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h3 className="text-sm font-semibold">{leftCard.title}</h3>
                <p className="text-xs text-white/70">{leftCard.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Center Card - Main Focus - Always in middle */}
          <motion.div
            key={`center-${currentIndex}`}
            className="w-[85%] md:w-[45%] h-[280px] md:h-[320px] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Image */}
              <motion.img
                key={`img-${currentIndex}`}
                src={centerCard.image}
                alt={centerCard.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <motion.div
                className="absolute bottom-0 p-6 w-full"
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {centerCard.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-4">
                  {centerCard.desc}
                </p>

                {centerCard.cta && (
                  <button
                    className="inline-flex items-center gap-2 text-sm text-black bg-white border border-white/80 px-5 py-2.5 rounded-full hover:bg-white/90 transition-all duration-300 font-medium"
                  >
                    {centerCard.cta} →
                  </button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            key={`right-${getCardIndex(1)}`}
            className="hidden md:block w-[20%] h-[220px] flex-shrink-0 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 0.9 }}
            whileHover={{ opacity: 0.7, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={handleNext}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={rightCard.image}
                alt={rightCard.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h3 className="text-sm font-semibold">{rightCard.title}</h3>
                <p className="text-xs text-white/70">{rightCard.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white backdrop-blur-sm border border-white/80 flex items-center justify-center hover:bg-white/90 transition-colors duration-300 text-black"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white backdrop-blur-sm border border-white/80 flex items-center justify-center hover:bg-white/90 transition-colors duration-300 text-black"
          aria-label="Next"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? "bg-white w-8"
              : "bg-white/30 hover:bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
