import { ScrollStackItem } from "./ScrollItem";
import ScrollStack from "./ScrollItem";

export default function ScrollStakeSection() {
  return (
    <section className="scroll-stack-section py-32">
      <div className="container mx-auto">

        {/* ===== TWO COLUMN LAYOUT ===== */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20 items-start"
        >

          {/* =================================================
              LEFT — STICKY WHY US
          ================================================= */}
          <div
            className="
              relative
              h-fit
              lg:sticky
              lg:top-[120px]
            "
          >
            <span className="block mb-4 text-sm uppercase tracking-wide text-white/60">
              Our Work
            </span>

            <h2 className="text-4xl font-bold mb-6 text-white">
              Why Us?
            </h2>

            <p className="text-white/70 leading-relaxed max-w-sm">
              We combine strategy, design, and engineering to build
              meaningful digital experiences that scale with your
              business. Our approach is focused, collaborative, and
              driven by results.
            </p>
          </div>

          {/* =================================================
              RIGHT — SCROLL STACK (UNCHANGED)
          ================================================= */}
          <div className="scroll-stack-wrapper">
            <ScrollStack
              useWindowScroll={true}
              itemDistance={10}
              itemStackDistance={20}
              baseScale={0.9}
              stackPosition="30%"
            >
              <ScrollStackItem itemClassName="bg-[#d8f66f] text-black">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Discovery Phase
                  </h2>
                  <p>
                    We deeply analyze your brand and goals to create
                    a strategic roadmap for success.
                  </p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-[#8d96fd]">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Design Strategy
                  </h2>
                  <p>
                    Creating visual identities that resonate with
                    your target audience.
                  </p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-[#ff7d84]">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Development & Launch
                  </h2>
                  <p>
                    Building high-performance assets and launching
                    them with precision.
                  </p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-[#ffe176]">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Growth & Scale
                  </h2>
                  <p>
                    Optimizing, iterating, and scaling products for
                    long-term success.
                  </p>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>

        </div>
      </div>
    </section>
  );
}
