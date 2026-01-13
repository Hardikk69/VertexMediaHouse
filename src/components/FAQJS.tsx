export function initInteractions() {
    // FAQ Toggle
    const faqItems = document.querySelectorAll<HTMLElement>('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector<HTMLElement>('.faq-question');
      if (!question) return;
  
      question.addEventListener('click', () => {
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });
        item.classList.toggle('active');
      });
    });
  
    // Intersection Observer (safe)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    document
      .querySelectorAll<HTMLElement>(
        '.stat-card, .service-tab, .step, .work-item, .review-card, h2:not(.scroll-stack h2), .hero-text'
      )
      .forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }
  