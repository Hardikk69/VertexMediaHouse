"use client";

import { motion } from "framer-motion";
import React from "react";

export interface MarqueeImage {
  src: string;
  alt: string;
}

interface ThreeDMarqueeProps {
  images: MarqueeImage[];
  cols?: number;
  rows?: number;
}

export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
  images,
  cols = 5,
  rows = 5,
}) => {
  const duplicatedImages = Array.from({ length: cols * rows }, (_, i) => images[i % images.length]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          transform: "rotateX(40deg) rotateZ(30deg)", // LESS STEEP
        }}
      >
        {duplicatedImages.map((image, idx) => (
          <motion.img
            key={idx}
            src={image.src}
            alt={image.alt}
            initial={{ y: idx % 2 === 0 ? -50 : 50 }}
            animate={{ y: idx % 2 === 0 ? 50 : -50 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-[280px] h-[400px] object-cover rounded-xl shadow-lg" // BIGGER IMAGES
          />
        ))}
      </div>
    </div>
  );
};
