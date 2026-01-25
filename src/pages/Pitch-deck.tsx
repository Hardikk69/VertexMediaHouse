import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroNav from "@/components/HeroNav";
import CalenderCard from "@/components/Calender-card";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";
import PortfolioDrag from "@/components/sections/PortfolioSection";
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

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "We understand your business, goals, and audience." },
  { step: "02", title: "Content Strategy", desc: "We structure your story for maximum impact." },
  { step: "03", title: "Design & Build", desc: "Our designers create stunning, conversion-focused slides." },
  { step: "04", title: "Review & Refine", desc: "Unlimited revisions until it's perfect." },
];

export default function Pitchdeck() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Global theme tint */}
      <style>{`
        .theme-orange,
        .theme-orange [class*="bg-white"],
        .theme-orange [class*="bg-[#fafafa]"],
        .theme-orange [class*="bg-[#efefef]"],
        .theme-orange [class*="bg-[#f3f4f6]"],
        .theme-orange [class*="bg-[#e9ecef]"],
        .theme-orange [class*="bg-[#efefed]"],
        .theme-orange [class*="bg-[#e9e9e9]"] {
          background-color: rgb(255 247 237 / 0.7) !important;
        }
        .theme-orange [class*="bg-[#101010]"],
        .theme-orange [class*="bg-[#18191c]"],
        .theme-orange [class*="bg-[#0a0a0a]"] {
          background: linear-gradient(to bottom right, #1a1a2e, #2d1f1f) !important;
        }
        .theme-orange .bg-white {
          background-color: rgb(255 247 237 / 0.8) !important;
        }
      `}</style>
      <main className="min-h-screen bg-orange-50 theme-orange">
        {/* Hero Section */}
        <div className="p-4 bg-orange-100/50">
          <section className="relative h-auto min-h-0 md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)] 2xl:max-h-[700px] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] rounded-xl overflow-hidden">
            <HeroNav />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4d31] rounded-full blur-[120px]" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-36 pb-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <span className="inline-block px-5 py-2.5 bg-[#ff4d31]/10 text-[#ff4d31] rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-sm border border-[#ff4d31]/20">
                    PITCH DECK DESIGN
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                    Win Investors with a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d31] to-[#ff6b4d]">
                      Killer Pitch Deck
                    </span>
                  </h1>
                  <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                    We design investor-ready pitch decks that tell your story, showcase your vision, and help you secure the funding you deserve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <a
                      href="tel:+919909210605"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff4d31] text-white rounded-full font-semibold hover:bg-[#ff3d21] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ff4d31]/25"
                    >
                      Book a Call
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      Get a Quote
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
                    {/* Deck Preview Mockup */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                      <div className="space-y-4">
                        <div className="h-4 bg-white/20 rounded-full w-3/4" />
                        <div className="h-3 bg-white/10 rounded-full w-1/2" />
                        <div className="grid grid-cols-3 gap-4 mt-8">
                          <div className="h-28 bg-gradient-to-br from-[#ff4d31]/40 to-[#ff4d31]/20 rounded-2xl" />
                          <div className="h-28 bg-gradient-to-br from-purple-500/40 to-purple-500/20 rounded-2xl" />
                          <div className="h-28 bg-gradient-to-br from-blue-500/40 to-blue-500/20 rounded-2xl" />
                        </div>
                        <div className="h-3 bg-white/10 rounded-full w-2/3 mt-6" />
                        <div className="h-3 bg-white/10 rounded-full w-1/2" />
                      </div>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#ff4d31] to-[#ff6b4d] rounded-2xl flex items-center justify-center shadow-xl shadow-[#ff4d31]/30">
                      <Presentation className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <LogoList />

        <PortfolioDrag />

        <ServicesPlans accentColor="bg-[#ff4d31]" accentHoverColor="hover:bg-[#ff3d21]" />

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

        {/* Process Section */}
        <section className="py-24 bg-[#18191c]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <span className="text-sm uppercase tracking-[0.2em] text-[#ff4d31] font-semibold">Our Process</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                How We Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="text-center p-6"
                >
                  <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ff4d31]/50 to-transparent mb-6">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        <ScrollStakeSection />
        <CalenderCard />
        <div className="bg-orange-50">
          <FaqSection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
