import React from "react";

/* ---------------- DATA ---------------- */
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
    review: "Professional team and timely delivery. Highly recommend.",
  },
  {
    name: "Daniel Müller",
    location: "Berlin, Germany",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    review: "Exceptional attention to detail and support.",
  },
  {
    name: "Aarav Patel",
    location: "Maharashtra, India",
    image: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    review: "Very scalable and well-structured solution.",
  },
  {
    name: "Sophia Lee",
    location: "Seoul, South Korea",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 4,
    review: "User-friendly design with great responsiveness.",
  },
];

/* ---------------- STAR ---------------- */
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 text-yellow-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "" : "text-gray-600"}>
        ★
      </span>
    ))}
  </div>
);

/* ---------------- CARD ---------------- */
const ReviewCard = ({ item }: { item: typeof reviews[0] }) => (
  <div className="bg-white/10 backdrop-blur p-6 rounded-2xl mb-6">
    <div className="flex items-center gap-4 mb-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-xs text-gray-400">{item.location}</p>
      </div>
    </div>

    <Stars count={item.rating} />

    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
      {item.review}
    </p>
  </div>
);

/* ---------------- MAIN ---------------- */
const ReviewsVerticalLoop: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-20">
        Trusted by Clients Worldwide
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">

        {/* LEFT COLUMN (Bottom → Top) */}
        <div className="h-[500px] overflow-hidden group">
          <div className="animate-up group-hover:paused">
            {[...reviews, ...reviews].map((item, i) => (
              <ReviewCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* MIDDLE COLUMN (Top → Bottom) */}
        <div className="h-[500px] overflow-hidden group">
          <div className="animate-down group-hover:paused">
            {[...reviews, ...reviews].map((item, i) => (
              <ReviewCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (Bottom → Top) */}
        <div className="h-[500px] overflow-hidden group">
          <div className="animate-up group-hover:paused">
            {[...reviews, ...reviews].map((item, i) => (
              <ReviewCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- ANIMATIONS ---------------- */}
      <style>{`
        @keyframes moveUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes moveDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-up {
          animation: moveUp 25s linear infinite;
        }

        .animate-down {
          animation: moveDown 25s linear infinite;
        }

        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReviewsVerticalLoop;
