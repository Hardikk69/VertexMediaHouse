export default function OurServices(): JSX.Element {
    return (
      <section className="bg-black text-white py-32">
        {/* ===== Title ===== */}
        <h2 className="text-4xl font-bold text-center mb-24">
          Our Services
        </h2>
  
        {/* ===== Diagram Wrapper ===== */}
        <div className="relative mx-auto w-[420px] h-[420px]">
  
          {/* ===== Connector Loop ===== */}
          <div
            className="
              absolute inset-0
              rounded-[48px]
            //   border-2 border-white/20
            "
          />
  
          {/* ===== Center Box ===== */}
    
          <div
            className="
              absolute inset-0 m-auto
              w-[200px] h-[200px]
              rounded-2xl
              bg-white/10
              border border-white/20
              flex items-center justify-center
              text-center
              z-10
            "
          >
            <div className="text-lg font-semibold leading-snug">
              everything’s<br />
              one<br />
              place
            </div>
          </div>

          {/* ===== Top Box ===== */}
          <div
                 className="
                  absolute top-[20px] left-[100px] -translate-x-1/2
                  w-[160px] h-[160px]
                  rounded-3xl
                  bg-white/5 border border-white/10
                  flex items-center justify-center

                  transition-transform duration-300 ease-out
                  origin-bottom-right
                  hover:scale-125
                "
            >
            Pitch Deck
          </div>
  
          {/* ===== Right Box ===== */}
          <div
            className="
              absolute top-[100px] right-[20px] -translate-y-1/2
              w-[160px] h-[160px]
              rounded-3xl
              bg-white/5 border border-white/10
              flex items-center justify-center

              transition-transform duration-300 ease-out
              origin-bottom-left
              hover:scale-125
            "
          >
            Video
          </div>
  
          {/* ===== Bottom Box ===== */}
          <div
            className="
              absolute bottom-[20px] -right-[60px] -translate-x-1/2
              w-[160px] h-[160px]
              rounded-xl
              bg-white/5 border border-white/10
              flex items-center justify-center
              transition-transform duration-300
              origin-top-left
              hover:scale-125
            "
          >
            Website
          </div>
  
          {/* ===== Left Box ===== */}
          <div
            className="
              absolute -bottom-[60px] left-[20px] -translate-y-1/2
              w-[160px] h-[160px]
              rounded-xl
              bg-white/5 border border-white/10
              flex items-center justify-center
              transition-transform duration-300
              origin-top-right
              hover:scale-125
            "
          >
            AI Agent
          </div>
        </div>
      </section>
    );
  }
  