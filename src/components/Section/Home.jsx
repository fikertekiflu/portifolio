import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 } },
  };

  return (
    // Hero section container
    <section
      id="home-section" // For potential single-page navigation
      // Using the reduced min-heights to prevent large empty space at the bottom of the section
      className="relative md:min-h-[880px] min-h-[73vh] w-full flex flex-col items-center justify-center text-center px-6 py-10 font-sans overflow-hidden"
      style={{
        backgroundImage: "url('/b.png')", // Assumes bg.png is in public folder
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // CRITICAL: Set backgroundPosition to 'top center' to prevent top cropping
        backgroundPosition: 'top center',
      }}
    >
      <motion.div
        // Adjust this transform as needed to position your content block vertically
        style={{ transform: 'translateY(80px)' }}
        className="relative z-10 max-w-4xl w-full mx-auto" // z-10 to be above overlay
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Main Text: "About Mahder" */}
        <motion.h1
          variants={textVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 mt-0 dark:text-white leading-tight md:mb-20"
        >
          About Mahder
        </motion.h1>

        {/* Main Image - Rectangular as per Figma */}
        <motion.div variants={imageVariants} className="md:mt-4 mt-7">
          <img
            src="/landingpic.png" // Your main image from public folder
            alt="Mahder Halie" // Updated alt text
            className="w-full max-w-md mx-auto rounded-lg object-cover shadow-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;