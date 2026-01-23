const HeroNav = () => {
  const navLinks = [
    {
      title: "Our Services",
      target: "#our-services",
      dropdown: [
        { title: "Web Development", href: "/services/web" },
        { title: "Mobile Apps", href: "/services/mobile" },
        { title: "UI/UX Design", href: "/services/uiux" },
      ],
    },
    { title: "Our Portfolio", target: "/pitch-deck" },
    { title: "Client Reviews", target: "#client-reviews" },
    { title: "Why Us", target: "#why-us" },
  ];

  return (
    <nav className="hero-nav mt-2">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="nav-logo">
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
        </a>

        {/* Navigation Links */}
        <div className="nav-links flex items-center space-x-4">
          {navLinks.map((link) => (
            <div key={link.target} className="relative group">
              <a href={link.target} className="nav-link">
                {link.title}
              </a>

              {/* Dropdown */}
              {/* Dropdown */}
              {link.dropdown && (
                <div
                  className="
    absolute left-0 top-full mt-2
    opacity-0 translate-y-2
    group-hover:opacity-100 group-hover:translate-y-0
    invisible group-hover:visible
    transition-all duration-300 ease-out
    z-50
    -translate-x-6
  "
                >
                  <div className="w-56 bg-[#efefef] rounded-2xl shadow-xl border border-black/5 overflow-hidden">
                    <div className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Services
                    </div>

                    <div className="h-px bg-black/5" />

                    <a
                      href="/pitch-deck"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200/70 transition"
                    >
                      Pitch Deck
                    </a>
                    <a
                      href="/video-editing"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200/70 transition"
                    >
                      Video Editing
                    </a>
                    <a
                      href="/web-desiging"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200/70 transition"
                    >
                      Web Designing
                    </a>
                    <a
                      href="/ai-automation"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200/70 transition"
                    >
                      AI Automation
                    </a>
                  </div>
                </div>

              )}

            </div>
          ))}

          <div className="bg-muted-foreground/30" />

          <button
            className="relative inline-flex items-center justify-center
                       px-5 py-2 text-sm font-medium tracking-wide
                       text-white rounded-[6px]
                       transition-all duration-300 ease-out
                       bg-[#ff4d31]
                       hover:bg-[#ff4d31]/90
                       hover:border-white
                       active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeroNav;
