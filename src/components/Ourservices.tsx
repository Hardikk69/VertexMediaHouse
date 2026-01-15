import { useEffect } from "react";
import "@/components/sections/Ourservices.css";
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
    <>
      <section className="services" id="services">
        <div className="container">
        <span className="block mb-4 text-sm uppercase tracking-wide text-[#18191c] text-center">
          Text span
        </span>
        <h2 className="text-4xl text-center mb-10 text-[#18191c] font-medium">
          What Clients Say
        </h2>

          <div className="services-container">
            <div className="service-card active bg-[#ff4d31] text-white" data-id="pitch-deck">
              <div className="service-header">
                <h3>Pitch Deck Designing</h3>
                <div className="toggle-dot" />
              </div>
              <div className="service-details">
                <p className="service-intro"><strong>What We Offer:</strong></p>
                <ul>
                  <li>Investor-ready pitch decks</li>
                  <li>Business presentations</li>
                  <li>Sales decks</li>
                  <li>Corporate storytelling</li>
                  <li>Visual data representation</li>
                </ul>
              </div>
              <div className="vertical-label">Pitch Deck Designing</div>
            </div>

            <div className="service-card bg-[#ff4d31] text-white" data-id="video-editing">
              <div className="service-header">
                <h3>Video Editing</h3>
                <div className="toggle-dot" />
              </div>
              <div className="service-details">
                <p className="service-intro"><strong>What We Offer:</strong></p>
                <ul>
                  <li>YouTube vlogs & shorts</li>
                  <li>Corporate promos</li>
                  <li>Social media reels</li>
                  <li>Motion graphics</li>
                  <li>Color grading</li>
                </ul>
              </div>
              <div className="vertical-label">Video Editing</div>
            </div>

            <div className="service-card bg-[#ff4d31] text-white" data-id="website-design">
              <div className="service-header">
                <h3>Website Design</h3>
                <div className="toggle-dot" />
              </div>
              <div className="service-details">
                <p className="service-intro"><strong>What We Offer:</strong></p>
                <ul>
                  <li>Landing Pages</li>
                  <li>E-commerce stores</li>
                  <li>Portfolio sites</li>
                  <li>UI/UX Design</li>
                  <li>Webflow development</li>
                </ul>
              </div>
              <div className="vertical-label">Website Design</div>
            </div>

            <div className="service-card bg-[#ff4d31] text-white" data-id="ai-automation">
              <div className="service-header">
                <h3>AI & Automations</h3>
                <div className="toggle-dot" />
              </div>
              <div className="service-details">
                <p className="service-intro"><strong>What We Offer:</strong></p>
                <ul>
                  <li>Workflow automation</li>
                  <li>Chatbot integration</li>
                  <li>Data scraping</li>
                  <li>AI content generation</li>
                  <li>Custom scripts</li>
                </ul>
              </div>
              <div className="vertical-label">AI & Automations</div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
