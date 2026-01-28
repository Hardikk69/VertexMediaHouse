import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "@/components/sections/Ourservices.css";

// Your existing icons
import pitchDeckIcon from '../assets/icons/pitchdeck.png'
import videoIcon from '../assets/icons/video-editor.png'
import webIcon from '../assets/icons/web-development.png'
import aiIcon from '../assets/icons/ai.png'

// Service theme configuration
const serviceThemes = {
  "pitch-deck": {
    color: "#f97316", // Orange
    bgClass: "bg-orange-500",
    textClass: "text-orange-500",
    hoverBg: "hover:bg-orange-500",
    checkIcon: "https://img.icons8.com/ios-filled/50/f97316/ok--v1.png",
    lightBg: "#fff7ed", // orange-50
  },
  "video-editing": {
    color: "#a855f7", // Purple
    bgClass: "bg-purple-500",
    textClass: "text-purple-500",
    hoverBg: "hover:bg-purple-500",
    checkIcon: "https://img.icons8.com/ios-filled/50/a855f7/ok--v1.png",
    lightBg: "#faf5ff", // purple-50
  },
  "web-designing": {
    color: "#3b82f6", // Blue
    bgClass: "bg-blue-500",
    textClass: "text-blue-500",
    hoverBg: "hover:bg-blue-500",
    checkIcon: "https://img.icons8.com/ios-filled/50/3b82f6/ok--v1.png",
    lightBg: "#eff6ff", // blue-50
  },
  "ai-automation": {
    color: "#10b981", // Emerald
    bgClass: "bg-emerald-500",
    textClass: "text-emerald-500",
    hoverBg: "hover:bg-emerald-500",
    checkIcon: "https://img.icons8.com/ios-filled/50/10b981/ok--v1.png",
    lightBg: "#ecfdf5", // emerald-50
  },
};

