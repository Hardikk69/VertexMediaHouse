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
import ServicesSection from "@/components/Ourservices";
import ScrollStakeSection from "@/components/sections/ScrollStack";

// Icons
import { Globe, Smartphone, Zap, Shield, Search, PenTool, Code, Rocket, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Unique, hand-crafted websites designed specifically for your brand and goals."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive layouts that look stunning on every device, from phones to desktops."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for quick load times and smooth user experiences."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with modern security practices and reliable hosting solutions."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Search engine friendly structure to help you rank higher on Google."
  },
  {
    icon: PenTool,
    title: "Easy to Update",
    description: "User-friendly CMS integration so you can manage content effortlessly."
  }
];

const techStack = [
  { name: "React", color: "from-cyan-500 to-cyan-600" },
  { name: "Next.js", color: "from-gray-800 to-black" },
  { name: "TypeScript", color: "from-blue-500 to-blue-600" },
  { name: "Tailwind", color: "from-teal-500 to-teal-600" },
  { name: "Node.js", color: "from-green-500 to-green-600" },
  { name: "WordPress", color: "from-blue-600 to-blue-700" },
];

export default function WebDesign() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Global theme tint - subtle cyan */}
      <style>{`
        .theme-cyan,
        .theme-cyan [class*="bg-white"],
        .theme-cyan [class*="bg-[#fafafa]"],
        .theme-cyan [class*="bg-[#efefef]"],
        .theme-cyan [class*="bg-[#f8f8f8]"],
        .theme-cyan [class*="bg-[#f3f4f6]"],
        .theme-cyan [class*="bg-[#e9ecef]"],
        .theme-cyan [class*="bg-[#efefed]"],
        .theme-cyan [class*="bg-[#e9e9e9]"] {
          background-color: rgb(245 252 254 / 0.92) !important;
        }
        .theme-cyan [class*="bg-[#101010]"],
        .theme-cyan [class*="bg-[#18191c]"],
        .theme-cyan [class*="bg-[#0a0a0a]"] {
          background: linear-gradient(to bottom right, #0f172a, #1a2028) !important;
        }
        .theme-cyan .bg-white {
          background-color: rgb(248 253 255 / 0.94) !important;
        }
      `}</style>
      <main className="min-h-screen bg-cyan-50/25 theme-cyan">
        {/* Hero Section */}
        <div className="p-4 bg-cyan-50/20">
          <section className="relative h-auto min-h-0 md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)] 2xl:max-h-[700px] bg-gradient-to-br from-[#0a0f1a] via-[#1e293b] to-[#0f172a] rounded-xl overflow-hidden">
            <HeroNav />

            {/* Enhanced Background with Grid Pattern */}
            <div className="absolute inset-0 opacity-30">
              {/* Gradient Orbs */}
              <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/60 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/50 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '5s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/30 rounded-full blur-[140px]" />
            </div>

            {/* Enhanced Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-300 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-md border border-cyan-400/30 shadow-lg shadow-cyan-500/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    WEB DESIGN & DEVELOPMENT
                  </motion.span>

                  {/* Enhanced Title with Better Gradient */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                    Websites That{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                      Convert Visitors
                    </span>
                  </h1>

                  {/* Enhanced Description */}
                  <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                    We build stunning, high-performance websites that turn visitors into customers. Modern design, blazing speed, and built to scale.
                  </p>

                  {/* Enhanced Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Contact Us</span>
                      <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg"
                    >
                      Request Quote
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-[2rem] blur-2xl" />

                    {/* Enhanced Browser Mockup */}
                    <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                      {/* Enhanced Browser Header */}
                      <div className="px-5 py-4 bg-gradient-to-r from-[#0f172a] to-[#1a2332] flex items-center gap-3 border-b border-white/10">
                        <div className="flex gap-2">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 cursor-pointer hover:brightness-110"
                            whileHover={{ scale: 1.2 }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 cursor-pointer hover:brightness-110"
                            whileHover={{ scale: 1.2 }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50 cursor-pointer hover:brightness-110"
                            whileHover={{ scale: 1.2 }}
                          />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-xs text-white/60 border border-white/10 flex items-center gap-2">
                            <Shield className="w-3 h-3 text-green-400" />
                            <span>yourwebsite.com</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-white/40 hover:text-white/60 transition-colors">
                            <Code className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Enhanced Browser Content */}
                      <div className="p-6 space-y-4 bg-gradient-to-br from-white/5 to-white/[0.02]">
                        {/* Header skeleton */}
                        <motion.div
                          className="h-4 bg-gradient-to-r from-white/30 to-white/20 rounded-full w-1/2 shadow-lg"
                          initial={{ width: "0%" }}
                          animate={{ width: "50%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.div
                          className="h-3 bg-white/15 rounded-full w-3/4"
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />

                        {/* Enhanced Content Cards */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <motion.div
                            className="h-32 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl relative overflow-hidden border border-cyan-500/30 group hover:scale-105 transition-transform cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            {/* Mini content representation */}
                            <div className="absolute top-3 left-3 space-y-2">
                              <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm" />
                              <div className="w-16 h-2 bg-white/15 rounded" />
                              <div className="w-12 h-2 bg-white/10 rounded" />
                            </div>
                          </motion.div>
                          <motion.div
                            className="h-32 bg-gradient-to-br from-blue-600/30 to-purple-500/30 rounded-2xl relative overflow-hidden border border-blue-500/30 group hover:scale-105 transition-transform cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-3 left-3 space-y-2">
                              <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm" />
                              <div className="w-16 h-2 bg-white/15 rounded" />
                              <div className="w-12 h-2 bg-white/10 rounded" />
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Page Indicator / Footer */}
                      <div className="px-6 py-3 bg-gradient-to-r from-[#0f172a] to-[#1a2332] border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Rocket className="w-3 h-3 text-cyan-400" />
                          <span>Built with React</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                          <span className="text-xs text-cyan-400 font-medium">Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <LogoList logoFilter="#3b82f6" accentColor="#06b6d4" />

        <ServicesSection excludeService="web-designing" accentColor="#06b6d4" />

        <PortfolioDrag twoCardMode={true} accentColor="#06b6d4" />

        <ServicesPlans accentColor="bg-cyan-500" accentHoverColor="hover:bg-cyan-600" tickBgColor="bg-cyan-100" tickTextColor="text-cyan-600" />

        {/* Features Section */}
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <span className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">What We Build</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#18191c] mt-4">
                Websites Built to Perform
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
                  className="p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 group border border-cyan-100/50"
                >
                  <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#18191c] mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <span className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-semibold">Our Stack</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                Technologies We Use
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`px-8 py-4 bg-gradient-to-r ${tech.color} text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ScrollStakeSection accentColor="#06b6d4" />
        <CalenderCard bgColor="#ecfeff" stripColor="#cffafe" />
        <div className="bg-cyan-50/60">
          <FaqSection accentColor="#06b6d4" />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
