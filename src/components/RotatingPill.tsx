import React from "react";

const features = [
  "Pitch Deck Designing",
  "Video Editing",
  "Website Designing",
  "AI and Automation",
];

export default function VerticalFeatureLoop() {
  return (
    <div className="relative h-32 font-bricolage overflow-hidden mt-6">
      <div className="animate-scroll-up">
        {[...features, ...features].map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-white text-2xl font-medium h-8"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="icon"
              className="w-4 h-4 object-contain"
            />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
