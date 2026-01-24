import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function FooterSection(): JSX.Element {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const social_media_links = [
    { name: "Instagram", url: "https://www.instagram.com/faiz_rajput_15" },
    { name: "X (Twitter)", url: "https://twitter.com/faiz_rajput_15" },
    { name: "Email", url: "mailto:hello@vertexmedia.house" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
  ];

  const serviceLinks = [
    { title: "Pitch Deck Designing", href: "/#pitch-deck" },
    { title: "Video Editing", href: "/#video-editing" },
    { title: "Website Designing", href: "/#web-designing" },
    { title: "AI & Automation", href: "/#ai-automation" },
  ];

  const companyLinks = [
    { title: "About", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { title: "Blog", href: "/blog" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Docs", href: "/docs" },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "610ab766-0a22-4922-9b13-d3d028b77ad6",
          email: email,
          subject: "New Newsletter Subscription - Vertex Media House",
          message: `New newsletter subscription from: ${email}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError("Failed to subscribe. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleServiceClick = (href: string) => {
    navigate(href);
  };

  return (
    <motion.footer
      className="bg-black text-white px-10 py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* ================= TOP ================= */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20">
        {/* Company */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-3">
            Vertex Media House
          </h3>
          <p className="text-white/60 text-sm">
            Creative solutions for brands and creators that move fast and scale smarter.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.title}>
                <button
                  onClick={() => handleServiceClick(link.href)}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Company Links */}
        <motion.div variants={itemVariants}>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            {companyLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div variants={itemVariants}>
          <h4 className="font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            {resourceLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Call to Action Block */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-[#ff4d31]/20 to-transparent rounded-2xl p-6 border border-[#ff4d31]/20"
        >
          <h4 className="font-medium mb-2">Ready to start?</h4>
          <p className="text-white/60 text-sm mb-4">
            Schedule a free consultation with our team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#ff4d31] hover:bg-[#ff4d31]/90 text-white text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Get in Touch →
          </Link>
        </motion.div>
      </div>

      {/* ================= QUOTE ================= */}
      <motion.div
        className="mb-16"
        variants={quoteVariants}
      >
        <p className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
          From idea to execution - fast, clean, and scalable.
        </p>
      </motion.div>

      {/* ================= BOTTOM ================= */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12"
        variants={itemVariants}
      >

        {/* Social Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {social_media_links.map(link => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white/60 text-sm
                relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
              whileHover={{
                color: "#ffffff",
                y: -2,
              }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <form
          onSubmit={handleSubmit}
          className="relative w-full md:w-[320px]"
        >
          <motion.input
            type="email"
            placeholder={success ? "Subscribed! ✓" : "Your email"}
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading || success}
            className={`
              w-full
              bg-white/5
              border
              ${success ? "border-green-500/50" : error ? "border-red-500/50" : "border-white/10"}
              rounded-full
              px-5 py-3
              pr-12
              text-sm
              outline-none
              transition-all duration-300
              disabled:opacity-50
            `}
            whileFocus={{
              borderColor: "rgba(255, 77, 49, 0.5)",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }}
          />
          <motion.button
            type="submit"
            disabled={loading || success}
            className={`
              absolute right-2 top-1/2 -translate-y-1/2
              w-8 h-8
              rounded-full
              ${success ? "bg-green-500/30" : "bg-white/20"}
              flex items-center justify-center
              transition
              disabled:opacity-50
            `}
            whileHover={{
              backgroundColor: success ? "rgba(34, 197, 94, 0.5)" : "rgba(255, 77, 49, 0.8)",
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
          >
            {loading ? (
              <span className="animate-spin text-xs">⏳</span>
            ) : success ? (
              "✓"
            ) : (
              "→"
            )}
          </motion.button>
          {error && (
            <p className="absolute -bottom-6 left-0 text-red-400 text-xs">{error}</p>
          )}
        </form>
      </motion.div>

      {/* ================= COPYRIGHT ================= */}
      <motion.div
        className="pt-6 border-t border-white/10 text-center text-white/40 text-sm"
        variants={itemVariants}
      >
        © {currentYear} Vertex Media House. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
