// ========================================================================
// FILE: /src/components/sections/FAQ.jsx
// ========================================================================
// A modern and elegant "Frequently Asked Question" section with
// accordion functionality for displaying answers.
// Resolved merge conflict markers.
// ========================================================================
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, MinusCircle } from 'lucide-react'; // Icons for open/close state

// Define your FAQ data here.
// CRUCIAL: Ensure each 'id' is unique.
const faqData = [
  {
    id: 1, // Unique ID
    number: "01",
    question: "What Services do You Offer?",
    answer: "I offer a comprehensive suite of digital marketing services including SEO, content marketing, social media management, PPC advertising, email marketing, and data analytics to help your brand grow.",
  },
  {
    id: 2, // Unique ID
    number: "02",
    question: "What industries have you worked with?",
    answer: "I have experience working with a diverse range of industries, including e-commerce, technology, healthcare, local businesses, and non-profits. My strategies are adaptable to various market needs.",
  },
  {
    id: 3, // Unique ID
    number: "03",
    question: "How do you measure the success of a digital campaign?",
    answer: "Success is measured using key performance indicators (KPIs) relevant to the campaign goals, such as website traffic, conversion rates, lead generation, engagement metrics, and ROI, all tracked through detailed analytics reports.",
  },
  {
    id: 4, // Unique ID
    number: "04",
    question: "What platforms are you most experienced with? Do You Need From Me to Start The Project?",
    answer: "I'm experienced with major platforms like Google Ads, Google Analytics, Meta Business Suite (Facebook & Instagram), LinkedIn Ads, various email marketing tools, and SEO software. To start, I'll need a clear understanding of your business, goals, target audience, and any existing marketing efforts or assets.",
  },
  {
    id: 5, // Unique ID
    number: "05",
    question: "Do you create content or just handle strategy?",
    answer: "I can handle both! From developing a robust digital strategy to creating engaging content (written, visual, or video) and managing its distribution, I offer end-to-end solutions.",
  },
  {
    id: 6, // Unique ID
    number: "06",
    question: "Can you help grow my brand's online presence from scratch?",
    answer: "Absolutely. I specialize in building and enhancing online presence for new and existing brands, starting with foundational strategies and building up to comprehensive digital marketing campaigns.",
  },
  {
    id: 7, // Unique ID
    number: "07",
    question: "Do you offer one-time projects or ongoing marketing support?",
    answer: "I offer both. Whether you need a one-time consultation, a specific project like a website audit, or ongoing monthly marketing management and support, I can tailor my services to your needs.",
  },
  {
    id: 8, // Unique ID
    number: "08",
    question: "Can You How do you stay updated with the latest digital marketing trends? Work Within My Budget?",
    answer: "I stay updated through continuous learning: industry blogs, webinars, conferences, and certifications. Regarding budgets, I believe in transparent pricing and will work with you to create an effective plan that aligns with your available budget, focusing on delivering the best possible ROI.",
  },
];

// FAQ Item Component
const FAQItem = ({ item, isOpen, onClick }) => {
  const answerVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden' },
    visible: {
      opacity: 1,
      height: 'auto',
      marginTop: '1rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      overflow: 'hidden', // Keep hidden during animation then can be visible
    },
    exit: { // Ensure exit animation is smooth
        opacity: 0,
        height: 0,
        marginTop: 0,
        paddingTop: 0,
        paddingBottom: 0,
        transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    }
  };

  return (
    <motion.div
      // Corrected className by removing merge conflict markers
      className={`border border-brand-borderLight rounded-xl transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 hover:border-brand-primary/50 dark:border-gray-700 dark:hover:border-brand-primary/70
                  ${isOpen ? 'border-brand-primary dark:border-brand-primary shadow-lg' : 'shadow-sm'}`}
      layout // Added Framer Motion's layout prop for smoother animations during size changes
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left p-4 md:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="text-sm font-semibold text-brand-primary mr-3">{item.number}</span>
          <span className="text-md font-medium text-brand-textDark dark:text-gray-100">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <MinusCircle size={22} className="text-brand-primary" />
          ) : (
            <PlusCircle size={22} className="text-brand-textLight dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer" // This key is static for this specific child, which is correct
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="exit" // Use the defined exit variant
            className="px-4 md:px-5 text-brand-textLight dark:text-gray-300 text-sm md:text-base leading-relaxed border-t border-brand-borderLight dark:border-gray-700"
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

  useEffect(() => {
    const ids = faqData.map(item => item.id);
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
      console.warn("FAQ Warning: Duplicate IDs found in faqData. This can cause unexpected behavior.");
    }
  }, []);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle or open new, close old
  };

  // Framer Motion variants for the overall section and titles
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.15 }, // Adjusted stagger
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }, // Adjusted duration
    },
  };

  return (
    <section
      id="faq"
      // Ensure bg-brand-backgroundSubtle, section-padding, text-brand-textLight, text-brand-textDark are defined
      className="py-20 md:py-32 bg-brand-backgroundSubtle dark:bg-gray-800/30 section-padding font-sans"
    >
      <motion.div
        // Ensure container-responsive is defined
        className="container-responsive mx-auto px-4" // Added px-4 for safety
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Pre-title */}
        <motion.p
          className="text-xs font-medium text-brand-textLight dark:text-gray-400 uppercase tracking-widest mb-2 text-center md:text-left"
          variants={textContentVariants}
        >
          FAQ
        </motion.p>

        {/* Main Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold text-brand-textDark dark:text-white mb-12 md:mb-16 text-center md:text-left tracking-tight"
          variants={textContentVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id} // CRUCIAL: item.id MUST be unique
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
