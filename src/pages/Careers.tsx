import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

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

const openPositions = [
    {
        title: "Senior Motion Designer",
        department: "Creative",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Project Manager",
        department: "Operations",
        location: "Remote",
        type: "Full-time",
    },
];

export default function Careers() {
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
                        Careers
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                        Join Our <span className="text-[#ff4d31]">Creative Team</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        We're always looking for talented individuals who are passionate about
                        creating exceptional work. Join us and help shape the future of digital
                        experiences.
                    </p>
                </motion.div>

                {/* Open Positions */}
                <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
                    <div className="space-y-4">
                        {openPositions.map((position, index) => (
                            <motion.div
                                key={position.title}
                                variants={itemVariants}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ff4d31]/30 transition-all group cursor-pointer"
                                whileHover={{ x: 5 }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold group-hover:text-[#ff4d31] transition-colors">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/60">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {position.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {position.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {position.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-[#ff4d31] font-medium"
                                    >
                                        Apply
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center mt-16">
                    <p className="text-white/60 mb-2">Don't see a role that fits?</p>
                    <p className="text-white/80 mb-6">Send us your portfolio anyway!</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </motion.main>
        </div>
    );
}
