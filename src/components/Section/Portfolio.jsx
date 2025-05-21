import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from '../common/CircularGallary'; // Assuming CircularGallery.jsx is in the same directory

const Portfolio = () => {
  // Framer Motion variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

 const styles = {
    
    preTitleText: "text-gray-500 dark:text-gray-400", 
    preTitleIcon: "h-4 w-4 mr-2", 
    mainTitle: "text-gray-900 dark:text-gray-50",
    // Light gray line color
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
        delay: 0.5, // Delay gallery animation slightly after text
      },
    },
  };

  return (
    <section
      id="portfolio"
      className=" section-padding"
      // Using theme colors. Adjust bg-brand-backgroundSubtle or use bg-brand-backgroundLight
    >
      <motion.div
        className="container-responsive mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is visible
      >
        {/* Section Title */}
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
                        FAQ
                      </p>
                    </motion.div>
                    <motion.h2
                              className={`text-4xl sm:text-5xl font-semibold ${styles.mainTitle} mb-16 md:mb-20 text-center tracking-tight`}
                              variants={textContentVariants}
                            >
                             Frequently asked questions
                            </motion.h2>

        {/* Circular Gallery */}
        <motion.div 
          className="w-full max-w-12xl mx-auto" // Constrain width of the gallery container
          variants={galleryVariants}
        >
          <div style={{ height: '400px', position: 'relative'}}>
            {/* Added borderRadius and overflow:hidden for a cleaner look if gallery has sharp edges */}
            {/* The background of this div can be styled if the gallery itself is transparent */}
            {/* e.g., className="bg-brand-backgroundLight shadow-xl rounded-lg" */}
            <CircularGallery 
              bend={4} 
              textColor="#000000" // White text as specified
              borderRadius={0.05} 
              // Add other props your CircularGallery component might need
              // items={[ ...your project items... ]}
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Portfolio;