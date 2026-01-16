import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const cards = [
    {
      title: "Project Alpha",
      desc: "Branding & Design",
      image: "https://picsum.photos/600/800?1",
      cta: "View Project",
    },
    {
      title: "Project Beta",
      desc: "Web Experience",
      image: "https://picsum.photos/600/800?2",
      cta: null, 
    },
    {
      title: "Project Gamma",
      desc: "Product UI",
      image: "https://picsum.photos/600/800?3",
      cta: "Explore",
    },
    {
      title: "Project Delta",
      desc: "Motion Design",
      image: "https://picsum.photos/600/800?4",
      cta: "See Case Study",
    },
  ];
  
export default function InfinitePortfolioDrag(): JSX.Element {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

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
    <section className="bg-[#101010] text-white py-32 overflow-hidden">
      <span className="block mb-4 text-sm tracking-wide text-white/60 text-center">
      Portfolio
        </span>
      <h2 className="text-4xl font-bold mb-12 px-10 text-center">
      Work That Speaks 
      </h2>

      <motion.div
        className="cursor-grab active:cursor-grabbing"
        drag="x"
        style={{ x }}
        dragElastic={0.1}
        dragMomentum
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex px-10"
          animate={{
            scale: isDragging ? 0.94 : 1,
            gap: isDragging ? "32px" : "16px",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 30 }}
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
            >
              {/* FULL IMAGE BACKGROUND */}
              <img
                src={item.image}
                alt={item.title}
                draggable={false}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  select-none pointer-events-none
                "
              />

              {/* GRADIENT OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80
                via-black/40
                to-transparent
              " />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 w-full">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {item.desc}
                </p>

                {/* OPTIONAL BUTTON */}
                {item.cta && (
                  <button
                    className="
                      mt-4
                      inline-flex items-center gap-2
                      text-sm
                      text-white
                      border border-white/30
                      px-4 py-2
                      rounded-full
                      hover:bg-white/10
                      transition
                    "
                  >
                    {item.cta} →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
