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

export default function FooterSection(): JSX.Element {
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
    { title: "Contact", href: "/contact" },
  ];



  const handleServiceClick = (href: string) => {
    navigate(href);
  };

  return (
    <motion.footer
      className="bg-black text-white px-4 md:px-8 py-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* ================= TOP ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
        {/* Company */}
        <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
          <h3 className="text-lg font-semibold mb-3">
            Vertex Media House
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Creative solutions for brands and creators that move fast and scale smarter.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider">Services</h4>
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
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider">Company</h4>
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



        {/* Call to Action Block */}
        <motion.div
          variants={itemVariants}
          className="col-span-2 md:col-span-1 bg-gradient-to-br from-[#ff4d31]/20 to-transparent rounded-2xl p-3 border border-[#ff4d31]/20"
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

      {/* ================= BOTTOM ================= */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        variants={itemVariants}
      >
        {/* Social Links */}
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
      </motion.div>

      {/* ================= COPYRIGHT ================= */}
      <motion.div
        className="mt-6 pt-4 border-t border-white/10 text-center text-white/40 text-sm"
        variants={itemVariants}
      >
        © {currentYear} Vertex Media House. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
