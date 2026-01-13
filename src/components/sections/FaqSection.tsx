import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const middleFAQs: FAQItem[] = [
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on scope and complexity. Most projects are completed within 2 to 6 weeks after final requirements are approved.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We regularly collaborate with startups, founders, and small teams to help them build scalable digital products.",
  },
  {
    question: "Can you redesign an existing product?",
    answer:
      "Absolutely. We can improve UI, UX, performance, and overall brand alignment of existing products.",
  },
];

const rightFAQs: FAQItem[] = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across SaaS, AI, e-commerce, creative, and technology-driven industries.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer long-term support, optimization, and maintenance based on your needs.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form. We’ll schedule a discovery call to understand your goals.",
  },
];

export default function FAQSection(): JSX.Element {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  function toggle(key: string) {
    setActiveKey(prev => (prev === key ? null : key));
  }

  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.2fr] gap-16 items-start">

          {/* ================= LEFT TEXT ================= */}
          <div>
            <h2 className="text-4xl font-semibold leading-tight mb-6 text-white">
              Frequently <br /> Asked Questions
            </h2>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Clear answers to common questions about our process, services,
              and how we collaborate with clients.
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
                  className="border border-white/15 rounded-[2px] overflow-hidden bg-white/5"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-medium"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`transition-transform duration-300 text-white/70 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-white/80 text-sm leading-relaxed">
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
                  className="border border-white/15 rounded-md overflow-hidden bg-white/5"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-medium"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`transition-transform duration-300 text-white/70 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-white/80 text-sm leading-relaxed">
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
