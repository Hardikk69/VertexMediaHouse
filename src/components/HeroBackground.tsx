"use client";

import { motion } from "framer-motion";
import { ThreeDMarquee } from "@/components/sections/ThreeDmarquee";

const marqueeImages = [
    { src: "../public/images/image.png", alt: "Image 3" },
    { src: "../public/images/image1.png", alt: "Image 1" },
    { src: "../public/images/image2.png", alt: "Image 2" },
];

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* 3D Marquee background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
                <ThreeDMarquee images={marqueeImages} cols={6} rows={4} />
            </div>

            {/* Swipe panel overlay */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{
                    duration: 1.5,
                    ease: [0.65, 0, 0.35, 1],
                }}
                className="absolute inset-0 bg-background z-20"
            />

            {/* Dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />
        </div>
    );
};

export default HeroBackground;
