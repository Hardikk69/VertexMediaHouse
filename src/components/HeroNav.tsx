import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const HeroNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const location = useLocation();

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
    { title: "Our Portfolio", target: "/#our-portfolio" },
    { title: "Client Reviews", target: "/#client-reviews" },
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
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 md:py-5"
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
              onClick={() => setActiveLink(null)}
              className="group flex items-center gap-2.5"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 32L20 8L32 32H26L20 18L14 32H8Z"
                    className="fill-[#ff4d31] group-hover:fill-[#ff6347] transition-colors duration-300"
                  />
                  <path
                    d="M20 18L26 32H14L20 18Z"
                    className="fill-[#ff4d31] group-hover:fill-[#ff6347] transition-colors duration-300"
                    opacity="0.6"
                  />
                </svg>
              </motion.div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-gray-200 transition-colors duration-300">
                ALPHA
              </span>
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
            <Link to="/contact">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="relative z-10">Contact Us</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex md:hidden flex-col justify-center items-center w-11 h-11 gap-1.5 z-[60] rounded-full bg-white/10 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`block w-5 h-0.5 transition-colors duration-300 ${isMobileMenuOpen ? "bg-gray-800" : "bg-white"}`}
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                scaleX: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`block w-5 h-0.5 transition-colors duration-300 ${isMobileMenuOpen ? "bg-gray-800" : "bg-white"}`}
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`block w-5 h-0.5 transition-colors duration-300 ${isMobileMenuOpen ? "bg-gray-800" : "bg-white"}`}
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
              {/* Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.target}
                  className="border-b border-gray-100 last:border-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.target)}
                        className="w-full flex items-center justify-between py-4 text-lg font-medium text-gray-800"
                      >
                        <span>{link.title}</span>
                        <motion.svg
                          animate={{ rotate: openDropdown === link.target ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {openDropdown === link.target && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-2 space-y-1">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  className={`flex items-center gap-3 py-2.5 px-2 rounded-lg text-base text-gray-500 transition-all duration-200 ${getDropdownItemStyle(item.color)}`}
                                  onClick={closeMobileMenu}
                                >
                                  <span className={`w-2 h-2 rounded-full ${getIconColor(item.color)}`} />
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.target}
                      className={`block py-4 text-lg font-medium transition-colors ${activeLink === link.target ? "text-[#ff4d31]" : "text-gray-800 hover:text-[#ff4d31]"
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

              {/* CTA Button */}
              <Link to="/contact" onClick={closeMobileMenu}>
                <motion.div
                  className="mt-auto w-full rounded-full p-[2px]
                  bg-gradient-to-r from-[#ff4d31] via-[#ff7a66] to-[#ffb199]
                  shadow-[0_0_25px_rgba(255,77,49,0.45)]
                  hover:shadow-[0_0_40px_rgba(255,77,49,0.75)]
                  transition-all duration-300
                  cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="block w-full py-4 rounded-full text-center font-semibold text-lg
                  text-[#ff4d31] bg-white
                  hover:bg-[#fff5f2]
                  transition-all duration-300">
                    ✉️ Contact Us
                  </span>
                </motion.div>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroNav;
