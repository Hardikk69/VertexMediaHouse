import React from 'react'
import './Faq.css'
export default function FaqSection(){
    return(
        <section className="py-24">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">

      {/* LEFT — Sticky Title */}
      <div className="faq-header-column">
        <h2 className="
          text-4xl md:text-5xl
          font-semibold
          leading-tight
          md:sticky md:top-[100px]
        ">
          FAQs
        </h2>
      </div>

      {/* RIGHT — FAQ Items */}
      <div className="flex flex-col gap-4 w-full">

        {/* FAQ ITEM */}
        <div className="faq-item bg-white rounded-[20px] overflow-hidden transition-all duration-300">
          <div className="
            faq-question
            flex items-center justify-between
            px-8 py-6
            cursor-pointer
            text-black font-semibold text-base
          ">
            How many years of experience do you have?

            <div className="
              toggle-icon
              w-8 h-8
              bg-[#0a0f6e]
              rounded-full
              relative
              transition-transform duration-300
              flex-shrink-0
            ">
              <span className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-0 h-0
                border-l-[5px] border-l-transparent
                border-r-[5px] border-r-transparent
                border-t-[6px] border-t-white
              " />
            </div>
          </div>

          <div className="
            faq-answer
            px-8
            text-[#555]
            overflow-hidden
            max-h-0 opacity-0
            transition-all duration-500
          ">
            We have significant experience in delivering high-quality design and tech solutions.
          </div>
        </div>

        {/* FAQ ITEM */}
        <div className="faq-item bg-white rounded-[20px] overflow-hidden transition-all duration-300">
          <div className="
            faq-question
            flex items-center justify-between
            px-8 py-6
            cursor-pointer
            text-black font-semibold text-base
          ">
            Do you treat every project with importance?

            <div className="toggle-icon w-8 h-8 bg-[#0a0f6e] rounded-full relative transition-transform duration-300">
              <span className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-0 h-0
                border-l-[5px] border-l-transparent
                border-r-[5px] border-r-transparent
                border-t-[6px] border-t-white
              " />
            </div>
          </div>

          <div className="faq-answer px-8 text-[#555] overflow-hidden max-h-0 opacity-0 transition-all duration-500">
            We treat every project with the utmost importance and dedication.
          </div>
        </div>

        {/* FAQ ITEM */}
        <div className="faq-item bg-white rounded-[20px] overflow-hidden transition-all duration-300">
          <div className="faq-question flex items-center justify-between px-8 py-6 cursor-pointer text-black font-semibold text-base">
            What is your process like?

            <div className="toggle-icon w-8 h-8 bg-[#0a0f6e] rounded-full relative transition-transform duration-300">
              <span className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-0 h-0
                border-l-[5px] border-l-transparent
                border-r-[5px] border-r-transparent
                border-t-[6px] border-t-white
              " />
            </div>
          </div>

          <div className="faq-answer px-8 text-[#555] overflow-hidden max-h-0 opacity-0 transition-all duration-500">
            Our process is streamlined for efficiency and quality.
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    )
}