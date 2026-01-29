import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroNav from "@/components/HeroNav";
import CalenderCard from "@/components/Calender-card";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";
import PortfolioDrag from "@/components/sections/PortfolioSection";
import ServicesPlans from "@/components/sections/ServicesPlans";
import ServicesSection from "@/components/Ourservices";
import ScrollStakeSection from "@/components/sections/ScrollStack";
import "@/components/HeroGrid.css";

// Icons
import { Video, Sparkles, Scissors, Volume2, Palette, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Social Media Reels",
    description: "High-impact short-form content optimized for Instagram, TikTok, and YouTube Shorts."
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching animations, transitions, and effects that make your content stand out."
  },
  {
    icon: Scissors,
    title: "Professional Editing",
    description: "Clean cuts, smooth transitions, and polished final products every time."
  },
  {
    icon: Volume2,
    title: "Audio Enhancement",
    description: "Crystal-clear audio with music, sound effects, and voice enhancement."
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Cinematic color correction that gives your videos a premium look and feel."
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality. Get your content when you need it."
  }
];

const videoTypes = [
  { title: "Reels & Shorts", desc: "Vertical content for social media" },
  { title: "Promo Videos", desc: "Brand and product promotions" },
  { title: "Testimonials", desc: "Customer story edits" },
  { title: "Podcasts", desc: "Audio and video podcast editing" },
];

