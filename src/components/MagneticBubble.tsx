import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticBubble() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring for bouncy feel
  const springX = useSpring(x, {
    stiffness: 300,
    damping: 12,
    mass: 0.4,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 12,
    mass: 0.4,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Limit movement (keeps bubble inside)
    const limit = rect.width / 4;

    x.set(Math.max(-limit, Math.min(limit, offsetX)));
    y.set(Math.max(-limit, Math.min(limit, offsetY)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="h-14 w-14 flex items-center justify-center translate-x-[20px] -translate-y-[20px]"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="
          toggle-dot
          h-5 w-5
          rounded-full
          bg-[#ff4d31]
        "
      />
    </div>
  );
}
