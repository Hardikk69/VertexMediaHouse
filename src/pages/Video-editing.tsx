import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroNav from "@/components/HeroNav";
import CalenderCard from "@/components/Calender-card";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";
import PortfolioDrag from "@/components/sections/PortfolioSection";

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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Global theme tint */}
      <style>{`
        .theme-purple,
        .theme-purple [class*="bg-white"],
        .theme-purple [class*="bg-[#fafafa]"],
        .theme-purple [class*="bg-[#efefef]"],
        .theme-purple [class*="bg-[#f3f4f6]"],
        .theme-purple [class*="bg-[#e9ecef]"] {
          background-color: rgb(250 245 255 / 0.7) !important;
        }
        .theme-purple [class*="bg-[#101010]"],
        .theme-purple [class*="bg-[#18191c]"],
        .theme-purple [class*="bg-[#0a0a0a]"] {
          background: linear-gradient(to bottom right, #0d0d0d, #1a1a2a) !important;
        }
        .theme-purple .bg-white {
          background-color: rgb(250 245 255 / 0.8) !important;
        }
      `}</style>
      <main className="min-h-screen bg-purple-50 theme-purple">
        {/* Hero Section */}
        <div className="p-4 bg-purple-100/50">
          <section className="relative h-auto min-h-0 md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)] 2xl:max-h-[700px] bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2a] to-[#2d1f3d] rounded-xl overflow-hidden">
            <HeroNav />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-25">
              <div className="absolute top-10 right-20 w-80 h-80 bg-purple-600 rounded-full blur-[150px]" />
              <div className="absolute bottom-10 left-20 w-72 h-72 bg-[#ff4d31] rounded-full blur-[130px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <span className="inline-block px-5 py-2.5 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-sm border border-purple-500/20">
                    VIDEO EDITING
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                    Videos That{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#ff4d31]">
                      Stop the Scroll
                    </span>
                  </h1>
                  <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                    We create scroll-stopping video content that engages your audience and drives results. From reels to promos, we handle it all.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+919909210605"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-[#ff4d31] text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                    >
                      Book a Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      See Pricing
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
                    {/* Video Preview Mockup */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                      <div className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent" />
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer">
                          <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
                        </div>
                      </div>
                      {/* Timeline */}
                      <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-purple-600 to-[#ff4d31] rounded-full" />
                      </div>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#ff4d31] to-[#ff6b4d] rounded-2xl flex items-center justify-center shadow-xl shadow-[#ff4d31]/30">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <LogoList />

        <PortfolioDrag />

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-purple-100/80 via-purple-50/50 to-white">
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


        <CalenderCard />
        <div className="bg-purple-50">
          <FaqSection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
