export default function CalenderCard() {
  return (
    <section className="relative w-full bg-[#f3f4f6] overflow-hidden pt-32">

      {/* background diagonal strip */}
      <div
        className="
          absolute inset-x-0 top-1/2 -translate-y-1/2
          h-[260px]
          bg-[#e9ecef]
          -skew-y-2
          z-0
        "
      />

      {/* main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-[40px] leading-[42px] font-semibold text-[#202020]">
            Your business, our expertise –
          </h1>

          <h2 className="text-[40px] leading-[42px] italic font-medium playfair text-[#202020] mt-1">
            let's talk!
          </h2>

          <p className="mt-4 font-semibold text-[#202020]">
            Schedule a free consultation
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex flex-col items-center">

          {/* calendar card */}
          <div
            className="
              group relative
              bg-white rounded-2xl shadow-xl
              w-[360px] p-8
              -mt-32
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
hover:rotate-6 hover:-translate-y-6 hover:translate-x-6 hover:scale-[1.03]
 "
          >
            <h3 className="font-bold text-gray-700 text-[20px] mb-4">
              Select a Date & Time
            </h3>

            <div className="flex items-center justify-between mb-3 text-gray-700">
              <span className="cursor-pointer text-lg">&lt;</span>
              <span className="font-medium">January 2026</span>
              <span className="cursor-pointer text-lg">&gt;</span>
            </div>

            <div className="grid grid-cols-7 gap-2 text-sm text-center">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d} className="font-semibold text-gray-700">
                  {d}
                </div>
              ))}

              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="text-gray-900 py-1">
                  {i === 0 ? "" : i}
                </div>
              ))}
            </div>

            {/* fade bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#e9ecef]/100 via-[#e9ecef]/75 to-transparent rounded-b-2xl" />
          </div>

          {/* button */}
          <div className="mt-6">
            <a href="../calender">
              <button
                className="
                  bg-[#080D1B] text-white
                  rounded-[5px] flex items-center
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                "
              >
                <span className="px-12 py-3 font-medium">
                  Schedule a free consultation
                </span>
                <span className="bg-white text-black m-1 p-2 pl-4 rounded">
                  →
                </span>
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
