import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Book, FileText, Video, Lightbulb } from "lucide-react";

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

const resources = [
    {
        icon: FileText,
        title: "Pitch Deck Templates",
        description: "Download our proven pitch deck templates used by successful startups.",
        status: "Coming Soon",
    },
    {
        icon: Video,
        title: "Video Tutorials",
        description: "Learn video editing techniques from our expert team.",
        status: "Coming Soon",
    },
    {
        icon: Book,
        title: "Design Guidelines",
        description: "Best practices for creating stunning visual content.",
        status: "Coming Soon",
    },
    {
        icon: Lightbulb,
        title: "AI Tools Guide",
        description: "Comprehensive guide to AI tools for creative workflows.",
        status: "Coming Soon",
    },
];

export default function Docs() {
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
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff4d31]/10 text-[#ff4d31] text-sm font-medium mb-6">
                        Documentation
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                        Resources & <span className="text-[#ff4d31]">Guides</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Access our collection of templates, tutorials, and guides to help you
                        create amazing content.
                    </p>
                </motion.div>

                {/* Coming Soon Banner */}
                <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-r from-[#ff4d31]/10 to-transparent border border-[#ff4d31]/20 rounded-2xl p-8 mb-12 text-center"
                >
                    <h2 className="text-2xl font-semibold mb-3">Documentation Coming Soon</h2>
                    <p className="text-white/60">
                        We're building comprehensive resources to help you succeed. Stay tuned!
                    </p>
                </motion.div>

                {/* Resources Grid */}
                <motion.div variants={itemVariants}>
                    <div className="grid md:grid-cols-2 gap-6">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={resource.title}
                                variants={itemVariants}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 opacity-60"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#ff4d31]/10 flex items-center justify-center flex-shrink-0">
                                    <resource.icon className="w-6 h-6 text-[#ff4d31]" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-semibold">{resource.title}</h3>
                                        <span className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/50">
                                            {resource.status}
                                        </span>
                                    </div>
                                    <p className="text-white/60 text-sm">{resource.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center mt-16">
                    <p className="text-white/60 mb-6">Need personalized help?</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#ff4d31] hover:bg-[#ff4d31]/90 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </motion.main>
        </div>
    );
}
