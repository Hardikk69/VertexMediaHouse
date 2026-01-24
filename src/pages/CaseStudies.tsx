import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

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

const caseStudies = [
    {
        title: "TechStart Pitch Deck",
        category: "Pitch Deck Design",
        description: "How we helped TechStart secure $2M in funding with a compelling pitch deck.",
        metrics: ["$2M Raised", "First Round", "2 Weeks Delivery"],
        image: "bg-gradient-to-br from-blue-500/30 to-purple-500/20",
    },
    {
        title: "Brand Promo Video",
        category: "Video Editing",
        description: "Creating a viral brand video that reached 1M+ views in the first month.",
        metrics: ["1M+ Views", "500% Engagement", "4 Days Turnaround"],
        image: "bg-gradient-to-br from-orange-500/30 to-red-500/20",
    },
    {
        title: "E-Commerce Redesign",
        category: "Website Design",
        description: "Redesigning an e-commerce platform that increased conversions by 150%.",
        metrics: ["150% Conversion", "40% Less Bounce", "3 Weeks"],
        image: "bg-gradient-to-br from-green-500/30 to-teal-500/20",
    },
];

export default function CaseStudies() {
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
                        Case Studies
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                        Our <span className="text-[#ff4d31]">Success Stories</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Explore how we've helped brands and creators achieve remarkable results
                        through our creative solutions.
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <motion.div variants={itemVariants}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.title}
                                variants={itemVariants}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
                                whileHover={{ y: -10 }}
                            >
                                <div className={`aspect-video ${study.image} flex items-center justify-center`}>
                                    <span className="text-white/20 text-6xl font-bold">{index + 1}</span>
                                </div>
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#ff4d31]/10 text-[#ff4d31] text-xs font-medium mb-3">
                                        {study.category}
                                    </span>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff4d31] transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.metrics.map((metric) => (
                                            <span
                                                key={metric}
                                                className="px-2 py-1 bg-white/5 rounded text-xs text-white/70"
                                            >
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-[#ff4d31] font-medium text-sm">
                                        View Case Study
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center mt-16">
                    <p className="text-white/60 mb-6">Ready to be our next success story?</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#ff4d31] hover:bg-[#ff4d31]/90 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </motion.main>
        </div>
    );
}
