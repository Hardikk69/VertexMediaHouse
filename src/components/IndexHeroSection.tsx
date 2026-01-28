import HeroNav from "./HeroNav";
import PlayButton from "./PlayButton";
import { useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const screen = useScreenSize()
    return (
        <section className="relative rounded-xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0a0a0a] overflow-hidden
    /* MOBILE (sm & below) */
    h-auto min-h-0 max-h-none

    /* DESKTOP */
    md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)]

    /* LARGE SCREENS */
    2xl:max-h-[700px]">

            {/* Navigation */}
            <HeroNav />

            {/* Background Pattern - subtle overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4d31] rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
            </div>

            {/* Main container - matching service page structure */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="inline-block px-5 py-2.5 bg-[#ff4d31]/10 text-[#ff4d31] rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-sm border border-[#ff4d31]/20">
                            CREATIVE AGENCY
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                            Transform Your Brand with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d31] to-[#ff6b4d]">
                                Creative Excellence
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                            Our aim is simple - get straight to results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-12">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff4d31] text-white rounded-full font-semibold hover:bg-[#ff3d21] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ff4d31]/25"
                            >
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/#our-portfolio"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                            >
                                View Our Work
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
                        <div className="relative">
                            {/* Services Preview Mockup */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="h-4 bg-white/20 rounded-full w-3/4" />
                                    <div className="h-3 bg-white/10 rounded-full w-1/2" />
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <div className="h-28 bg-gradient-to-br from-[#ff4d31]/40 to-[#ff4d31]/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-white/60 text-sm font-medium">Pitch Decks</span>
                                        </div>
                                        <div className="h-28 bg-gradient-to-br from-purple-500/40 to-purple-500/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-white/60 text-sm font-medium">Video Editing</span>
                                        </div>
                                        <div className="h-28 bg-gradient-to-br from-blue-500/40 to-blue-500/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-white/60 text-sm font-medium">Web Design</span>
                                        </div>
                                        <div className="h-28 bg-gradient-to-br from-emerald-500/40 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-white/60 text-sm font-medium">AI Solutions</span>
                                        </div>
                                    </div>
                                    <div className="h-3 bg-white/10 rounded-full w-2/3 mt-6" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
