import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import vertexLogoWhite from "../assets/images/VERTEX (1).png";
import vertexLogoBlack from "../assets/images/VERTEX (4).png";

const HeroNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const location = useLocation();

  // Theme glow colors based on current route
  const themeGlowColors = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('video-editing')) {
      return { primary: '#a855f7' }; // purple-500
    } else if (path.includes('web-design')) {
      return { primary: '#06b6d4' }; // cyan-500
    } else if (path.includes('ai-automation')) {
      return { primary: '#10b981' }; // emerald-500
    } else if (path.includes('pitch-deck')) {
      return { primary: '#f97316' }; // orange-500
    }
    // Default: brand orange/red
    return { primary: '#ff4d31' };
  }, [location.pathname]);

  // Service theme colors
  const serviceThemes: Record<string, { bg: string; text: string; hover: string }> = {
    "/pitch-deck": { bg: "bg-orange-500", text: "text-orange-600", hover: "hover:bg-orange-50" },
    "/video-editing": { bg: "bg-purple-500", text: "text-purple-600", hover: "hover:bg-purple-50" },
    "/web-design": { bg: "bg-blue-500", text: "text-blue-600", hover: "hover:bg-blue-50" },
    "/ai-automation": { bg: "bg-emerald-500", text: "text-emerald-600", hover: "hover:bg-emerald-50" },
  };

  // Navigation structure
  const navLinks = [
    {
      title: "Our Services",
      target: "/#our-services",
      dropdown: [
        { title: "Pitch Deck", href: "/pitch-deck", color: "orange" },
        { title: "Video Editing", href: "/video-editing", color: "purple" },
        { title: "Web Designing", href: "/web-design", color: "blue" },
        { title: "AI Automation", href: "/ai-automation", color: "emerald" },
      ],
    },
    { title: "Client Reviews", target: "/#client-reviews" },
    { title: "Our Portfolio", target: "/#our-portfolio" },
    { title: "Why Us", target: "/#why-us" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling after navigation (e.g., from service page to home page sections)
  useEffect(() => {
    if (location.hash) {
      // Wait for page to render before scrolling
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location.pathname, location.hash]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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

  // Handle nav link click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setActiveLink(target);

    if (target.startsWith("/#")) {
      const hash = target.substring(1);
      // First check if the section exists on the current page
      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      // If on home page but element not found yet, still try (might be loading)
      if (location.pathname === "/") {
        e.preventDefault();
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      // Otherwise, let the link navigate to home page with hash
    }
  };

  // Get dropdown item style based on service color
  const getDropdownItemStyle = (color: string) => {
    const styles: Record<string, string> = {
      orange: "hover:bg-orange-50 hover:text-orange-600",
      purple: "hover:bg-purple-50 hover:text-purple-600",
      blue: "hover:bg-blue-50 hover:text-blue-600",
      emerald: "hover:bg-emerald-50 hover:text-emerald-600",
    };
    return styles[color] || "hover:bg-gray-50 hover:text-gray-900";
  };

  // Get dropdown item icon color
  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      orange: "bg-orange-500",
      purple: "bg-purple-500",
      blue: "bg-blue-500",
      emerald: "bg-emerald-500",
    };
    return colors[color] || "bg-gray-500";
  };

  return (
    <>
      {/* Fixed Navigation Container */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 md:py-5 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Left Corner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/"
              onClick={() => {
                setActiveLink(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-2.5"
              style={{
                '--theme-primary': themeGlowColors.primary,
              } as React.CSSProperties}>
              <img
                src={isScrolled ? vertexLogoBlack : vertexLogoWhite}
                alt="Vertex Media House"
                className="h-12 md:h-14 w-auto object-contain rounded-xl mt-1 md:mt-2 transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Centered Floating Pill - Nav Links Only */}
          <motion.div
            className="hidden md:flex items-center gap-1 px-2 py-2 bg-white/95 backdrop-blur-xl rounded-full shadow-xl shadow-black/10 border border-gray-200/50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link) => (
              <div key={link.target} className="relative group">
                {link.dropdown ? (
                  <>
                    <motion.a
                      href={link.target}
                      onClick={(e) => handleNavClick(e, link.target)}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-full inline-flex items-center gap-1.5
                        transition-all duration-300 whitespace-nowrap cursor-pointer
                        ${activeLink === link.target
                          ? "bg-[#18181b] text-white shadow-lg shadow-black/20"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.title}
                      <svg
                        className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.a>

                    {/* Styled Dropdown Menu */}
                    <div
                      className="
                        absolute left-1/2 -translate-x-1/2 top-full
                        opacity-0 translate-y-2 scale-95
                        group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                        invisible group-hover:visible
                        transition-all duration-300 ease-out
                        z-50 pt-3
                      "
                    >
                      <div className="w-56 bg-white rounded-2xl shadow-2xl shadow-black/15 border border-gray-100 overflow-hidden py-2">
                        <div className="px-4 py-2.5 text-xs font-bold text-black uppercase tracking-wider border-b border-gray-100 mb-1">
                          Our Services
                        </div>
                        {link.dropdown.map((item, i) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              to={item.href}
                              onClick={() => setActiveLink(link.target)}
                              className={`
                                flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600
                                transition-all duration-200 group/item
                                ${getDropdownItemStyle(item.color)}
                              `}
                            >
                              <span className={`w-2 h-2 rounded-full ${getIconColor(item.color)} opacity-60 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-200`} />
                              <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                                {item.title}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <motion.a
                    href={link.target}
                    onClick={(e) => handleNavClick(e, link.target)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-full inline-block
                      transition-all duration-300 whitespace-nowrap cursor-pointer
                      ${activeLink === link.target
                        ? "bg-[#18181b] text-white shadow-lg shadow-black/20"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.target === "/#our-portfolio" ? "Portfolio" :
                      link.target === "/#client-reviews" ? "Reviews" :
                        link.target === "/#why-us" ? "Why Us" : link.title}
                  </motion.a>
                )}
              </div>
            ))}
          </motion.div>

          {/* Book a Call Button - Right Corner */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="tel:9909210605">
              <motion.div
                className="
                  group relative inline-flex items-center gap-2 px-5 py-2.5
                  bg-[#ff4d31] text-white text-sm font-semibold rounded-full
                  overflow-hidden
                  shadow-lg shadow-[#ff4d31]/30
                  transition-all duration-300
                  cursor-pointer
                "
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 77, 49, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10">Book a Call</span>
              </motion.div>
            </a>
          </motion.div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex md:hidden flex-col justify-center items-center w-12 h-12 z-[60] rounded-full bg-[#ff4d31]/10 backdrop-blur-md border border-[#ff4d31]/20"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block w-8 h-0.5 bg-[#ff4d31] mb-2 transition-colors duration-300"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                scaleX: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block w-8 h-0.5 bg-[#ff4d31] mb-2 transition-colors duration-300"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block w-8 h-0.5 bg-[#ff4d31] transition-colors duration-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 backdrop-blur-xl" />

            {/* Close Button - Top Right */}
            <motion.button
              onClick={closeMobileMenu}
              className="absolute top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Menu Content */}
            <div className="relative flex flex-col h-full pt-28 px-8 pb-10">
              {/* Logo at top */}
              <motion.div className="mt-6 mb-12 flex justify-start"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 relative group"
                  style={{
                    '--theme-primary': themeGlowColors.primary,
                    '--theme-secondary': themeGlowColors.primary,
                  } as React.CSSProperties}
                >
                  <img
                    src={vertexLogoWhite}
                    alt="Vertex Media House"
                    className="h-14 w-auto object-contain rounded-xl"
                  />
                </Link>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto pl-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.target}
                    className="border-b border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
                  >
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.target)}
                          className="w-full flex items-center justify-between py-5 text-xl font-semibold text-white/90 hover:text-white transition-colors"
                        >
                          <span>{link.title}</span>
                          <motion.div
                            animate={{ rotate: openDropdown === link.target ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
                          >
                            <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {openDropdown === link.target && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-4 space-y-2">
                                {link.dropdown.map((item, i) => (
                                  <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                  >
                                    <Link
                                      to={item.href}
                                      className="flex items-center gap-4 py-3 px-4 rounded-xl text-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                                      onClick={closeMobileMenu}
                                    >
                                      <span className={`w-3 h-3 rounded-full ${getIconColor(item.color)}`} />
                                      {item.title}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.target}
                        className={`block py-5 text-xl font-semibold transition-colors ${activeLink === link.target
                          ? "text-[#ff4d31]"
                          : "text-white/90 hover:text-white"
                          }`}
                        onClick={(e) => {
                          handleNavClick(e, link.target);
                          closeMobileMenu();
                        }}
                      >
                        {link.title}
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button - Fixed at Bottom */}
              <motion.div
                className="mt-auto pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <a href="tel:9909210605" onClick={closeMobileMenu}>
                  <motion.div
                    className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#ff4d31] to-[#ff6b4d] text-white text-center text-lg font-semibold shadow-lg shadow-[#ff4d31]/30 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255, 77, 49, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Book a Call
                  </motion.div>
                </a>

                {/* Social Links or Additional Info */}
                <p className="text-center text-white/40 text-sm mt-6">
                  Premium Creative Solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroNav;
