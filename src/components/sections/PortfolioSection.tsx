import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

export default function InfinitePortfolioDrag(): JSX.Element {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  /* -----------------------------------------
     Measure content width
  ------------------------------------------ */
  useEffect(() => {
    if (!containerRef.current) return;
    setContentWidth(containerRef.current.scrollWidth / 2);
  }, []);

  /* -----------------------------------------
     Start from middle
  ------------------------------------------ */
  useEffect(() => {
    if (contentWidth) x.set(-contentWidth / 2);
  }, [contentWidth, x]);

  /* -----------------------------------------
     Infinite wrap logic
  ------------------------------------------ */
  useEffect(() => {
    const BUFFER = 60;
    return x.on("change", latest => {
      if (latest < -contentWidth - BUFFER) {
        x.set(latest + contentWidth);
      } else if (latest > BUFFER) {
        x.set(latest - contentWidth);
      }
    });
  }, [contentWidth, x]);

  return (
    <motion.section
      className="bg-[#101010] text-white py-32 overflow-hidden"
      id="our-portfolio"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.span
        variants={titleVariants}
        className="block mb-4 text-sm tracking-wide text-white/60 text-center"
      >
        Portfolio
      </motion.span>
      <motion.h2
        variants={titleVariants}
        className="text-4xl font-bold mb-12 px-10 text-center"
      >
        Work That Speaks
      </motion.h2>

      <motion.div
        className="cursor-grab active:cursor-grabbing"
        drag="x"
        style={{ x }}
        dragElastic={0.08}
        dragMomentum
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex px-10"
          animate={{
            scale: isDragging ? 0.96 : 1,
            gap: isDragging ? "32px" : "16px",
          }}
          transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
        >
          {[...cards, ...cards].map((item, i) => (
            <motion.div
              key={i}
              className="
                relative
                w-[320px] h-[440px]
                rounded-xl
                overflow-hidden
                flex-shrink-0
                select-none
              "
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring" as const, stiffness: 400, damping: 25 }
              }}
              style={{
                boxShadow: hoveredIndex === i
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* FULL IMAGE BACKGROUND */}
              <motion.img
                src={item.image}
                alt={item.title}
                draggable={false}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  select-none pointer-events-none
                "
                animate={{
                  scale: hoveredIndex === i ? 1.1 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* GRADIENT OVERLAY */}
              <motion.div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/40
                  to-transparent
                "
                animate={{
                  opacity: hoveredIndex === i ? 1 : 0.85,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* CONTENT */}
              <motion.div
                className="absolute bottom-0 p-5 w-full"
                animate={{
                  y: hoveredIndex === i ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-lg font-semibold"
                  animate={{
                    y: hoveredIndex === i ? -3 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-white/70 text-sm mt-1"
                  animate={{
                    y: hoveredIndex === i ? -3 : 0,
                    opacity: hoveredIndex === i ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {item.desc}
                </motion.p>

                {/* OPTIONAL BUTTON */}
                {item.cta && (
                  <motion.button
                    className="
                      mt-4
                      inline-flex items-center gap-2
                      text-sm
                      text-white
                      border border-white/30
                      px-4 py-2
                      rounded-full
                      transition-colors duration-300
                    "
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      borderColor: "rgba(255,255,255,0.5)",
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: hoveredIndex === i ? -3 : 0,
                      opacity: hoveredIndex === i ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {item.cta} →
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