export default function VideoEditing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Global theme tint - subtle purple */}
      <style>{`
        .theme-purple,
        .theme-purple [class*="bg-white"],
        .theme-purple [class*="bg-[#fafafa]"],
        .theme-purple [class*="bg-[#efefef]"],
        .theme-purple [class*="bg-[#f8f8f8]"],
        .theme-purple [class*="bg-[#f3f4f6]"],
        .theme-purple [class*="bg-[#e9ecef]"],
        .theme-purple [class*="bg-[#efefed]"],
        .theme-purple [class*="bg-[#e9e9e9]"] {
          background-color: rgb(251 248 254 / 0.92) !important;
        }
        .theme-purple [class*="bg-[#101010]"],
        .theme-purple [class*="bg-[#18191c]"],
        .theme-purple [class*="bg-[#0a0a0a]"] {
          background: linear-gradient(to bottom right, #0f0f12, #1a1a24) !important;
        }
        .theme-purple .bg-white {
          background-color: rgb(252 250 255 / 0.94) !important;
        }
      `}</style>
      <main className="min-h-screen bg-purple-50/25 theme-purple">
        {/* Hero Section */}
        <div className="p-4 bg-purple-100/50">
          <section
            className="relative h-auto min-h-0 md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)] 2xl:max-h-[700px] bg-gradient-to-br from-[#0a0a0f] via-[#1a1428] to-[#2d1f3d] rounded-xl overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <HeroNav />

            {/* Animated Grid Background */}
            <div className="hero-grid-container" style={{
              '--grid-primary': '147, 51, 234',
              '--grid-secondary': '147, 51, 234'
            } as React.CSSProperties}>
              {/* Grid Pattern */}
              <div className="hero-grid" />

              {/* Intensified Grid Overlay */}
              <div
                className="hero-grid-intense"
                style={{
                  '--mouse-x': `${mousePosition.x}px`,
                  '--mouse-y': `${mousePosition.y}px`
                } as React.CSSProperties}
              />

              {/* Animated Vertical Light Beams */}
              <div className="hero-beams">
                <div className="beam beam-1" />
                <div className="beam beam-2" />
                <div className="beam beam-3" />
                <div className="beam beam-4" />
                <div className="beam beam-5" />
                <div className="beam beam-6" />
              </div>

              {/* Corner Glows */}
              <div className="hero-glow hero-glow-top" />
              <div className="hero-glow hero-glow-bottom" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {/* Enhanced Badge */}
                  <motion.span
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-300 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-md border border-purple-400/30 shadow-lg shadow-purple-500/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    VIDEO EDITING
                  </motion.span>

                  {/* Enhanced Title with Better Gradient */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                    Videos That{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 animate-gradient">
                      Stop the Scroll
                    </span>
                  </h1>

                  {/* Enhanced Description */}
                  <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                    We create scroll-stopping video content that engages your audience and drives results. From reels to promos, we handle it all.
                  </p>

                  {/* Enhanced Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Contact Us</span>
                      <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-md border-2 border-white/60 text-black rounded-full font-semibold hover:bg-white/60 hover:border-white/80 transition-all duration-300 hover:shadow-lg"
                    >
                      See Pricing
                    </Link>
                  </div>
                </motion.div>

                {/* Enhanced Right Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="hidden lg:block"
                >
                  <div className="relative">
                    {/* Glow Effect Behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-[2rem] blur-2xl" />

                    {/* Enhanced Video Preview Mockup */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                      {/* Video Container */}
                      <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center relative overflow-hidden group">
                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(147, 51, 234, 0.5) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(147, 51, 234, 0.5) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px'
                        }} />

                        {/* Enhanced Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-transparent to-pink-600/30" />

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]" />

                        {/* Enhanced Play Button */}
                        <motion.div
                          className="relative w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 cursor-pointer shadow-xl"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {/* Play Icon Shadow */}
                          <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl" />
                          {/* Play Triangle */}
                          <div className="relative w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2 drop-shadow-lg" />
                        </motion.div>

                        {/* Video Stats Overlay */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10">
                            4K
                          </div>
                          <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                            LIVE
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-xs text-white font-mono border border-white/10">
                          02:34
                        </div>
                      </div>

                      {/* Enhanced Controls Section */}
                      <div className="mt-5 space-y-3">
                        {/* Timeline with Hover Preview */}
                        <div className="relative group/timeline cursor-pointer">
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                            <motion.div
                              className="h-full w-2/3 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 rounded-full relative"
                              initial={{ width: "0%" }}
                              animate={{ width: "66%" }}
                              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            >
                              {/* Progress Indicator */}
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/timeline:opacity-100 transition-opacity" />
                            </motion.div>
                          </div>
                          {/* Time Labels */}
                          <div className="flex justify-between mt-1.5 text-[10px] text-gray-400 font-mono">
                            <span>01:42</span>
                            <span>02:34</span>
                          </div>
                        </div>

                        {/* Video Controls */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-3">
                            {/* Control Buttons */}
                            <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group">
                              <div className="w-0 h-0 border-l-[8px] border-l-white/70 group-hover:border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
                            </button>
                            <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                              <Volume2 className="w-3.5 h-3.5 text-white/70 hover:text-white" />
                            </button>
                          </div>

                          {/* Quality Selector */}
                          <div className="flex items-center gap-1.5">
                            <div className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/60 border border-white/10 font-medium">
                              HD
                            </div>
                            <button className="px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-[10px] text-white/60 border border-white/10 transition-all">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <LogoList logoFilter="#a855f7" accentColor="#9333ea" />

        <ServicesSection excludeService="video-editing" accentColor="#9333ea" />

        <PortfolioDrag twoCardMode={true} accentColor="#9333ea" />

        <ServicesPlans accentColor="bg-purple-600" accentHoverColor="hover:bg-purple-700" tickBgColor="bg-purple-100" tickTextColor="text-purple-600" />

        {/* Features Section */}
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <span className="text-sm uppercase tracking-[0.2em] text-purple-600 font-semibold">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#18191c] mt-4">
                Professional Video Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 group border border-purple-100/50"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#18191c] mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Types */}
        <section className="py-24 bg-[#18191c]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <span className="text-sm uppercase tracking-[0.2em] text-purple-400 font-semibold">
                What We Edit
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                Content We Create
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTypes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-8 bg-white rounded-3xl border border-black/10 hover:border-purple-500/50 transition-all duration-500 text-center"
                >
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        <ScrollStakeSection accentColor="#9333ea" />
        <CalenderCard bgColor="#faf5ff" stripColor="#e9d5ff" />
        <div className="bg-purple-50/80">
          <FaqSection accentColor="#9333ea" />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
