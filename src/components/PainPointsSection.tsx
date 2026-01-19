import React from "react";

type Card = {
    id: string;
    codeLabel: string;
    text: string;
};

const cards: Card[] = [
    { id: "01", codeLabel: "Request Timeout", text: "Our website is a mess" },
    { id: "02", codeLabel: "Syntax Error", text: "We need better software" },
    { id: "03", codeLabel: "Code 404", text: "We’re always behind" },
    { id: "01", codeLabel: "Request Timeout", text: "Our website is a mess" },
    { id: "04", codeLabel: "Task Not Initialized", text: "I know AI is the future" },
];

const PainPointsSection: React.FC = () => {
  return (
    <section className="px-[4px] md:px-[6px] md:py-11 flex justify-center">
      <div className="w-full max-w-[1400px]">
        <h2 className="text-center text-[22px] leading-[29px] md:text-[40px] md:leading-[48px] text-[#1E1E1E] mb-[40px]">
          What’s Keeping You <span className="italic">Up At Night?</span>
        </h2>

        <section
          className="
            grid
            grid-cols-2
            md:grid-cols-6
            gap-[4px]
          "
        >
          {cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="
                group
                h-[188px]
                md:h-[265px]
                border
                bg-gradient-to-br from-[#1C1C1C] via-[#1C1C1C] to-[#206F8D]
                hover:from-[#EAF3F9] hover:to-[#8DC7DD]
                transition-all duration-500 ease-in-out
              "
            >
              <div className="flex justify-between items-center p-2 border-b border-[#75757566]">
                <div className="flex gap-2 items-center">
                  <span className="size-2 rounded-full bg-[#FF5E57]" />
                  <span className="size-2 rounded-full bg-[#FFBB2E]" />
                  <span className="size-2 rounded-full bg-[#38C149]" />
                </div>
                <span className="text-[8px] md:text-[12px] text-[#EBEBF599] group-hover:text-[#23232399]">
                  {card.id}
                </span>
              </div>

              <div className="py-[10px] md:py-[30px] pl-2 md:pl-[12px]">
                <div className="h-[94px] md:h-[133px] flex items-center border-l border-[#5F767F] group-hover:border-[#2323231A] px-[13px] md:pl-5 md:pr-10">
                  <p className="text-[20px] md:text-[24px] leading-[24px] md:leading-[30px] text-white group-hover:text-black transition-colors duration-500">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default PainPointsSection;
