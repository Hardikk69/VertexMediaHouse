import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroNav from "@/components/HeroNav";
import CalenderCard from "@/components/Calender-card";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import LogoList from "@/components/sections/LogoList";

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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="p-3 bg-[#efefef]">
        <section className="relative min-h-[90vh] md:min-h-[85vh] bg-gradient-to-br from-[#0a0a0a] via-[#0d1a0d] to-[#0a0a0a] rounded-3xl overflow-hidden">
          <HeroNav />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-[200px]" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-600 rounded-full blur-[180px]" />
          </div>

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

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <span className="inline-block px-5 py-2.5 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium tracking-wide mb-8 backdrop-blur-sm border border-emerald-500/20">
                  AI & AUTOMATION
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                  Automate Work,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                    Scale Faster
                  </span>
                </h1>
                <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                  We build AI-powered automation systems that handle repetitive tasks, respond to leads instantly, and free your team to focus on what matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919909210605"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    Learn More
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
                  {/* AI Dashboard Mockup */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <Bot className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">AI Agent Active</div>
                        <div className="text-emerald-400 text-sm">Processing 23 tasks</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {["Email sent to lead", "Call scheduled", "Form submitted", "Follow-up queued"].map((task, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 bg-white/5 rounded-2xl p-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.2 }}
                        >
                          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
                          <span className="text-gray-300 text-sm flex-1">{task}</span>
                          <span className="text-emerald-400 text-sm font-medium">✓</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
                    <Zap className="w-8 h-8 text-white" />
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
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-semibold">What We Automate</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#18191c] mt-4">
              Work Less, Achieve More
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
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#18191c] mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-semibold">Our Solutions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              AI-Powered Workflows
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-gradient-to-br from-emerald-500/10 to-green-600/5 backdrop-blur-sm rounded-3xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 text-center group"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-emerald-500 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-bold">90%</div>
              <div className="text-white/80 mt-2 font-medium">Time Saved</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold">24/7</div>
              <div className="text-white/80 mt-2 font-medium">Always Active</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold">5x</div>
              <div className="text-white/80 mt-2 font-medium">Lead Response</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold">0</div>
              <div className="text-white/80 mt-2 font-medium">Missed Leads</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's build AI systems that work while you sleep.
          </p>
          <a
            href="tel:+919909210605"
            className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-500/30"
          >
            Get Started Today
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
