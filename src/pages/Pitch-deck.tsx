import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroNav from "@/components/HeroNav";
import CalenderCard from "@/components/Calender-card";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";
import PortfolioDrag from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/Ourservices";
import ServicesPlans from "@/components/sections/ServicesPlans";
import ScrollStakeSection from "@/components/sections/ScrollStack";

// Icons
import { Presentation, Target, TrendingUp, Layers, Zap, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Presentation,
    title: "Investor-Ready Decks",
    description: "Professionally designed pitch decks that help you secure funding and close deals."
  },
  {
    icon: Target,
    title: "Clear Storytelling",
    description: "We structure your narrative to capture attention and drive action from slide one."
  },
  {
    icon: TrendingUp,
    title: "Data Visualization",
    description: "Complex data transformed into compelling visuals that investors understand instantly."
  },
  {
    icon: Layers,
    title: "Brand Consistency",
    description: "Every slide aligns with your brand identity for a cohesive, professional look."
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Get your deck ready in days, not weeks. Perfect for time-sensitive opportunities."
  },
  {
    icon: CheckCircle,
    title: "Unlimited Revisions",
    description: "We refine until you're 100% satisfied. No limits, no extra charges."
  }
];



export default function Pitchdeck() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Global theme tint - subtle orange */}
      <style>{`
        .theme-orange,
        .theme-orange [class*="bg-white"],
        .theme-orange [class*="bg-[#fafafa]"],
        .theme-orange [class*="bg-[#efefef]"],
        .theme-orange [class*="bg-[#f8f8f8]"],
        .theme-orange [class*="bg-[#f3f4f6]"],
        .theme-orange [class*="bg-[#e9ecef]"],
        .theme-orange [class*="bg-[#efefed]"],
        .theme-orange [class*="bg-[#e9e9e9]"] {
          background-color: rgba(255 250 245 / 0.92) !important;
        }
        .theme-orange [class*="bg-[#101010]"],
        .theme-orange [class*="bg-[#18191c]"],
        .theme-orange [class*="bg-[#0a0a0a]"] {
          background: linear-gradient(to bottom right, #1a1a2e, #2a2530) !important;
        }
        .theme-orange .bg-white {
          background-color: rgb(255 252 248 / 0.94) !important;
        }
      `}</style>
      <main className="min-h-screen bg-orange-50/25 theme-orange">
        {/* Hero Section */}
        <div className="p-4 bg-orange-50/60">
          <section className="relative h-auto min-h-0 md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)] 2xl:max-h-[700px] bg-gradient-to-br from-[#0f0f23] via-[#16213e] to-[#1a1a2e] rounded-xl overflow-hidden">
            <HeroNav />

            {/* Enhanced Background with Grid Pattern */}
            <div className="absolute inset-0 opacity-25">
              {/* Gradient Orbs */}
              <div className="absolute top-20 left-10 w-80 h-80 bg-[#ff4d31]/60 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '4s' }} />
              <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/40 rounded-full blur-[170px] animate-pulse"
                style={{ animationDuration: '5s' }}
              />

              <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-orange-400/30 rounded-full blur-[130px]" />

            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 77, 49, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 77, 49, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />

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
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#ff4d31]/15 to-orange-500/15 text-orange-300 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-md border border-[#ff4d31]/30 shadow-lg shadow-[#ff4d31]/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="w-2 h-2 bg-[#ff4d31] rounded-full animate-pulse" />
                    PITCH DECK DESIGN
                  </motion.span>

                  {/* Enhanced Title with Better Gradient */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                    Win Investors with a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d31] via-[#ff5d3d] to-orange-500">
                      Killer Pitch Deck
                    </span>
                  </h1>

                  {/* Enhanced Description */}
                  <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                    We design investor-ready pitch decks that tell your story, showcase your vision, and help you secure the funding you deserve.
                  </p>

                  {/* Enhanced Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff4d31] via-[#ff5d3d] to-orange-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4d31]/40 relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#ff3d21] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Contact Us</span>
                      <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg"
                    >
                      Get a Quote
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#ff4d31]/20 to-purple-600/20 rounded-[2rem] blur-2xl" />

                    {/* Enhanced Deck Preview Mockup */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <div className="space-y-4">
                        {/* Title Lines */}
                        <motion.div
                          className="h-4 bg-gradient-to-r from-white/30 to-white/20 rounded-full w-3/4 shadow-lg"
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.div
                          className="h-3 bg-white/15 rounded-full w-1/2"
                          initial={{ width: "0%" }}
                          animate={{ width: "50%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />

                        {/* Enhanced Chart Cards */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                          <motion.div
                            className="h-28 bg-gradient-to-br from-[#ff4d31]/40 to-[#ff4d31]/20 rounded-2xl relative overflow-hidden border border-[#ff4d31]/30 group hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ff4d31]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            {/* Mini icon representation */}
                            <div className="absolute bottom-3 left-3 w-6 h-6 bg-white/20 rounded-lg backdrop-blur-sm" />
                          </motion.div>
                          <motion.div
                            className="h-28 bg-gradient-to-br from-purple-500/40 to-purple-500/20 rounded-2xl relative overflow-hidden border border-purple-500/30 group hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-3 left-3 w-6 h-6 bg-white/20 rounded-lg backdrop-blur-sm" />
                          </motion.div>
                          <motion.div
                            className="h-28 bg-gradient-to-br from-blue-500/40 to-blue-500/20 rounded-2xl relative overflow-hidden border border-blue-500/30 group hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-3 left-3 w-6 h-6 bg-white/20 rounded-lg backdrop-blur-sm" />
                          </motion.div>
                        </div>

                        {/* Footer Lines */}
                        <div className="h-3 bg-white/10 rounded-full w-2/3 mt-6" />
                        <div className="h-3 bg-white/10 rounded-full w-1/2" />
                      </div>

                      {/* Slide Indicator */}
                      <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`h-1 rounded-full transition-all ${i === 1 ? 'w-8 bg-[#ff4d31]' : 'w-1 bg-white/20'}`}
                            />
                          ))}
                        </div>
                        <div className="text-xs text-gray-400 font-mono">Slide 1 / 12</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <LogoList logoFilter="#ff7700" accentColor="#ff4d31" />

        <ServicesSection excludeService="pitch-deck" accentColor="#ff4d31" />

        <PortfolioDrag twoCardMode={true} accentColor="#ff4d31" />

        <ServicesPlans accentColor="bg-[#ff4d31]" accentHoverColor="hover:bg-[#ff3d21]" tickBgColor="bg-orange-100" tickTextColor="text-orange-600" />

        {/* Features Section */}
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <span className="text-sm uppercase tracking-[0.2em] text-[#ff4d31] font-semibold">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#18191c] mt-4">
                Everything You Need to Win
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
                  className="p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 group border border-orange-100/50"
                >
                  <div className="w-14 h-14 bg-[#ff4d31]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff4d31] group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-[#ff4d31] group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#18191c] mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* Deck Types Section */}
        <section className="py-24 bg-[#18191c]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <span className="text-sm uppercase tracking-[0.2em] text-[#ff4d31] font-semibold">What We Create</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                Decks That Win
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Investor Decks", desc: "Secure funding with compelling narratives" },
                { title: "Sales Decks", desc: "Close deals with powerful presentations" },
                { title: "Startup Pitches", desc: "Launch your vision to the world" },
                { title: "Corporate Decks", desc: "Impress stakeholders professionally" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-8 bg-white rounded-3xl border border-black/10 hover:border-[#ff4d31]/50 transition-all duration-500 text-center group hover:shadow-xl hover:shadow-[#ff4d31]/10"
                >
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#ff4d31] transition-colors">
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

        <ScrollStakeSection accentColor="#ff4d31" />
        <CalenderCard bgColor="#fff7ed" stripColor="#fed7aa" />
        <div className="bg-orange-50/80">
          <FaqSection accentColor="#ff4d31" />
        </div>
      </main>
      <FooterSection />
    </>
  );
}