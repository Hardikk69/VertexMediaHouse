
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = {
  pitch: {
    title: "Pitch Decks",
    desc: "Investor-ready presentations tailored for real estate.",
  },
  video: {
    title: "Video Editing",
    desc: "Clean, cinematic property and brand videos.",
  },
  web: {
    title: "Web Designing",
    desc: "Minimal websites focused on trust and conversion.",
  },
  ai: {
    title: "AI Automation",
    desc: "Smart lead handling and follow-ups.",
  },
};

export default function BentoGrid() {
  const [active, setActive] = useState(null);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-[820px] h-[820px] scale-75">

        {/* CENTER CARD */}
        <motion.div
          layout
          className="absolute inset-0 m-auto w-[320px] h-[320px]
                     rounded-3xl border border-neutral-300
                     bg-neutral-50 shadow-md
                     p-8 flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {!active ? (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-lg font-medium text-neutral-900">
                  All services
                </h3>
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                  Everything a modern real estate brand needs.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <h3 className="text-lg font-medium text-neutral-900">
                  {services[active].title}
                </h3>
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                  {services[active].desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* L SHAPES */}
        <LShape position="top-left" label="Pitch Decks"
          onHover={() => setActive("pitch")}
          onLeave={() => setActive(null)}
        />

        <LShape position="top-right" label="Video Editing"
          onHover={() => setActive("video")}
          onLeave={() => setActive(null)}
        />

        <LShape position="bottom-left" label="Web Designing"
          onHover={() => setActive("web")}
          onLeave={() => setActive(null)}
        />

        <LShape position="bottom-right" label="AI Automation"
          onHover={() => setActive("ai")}
          onLeave={() => setActive(null)}
        />
      </div>
    </section>
  );
}


function LShape({ position, label, onHover, onLeave }) {
  const arm = "absolute rounded-2xl bg-[#010101] shadow-lg";

  const map = {
    "top-left": {
      wrapper: "top-[60px] left-[60px] w-[260px] h-[260px]",
      h: "top-0 left-0 w-[260px] h-[84px]",
      v: "top-0 left-0 w-[84px] h-[260px]",
      text: "top-6 left-28",
    },
    "top-right": {
      wrapper: "top-[60px] right-[60px] w-[260px] h-[260px]",
      h: "top-0 right-0 w-[260px] h-[84px]",
      v: "top-0 right-0 w-[84px] h-[260px]",
      text: "top-6 right-28 text-right",
    },
    "bottom-left": {
      wrapper: "bottom-[60px] left-[60px] w-[260px] h-[260px]",
      h: "bottom-0 left-0 w-[260px] h-[84px]",
      v: "bottom-0 left-0 w-[84px] h-[260px]",
      text: "bottom-6 left-28",
    },
    "bottom-right": {
      wrapper: "bottom-[60px] right-[60px] w-[260px] h-[260px]",
      h: "bottom-0 right-0 w-[260px] h-[84px]",
      v: "bottom-0 right-0 w-[84px] h-[260px]",
      text: "bottom-6 right-28 text-right",
    },
  };

  const cfg = map[position];

  return (
    <motion.div
      className={`absolute ${cfg.wrapper}`}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className={`${arm} ${cfg.h}`} />
      <div className={`${arm} ${cfg.v}`} />
      <div
        className={`absolute text-base font-medium text-neutral-100 tracking-wide ${cfg.text}`}
      >
        {label}
      </div>
    </motion.div>
  );
}