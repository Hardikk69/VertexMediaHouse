export default function CalenderCard() {
  return (
    <section className="relative w-full bg-[#f3f4f6] overflow-hidden pt-16 md:pt-32">

      {/* background diagonal strip */}
      <div
        className="
          absolute inset-x-0 top-1/2 -translate-y-1/2
          h-[260px]
          bg-[#e9ecef]
          -skew-y-2
          z-0
          hidden md:block
        "
      />

      {/* main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-2xl md:text-[40px] leading-tight md:leading-[42px] font-semibold text-[#202020]">
            Your business, our expertise –
          </h1>

          <h2 className="text-2xl md:text-[40px] leading-tight md:leading-[42px] italic font-medium playfair text-[#202020] mt-1">
            let's talk!
          </h2>

          <p className="mt-4 font-semibold text-[#202020]">
            Schedule a free consultation
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex flex-col items-center w-full lg:w-auto">

          {/* calendar card */}
          <div
            className="
              group relative
              bg-white rounded-2xl shadow-xl
              w-full max-w-[360px] p-6 md:p-8
              mt-0 md:-mt-32
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              md:hover:rotate-6 md:hover:-translate-y-6 md:hover:translate-x-6 md:hover:scale-[1.03]
            "
          >
            <h3 className="font-bold text-gray-700 text-lg md:text-[20px] mb-4">
              Select a Date & Time
            </h3>

            <div className="flex items-center justify-between mb-3 text-gray-700">
              <span className="cursor-pointer text-lg">&lt;</span>
              <span className="font-medium text-sm md:text-base">January 2026</span>
              <span className="cursor-pointer text-lg">&gt;</span>
            </div>

            <div className="grid grid-cols-7 gap-1 md:gap-2 text-xs md:text-sm text-center">
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
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#e9ecef]/100 via-[#e9ecef]/75 to-transparent rounded-b-2xl" />
          </div>

          {/* button */}
          <div className="mt-6 w-full flex justify-center">
            <a href="/contact" className="w-full max-w-[360px] md:w-auto">
              <button
                className="
                  bg-[#080D1B] text-white
                  rounded-[5px] flex items-center justify-center
                  w-full md:w-auto
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                "
              >
                <span className="px-6 md:px-12 py-3 font-medium text-sm md:text-base whitespace-nowrap">
                  Schedule a free consultation
                </span>

                <span className="bg-white text-black m-1 p-2 pl-4 rounded hidden md:block">
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
