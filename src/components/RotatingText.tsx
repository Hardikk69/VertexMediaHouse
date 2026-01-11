const RotatingText = () => {
  const words = ["Strength", "Stamina", "Endurance", "Strength"];

  return (
    <div className="text-rotate-cell">
      {/* Red dot that animates - positioned to the left of "Build" */}
      <svg
        className="red-dot-icon flex-shrink-0 mr-1 self-center"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="hsl(var(--primary))" />
      </svg>

      {/* Static text */}
      <h1 className="static-text whitespace-nowrap">Build</h1>

      {/* Rotating words container */}
      <div className="text-rotate-wrap ml-3">
        <div className="text-rotate-track">
          {words.map((word, index) => (
            <h1 key={index} className="rotating-text">
              {word}
            </h1>
          ))}
        </div>
      </div>

      {/* Period */}
      <span className="static-text text-primary -ml-1">.</span>
    </div>
  );
};

export default RotatingText;
