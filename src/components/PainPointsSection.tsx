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
  { id: "04", codeLabel: "Task Not Initialized", text: "I know AI is the future" },
  { id: "05", codeLabel: "Deprecated Flow", text: "Nothing scales anymore" },
];

const PainPointsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-[4px] items-stretch p-6">
      {cards.map((card, index) => (
        <div
          key={`${card.id}-${index}`}
          className="group h-[188px] md:h-[265px] flex flex-col border
                 bg-gradient-to-br from-[#1C1C1C] via-[#1C1C1C] to-[#206F8D]
                 hover:from-[#EAF3F9] hover:to-[#8DC7DD]
                 transition-all duration-500 ease-in-out"
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

          <div className="flex-1 py-[10px] md:py-[30px] pl-2 md:pl-[12px]">
            <div className="h-[94px] md:h-[133px] flex items-center border-l border-[#5F767F]
                        group-hover:border-[#2323231A] px-[13px] md:pl-5 md:pr-10">
              <p className="text-[20px] md:text-[24px] leading-[24px] md:leading-[30px]
                        text-white group-hover:text-black transition-colors duration-500">
                {card.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>

  );
};

export default PainPointsSection;
