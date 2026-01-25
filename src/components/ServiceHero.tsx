import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import HeroNav from "@/components/HeroNav";

interface ServiceHeroProps {
    // Tag/Badge text
    tagText: string;
    // Headline parts
    headlineWhite: string;
    headlineGradient: string;
    // Description
    description: string;
    // Theme colors for gradient
    accentColor: string; // e.g., "emerald", "purple", "cyan", "red"
    gradientFrom: string;
    gradientTo: string;
    // Background gradient
    bgGradient: string;
    // Optional background blur elements
    blurColor1?: string;
    blurColor2?: string;
    // CTA button text
    primaryCTAText?: string;
    secondaryCTAText?: string;
    // Visual component - the right side mockup (passed as children)
    children?: React.ReactNode;
}

export default function ServiceHero({
    tagText,
    headlineWhite,
    headlineGradient,
    description,
    accentColor,
    gradientFrom,
    gradientTo,
    bgGradient,
    blurColor1 = "bg-purple-600",
    blurColor2 = "bg-blue-600",
    primaryCTAText = "Book a Call",
    secondaryCTAText = "Learn More",
    children,
}: ServiceHeroProps) {
    // Generate gradient classes based on colors
    const tagBgClass = `bg-${accentColor}-500/10`;
    const tagTextClass = `text-${accentColor}-400`;
    const tagBorderClass = `border-${accentColor}-500/20`;

    return (
        <div className="p-3 bg-[#efefef]">
            <section className={`relative min-h-[90vh] md:min-h-[85vh] ${bgGradient} rounded-3xl overflow-hidden`}>
                <HeroNav />

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-25">
                    <div className={`absolute top-10 right-20 w-80 h-80 ${blurColor1} rounded-full blur-[150px]`} />
                    <div className={`absolute bottom-10 left-20 w-72 h-72 ${blurColor2} rounded-full blur-[130px]`} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <span
                                className="inline-block px-5 py-2.5 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-sm border"
                                style={{
                                    backgroundColor: `color-mix(in srgb, ${gradientFrom} 10%, transparent)`,
                                    color: gradientFrom,
                                    borderColor: `color-mix(in srgb, ${gradientFrom} 20%, transparent)`,
                                }}
                            >
                                {tagText}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                                {headlineWhite}{" "}
                                <span
                                    className="text-transparent bg-clip-text"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
                                    }}
                                >
                                    {headlineGradient}
                                </span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                                {description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+919909210605"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
                                        boxShadow: `0 25px 50px -12px color-mix(in srgb, ${gradientFrom} 25%, transparent)`,
                                    }}
                                >
                                    {primaryCTAText}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                                >
                                    {secondaryCTAText}
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="hidden lg:block"
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
