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
import { Bot, Mail, Phone, MessageSquare, Workflow, Clock, Zap, Brain, Settings, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Email Automation",
    description: "Automated follow-ups, lead nurturing sequences, and smart email workflows."
  },
  {
    icon: Phone,
    title: "Voice AI Agents",
    description: "AI-powered phone agents for calls, follow-ups, and customer support."
  },
  {
    icon: MessageSquare,
    title: "Chat Automation",
    description: "Intelligent chatbots that qualify leads and answer questions 24/7."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect your tools and automate repetitive tasks across platforms."
  },
  {
    icon: Clock,
    title: "Scheduling Automation",
    description: "Automated appointment booking and calendar management."
  },
  {
    icon: Brain,
    title: "Lead Qualification",
    description: "AI that scores and routes leads to the right team member automatically."
  }
];

const automationTypes = [
  { icon: Mail, title: "Email Sequences", desc: "Drip campaigns that convert" },
  { icon: Phone, title: "Voice Calls", desc: "AI agents that never sleep" },
  { icon: MessageSquare, title: "Live Chat", desc: "Instant customer response" },
  { icon: Settings, title: "CRM Sync", desc: "Automatic data updates" },
];

export default function AIAutomation() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Global theme tint */}
      <style>{`
        .theme-emerald,
        .theme-emerald [class*="bg-white"],
        .theme-emerald [class*="bg-[#fafafa]"],
        .theme-emerald [class*="bg-[#efefef]"],
        .theme-emerald [class*="bg-[#f3f4f6]"],
        .theme-emerald [class*="bg-[#e9ecef]"],
        .theme-emerald [class*="bg-[#efefed]"],
        .theme-emerald [class*="bg-[#e9e9e9]"] {
          background-color: rgb(236 253 245 / 0.7) !important;
        }
        .theme-emerald [class*="bg-[#101010]"],
        .theme-emerald [class*="bg-[#18191c]"],
        .theme-emerald [class*="bg-[#0a0a0a]"] {
          background: linear-gradient(to bottom right, #0a0a0a, #0d1a0d) !important;
        }
        .theme-emerald .bg-white {
          background-color: rgb(236 253 245 / 0.8) !important;
        }
      `}</style>
      <main className="min-h-screen bg-emerald-50 theme-emerald">
        {/* Hero Section */}
        <div className="p-4 bg-emerald-100/50">
          <section className="relative h-auto min-h-0 md:h-[calc(100dvh-24px)] md:max-h-[calc(100dvh-24px)] 2xl:max-h-[700px] bg-gradient-to-br from-[#0a0a0f] via-[#0d1a0d] to-[#0a0a0a] rounded-xl overflow-hidden">
            <HeroNav />

            {/* Enhanced Background with Grid Pattern */}
            <div className="absolute inset-0 opacity-30">
              {/* Gradient Orbs */}
              <div className="absolute top-10 left-1/3 w-96 h-96 bg-emerald-500/60 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-600/50 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '5s' }} />
              <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-emerald-400/30 rounded-full blur-[140px]" />
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />

            {/* Animated Dots */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/15 to-green-500/15 text-emerald-300 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-md border border-emerald-400/30 shadow-lg shadow-emerald-500/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    AI & AUTOMATION
                  </motion.span>

                  {/* Enhanced Title with Better Gradient */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                    Automate Work,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500">
                      Scale Faster
                    </span>
                  </h1>

                  {/* Enhanced Description */}
                  <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                    We build AI-powered automation systems that handle repetitive tasks, respond to leads instantly, and free your team to focus on what matters.
                  </p>

                  {/* Enhanced Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/40 relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Contact Us</span>
                      <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg"
                    >
                      Learn More
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-[2rem] blur-2xl" />

                    {/* Enhanced AI Dashboard Mockup - Terminal Style */}
                    <div className="relative bg-gradient-to-br from-gray-900/95 via-emerald-950/90 to-gray-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl">
                      {/* Terminal Header */}
                      <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-emerald-900/40 to-green-900/40 border-b border-emerald-500/20">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          </div>
                          <div className="text-emerald-400 text-xs font-mono flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5" />
                            vertex-ai-agent
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          <span className="text-[10px] text-emerald-400 font-mono uppercase">Active</span>
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-5 space-y-3">
                        {/* Live Metrics Row */}
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { label: "Tasks", value: "23", icon: Workflow },
                            { label: "Speed", value: "2.4s", icon: Zap },
                            { label: "Success", value: "98%", icon: Brain }
                          ].map((metric, i) => (
                            <motion.div
                              key={i}
                              className="bg-gradient-to-br from-emerald-500/10 to-transparent px-2.5 py-2 rounded-xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <metric.icon className="w-3.5 h-3.5 text-emerald-400 mb-1.5" />
                              <div className="text-xl font-bold text-white font-mono">{metric.value}</div>
                              <div className="text-[10px] text-gray-400 uppercase tracking-wider">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Terminal Activity Feed */}
                        <div className="bg-black/40 rounded-xl p-3 border border-emerald-500/20 font-mono text-xs">
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-emerald-500/20">
                            <div className="text-emerald-400 text-sm">$</div>
                            <div className="text-gray-400 text-xs">Activity Feed</div>
                          </div>
                          <div className="space-y-1.5">
                            {[
                              { action: "Email sent", target: "lead@company.com", status: "success" },
                              { action: "Call scheduled", target: "Lead Name", status: "success" },
                              { action: "Form processed", target: "Contact Form", status: "success" }
                            ].map((activity, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center gap-2 text-[11px] group hover:bg-emerald-500/5 px-2 py-1.5 rounded transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.15 }}
                              >
                                <div className={`w-1 h-1 rounded-full ${activity.status === 'success' ? 'bg-emerald-400' : 'bg-yellow-400'} shadow-lg ${activity.status === 'success' ? 'shadow-emerald-500/50' : 'shadow-yellow-500/50'}`} />
                                <div className="flex-1 flex items-center gap-1.5">
                                  <span className="text-emerald-400">{activity.action}:</span>
                                  <span className="text-gray-300 truncate">{activity.target}</span>
                                </div>
                                {activity.status === 'success' && (
                                  <span className="text-emerald-400 text-xs">✓</span>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Performance Bar */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-gray-400 font-mono">Processing Power</span>
                            <span className="text-emerald-400 font-mono">87%</span>
                          </div>
                          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full relative"
                              initial={{ width: "0%" }}
                              animate={{ width: "87%" }}
                              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Footer Status */}
                      <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-900/40 to-green-900/40 border-t border-emerald-500/20 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          <Bot className="w-3 h-3 text-emerald-400" />
                          <span className="text-gray-400">AI Agent v3.2</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono">
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-gray-400">99.9% uptime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <LogoList logoFilter="#34d399" />

        <PortfolioDrag />

        <ServicesPlans accentColor="bg-emerald-500" accentHoverColor="hover:bg-emerald-600" tickBgColor="bg-emerald-100" tickTextColor="text-emerald-600" />

        {/* Enhanced Features Section */}
        <section className="py-28 bg-gradient-to-b from-[#fafafa] to-emerald-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-semibold">What We Automate</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#18191c] mt-4 mb-4">
                Work Less, Achieve More
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Powerful AI automation solutions that transform how your business operates
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative p-8 rounded-3xl bg-white hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-500 group border border-emerald-100/50 hover:border-emerald-200 overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-green-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-emerald-100 group-hover:shadow-emerald-500/30">
                      <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#18191c] mb-3 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Automation Types */}
        <section className="relative py-28 bg-gradient-to-b from-[#0a0a0a] via-[#0d1a0d] to-[#0a0a0a] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600 rounded-full blur-[150px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-semibold">Our Solutions</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
                AI-Powered Workflows
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Streamline your operations with intelligent automation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationTypes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="relative p-8 bg-gradient-to-br from-emerald-500/15 to-green-600/10 backdrop-blur-xl rounded-3xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 text-center group overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-green-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-emerald-500/20">
                      <item.icon className="w-8 h-8 text-emerald-400 group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="relative py-24 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900 rounded-full blur-[150px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Results That Speak for Themselves
              </h2>
              <p className="text-white/90 text-lg">
                Real impact from AI automation
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { number: "90%", label: "Time Saved", delay: 0 },
                { number: "24/7", label: "Always Active", delay: 0.1 },
                { number: "5x", label: "Lead Response", delay: 0.2 },
                { number: "0", label: "Missed Leads", delay: 0.3 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative inline-block">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-white/90 mt-4 font-medium text-base md:text-lg tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ScrollStakeSection />
        <CalenderCard />
        <div className="bg-emerald-50">
          <FaqSection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
