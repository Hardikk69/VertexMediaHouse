import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Zap, Heart } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const values = [
    {
        icon: Target,
        title: "Results-Driven",
        description: "We focus on delivering measurable outcomes that drive your business forward.",
    },
    {
        icon: Zap,
        title: "Fast & Efficient",
        description: "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
        icon: Users,
        title: "Collaborative",
        description: "We work closely with you to understand your vision and bring it to life.",
    },
    {
        icon: Heart,
        title: "Passionate",
        description: "Every project is crafted with care and dedication to excellence.",
    },
];

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white font-bricolage">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold">
                        Vertex Media House
                    </Link>
                    <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            <motion.main
                className="container mx-auto px-6 pt-32 pb-20"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Hero */}
                <motion.div variants={itemVariants} className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff4d31]/10 text-[#ff4d31] text-sm font-medium mb-6">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 max-w-4xl mx-auto">
                        Creative Solutions for Brands That
                        <span className="text-[#ff4d31]"> Move Fast</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        We're a team of designers, developers, and strategists who help startups
                        and established brands scale smarter through compelling visuals and
                        cutting-edge technology.
                    </p>
                </motion.div>

                {/* Values */}
                <motion.div variants={itemVariants} className="mb-20">
                    <h2 className="text-2xl font-semibold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                variants={itemVariants}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ff4d31]/30 transition-colors"
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#ff4d31]/10 flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-[#ff4d31]" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                <p className="text-white/60 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center">
                    <p className="text-white/60 mb-6">Ready to work together?</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#ff4d31] hover:bg-[#ff4d31]/90 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </motion.main>
        </div>
    );
}
