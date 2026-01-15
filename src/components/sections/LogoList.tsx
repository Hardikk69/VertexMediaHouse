import React from "react";

/* =====================================================
   DATA
===================================================== */
const logos = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Apple",
  "Tesla",
  "OpenAI",
];

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Gujarat, India",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review: "Outstanding experience. Clean UI and smooth performance.",
  },
  {
    name: "Emily Carter",
    location: "California, USA",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    review: "Professional team and timely delivery.",
  },
  {
    name: "Daniel Müller",
    location: "Berlin, Germany",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    review: "Exceptional attention to detail and support.",
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

const LogoCard = ({ title }: { title: string }) => (
  <div className="min-w-[160px] h-20 rounded-3xl bg-[#18191c]
                  flex items-center justify-center font-semibold">
    {title}
  </div>
);

const ReviewCard = ({ item }: { item: typeof reviews[0] }) => (
  <div className="bg-white text-[#18191c] p-6 rounded-2xl mb-6">
    <div className="flex gap-4 items-center mb-3">
      <img src={item.image} className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-xs">{item.location}</p>
      </div>
    </div>
    <Stars count={item.rating} />
    <p className="mt-3 text-sm">{item.review}</p>
  </div>
);

/* =====================================================
   MAIN COMPONENT
===================================================== */
const LogoAndReviews = () => {
  return (
    <div className="text-white overflow-hidden">
      {/* =================================================
         LOGO SECTION (HORIZONTAL ONLY)
      ================================================= */}
      <section className="pt-10 pb-10 space-y-6 bg-[#efefed]">
        {/* <span className="block text-sm uppercase tracking-wide text-[#18191c] text-center font-thin -mb-10">
          Text span
        </span>
        <h2 className="text-4xl text-center text-[#18191c] font-medium">
          Our Trusted Partners
        </h2> */}

        {/* LEFT → RIGHT */}
        <div className="overflow-hidden group">
          <div className="flex gap-6 w-max px-6
                          animate-move-right
                          group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((l, i) => (
              <LogoCard key={i} title={l} />
            ))}
          </div>
        </div>

        {/* RIGHT → LEFT */}
        <div className="overflow-hidden group">
          <div className="flex gap-6 w-max px-6
                          animate-move-left
                          group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((l, i) => (
              <LogoCard key={i} title={l} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
         REVIEWS SECTION (VERTICAL ONLY)
      ================================================= */}
      <section className="pb- pt-20 bg-[#e9e9e9]">
        <span className="block mb-4 text-sm uppercase tracking-wide text-[#18191c] text-center ">
          Text span
        </span>
        <h2 className="text-4xl font-medium text-center mb-10 text-[#18191c]">
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">

          {/* LEFT – Bottom → Top */}
          {/* LEFT – visible on all screens */}
          <div className="h-[520px] overflow-hidden group">
            <div className="animate-move-up group-hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((r, i) => (
                <ReviewCard key={i} item={r} />
              ))}
            </div>
          </div>

          {/* MIDDLE – desktop only */}
          <div className="hidden md:block h-[520px] overflow-hidden group">
            <div className="animate-move-down group-hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((r, i) => (
                <ReviewCard key={i} item={r} />
              ))}
            </div>
          </div>

          {/* RIGHT – desktop only */}
          <div className="hidden md:block h-[520px] overflow-hidden group">
            <div className="animate-move-up group-hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((r, i) => (
                <ReviewCard key={i} item={r} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoAndReviews;
