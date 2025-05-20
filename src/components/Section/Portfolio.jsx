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

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
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
      className="py-20 md:py-32 bg-brand-backgroundSubtle section-padding" 
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
        <motion.h2 
          className="text-4xl sm:text-5xl font-semibold text-brand-textDark mb-6 md:mb-8 tracking-tight"
          variants={textContentVariants}
        >
          Explore My Work
          {/* Or "My Portfolio", "Featured Projects" */}
        </motion.h2>

        {/* Introductory Text */}
        <motion.p 
          className="text-lg md:text-xl text-brand-textLight leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16"
          variants={textContentVariants}
        >
          Here's a selection of projects that showcase my skills and passion for creating impactful digital solutions. Dive in and explore!
        </motion.p>

        {/* Circular Gallery */}
        <motion.div 
          className="w-full max-w-12xl mx-auto" // Constrain width of the gallery container
          variants={galleryVariants}
        >
          <div style={{ height: '600px', position: 'relative'}}> 
            {/* Added borderRadius and overflow:hidden for a cleaner look if gallery has sharp edges */}
            {/* The background of this div can be styled if the gallery itself is transparent */}
            {/* e.g., className="bg-brand-backgroundLight shadow-xl rounded-lg" */}
            <CircularGallery 
              bend={3} 
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