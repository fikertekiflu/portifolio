import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations

const Home = () => { // Renamed to Home to match user's file name
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
      id="home" // For potential single-page navigation
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 font-sans overflow-hidden"
      style={{
        backgroundImage: "url('/b.png')", // Assumes bg.png is in public folder
        backgroundSize: 'cover',
        // Adjusted backgroundPosition to be slightly lower.
        // You can use 'center top', 'center 20%', 'center 80px' etc.
        // 'center 60%' means the center of the image is at 60% from the top of the container.
         // Try adjusting this value (e.g., 'center 70%', 'center bottom')
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional: Add a subtle overlay for better text readability if bg.png is very busy */}
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}

      <motion.div
        className="relative z-10 max-w-4xl w-full mx-auto" // z-10 to be above overlay
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Main Text: "About Mahder" */}
        <motion.h1
          variants={textVariants}
          // Added some top padding to the text to push it down relative to the viewport top,
          // giving more space for the top part of the background image.
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 dark:text-white mb-20 md:mb-12 leading-tight pt-36 md:pt-46"
        >
          About Mahder
        </motion.h1>

        {/* Main Image - Rectangular as per Figma */}
        <motion.div variants={imageVariants} className="mt-16 md:mt-20">
          <img
            src="/Image.png" // Your main image from public folder
            alt="Mahder Halie" // Updated alt text
            // Reduced max-w- for a smaller image. Try md, sm, or specific pixel/rem values.
            className="w-full max-w-md mx-auto rounded-lg object-cover shadow-xl" // Changed max-w-lg to max-w-md
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
