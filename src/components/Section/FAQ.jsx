import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";

const faqData = [
  {
    number: "01",
    question: "What Services do You Offer?",
    answer: "I offer digital marketing services including SEO, social media management, email marketing, and more.",
  },
  {
    number: "02",
    question: "What industries have you worked with?",
    answer: "I’ve worked with e-commerce, tech, healthcare, local businesses, and non-profits.",
  },
  {
    number: "03",
    question: "How do you measure campaign success?",
    answer: "By tracking KPIs such as traffic, conversions, leads, and ROI using analytics.",
  },
  {
    number: "04",
    question: "Do you create content or just handle strategy?",
    answer: "I can do both — content creation and strategic planning for digital growth.",
  },
  {
    number: "05",
    question: "Can you work within my budget?",
    answer: "Yes. I tailor marketing plans based on your budget and ROI goals.",
  },
  {
    number: "06",
    question: "Do you offer one-time projects?",
    answer: "Yes, I offer both one-time audits and ongoing marketing support.",
  },
  {
    number: "07",
    question: "Can you build my online presence from scratch?",
    answer: "Absolutely. I help brands establish their digital footprint from the ground up.",
  },
  {
    number: "08",
    question: "How do you stay updated on trends?",
    answer: "I follow blogs, webinars, and industry news daily to stay ahead of the curve.",
  },
];

const firstColumn = faqData.slice(0, Math.ceil(faqData.length / 2));
const secondColumn = faqData.slice(Math.ceil(faqData.length / 2));

const FAQItem = ({ item, isOpen, onClick }) => (
  <div
    className={`rounded-2xl p-6 mb-6 transition-all duration-300 shadow-sm bg-white dark:bg-gray-800 border ${
      isOpen ? "border-brand-primary shadow-lg" : "border-gray-200 hover:border-brand-primary/60"
    }`}
  >
    <button onClick={onClick} className="w-full text-left flex justify-between items-start">
      <div className="flex items-start space-x-4">
        <span className="text-lg font-semibold text-brand-primary">{item.number}</span>
        <span className="text-xl font-semibold text-gray-900 dark:text-white">
          {item.question}
        </span>
      </div>
      <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="mt-1 ml-2">
        {isOpen ? (
          <MinusCircle className="h-6 w-6 text-brand-primary" />
        ) : (
          <PlusCircle className="h-6 w-6 text-gray-400 hover:text-brand-primary" />
        )}
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p>{item.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-28 px-32 md:px-36 lg:px-36 bg-gray-50 dark:bg-gray-900">
      <div className="mb-16">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-2">
          FAQ
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          {firstColumn.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openId === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div className="flex-1">
          {secondColumn.map((item, index) => {
            const realIndex = index + firstColumn.length;
            return (
              <FAQItem
                key={realIndex}
                item={item}
                isOpen={openId === realIndex}
                onClick={() => handleClick(realIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
