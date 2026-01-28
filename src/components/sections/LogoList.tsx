import React from "react";
import Image1 from '../../assets/images/Picture1.jpg'
import Image2 from '../../assets/images/Picture2.jpg'
import Image3 from '../../assets/images/Picture3.png'
import Image4 from '../../assets/images/Picture4.png'
import Image5 from '../../assets/images/Picture5.png'
import Image6 from '../../assets/images/Picture6.png'
import Image7 from '../../assets/images/Picture7.png'
import Image8 from '../../assets/images/Picture8.png'
/* =====================================================
   DATA
===================================================== */
const logos = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
];

const reviews = [
  {
    name: "Rao Movva",
    location: "Founder - RetireHow.com",
    rating: 5,
    review: `Dhrumil immediately grasped what we are trying to achieve as a company and delivered the pitch decks for both end users and as well investors. Very professional and responsive. Looking forward to collaborate on other projects. Keep up the great work!`,
  },
  {
    name: "Sharad Vij",
    location: "Co-founder - Hire Bound",
    rating: 5,
    review: `Excellent working with Dhrumil, first time we collaborated and he went over and beyond. Would like to continue our engagement for the foreseeable future.`,
  },
  {
    name: "Raj Kumani",
    location: "Founder - Deal to Close",
    rating: 5,
    review: "Great work by Dhrumil, very good quality work and speedy delivery. Highly recommended.",
  },
  {
    name: "Abood",
    location: "Founder - LYFE",
    rating: 5,
    review: "Professional, very good work on times submit.",
  },
  {
    name: "Yorrelle",
    location: "Founder – Rise & Pay",
    rating: 5,
    review: `They did a great job and had a great attitude in completing this project. He knew exactly what to do to make the portfolio shine. Looking forward to working with him in the future. Great work that just looks good.`,
  },
  {
    name: "Vodus Rich",
    location: "Founder – Obsidian Development Group",
    rating: 5,
    review: "Exceeded my expectations in every way!",
  },
];

/* =====================================================
   SMALL COMPONENTS
===================================================== */
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 text-[#ff4d31]">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "" : "text-gray-600"}>★</span>
    ))}
  </div>
);

const ReviewCard = ({ item }: { item: typeof reviews[0] }) => {
  // Get initials from name
  const initials = item.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="bg-white text-[#18191c] p-6 rounded-2xl mb-6">
      <div className="flex gap-4 items-center mb-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4d31] to-orange-500 flex items-center justify-center text-white font-bold text-lg">
          {initials}
        </div>
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-xs text-gray-500">{item.location}</p>
        </div>
      </div>
      <Stars count={item.rating} />
      <p className="mt-3 text-sm">{item.review}</p>
    </div>
  );
};

/* =====================================================
   MAIN COMPONENT
===================================================== */
interface LogoListProps {
  backgroundColor?: string;
  logoFilter?: string;
}

// Helper function to get filter style for theme colors
const getFilterStyle = (color: string): string => {
  const filterMap: Record<string, string> = {
    "#ff6b4d": "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(360deg) contrast(1)",      // Brownish orange
    "#f97316": "brightness(0) saturate(100%) invert(60%) sepia(100%) saturate(2000%) hue-rotate(360deg) contrast(1.1)",     // Orange variant
    "#ff7700": "brightness(0) saturate(100%) invert(55%) sepia(100%) saturate(3000%) hue-rotate(10deg) contrast(1.1)",      // True Orange
    "#a855f7": "brightness(0) saturate(100%) invert(35%) sepia(80%) saturate(2000%) hue-rotate(250deg) contrast(1.2)",    // Purple
    "#22d3ee": "brightness(0) saturate(100%) invert(65%) sepia(80%) saturate(2000%) hue-rotate(160deg) contrast(1.2)",    // Cyan
    "#3b82f6": "brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(2000%) hue-rotate(200deg) contrast(1.2)",   // Blue
    "#34d399": "brightness(0) saturate(100%) invert(65%) sepia(80%) saturate(2000%) hue-rotate(100deg) contrast(1.2)",    // Emerald
    "#059669": "brightness(0) saturate(100%) invert(35%) sepia(90%) saturate(1500%) hue-rotate(120deg) contrast(1.3)",    // Dark Emerald
  };
  return filterMap[color.toLowerCase()] ?? "brightness(0) contrast(1.2)";
};

const LogoAndReviews: React.FC<LogoListProps> = ({ backgroundColor = "bg-[#efefed]", logoFilter }) => {
  const filterStyle = logoFilter ? getFilterStyle(logoFilter) : "brightness(0) contrast(1.2)";

  return (
    <div className="text-white overflow-hidden">
      {/* =================================================
         LOGO SECTION (HORIZONTAL ONLY)
      ================================================= */}
      <section className={`pt-10 pb-10 space-y-6 ${backgroundColor}`}>
        {/* <span className="block text-sm uppercase tracking-wide text-[#18191c] text-center font-thin -mb-10">
          Text span
        </span>
        <h2 className="text-4xl text-center text-[#18191c] font-medium">
          Our Trusted Partners
        </h2> */}

        {/* LEFT → RIGHT */}
        <div className="overflow-hidden group">
          <div className="flex gap-12 w-max 
                          animate-move-right
                          group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((l, i) => (
              <img
                key={i}
                className="max-h-20"
                src={l}
                alt="Partner logo"
                style={{
                  filter: filterStyle,
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT → LEFT */}
        {/* <div className="overflow-hidden group">
          <div className="flex gap-6 w-max px-6
                          animate-move-left
                          group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((l, i) => (
              <LogoCard key={i} title={l} />
            ))}
          </div>
        </div> */}
      </section>

      {/* =================================================
         REVIEWS SECTION (VERTICAL ONLY)
      ================================================= */}
      <section className="py-10 bg-[#e9e9e9] px-[8px] md:px-[16px]" id="client-reviews">
        <div className="relative max-w-[1400px] mx-auto rounded-[24px] bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm p-4 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 overflow-hidden">
          {/* Subtle gradient overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent pointer-events-none rounded-[32px]" />

          <span className="relative block mb-4 text-sm tracking-widest uppercase text-[#18191c]/70 text-center font-medium">
            Testimonials
          </span>
          <h2 className="relative text-4xl md:text-5xl font-medium text-center mb-12 text-[#18191c]">
            Don’t Just Take Our Word for It          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">

            {/* LEFT – Bottom → Top */}
            {/* LEFT – visible on all screens */}
            <div className="h-[520px] overflow-hidden group rounded-2xl">
              <div className="animate-move-up group-hover:[animation-play-state:paused]">
                {[...reviews, ...reviews].map((r, i) => (
                  <ReviewCard key={i} item={r} />
                ))}
              </div>
            </div>

            {/* MIDDLE – desktop only */}
            <div className="hidden md:block h-[520px] overflow-hidden group rounded-2xl">
              <div className="animate-move-down group-hover:[animation-play-state:paused]">
                {[...reviews, ...reviews].map((r, i) => (
                  <ReviewCard key={i} item={r} />
                ))}
              </div>
            </div>

            {/* RIGHT – desktop only */}
            <div className="hidden md:block h-[520px] overflow-hidden group rounded-2xl">
              <div className="animate-move-up group-hover:[animation-play-state:paused]">
                {[...reviews, ...reviews].map((r, i) => (
                  <ReviewCard key={i} item={r} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoAndReviews;
