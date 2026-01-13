import React, { useEffect } from "react";
import { initInteractions } from "../FAQJS";

export default function FaqSection(): JSX.Element {
  useEffect(() => {
    const cleanup = initInteractions();
    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">

          {/* ================= LEFT — STICKY TITLE ================= */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight md:sticky md:top-[100px]">
              FAQs
            </h2>
          </div>

          {/* ================= RIGHT — FAQ ITEMS ================= */}
          <div className="flex flex-col gap-4">

            {/* FAQ ITEM 1 */}
            <div className="faq-item bg-white rounded-[20px] overflow-hidden">
              <div className="faq-question flex items-center justify-between px-8 py-6 cursor-pointer font-semibold text-black">
                How many years of experience do you have?

                <div className="w-8 h-8 bg-[#0a0f6e] rounded-full relative transition-transform">
                  <span
                    className="
                      absolute top-1/2 left-1/2
                      -translate-x-1/2 -translate-y-1/2
                      w-0 h-0
                      border-l-[5px] border-l-transparent
                      border-r-[5px] border-r-transparent
                      border-t-[6px] border-t-white
                    "
                  />
                </div>
              </div>

              <div className="faq-answer px-8 text-[#555] overflow-hidden max-h-0 opacity-0 transition-all duration-500">
                We have significant experience delivering high-quality design and technology solutions.
              </div>
            </div>

            {/* FAQ ITEM 2 */}
            <div className="faq-item bg-white rounded-[20px] overflow-hidden">
              <div className="faq-question flex items-center justify-between px-8 py-6 cursor-pointer font-semibold text-black">
                Do you treat every project with importance?

                <div className="w-8 h-8 bg-[#0a0f6e] rounded-full relative transition-transform">
                  <span
                    className="
                      absolute top-1/2 left-1/2
                      -translate-x-1/2 -translate-y-1/2
                      w-0 h-0
                      border-l-[5px] border-l-transparent
                      border-r-[5px] border-r-transparent
                      border-t-[6px] border-t-white
                    "
                  />
                </div>
              </div>

              <div className="faq-answer px-8 text-[#555] overflow-hidden max-h-0 opacity-0 transition-all duration-500">
                Every project is treated with full dedication and senior-level attention.
              </div>
            </div>

            {/* FAQ ITEM 3 */}
            <div className="faq-item bg-white rounded-[20px] overflow-hidden">
              <div className="faq-question flex items-center justify-between px-8 py-6 cursor-pointer font-semibold text-black">
                What is your process like?

                <div className="w-8 h-8 bg-[#0a0f6e] rounded-full relative transition-transform">
                  <span
                    className="
                      absolute top-1/2 left-1/2
                      -translate-x-1/2 -translate-y-1/2
                      w-0 h-0
                      border-l-[5px] border-l-transparent
                      border-r-[5px] border-r-transparent
                      border-t-[6px] border-t-white
                    "
                  />
                </div>
              </div>

              <div className="faq-answer px-8 text-[#555] overflow-hidden max-h-0 opacity-0 transition-all duration-500">
                Our process is structured, transparent, and optimized for high-quality results.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
