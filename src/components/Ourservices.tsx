import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "@/components/sections/Ourservices.css";
import MagneticBubble from "./MagneticBubble";

// Your existing icons
import pitchDeckIcon from '../assets/icons/pitchdeck.png'
import videoIcon from '../assets/icons/video-editor.png'
import webIcon from '../assets/icons/web-development.png'
import aiIcon from '../assets/icons/ai.png'

/**
 * ICON URL
 * Using a clean, minimal checkmark that matches your brand color (#ff4d31)
 */
const CHECK_ICON = "https://img.icons8.com/ios-filled/50/ff4d31/ok--v1.png";

export default function ServicesSection() {
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

  // Helper component for styled list items
  const ServiceList = ({ items }: { items: string[] }) => (
    <ul className="list-none space-y-3 mt-4 ">
      {items.map((text, idx) => (
        <div key={idx} className="flex items-start gap-3 text-lg text-[#18191c]/80 leading-tight">
          <img
            src={CHECK_ICON}
            alt="check"
            className="w-4 h-4 mt-1 flex-shrink-0"
          />
          <span className="font-medium">{text}</span>
        </div>
      ))}
    </ul>
  );

  return (
    <section ref={sectionRef} className="services bg-[#e9e9e9] font-bricolage select-none py-20" id="our-services">
      <div className="container mx-auto px-4">
        <span className="block mb-4 text-sm uppercase tracking-widest text-[#18191c] text-center font-bold opacity-70">
          Our Core Services
        </span>
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-[#18191c] font-medium">
          What We Specialize In
        </h2>

        <div className="services-container flex flex-col md:flex-row gap-6">

          {/* --- Pitch Deck Designing --- */}
          <div
            ref={(el) => {
              if (el) cardRefs.current[0] = el;
            }}
            className={`service-card rounded-[16px] bg-white text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "pitch-deck" ? "active" : ""}
            `}
            style={{
              minHeight: isDesktop && maxCardHeight
                ? `${maxCardHeight}px`
                : undefined,
            }}
            onClick={() => setActiveId("pitch-deck")}
          >

            <div className="service-header">
              <img className="h-max max-h-[75px] mr-3 rounded-[12px] bg-[#ff4d31] p-3" src={pitchDeckIcon} alt="Pitch Deck" />
              <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">Pitch Deck <br /> Designing</h3>
              <MagneticBubble />
            </div>
            <div className="service-details mt-4">
              <p className="text-xl font-bold uppercase tracking-wider text-[#ff4d31]">What We Offer:</p>
              <ServiceList items={[
                "Investor-ready pitch decks",
                "Startup & business presentations",
                "High-converting sales decks",
                "Clear storytelling & flow",
                "Data-driven visual design"
              ]} />
              <button onClick={() => navigate("/pitch-deck")}
                className="bg-[#ff4d31] text-white px-8 py-3 rounded-[8px] mt-10 hover:bg-[#ff4d31]/90 font-semibold transition-all">
                Learn More
              </button>
            </div>
            <div className="vertical-label">Pitch Deck Designing</div>
          </div>

          {/* --- Video Editing --- */}
          <div
            ref={(el) => {
              if (el) cardRefs.current[1] = el;
            }}
            className={`service-card rounded-[16px] bg-white text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "video-editing" ? "active" : ""}
            `}
            style={{
              minHeight: isDesktop && maxCardHeight
                ? `${maxCardHeight}px`
                : undefined,
            }}
            onClick={() => setActiveId("video-editing")}
          >

            <div className="service-header">
              <img className="h-max max-h-[75px] mr-3 rounded-[12px] bg-[#ff4d31] p-3" src={videoIcon} alt="Video Editing" />
              <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">Video <br /> Editing</h3>
              <MagneticBubble />
            </div>
            <div className="service-details mt-4">
              <p className="text-xl font-bold uppercase tracking-wider text-[#ff4d31]">What We Offer:</p>
              <ServiceList items={[
                "High-impact social media reels",
                "Promotional & brand videos",
                "Short-form content editing",
                "Motion graphics & transitions",
                "Platform-optimized content"
              ]} />
              <button onClick={() => navigate("/video-editing")}
                className="bg-[#ff4d31] text-white px-8 py-3 rounded-[8px] mt-10 hover:bg-[#ff4d31]/90 font-semibold transition-all">
                Learn More
              </button>
            </div>
            <div className="vertical-label">Video Editing</div>
          </div>

          {/* --- Website Design --- */}
          <div
            ref={(el) => {
              if (el) cardRefs.current[2] = el;
            }}
            className={`service-card rounded-[16px] bg-white text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "web-designing" ? "active" : ""}
            `}
            style={{
              minHeight: isDesktop && maxCardHeight
                ? `${maxCardHeight}px`
                : undefined,
            }}
            onClick={() => setActiveId("web-designing")}
          >

            <div className="service-header">
              <img className="h-max max-h-[75px] mr-3 rounded-[12px] bg-[#ff4d31] p-3" src={webIcon} alt="Web Design" />
              <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">Website <br /> Design</h3>
              <MagneticBubble />
            </div>
            <div className="service-details mt-4">
              <p className="text-xl font-bold uppercase tracking-wider text-[#ff4d31]">What We Offer:</p>
              <ServiceList items={[
                "Custom website development",
                "Modern, responsive UI/UX",
                "Landing pages for conversion",
                "Fast, secure, and scalable",
                "Mobile-first SEO structure"
              ]} />
              <button onClick={() => navigate("/web-design")}
                className="bg-[#ff4d31] text-white px-8 py-3 rounded-[8px] mt-10 hover:bg-[#ff4d31]/90 font-semibold transition-all">                Learn More
              </button>
            </div>
            <div className="vertical-label">Website Design</div>
          </div>

          {/* --- AI & Automation --- */}
          <div
            ref={(el) => {
              if (el) cardRefs.current[3] = el;
            }}
            className={`service-card rounded-[16px] bg-white text-[#18191c]
              transition-all duration-500 cursor-pointer
              ${activeId === "ai-automation" ? "active" : ""}
            `}
            style={{
              minHeight: isDesktop && maxCardHeight
                ? `${maxCardHeight}px`
                : undefined,
            }}
            onClick={() => setActiveId("ai-automation")}
          >

            <div className="service-header">
              <img className="h-max max-h-[75px] mr-3 rounded-[12px] bg-[#ff4d31] p-3" src={aiIcon} alt="AI" />
              <h3 className="text-[1.8rem] md:text-[2.2rem] leading-tight w-full font-bold">AI & <br /> Automation</h3>
              <MagneticBubble />
            </div>
            <div className="service-details mt-4">
              <p className="text-xl font-bold uppercase tracking-wider text-[#ff4d31]">What We Offer:</p>
              <ServiceList items={[
                "Workflow automation systems",
                "Email Automation Agents",
                "Voice AI for calls & follow-ups",
                "Smart lead response tools",
                "Manual task reduction"
              ]} />
              <button onClick={() => navigate("/ai-automation")}
                className="bg-[#ff4d31] text-white px-8 py-3 rounded-[8px] mt-10 hover:bg-[#ff4d31]/90 font-semibold transition-all">                Learn More
              </button>
            </div>
            <div className="vertical-label">AI & Automation</div>
          </div>

        </div>
      </div>
    </section>
  );
}