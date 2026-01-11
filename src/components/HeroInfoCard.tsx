const HeroInfoCard = () => {
  return (
    <div className="hero-info-card">
      <div className="info-card-icon">
        <img
          src="/images/time-icon.svg"
          alt="Schedule"
          className="business-icon"
        />
      </div>
      <div className="info-card-details-wrap">
        <div className="info-short-description">Schedule a meeting today!</div>
        <div className="info-contact-wrap">
          <a href="mailto:info@alphatraining.com" className="info-email">
            info@alphatraining.com
          </a>
          <span className="info-number">818-910-3800</span>
        </div>
      </div>
    </div>
  );
};

export default HeroInfoCard;
