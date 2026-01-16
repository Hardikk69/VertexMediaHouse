import { ShoppingBag } from "lucide-react";

const HeroNav = () => {
  const navLinks = ["Our Services", "Our Portfolio", "Client Reviews", "Why Us", "Book a Call"];

  return (
    <nav className="hero-nav">
      <div className="nav-container">
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
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link} href="#" className="nav-link">
              {link}
            </a>
          ))}
          <div className="bg-muted-foreground/30" />
          <button
            className="
                relative inline-flex items-center justify-center
                px-5 py-2
                text-sm font-medium tracking-wide
                text-white
                border border-white/70
                rounded-[6px]
                bg-transparent
                transition-all duration-300 ease-out
                hover:bg-white hover:text-black
                hover:border-white
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
          >
            Call Us
          </button>

        </div>
      </div>
    </nav>
  );
};

export default HeroNav;
