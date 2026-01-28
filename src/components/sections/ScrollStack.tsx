import { ScrollStackItem } from "./ScrollItem";
import ScrollStack from "./ScrollItem";
import { Zap, RefreshCw, Target, Users, TrendingUp } from "lucide-react";

export default function ScrollStakeSection({ accentColor = "#18191c" }: { accentColor?: string } = {}) {
  return (
    <section
      className="scroll-stack-section py-12 md:py-16 rounded-b-lg bg-[#efefef]"
      id="why-us"
    >

      <div className="container mx-auto px-4 md:px-6 lg:px-8">



        {/* ===== TWO COLUMN LAYOUT ===== */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 lg:gap-16 items-start"
        >

          {/* =================================================
              LEFT — STICKY WHY US
          ================================================= */}
          <div
            className="
              relative
              h-fit
              lg:sticky
              lg:top-[100px]
              text-center lg:text-left
              mb-6 lg:mb-0
            "
          >
            <span className="block mb-2 md:mb-4 text-sm uppercase tracking-widest font-bold opacity-70" style={{ color: accentColor }}>
              Why Choose Us?
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-[#18191c] font-medium">
              What Makes Us Different
            </h2>

            <p className="text-[#18191c] leading-relaxed max-w-sm mx-auto lg:mx-0 h-auto lg:h-48">
              We combine strategy, creativity, and technology to build solutions that
              don't just look good - they perform. Our approach is collaborative,
              focused, and designed to help businesses grow, scale, and
              communicate better.
            </p>
          </div>

          {/* =================================================
              RIGHT — SCROLL STACK (UNCHANGED)
          ================================================= */}
          <div className="scroll-stack-wrapper pb-0">
            <ScrollStack
              useWindowScroll={true}
              // itemDistance={10}
              itemStackDistance={15}
              baseScale={0.9}
              stackPosition="30%"
              className="gap-y-6 md:gap-y-12"
            >
              <ScrollStackItem itemClassName="bg-gradient-to-br from-[#34d399] to-[#10b981] text-white shadow-2xl ring-1 ring-white/20">
                <div className="p-2 md:p-0 flex items-start gap-4">
                  <div className="p-3 bg-emerald-600/20 backdrop-blur-sm rounded-xl">
                    <Zap className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">
                      Ultra-Fast Delivery
                    </h2>
                    <p className="text-sm md:text-base text-white/90">We move fast without cutting corners. Tight deadlines, quick turnarounds, and on-time delivery - always.</p>
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-gradient-to-br from-[#c084fc] to-[#a855f7] text-white shadow-2xl ring-1 ring-white/20">
                <div className="p-2 md:p-0 flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 backdrop-blur-sm rounded-xl">
                    <RefreshCw className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">
                      Unlimited Revisions
                    </h2>
                    <p className="text-sm md:text-base text-white/90">
                      We don't stop at "good enough." Revisions are unlimited until you're
                      100% satisfied.
                    </p>
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] text-white shadow-2xl ring-1 ring-white/20">
                <div className="p-2 md:p-0 flex items-start gap-4">
                  <div className="p-3 bg-sky-600/20 backdrop-blur-sm rounded-xl">
                    <Target className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">
                      Strategy-First Approach
                    </h2>
                    <p className="text-sm md:text-base text-white/90">
                      Every design, video, website, or automation starts with a clear
                      strategy - not guesswork.
                    </p>
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-gradient-to-br from-[#fb923c] to-[#f97316] text-white shadow-2xl ring-1 ring-white/20">
                <div className="p-2 md:p-0 flex items-start gap-4">
                  <div className="p-3 bg-orange-600/20 backdrop-blur-sm rounded-xl">
                    <Users className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">
                      Transparent & Collaborative
                    </h2>
                    <p className="text-sm md:text-base text-white/90">
                      Clear communication, regular updates, and no surprises. You're
                      involved at every step.
                    </p>
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-gradient-to-br from-[#a3e635] to-[#84cc16] text-gray-900 shadow-2xl ring-1 ring-black/10">
                <div className="p-2 md:p-0 flex items-start gap-4">
                  <div className="p-3 bg-lime-700/20 backdrop-blur-sm rounded-xl">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">
                      Built to Scale
                    </h2>
                    <p className="text-sm md:text-base text-gray-800">
                      Our solutions are designed to grow with your business — from
                      startups to scaling brands.
                    </p>
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>

        </div>
      </div>
    </section>
  );
}
