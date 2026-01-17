import { useEffect } from "react";
import "@/components/sections/Ourservices.css";
import MagneticBubble from "./MagneticBubble";
export default function ServicesSection() {
  useEffect(() => {
    // Service Cards
    const serviceCards = document.querySelectorAll<HTMLElement>(".service-card");

    serviceCards.forEach(card => {
      card.addEventListener("click", () => {
        serviceCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
      });
    });

    // FAQ Toggle
    const faqItems = document.querySelectorAll<HTMLElement>(".faq-item");
    faqItems.forEach(item => {
      const question = item.querySelector<HTMLElement>(".faq-question");
      if (!question) return;

      question.addEventListener("click", () => {
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    });

    // Intersection Observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(
        ".stat-card, .service-tab, .step, .work-item, .review-card, h2:not(.scroll-stack h2), .hero-text"
      )
      .forEach(el => {
        el.classList.add("fade-in-section");
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services bg-[#e9e9e9] font-bricolage select-none" id="services">
      <div className="container">
        <span className="block mb-4 text-sm uppercase tracking-wide text-[#18191c] text-center">
          Our Core Services
        </span>
        <h2 className="text-4xl text-center mb-10 text-[#18191c] font-medium">
          What We Specialize In
        </h2>

        <div className="services-container">
          <div className="service-card active rounded-[16px] bg-white text-[#18191c]" data-id="pitch-deck">
            <div className="service-header">
              <h3>Pitch Deck Designing</h3>
              <MagneticBubble />
            </div>
            <div className="service-details">
              <p className="service-intro"><strong>What We Offer:</strong></p>
              <ul>
                <li>Investor-ready pitch decks </li>
                <li>Startup & business presentations </li>
                <li>High-converting sales decks </li>
                <li>Clear storytelling & flow </li>
                <li>Data-driven visual design </li>
              </ul>
              <button className="bg-[#ff4d31] text-white px-8 py-2 rounded-[6px] mt-1 hover:bg-[#ff4d31]/90">Learn More.</button>
            </div>
            <div className="vertical-label">Pitch Deck Designing</div>
          </div>

          <div className="service-card bg-white text-[#18191c]" data-id="video-editing">
            <div className="service-header">
              <h3>Video Editing</h3>
              <div className="toggle-dot bg-red-500" />
            </div>
            <div className="service-details">
              <p className="service-intro"><strong>What We Offer:</strong></p>
              <ul>
                <li>High-impact social media videos & reels </li>
                <li>Promotional & brand videos </li>
                <li>Short-form & long-form content editing </li>
                <li>Motion graphics & smooth transitions </li>
                <li>Platform-optimized videos (Instagram, YouTube, TikTok) </li>

              </ul>
            </div>
            <div className="vertical-label">Video Editing</div>
          </div>

          <div className="service-card bg-white text-[#18191c]" data-id="website-design">
            <div className="service-header">
              <h3>Website Design</h3>
              <div className="toggle-dot" />
            </div>
            <div className="service-details">
              <p className="service-intro"><strong>What We Offer:</strong></p>
              <ul>
                <li>Custom website design & development </li>
                <li>Modern, responsive UI/UX design </li>
                <li>Landing pages & conversion-focused layouts </li>
                <li>Fast, secure, and scalable websites </li>
                <li>Mobile-first & SEO-ready structure </li>
              </ul>
            </div>
            <div className="vertical-label">Website Design</div>
          </div>

          <div className="service-card bg-white text-[#18191c]" data-id="ai-automation">
            <div className="service-header">
              <h3>AI & Automations</h3>
              <div className="toggle-dot" />
            </div>
            <div className="service-details text-lg">
              <p className="service-intro"><strong>What We Offer:</strong></p>
              <ul>
                <li>Workflow automation to reduce manual work </li>
                <li>Email Automation Agent  </li>
                <li>Voice automation for calls & follow-ups</li>
                <li>Smart lead response & qualification </li>
                <li>Scalable automation systems for businesses</li>
              </ul>
            </div>
            <div className="vertical-label text-[#ff4d31]">AI & Automations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
