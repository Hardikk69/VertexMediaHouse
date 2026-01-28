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
    question: 'What does "unlimited revisions" really mean?',
    answer:
      "It means we revise until you're happy - no counters, no awkward conversations, no extra invoices.",
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
      "Yes. You'll receive fully editable files and full ownership - decks, videos, websites, and automations. Nothing is locked. ",
  },
  {
    question: "How do we get started? ",
    answer:
      "Simply book a call or contact us. We'll understand your needs, suggest the best solution, and get started right away. ",
  },
];

interface FAQSectionProps {
  accentColor?: string;
}

export default function FAQSection({ accentColor = "#ff4d31" }: FAQSectionProps): JSX.Element {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  function toggle(key: string) {
    setActiveKey((prev) => (prev === key ? null : key));
  }

  const FAQItemComponent = ({ item, keyId }: { item: FAQItem; keyId: string }) => {
    const isOpen = activeKey === keyId;

    return (
      <div
        className="border border-black/15 rounded-[8px] overflow-hidden transition-colors duration-200"
        style={{
          borderColor: isOpen ? `${accentColor}30` : undefined
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.borderColor = `${accentColor}30`;
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.currentTarget.style.borderColor = '';
        }}
      >
        <button
          onClick={() => toggle(keyId)}
          className={`w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left font-medium text-sm md:text-base transition-colors duration-200
            ${isOpen ? "font-bold bg-black/[0.02]" : "text-[#18191e] hover:bg-black/[0.02]"}
          `}
          style={{
            color: isOpen ? accentColor : undefined
          }}
        >
          <span className="pr-4">{item.question}</span>
          <span
            className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : "text-[#18191e]"}`}
            style={{
              color: isOpen ? accentColor : undefined
            }}
          >
            ▼
          </span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 md:px-6 pb-4 md:pb-5 text-sm leading-relaxed text-[#18191e]/80">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="text-[#18191e] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.2fr] gap-8 md:gap-16 items-start">
          {/* ================= LEFT TEXT ================= */}
          <div className="text-center lg:text-left">
            <span className="block mb-2 md:mb-4 text-sm uppercase tracking-widest text-[#25262b] font-bold opacity-70">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 md:mb-6">
              Frequently <br className="hidden md:block" /> Asked Questions
            </h2>
            <p className="leading-relaxed max-w-sm mx-auto lg:mx-0 text-sm md:text-base">
              Clear answers to common questions about our process, services, and
              how we collaborate with clients.
            </p>
          </div>

          {/* ================= MIDDLE FAQ ================= */}
          <div className="flex flex-col gap-3 md:gap-4">
            {middleFAQs.map((item, i) => (
              <FAQItemComponent key={`mid-${i}`} item={item} keyId={`mid-${i}`} />
            ))}
          </div>

          {/* ================= RIGHT FAQ ================= */}
          <div className="flex flex-col gap-3 md:gap-4">
            {rightFAQs.map((item, i) => (
              <FAQItemComponent key={`right-${i}`} item={item} keyId={`right-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
