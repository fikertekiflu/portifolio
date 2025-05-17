// ========================================================================
// FILE: /src/components/sections/Skills.jsx
// ========================================================================
// Enhanced "Tools & Skills" section - Modernized Styling with Pre-title Icon
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';

// Define your skill/tool items.
const skillItemsData = [
  { id: 1, logoUrl: "/googleAdd.png" }, // Ensure paths are correct
  { id: 2, logoUrl: "/googleAnalytics.png" },
  { id: 3, logoUrl: "/meta.png" },
  { id: 4, logoUrl: "/canva.png" },
  { id: 5, logoUrl: "/jira.png" },
  { id: 6, logoUrl: "/metric.png" },
  // Add more items if available for better visual density, or adjust duplication logic
];

// Triplicate for a smoother seamless scroll.
const duplicatedSkillItems = [...skillItemsData, ...skillItemsData, ...skillItemsData];

const Skills = () => {
  // --- Modern Color & Style Definitions ---
  const styles = {
    sectionBg: "bg-gray-50", // Clean, light background for the section
    preTitleIcon: "h-4 w-4 mr-2", // Style for the icon next to the pre-title text
    subHeadlineText: "text-indigo-600", // Vibrant accent for the sub-headline text
    mainHeadline: "text-gray-900", // Strong, dark gray for the main headline
    skillItemBg: "bg-white",
    skillItemBorder: "border-gray-200", // Subtle border for skill items
    skillItemShadow: "shadow-lg",
    skillItemHoverShadow: "hover:shadow-xl", // Slightly more pronounced shadow on hover
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const textContentVariants = { // Variants for pre-title and main headline
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const carouselContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 md:py-32 ${styles.sectionBg} section-padding`} 
      // IMPORTANT: Ensure the fade color in your CSS for '.logo-carousel-mask::before/after'
      // matches the new section background (e.g., the color of 'bg-gray-50').
    >
      <motion.div
        className="container-responsive mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Pre-title with Icon */}
        <motion.div
          className={`flex items-center justify-center mb-2`} // Centering container
          variants={textContentVariants} // Apply animation to this container
        >
          <img
            src="/first.svg" // Path to your icon in the /public folder
            alt="" // Decorative icon
            className={styles.preTitleIcon}
          />
          <span className={`text-sm font-medium ${styles.subHeadlineText} uppercase tracking-wider`}>
            Tools & Skills
          </span>
        </motion.div>

        <motion.h2
          className={`text-4xl sm:text-5xl font-semibold ${styles.mainHeadline} mb-12 md:mb-16 tracking-tight`}
          variants={textContentVariants}
        >
          Explore My Tools & Skills
        </motion.h2>
      </motion.div>

      {/* Logos Carousel Container */}
      <motion.div
        className="mt-8 relative w-full max-w-6xl mx-auto"
        variants={carouselContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Mask for fading edges (styling primarily in CSS) */}
        <div className="logo-carousel-mask"> 
          <div className="flex items-center animate-scroll-logos">
            {duplicatedSkillItems.map((skill, index) => (
              <div
                key={`${skill.id}-${index}-${Math.random()}`} // Current key structure
                className={`
                  flex-shrink-0 mx-6 md:mx-10 p-5 
                  ${styles.skillItemBg} 
                  ${styles.skillItemShadow} ${styles.skillItemHoverShadow}
                  rounded-2xl border ${styles.skillItemBorder}
                  transition-all duration-300 ease-in-out 
                  transform hover:scale-105 hover:-translate-y-1
                `}
              >
                <img
                  src={skill.logoUrl}
                  alt={`Skill logo ${skill.id}`}
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;