import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroNav from "@/components/HeroNav";
import CalenderCard from "@/components/Calender-card";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";

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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="p-3 bg-[#efefef]">
        <section className="relative min-h-[90vh] md:min-h-[85vh] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl overflow-hidden">
          <HeroNav />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[180px]" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-[150px]" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <span className="inline-block px-5 py-2.5 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-sm border border-cyan-500/20">
                  WEB DESIGN & DEVELOPMENT
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                  Websites That{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Convert Visitors
                  </span>
                </h1>
                <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                  We build stunning, high-performance websites that turn visitors into customers. Modern design, blazing speed, and built to scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919909210605"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    Request Quote
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
                  {/* Browser Mockup */}
                  <div className="bg-[#1e293b] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    {/* Browser Header */}
                    <div className="px-5 py-4 bg-[#0f172a] flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-white/10 rounded-full px-4 py-1.5 text-xs text-gray-400">
                          yourwebsite.com
                        </div>
                      </div>
                    </div>
                    {/* Browser Content */}
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-white/20 rounded-full w-1/2" />
                      <div className="h-3 bg-white/10 rounded-full w-3/4" />
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="h-32 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl" />
                        <div className="h-32 bg-gradient-to-br from-blue-600/30 to-purple-500/30 rounded-2xl" />
                      </div>
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/30">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <LogoList />

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
                className="p-8 rounded-3xl bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group border border-gray-100"
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Let's create a website that works as hard as you do.
          </p>
          <a
            href="tel:+919909210605"
            className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-white text-cyan-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <CalenderCard />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
