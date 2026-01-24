import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const faqItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function FAQSection(): JSX.Element {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  function toggle(key: string) {
    setActiveKey((prev) => (prev === key ? null : key));
  }

  const FAQItem = ({ item, keyId }: { item: FAQItem; keyId: string }) => {
    const isOpen = activeKey === keyId;

    return (
      <motion.div
        variants={faqItemVariants}
        className="border border-black/15 rounded-[8px] overflow-hidden"
        whileHover={{
          borderColor: "rgba(255, 77, 49, 0.3)",
          transition: { duration: 0.2 }
        }}
      >
        <motion.button
          onClick={() => toggle(keyId)}
          className={`w-full flex items-center justify-between px-6 py-5 text-left font-medium 
            ${isOpen ? "text-[#ff4d31] font-bold" : "text-[#18191e]"}
          `}
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
          whileTap={{ scale: 0.995 }}
        >
          <span>{item.question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={isOpen ? "text-[#ff4d31]" : "text-[#18191e]"}
          >
            ▼
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, delay: isOpen ? 0.1 : 0 }
              }}
              className="overflow-hidden"
            >
              <motion.div
                className="px-6 pb-5 text-sm leading-relaxed"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.section
      className="text-[#18191e] py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.2fr] gap-16 items-start">
          {/* ================= LEFT TEXT ================= */}
          <motion.div variants={titleVariants}>
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
          </motion.div>

          {/* ================= MIDDLE FAQ ================= */}
          <motion.div
            className="flex flex-col gap-4"
            variants={columnVariants}
          >
            {middleFAQs.map((item, i) => (
              <FAQItem key={`mid-${i}`} item={item} keyId={`mid-${i}`} />
            ))}
          </motion.div>

          {/* ================= RIGHT FAQ ================= */}
          <motion.div
            className="flex flex-col gap-4"
            variants={columnVariants}
          >
            {rightFAQs.map((item, i) => (
              <FAQItem key={`right-${i}`} item={item} keyId={`right-${i}`} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

