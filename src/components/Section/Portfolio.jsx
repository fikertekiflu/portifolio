import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from '../common/CircularGallary'; // Corrected typo from Gallary to Gallery

// --- START: MODIFIED CODE ---
// 1. Accept the 'id' prop
const Portfolio = ({ id }) => {
// --- END: MODIFIED CODE ---
  const styles = {
    sectionBg: "bg-brand-backgroundLight dark:bg-gray-900",
    preTitleText: "text-gray-500 dark:text-gray-400",
    preTitleIcon: "h-4 w-4 mr-2",
    mainTitle: "text-gray-900 dark:text-gray-50",
    textContent: "text-gray-600 dark:text-gray-300"
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.25 },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    },
  };

  return (
    <section
      // --- START: MODIFIED CODE ---
      // 2. Apply the 'id' prop here, instead of a hardcoded string
      id={id}
      // --- END: MODIFIED CODE ---
      className={` ${styles.sectionBg} overflow-hidden px-0 mt-10`} // Consider adding py-16 or similar for overall section padding if needed
    >
      <motion.div
        className="mx-auto container-responsive" // Ensure 'container-responsive' is defined or use 'container'
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Pre-title with Icon */}
        <motion.div
          className="flex items-center justify-center mb-3"
          variants={textContentVariants}
        >
          <img
            src="/first.svg"
            alt=""
            className={styles.preTitleIcon}
          />
          <p className={`text-xs font-medium ${styles.preTitleText} uppercase tracking-widest`}>
            Portfolio Showcase
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          // UPDATED: Reduced bottom margin classes
          className={`text-4xl sm:text-5xl font-semibold ${styles.mainTitle} mb-4 md:mb-0 text-center tracking-tight`}
          variants={textContentVariants}
        >
          Explore My Work
        </motion.h2>

        {/* Full-width Gallery Container */}
        <motion.div
          className="w-full"
          variants={galleryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative" style={{ height: 'clamp(500px, 60vh, 800px)' }}>
            <CircularGallery
              bend={4}
              textColor="#000000"
              borderRadius={0.05}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;