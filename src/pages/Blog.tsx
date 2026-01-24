import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

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

const blogPosts = [
    {
        title: "How to Create a Pitch Deck That Investors Love",
        excerpt: "Learn the essential elements that make a pitch deck stand out and secure funding.",
        category: "Pitch Decks",
        readTime: "5 min",
        author: "Vertex Team",
        date: "Coming Soon",
    },
    {
        title: "Video Editing Trends for 2024",
        excerpt: "Discover the latest trends in video editing that are shaping the industry.",
        category: "Video Editing",
        readTime: "7 min",
        author: "Vertex Team",
        date: "Coming Soon",
    },
    {
        title: "The Future of AI in Creative Design",
        excerpt: "Exploring how AI is transforming the creative industry and what it means for designers.",
        category: "AI & Automation",
        readTime: "6 min",
        author: "Vertex Team",
        date: "Coming Soon",
    },
];

export default function Blog() {
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
                        Blog
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                        Insights & <span className="text-[#ff4d31]">Resources</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Stay updated with the latest trends, tips, and insights from our team
                        of creative experts.
                    </p>
                </motion.div>

                {/* Coming Soon Banner */}
                <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-r from-[#ff4d31]/10 to-transparent border border-[#ff4d31]/20 rounded-2xl p-8 mb-12 text-center"
                >
                    <h2 className="text-2xl font-semibold mb-3">Coming Soon</h2>
                    <p className="text-white/60">
                        We're working on exciting content. Subscribe to get notified when we publish!
                    </p>
                </motion.div>

                {/* Blog Posts Preview */}
                <motion.div variants={itemVariants}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.title}
                                variants={itemVariants}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer opacity-60"
                                whileHover={{ y: -5 }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-[#ff4d31]/20 to-transparent" />
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-white/60 mb-3">
                                        {post.category}
                                    </span>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff4d31] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-white/50 text-sm mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-white/40">
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center mt-16">
                    <p className="text-white/60 mb-6">Want to stay updated?</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#ff4d31] hover:bg-[#ff4d31]/90 text-white px-8 py-4 rounded-xl font-medium transition-colors"
                    >
                        Subscribe for Updates
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </motion.main>
        </div>
    );
}
