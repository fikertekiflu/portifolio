// ========================================================================
// FILE: /src/components/sections/Services.jsx
// ========================================================================
// User's corrected Services section with added pre-title and subtle enhancements.
// Radial gradient background applied to the entire section.
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';

const serviceItems = [
  {
    id: 1,
    title: "Digital Strategy",
    imageUrl: "/card.png",
    altText: "Digital Strategy service card",
  },
  {
    id: 2,
    title: "Branding & Identity",
    imageUrl: "/ca.png",
    altText: "Branding & Identity service card",
  },
  {
    id: 3,
    title: "Content Creation",
    imageUrl: "/c.png",
    altText: "Content Creation service card",
  },
  {
    id: 4,
    title: "Marketing Systems",
    imageUrl: "/car.png",
    altText: "Marketing Systems service card",
  },
];

const Services = () => {
  // --- Style Definitions ---
  const styles = {
    // Note: section gradient is applied via inline style in the <section> tag below
    preTitleIcon: "h-4 w-4 mr-2",
    preTitleText: "text-indigo-600", // Accent color for the pre-title
    mainHeadline: "text-gray-800",   // Darker text for good readability on light gradient
    cardImage: "w-full h-auto object-contain shadow-sm rounded-lg", // From your code
    // Class for the div wrapping each card, for hover shadow and layout
    cardWrapper: "relative transition-shadow duration-300 ease-out", 
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 } // Smooth stagger
    }
  };

  // Unified itemVariants for pre-title, headline, and cards for consistent entrance
  const itemVariants = {
    hidden: { opacity: 0, y: 25 }, // Slightly more y offset for a nicer entrance
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } // Smoother ease
    }
  };

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 overflow-hidden" // Added overflow-hidden for safety with scaling
      style={{
        // Radial gradient background for the entire section, as per your code
        background: 'radial-gradient(circle at center, #DB9393 0%, #F6F6F6 10%)'
      }}
    >
      <motion.div 
        className="max-w-3xl mx-auto px-4" // Your specified container size
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }} // Your viewport settings
      >
        {/* Section Header with Pre-title */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            className={`flex items-center justify-center mb-2`}
            variants={itemVariants} 
          >
            <img
              src="/first.svg" // Path to your icon in /public
              alt="" // Decorative
              className={styles.preTitleIcon}
            />
            <span className={`text-xs font-medium ${styles.preTitleText} uppercase tracking-wider`}>
              Services
            </span>
          </motion.div>
          <motion.h2 
            className={`text-3xl sm:text-4xl font-medium ${styles.mainHeadline} mb-3`} // Using defined style
            variants={itemVariants}
          >
            What I Do
          </motion.h2>
        </div>

        {/* Tighter Cards Grid - using your layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 px-2"> 
          {serviceItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${styles.cardWrapper} hover:shadow-xl`} // Added hover shadow to wrapper
              variants={itemVariants}
              whileHover={{ scale: 1.03 }} // Changed to scale up slightly
              layout="position" // From your code
            >
              <img 
                src={item.imageUrl} 
                alt={item.altText} 
                className={styles.cardImage} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;