// ========================================================================
// FILE: /src/components/sections/Skills.jsx
// ========================================================================
// "Tools & Skills" section - Displaying only logos directly in the carousel,
// with minimal spacing and no individual containers.
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';

// Define your skill/tool items.
const skillItemsData = [
  { id: 1, name: "Google Add", logoUrl: "/Logo1.svg" },
  { id: 2, name: "Google Analytics", logoUrl: "/Logo2.svg" },
  { id: 3, name: "Meta", logoUrl: "/Logo3.svg" },
  { id: 4, name: "Canva", logoUrl: "/Logo4.svg" }, // Assuming Canva uses Logo4.svg
  { id: 5, name: "Jira", logoUrl: "/Logo5.svg" },   // Assuming Jira uses Logo5.svg
  { id: 6, name: "metricool", logoUrl: "/Logo6.svg" },// Assuming Metricool uses Logo6.svg
  // Add more items for a fuller carousel to ensure smooth scrolling
  // Example:
  // { id: 7, name: "Figma", logoUrl: "/figma.svg" },
  // { id: 8, name: "Photoshop", logoUrl: "/photoshop.svg" },
];

// Duplicate items for a smoother seamless scroll.
// More duplications = smoother loop. Adjust as needed.
const duplicatedSkillItems = [...skillItemsData, ...skillItemsData, ...skillItemsData, ...skillItemsData];

const Skills = () => {
  // --- Modern Color & Style Definitions ---
  const styles = {
    sectionBg: "bg-gray-50 dark:bg-gray-900",
    preTitleIcon: "h-3.5 w-3.5 mr-1.5",
    subHeadlineText: "text-indigo-600 dark:text-indigo-400",
    mainHeadline: "text-gray-800 dark:text-white",
  };

  // --- Animation Variants ---
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
      className={`py-16 md:py-24 ${styles.sectionBg} section-padding overflow-hidden`}
    >
      <motion.div
        className="container-responsive mx-auto text-center px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Pre-title with Icon */}
        <motion.div
          className={`flex items-center justify-center mb-2`}
          variants={textContentVariants}
        >
          <img
            src="/first.svg" // Path to your icon in the /public folder
            alt="" // Decorative icon
            className={styles.preTitleIcon}
          />
          <span className={`text-xs font-semibold ${styles.subHeadlineText} uppercase tracking-wider`}>
            Tools & Skills
          </span>
        </motion.div>

        <motion.h2
          className={`text-3xl sm:text-4xl font-bold ${styles.mainHeadline} mb-12 md:mb-16 tracking-tight`}
          variants={textContentVariants}
        >
          Explore My Tools & Skills
        </motion.h2>
      </motion.div>

      {/* Logos Carousel Container */}
      <motion.div
        className="mt-0 relative w-full" // Carousel takes full width
        variants={carouselContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Mask for fading edges (styling primarily in CSS) */}
        <div className="logo-carousel-mask"> {/* Ensure this mask has appropriate height */}
          <div className="flex items-center animate-scroll-logos">
            {duplicatedSkillItems.map((skill, index) => (
              // Each item is now just the image with margin for spacing
              <img
                key={`${skill.id}-${index}`}
                src={skill.logoUrl} // Ensure these paths are correct (e.g., /logos/googleAdd.png)
                alt={`${skill.name} logo`} // Name is still useful for alt text
                // Define the size of the logos directly and add horizontal margin for spacing
                // Reduced horizontal margin (mx-3 or mx-4)
                // Adjusted logo height
                className="
                  h-8 sm:h-10 md:h-12 w-auto object-contain flex-shrink-0
                  mx-3 md:mx-5 
                  transition-transform duration-300 ease-in-out
                  transform hover:scale-110
                "
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
