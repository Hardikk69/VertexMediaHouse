const RotatingText = () => {
  const words = ["Strength", "Stamina", "Endurance", "Strength"];

  return (
    <div className="text-rotate-cell">
      {/* Red dot that animates */}
      <svg
        className="red-dot-icon flex-shrink-0"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="hsl(var(--primary))" />
      </svg>

      {/* Static text */}
      <h1 className="static-text whitespace-nowrap ml-4">Build</h1>

      {/* Rotating words container */}
      <div className="text-rotate-wrap ml-4">
        <div className="text-rotate-track">
          {words.map((word, index) => (
            <span key={index} className="rotating-text">
              {word}
              <span className="text-primary">.</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingText;
