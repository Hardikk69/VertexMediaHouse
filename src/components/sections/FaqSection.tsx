import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const middleFAQs: FAQItem[] = [
  {
    question: "How fast do you actually deliver?",
    answer:
      "Fast means days, not weeks. Most projects start within 24 hours and move at sprint speed without sacrificing quality.",
  },
  {
    question: "What does “unlimited revisions” really mean? ",
    answer:
      "It means we revise until you’re happy - no counters, no awkward conversations, no extra invoices.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, founders, creators, agencies, and growing businesses across various industries worldwide.",
  },
];

const rightFAQs: FAQItem[] = [
  {
    question: "What exactly can your AI automation do right now?",
    answer:
      "Right now, we automate email and voice workflows - follow-ups, lead responses, reminders, and basic conversations that usually waste your time.",
  },
  {
    question: "Can I edit everything later?",
    answer:
      "Yes. You’ll receive fully editable files and full ownership - decks, videos, websites, and automations. Nothing is locked. ",
  },
  {
    question: "How do we get started? ",
    answer:
      "Simply book a call or contact us. We’ll understand your needs, suggest the best solution, and get started right away. ",
  },
];

export default function FAQSection(): JSX.Element {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  function toggle(key: string) {
    setActiveKey((prev) => (prev === key ? null : key));
  }

  return (
    <section className="text-[#18191e] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.2fr] gap-16 items-start">
          {/* ================= LEFT TEXT ================= */}
          <div>
            <span className="block mb-4 text-sm uppercase tracking-wide text-[#25262b]">
              FAQ
            </span>
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Frequently <br /> Asked Questions
            </h2>
            <p className="leading-relaxed max-w-sm">
            Clear answers to common questions about our process, services, and 
            how we collaborate with clients.
            </p>
          </div>

          {/* ================= MIDDLE FAQ ================= */}
          <div className="flex flex-col gap-4">
            {middleFAQs.map((item, i) => {
              const key = `mid-${i}`;
              const isOpen = activeKey === key;

              return (
                <div
                  key={key}
                  className="border border-black/15 rounded-[8px] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(key)}
                    className={`w-full flex transition-all duration-300 items-center justify-between px-6 py-5 text-left font-medium 
                      ${isOpen
                        ? "text-[#ff4d31] font-bold"
                        : "text-[#18191e]"
                      }
                    `}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`transition-all duration-300 ${isOpen
                          ? "rotate-180 text-[#ff4d31]"
                          : "text-[#18191e]"
                        }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT FAQ ================= */}
          <div className="flex flex-col gap-4">
            {rightFAQs.map((item, i) => {
              const key = `right-${i}`;
              const isOpen = activeKey === key;

              return (
                <div
                  key={key}
                  className="border border-black/15 rounded-[8px] overflow-hidden"
                >
                  <button
                    onClick={() => toggle(key)}
                    className={`w-full flex transition-all duration-300 items-center justify-between px-6 py-5 text-left font-medium 
                      ${isOpen
                        ? "text-[#ff4d31] font-bold"
                        : "text-[#18191e]"
                      }
                    `}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`transition-all duration-300 ${isOpen
                          ? "rotate-180 text-[#ff4d31]"
                          : "text-[#18191e]"
                        }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
