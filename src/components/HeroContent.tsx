import { ArrowRight } from "lucide-react";
import RotatingText from "./RotatingText";

const HeroContent = () => {
  return (
    <div className="hero-text-col max-w-3xl">
      {/* Rotating headline */}
      <RotatingText />

      {/* Quote */}
      <div className="mt-8 md:mt-12">
        <p className="lead-text">
          "Whatever the mind of man can conceive and believe, it can achieve."
        </p>
      </div>

      {/* Caption */}
      <div className="caption-wrap">
        <span className="text-grey">—</span>
        <span className="hero-caption">Napoleon Hill</span>
      </div>

      {/* CTA Link */}
      <a href="#" className="big-text-link group">
        <span>Start Training</span>
        <ArrowRight className="big-link-icon" strokeWidth={2} />
      </a>
    </div>
  );
};

export default HeroContent;
