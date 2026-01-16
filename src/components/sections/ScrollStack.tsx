import { ScrollStackItem } from "./ScrollItem";
import ScrollStack from "./ScrollItem";

export default function ScrollStakeSection() {
  return (
    <section className="scroll-stack-section py-12 rounded-b-lg bg-[#efefef]">
      <div className="container mx-auto ">

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
            <span className="block mb-4 text-sm uppercase tracking-wide text-[#18191c]">
              Why Us?
            </span>

            <h2 className="text-6xl mb-6 text-[#18191c] font-medium">
              What Makes Us Different
            </h2>

            <p className="text-[#18191c] leading-relaxed max-w-sm h-72">
              We combine strategy, creativity, and technology to build solutions
              that don’t just look good - they perform.
              Our approach is collaborative, focused, and designed to help
              businesses grow, scale, and communicate better.
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
                  <h2 className="text-3xl font-medium mb-4 ">
                    Ultra-Fast Delivery
                  </h2>
                  <p> We move fast without cutting corners. Tight deadlines, quick turnarounds, and on-time delivery - always.</p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-[#8d96fd]">
                <div>
                  <h2 className="text-3xl font-medium mb-4 ">
                    Unlimited Revisions
                  </h2>
                  <p>
                    We don’t stop at “good enough.” Revisions are unlimited until you’re
                    100% satisfied.
                  </p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-[#ff7d84]">
                <div>
                  <h2 className="text-3xl font-medium mb-4 ">
                    Strategy-First Approach
                  </h2>
                  <p>
                    Every design, video, website, or automation starts with a clear
                    strategy - not guesswork.
                  </p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-[#ffe176]">
                <div>
                  <h2 className="text-3xl font-medium mb-4 ">
                    Transparent & Collaborative
                  </h2>
                  <p>
                    Clear communication, regular updates, and no surprises. You’re
                    involved at every step.
                  </p>
                </div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="bg-[#d8f66f]">
                <div>
                  <h2 className="text-3xl font-medium mb-4 ">
                    Built to Scale
                  </h2>
                  <p>
                    Our solutions are designed to grow with your business — from
                    startups to scaling brands.
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
