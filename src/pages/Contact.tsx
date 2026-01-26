import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const features = [
    { icon: Clock, text: "30-Minute Strategy Call" },
    { icon: Sparkles, text: "Custom Solutions Discussion" },
    { icon: Calendar, text: "Flexible Scheduling" },
];

export default function Contact() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white font-bricolage overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff4d31]/10 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[180px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="group flex items-center gap-2.5">
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                className="w-9 h-9 transition-transform duration-300"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 32L20 8L32 32H26L20 18L14 32H8Z"
                                    className="fill-[#ff4d31] group-hover:fill-[#ff6347] transition-colors duration-300"
                                />
                                <path
                                    d="M20 18L26 32H14L20 18Z"
                                    className="fill-[#ff4d31] group-hover:fill-[#ff6347] transition-colors duration-300"
                                    opacity="0.6"
                                />
                            </svg>
                        </motion.div>
                        <span className="text-xl font-black tracking-tight text-white group-hover:text-gray-200 transition-colors duration-300">
                            ALPHA
                        </span>
                    </Link>
                    <Link
                        to="/"
                        className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </nav>

            <motion.main
                className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ff4d31]/10 text-[#ff4d31] text-sm font-medium mb-6 border border-[#ff4d31]/20">
                        <Calendar className="w-4 h-4" />
                        Book Your Free Consultation
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        Let's Build Something
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d31] to-[#ff6b4d]"> Amazing</span>
                    </h1>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Pick a time that works for you and let's discuss how we can transform your vision into reality.
                    </p>
                </motion.div>

                {/* Features Row */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-white/70"
                        >
                            <feature.icon className="w-4 h-4 text-[#ff4d31]" />
                            {feature.text}
                        </div>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Left Column - Info (2 cols) */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-wider text-white/40 font-medium mb-4">
                                Other Ways to Reach Us
                            </h3>

                            <motion.a
                                href="tel:+919909210605"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#ff4d31]/20 transition-all group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff4d31]/20 to-[#ff4d31]/5 flex items-center justify-center group-hover:from-[#ff4d31]/30 group-hover:to-[#ff4d31]/10 transition-all">
                                    <Phone className="w-5 h-5 text-[#ff4d31]" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Call Us Directly</p>
                                    <p className="text-white font-semibold">+91 9909210605</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="mailto:hello@vertexmedia.house"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#ff4d31]/20 transition-all group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-500/10 transition-all">
                                    <Mail className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email Us</p>
                                    <p className="text-white font-semibold">hello@vertexmedia.house</p>
                                </div>
                            </motion.a>

                            <motion.div
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Location</p>
                                    <p className="text-white font-semibold">Remote - Worldwide</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Response Time Badge */}
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#ff4d31]/10 to-transparent border border-[#ff4d31]/10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-white/80">Quick Response Time</span>
                            </div>
                            <p className="text-sm text-white/50">
                                We typically respond within 2-4 hours during business days.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Calendly Widget (3 cols) */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4d31]/20 via-purple-500/20 to-[#ff4d31]/20 rounded-3xl blur-xl opacity-50" />

                            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-1.5 overflow-hidden">
                                {/* Widget Header */}
                                <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <span className="text-sm text-white/40">Schedule a Meeting</span>
                                    </div>
                                    <span className="text-xs text-white/30 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                        Secure Booking
                                    </span>
                                </div>

                                {/* Calendly Embed */}
                                <div className="bg-white rounded-b-2xl overflow-hidden">
                                    <div
                                        className="calendly-inline-widget"
                                        data-url="https://calendly.com/h-kansara106/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=ff4d31"
                                        style={{ minWidth: "320px", height: "650px", backgroundColor: "#ffffff" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </div>
    );
}
