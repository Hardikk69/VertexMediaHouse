import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    {
      title: "Our Services",
      target: "/#our-services",
      dropdown: [
        { title: "Pitch Deck", href: "/pitch-deck" },
        { title: "Video Editing", href: "/video-editing" },
        { title: "Web Designing", href: "/web-design" },
        { title: "AI Automation", href: "/ai-automation" },
      ],
    },
    { title: "Our Portfolio", target: "/#our-portfolio" },
    { title: "Client Reviews", target: "/#client-reviews" },
    { title: "Why Us", target: "/#why-us" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (target: string) => {
    setOpenDropdown(openDropdown === target ? null : target);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="hero-nav mt-2"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <motion.a
          href="/"
          className="nav-logo z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="nav-logo-icon"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 32L20 8L32 32H26L20 18L14 32H8Z"
              fill="hsl(var(--primary))"
            />
            <path
              d="M20 18L26 32H14L20 18Z"
              fill="hsl(var(--primary))"
              opacity="0.6"
            />
          </svg>
          <span className="nav-logo-text">ALPHA</span>
        </motion.a>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.target}
              className="relative group"
              variants={linkVariants}
              custom={index}
            >
              <motion.a
                href={link.target}
                className="nav-link relative"
                whileHover={{ color: "#ff4d31" }}
              >
                {link.title}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#ff4d31]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              {/* Desktop Dropdown */}
              {link.dropdown && (
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full mt-2
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    invisible group-hover:visible
                    transition-all duration-300 ease-out
                    z-50
                  "
                >
                  <motion.div
                    className="w-56 bg-[#efefef] rounded-2xl shadow-xl border border-black/5 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Services
                    </div>

                    <div className="h-px bg-black/5" />

                    {link.dropdown.map((item, i) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200/70 transition"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ x: 8, backgroundColor: "rgba(156, 163, 175, 0.3)" }}
                      >
                        {item.title}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA Button - Right */}
        <motion.a
          href="tel:+919909210605"
          variants={linkVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(255, 77, 49, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex relative items-center justify-center
                     px-5 py-2 text-sm font-medium tracking-wide
                     text-white rounded-[6px]
                     transition-all duration-300 ease-out
                     bg-[#ff4d31]
                     hover:bg-[#ff4d31]/90
                     hover:border-white
                     focus:outline-none focus:ring-2 focus:ring-white/30 z-10"
        >
          Book a Call
        </motion.a>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 z-[60] relative"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
              scaleX: isMobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-[280px] bg-[#0f0f0f] shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
              {/* Mobile Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.target}
                  className="mobile-nav-item"
                  variants={mobileItemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.target)}
                        className="mobile-nav-link-button"
                      >
                        <span>{link.title}</span>
                        <motion.svg
                          animate={{ rotate: openDropdown === link.target ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {openDropdown === link.target && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            {link.dropdown.map((item, i) => (
                              <motion.a
                                key={item.href}
                                href={item.href}
                                className="mobile-dropdown-link"
                                onClick={closeMobileMenu}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 8 }}
                              >
                                {item.title}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={link.target}
                      className="mobile-nav-link"
                      onClick={closeMobileMenu}
                      whileHover={{ x: 8, color: "#ff4d31" }}
                    >
                      {link.title}
                    </motion.a>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA Button */}
              <motion.a
                href="tel:+919909210605"
                className="mobile-cta-button"
                onClick={closeMobileMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default HeroNav;

