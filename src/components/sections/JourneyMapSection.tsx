import { useEffect, useRef, useState } from "react";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  side: "left" | "right";
  top: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Big Text",
    subtitle: "Small text",
    side: "right",
    top: "10%",
  },
  {
    id: 2,
    title: "Big Text",
    subtitle: "Small text",
    side: "left",
    top: "32%",
  },
  {
    id: 3,
    title: "Big Text",
    subtitle: "Small text",
    side: "right",
    top: "55%",
  },
  {
    id: 4,
    title: "Big Text",
    subtitle: "Small text",
    side: "left",
    top: "78%",
  },
];

export default function CurvedJourney(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  /* Measure path length */
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  /* Scroll progress */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;

      const p = (winH - rect.top) / (rect.height + winH);
      setProgress(Math.min(Math.max(p, 0), 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleSegment = pathLength * 0.18;
  const dashOffset =
    pathLength - progress * (pathLength + visibleSegment);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white"
      style={{ height: "280vh" }}
    >
      {/* Sticky path */}
      <div className="sticky top-0 h-screen flex justify-center">
        <svg
          viewBox="0 0 600 1600"
          className="h-full w-[320px]"
          fill="none"
        >
          {/* Base dotted path */}
          <path
            d="
              M300 50
              C140 200, 140 400, 300 550
              C460 700, 460 900, 300 1050
              C140 1200, 180 1400, 300 1550
            "
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={3}
            strokeDasharray="6 10"
          />

          {/* Active visible segment */}
          <path
            ref={pathRef}
            d="
              M300 50
              C140 200, 140 400, 300 550
              C460 700, 460 900, 300 1050
              C140 1200, 180 1400, 300 1550
            "
            stroke="rgba(255,255,255,0.6)"
            strokeWidth={3}
            strokeDasharray={`${visibleSegment} ${pathLength}`}
            strokeDashoffset={dashOffset}
          />
        </svg>
      </div>

      {/* Content */}
      {STEPS.map(step => (
        <div
          key={step.id}
          className={`absolute flex items-center gap-6 ${
            step.side === "left" ? "left-[8%]" : "right-[8%]"
          }`}
          style={{ top: step.top }}
        >
          {/* Number circle */}
          <div className="w-10 h-10 rounded-full border border-white/50
                          flex items-center justify-center text-sm">
            {step.id}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold">
              {step.title}
            </h3>
            <p className="text-sm text-white/60">
              {step.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
