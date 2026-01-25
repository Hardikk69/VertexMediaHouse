import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react";
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

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const services = [
        "Pitch Deck Designing",
        "Video Editing",
        "Website Designing",
        "AI & Automation",
        "Other",
    ];

    const budgetRanges = [
        "Under $500",
        "$500 - $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000+",
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "610ab766-0a22-4922-9b13-d3d028b77ad6",
                    ...formData,
                    subject: `New Consultation Request - ${formData.service}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    budget: "",
                    message: "",
                });
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to submit. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-bricolage">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold">
                        Vertex Media House
                    </Link>
                    <Link
                        to="/"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                    >
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
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Info */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff4d31]/10 text-[#ff4d31] text-sm font-medium mb-6">
                            Let's Connect
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                            Schedule a Free
                            <span className="text-[#ff4d31]"> Consultation</span>
                        </h1>
                        <p className="text-lg text-white/60 mb-10 max-w-md">
                            Tell us about your project and we'll get back to you within 24 hours
                            with a custom strategy tailored to your needs.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <motion.a
                                href="tel:+919909210605"
                                className="flex items-center gap-4 group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ff4d31]/20 group-hover:border-[#ff4d31]/30 transition-all">
                                    <Phone className="w-5 h-5 text-[#ff4d31]" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Call Us</p>
                                    <p className="text-white font-medium">+91 9909210605</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="mailto:hello@vertexmedia.house"
                                className="flex items-center gap-4 group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ff4d31]/20 group-hover:border-[#ff4d31]/30 transition-all">
                                    <Mail className="w-5 h-5 text-[#ff4d31]" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Email Us</p>
                                    <p className="text-white font-medium">hello@vertexmedia.house</p>
                                </div>
                            </motion.a>

                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#ff4d31]" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Location</p>
                                    <p className="text-white font-medium">Remote - Worldwide</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div variants={itemVariants}>
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                    <Check className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
                                <p className="text-white/60 mb-6">
                                    Your consultation request has been received. We'll get back to you
                                    within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-[#ff4d31] hover:underline"
                                >
                                    Submit another request
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-white/60 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff4d31]/50 transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/60 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff4d31]/50 transition-colors"
                                            placeholder="youremail@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-white/60 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff4d31]/50 transition-colors"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/60 mb-2">
                                            Service Needed *
                                        </label>
                                        <select
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4d31]/50 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-black">
                                                Select a service
                                            </option>
                                            {services.map((service) => (
                                                <option key={service} value={service} className="bg-black">
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-white/60 mb-2">
                                        Budget Range
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4d31]/50 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-black">
                                            Select budget range
                                        </option>
                                        {budgetRanges.map((range) => (
                                            <option key={range} value={range} className="bg-black">
                                                {range}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-white/60 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff4d31]/50 transition-colors resize-none"
                                        placeholder="Tell us about your project, goals, and timeline..."
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-500 text-sm">{error}</p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#ff4d31] hover:bg-[#ff4d31]/90 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="animate-spin h-5 w-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            Schedule Consultation
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-center text-white/40 text-sm">
                                    By submitting, you agree to our{" "}
                                    <span className="text-white/60 hover:text-white cursor-pointer">
                                        Privacy Policy
                                    </span>
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </motion.main>
        </div>
    );
}
