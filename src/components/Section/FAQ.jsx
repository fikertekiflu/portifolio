// ========================================================================
// FILE: /src/components/sections/FAQ.jsx
// ========================================================================
// A modern and elegant "Frequently Asked Question" section with
// accordion functionality for displaying answers.
// ========================================================================
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, MinusCircle } from 'lucide-react'; // Icons for open/close state

// Define your FAQ data here.
// CRUCIAL: Replace placeholder answers with your actual content.
const faqData = [
  {
    id: 1,
    number: "01",
    question: "What Services do You Offer?",
    answer: "I offer a comprehensive suite of digital marketing services including SEO, content marketing, social media management, PPC advertising, email marketing, and data analytics to help your brand grow.",
  },
  {
    id: 2,
    number: "02",
    question: "What industries have you worked with?",
    answer: "I have experience working with a diverse range of industries, including e-commerce, technology, healthcare, local businesses, and non-profits. My strategies are adaptable to various market needs.",
  },
  {
    id: 3,
    number: "03",
    question: "How do you measure the success of a digital campaign?",
    answer: "Success is measured using key performance indicators (KPIs) relevant to the campaign goals, such as website traffic, conversion rates, lead generation, engagement metrics, and ROI, all tracked through detailed analytics reports.",
  },
  {
    id: 4,
    number: "04",
    question: "What platforms are you most experienced with? Do You Need From Me to Start The Project?",
    answer: "I'm experienced with major platforms like Google Ads, Google Analytics, Meta Business Suite (Facebook & Instagram), LinkedIn Ads, various email marketing tools, and SEO software. To start, I'll need a clear understanding of your business, goals, target audience, and any existing marketing efforts or assets.",
  },
  {
    id: 5,
    number: "05",
    question: "Do you create content or just handle strategy?",
    answer: "I can handle both! From developing a robust digital strategy to creating engaging content (written, visual, or video) and managing its distribution, I offer end-to-end solutions.",
  },
  {
    id: 6,
    number: "06",
    question: "Can you help grow my brand's online presence from scratch?",
    answer: "Absolutely. I specialize in building and enhancing online presence for new and existing brands, starting with foundational strategies and building up to comprehensive digital marketing campaigns.",
  },
  {
    id: 7,
    number: "07",
    question: "Do you offer one-time projects or ongoing marketing support?",
    answer: "I offer both. Whether you need a one-time consultation, a specific project like a website audit, or ongoing monthly marketing management and support, I can tailor my services to your needs.",
  },
  {
    id: 8,
    number: "08",
    question: "Can You How do you stay updated with the latest digital marketing trends? Work Within My Budget?",
    // Note: The question in the screenshot seems to be two combined. I'll answer both.
    answer: "I stay updated through continuous learning: industry blogs, webinars, conferences, and certifications. Regarding budgets, I believe in transparent pricing and will work with you to create an effective plan that aligns with your available budget, focusing on delivering the best possible ROI.",
  },
];

// FAQ Item Component
const FAQItem = ({ item, isOpen, onClick }) => {
  const answerVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      marginTop: '1rem', // Space between question and answer
      paddingTop: '1rem',
      paddingBottom: '1rem',
      transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, // Smooth ease
    },
  };

  return (
    <motion.div
      className="border border-brand-borderLight rounded-xl transition-all duration-300 ease-in-out
                 bg-white hover:border-brand-primary/50"
      // Add a subtle shadow on hover or when open if desired:
      // whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
      // animate={isOpen ? { borderColor: "var(--color-brand-primary)" } : {}} // Example with CSS var
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left p-4 md:p-5 focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="text-sm font-semibold text-brand-primary mr-3">{item.number}</span>
          <span className="text-md font-medium text-brand-textDark">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <MinusCircle size={22} className="text-brand-primary" />
          ) : (
            <PlusCircle size={22} className="text-brand-textLight hover:text-brand-primary" />
            // The screenshot shows a filled dot. If you prefer that:
            // <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-brand-primary' : 'bg-gray-400'}`}></div>
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="px-4 md:px-5 text-brand-textLight text-sm md:text-base leading-relaxed border-t border-brand-borderLight"
            // Added border-t for a separator line above the answer
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Index of the currently open FAQ item

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle or open new, close old
  };

  // Framer Motion variants for the overall section and titles
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-brand-backgroundSubtle section-padding"
    >
      <motion.div
        className="container-responsive mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Pre-title */}
        <motion.p
          className="text-xs font-medium text-brand-textLight uppercase tracking-widest mb-2 text-center md:text-left"
          variants={textContentVariants}
        >
          FAQ
        </motion.p>

        {/* Main Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold text-brand-textDark mb-12 md:mb-16 text-center md:text-left tracking-tight"
          variants={textContentVariants}
        >
          Frequently Asked Question
        </motion.h2>

        {/* FAQ Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
          variants={textContentVariants} // Animate the grid container as well
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;
