import { ShoppingBag } from "lucide-react";

const HeroNav = () => {
  const navLinks = ["CLASSES", "TRAINING", "MEAL PLANS", "VISIT US", "SHOP"];

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
          <div className="w-px h-6 bg-muted-foreground/30 mx-2" />
          <button className="nav-cart hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeroNav;