export default function ServicesSection({ excludeService }: { excludeService?: string } = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  // Using React state to manage active cards (Pitch Deck is active by default)
  const [activeId, setActiveId] = useState("pitch-deck");
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Listen for hash changes to activate specific service card
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const serviceIds = ['pitch-deck', 'video-editing', 'web-designing', 'ai-automation'];

    if (serviceIds.includes(hash)) {
      setActiveId(hash);
      // Scroll to services section after a brief delay to allow rendering
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  useLayoutEffect(() => {
    const updateLayout = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      if (!desktop) {
        setMaxCardHeight(null);
        return;
      }

      const heights = cardRefs.current.map(
        (card) => card?.offsetHeight || 0
      );

      setMaxCardHeight(Math.max(...heights));
    };

    requestAnimationFrame(updateLayout);
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Helper component for styled list items with themed checkmarks
  const ServiceList = ({ items, themeId }: { items: string[]; themeId: keyof typeof serviceThemes }) => {
    const theme = serviceThemes[themeId];
    return (
      <ul className="list-none space-y-3 mt-4 ">
        {items.map((text, idx) => (
          <div key={idx} className="flex items-start gap-3 text-lg text-[#18191c]/80 leading-tight">
            <img
              src={theme.checkIcon}
              alt="check"
              className="w-4 h-4 mt-1 flex-shrink-0"
            />
            <span className="font-medium">{text}</span>
          </div>
        ))}
      </ul>
    );
  };

  return (
    <section ref={sectionRef} className="services font-bricolage select-none py-24 bg-[#f8f8f8]" id="our-services">
      <div className="container mx-auto px-4">
        <span className="block mb-4 text-sm uppercase tracking-widest text-[#ff4d31] text-center font-bold">
          Our Core Services
        </span>
        <h2 className="text-4xl md:text-5xl text-center mb-6 text-[#18191c] font-bold">
          What We Specialize In
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
          Premium creative solutions tailored for ambitious brands and creators
        </p>

        <div className="services-container flex flex-col md:flex-row gap-6">

          {/* --- Pitch Deck Designing --- */}
          {excludeService !== "pitch-deck" && (
            <div
              ref={(el) => {
                if (el) cardRefs.current[0] = el;
              }}
              className={`service-card rounded-[16px] text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "pitch-deck" ? "active" : ""}
            `}
              style={{
                minHeight: isDesktop && maxCardHeight
                  ? `${maxCardHeight}px`
                  : undefined,
                backgroundColor: activeId === "pitch-deck" ? serviceThemes["pitch-deck"].lightBg : "#ffffff",
              }}
              onClick={() => setActiveId("pitch-deck")}
            >

              <div className="service-header">
                <img
                  className="h-max max-h-[75px] mr-3 rounded-[12px] p-3"
                  style={{ backgroundColor: serviceThemes["pitch-deck"].color }}
                  src={pitchDeckIcon}
                  alt="Pitch Deck"
                />
                <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">Pitch Deck <br /> Designing</h3>
              </div>
              <div className="service-details mt-4">
                <p className="text-xl font-bold uppercase tracking-wider" style={{ color: serviceThemes["pitch-deck"].color }}>What We Offer:</p>
                <ServiceList
                  themeId="pitch-deck"
                  items={[
                    "Investor-ready pitch decks",
                    "Startup & business presentations",
                    "High-converting sales decks",
                    "Clear storytelling & flow",
                    "Data-driven visual design"
                  ]}
                />
                <button onClick={() => navigate("/pitch-deck")}
                  className="text-white px-8 py-3 rounded-[8px] mt-10 font-semibold transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: serviceThemes["pitch-deck"].color }}>
                  Learn More
                </button>
              </div>
              <div className="vertical-label">Pitch Deck Designing</div>
            </div>
          )}

          {/* --- Video Editing --- */}
          {excludeService !== "video-editing" && (
            <div
              ref={(el) => {
                if (el) cardRefs.current[1] = el;
              }}
              className={`service-card rounded-[16px] text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "video-editing" ? "active" : ""}
            `}
              style={{
                minHeight: isDesktop && maxCardHeight
                  ? `${maxCardHeight}px`
                  : undefined,
                backgroundColor: activeId === "video-editing" ? serviceThemes["video-editing"].lightBg : "#ffffff",
              }}
              onClick={() => setActiveId("video-editing")}
            >

              <div className="service-header">
                <img
                  className="h-max max-h-[75px] mr-3 rounded-[12px] p-3"
                  style={{ backgroundColor: serviceThemes["video-editing"].color }}
                  src={videoIcon}
                  alt="Video Editing"
                />
                <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">Video <br /> Editing</h3>
              </div>
              <div className="service-details mt-4">
                <p className="text-xl font-bold uppercase tracking-wider" style={{ color: serviceThemes["video-editing"].color }}>What We Offer:</p>
                <ServiceList
                  themeId="video-editing"
                  items={[
                    "High-impact social media reels",
                    "Promotional & brand videos",
                    "Short-form content editing",
                    "Motion graphics & transitions",
                    "Platform-optimized content"
                  ]}
                />
                <button onClick={() => navigate("/video-editing")}
                  className="text-white px-8 py-3 rounded-[8px] mt-10 font-semibold transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: serviceThemes["video-editing"].color }}>
                  Learn More
                </button>
              </div>
              <div className="vertical-label">Video Editing</div>
            </div>
          )}

          {/* --- Website Design --- */}
          {excludeService !== "web-designing" && (
            <div
              ref={(el) => {
                if (el) cardRefs.current[2] = el;
              }}
              className={`service-card rounded-[16px] text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "web-designing" ? "active" : ""}
            `}
              style={{
                minHeight: isDesktop && maxCardHeight
                  ? `${maxCardHeight}px`
                  : undefined,
                backgroundColor: activeId === "web-designing" ? serviceThemes["web-designing"].lightBg : "#ffffff",
              }}
              onClick={() => setActiveId("web-designing")}
            >

              <div className="service-header">
                <img
                  className="h-max max-h-[75px] mr-3 rounded-[12px] p-3"
                  style={{ backgroundColor: serviceThemes["web-designing"].color }}
                  src={webIcon}
                  alt="Web Design"
                />
                <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">Website <br /> Design</h3>
              </div>
              <div className="service-details mt-4">
                <p className="text-xl font-bold uppercase tracking-wider" style={{ color: serviceThemes["web-designing"].color }}>What We Offer:</p>
                <ServiceList
                  themeId="web-designing"
                  items={[
                    "Custom website development",
                    "Modern, responsive UI/UX",
                    "Landing pages for conversion",
                    "Fast, secure, and scalable",
                    "Mobile-first SEO structure"
                  ]}
                />
                <button onClick={() => navigate("/web-design")}
                  className="text-white px-8 py-3 rounded-[8px] mt-10 font-semibold transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: serviceThemes["web-designing"].color }}>
                  Learn More
                </button>
              </div>
              <div className="vertical-label">Website Design</div>
            </div>
          )}

          {/* --- AI & Automation --- */}
          {excludeService !== "ai-automation" && (
            <div
              ref={(el) => {
                if (el) cardRefs.current[3] = el;
              }}
              className={`service-card rounded-[16px] text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "ai-automation" ? "active" : ""}
            `}
              style={{
                minHeight: isDesktop && maxCardHeight
                  ? `${maxCardHeight}px`
                  : undefined,
                backgroundColor: activeId === "ai-automation" ? serviceThemes["ai-automation"].lightBg : "#ffffff",
              }}
              onClick={() => setActiveId("ai-automation")}
            >

              <div className="service-header">
                <img
                  className="h-max max-h-[75px] mr-3 rounded-[12px] p-3"
                  style={{ backgroundColor: serviceThemes["ai-automation"].color }}
                  src={aiIcon}
                  alt="AI"
                />
                <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">AI & <br /> Automation</h3>
              </div>
              <div className="service-details mt-4">
                <p className="text-xl font-bold uppercase tracking-wider" style={{ color: serviceThemes["ai-automation"].color }}>What We Offer:</p>
                <ServiceList
                  themeId="ai-automation"
                  items={[
                    "Workflow automation systems",
                    "Email Automation Agents",
                    "Voice AI for calls & follow-ups",
                    "Smart lead response tools",
                    "Manual task reduction"
                  ]}
                />
                <button onClick={() => navigate("/ai-automation")}
                  className="text-white px-8 py-3 rounded-[8px] mt-10 font-semibold transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: serviceThemes["ai-automation"].color }}>
                  Learn More
                </button>
              </div>
              <div className="vertical-label">AI & Automation</div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}