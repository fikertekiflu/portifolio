import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// No need for react-icons/lu for this specific design

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple delay for animation trigger.
    // For scroll-triggered animation, use Intersection Observer.
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <section
      id="about" // For single-page navigation
      className="py-16 md:py-24 bg-white dark:bg-gray-900 font-sans overflow-hidden" // Light background
    >
      <motion.div
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        // Animate when isLoaded is true (or use a scroll trigger hook for on-scroll animation)
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Text Block (from your Figma image_1fc8ac.png) */}
        <div className="max-w-3xl mx-auto text-center">
          {/*
            The "About Mahder" title is part of the Hero section in the overall design (image_1f5fcf.png).
            This component focuses on the paragraph block below it.
            If you intended "About Mahder" to be a heading specifically for this text block,
            you can uncomment and style the h2 below.
          */}
          {/*
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            About Me
          </h2>
          */}

          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose">
            As a Digital Marketing
            {/* Inline image for your first icon */}
            <img
              src="/one.png" // Assumes one.png is in the public folder
              alt="decorative icon one"
              className="inline-block h-5 w-5 md:h-6 md:w-6 mx-1 align-middle" // Adjust size and alignment
            />
            Specialist, I Aim to Push the
            Boundaries of Creativity. With a Background in analytics
            and Digital
            {/* Inline image for your second icon */}
            <img
              src="/two.png" // Assumes two.png is in the public folder
              alt="decorative icon two"
              className="inline-block h-5 w-5 md:h-6 md:w-6 mx-1 align-middle" // Adjust size and alignment
            />
            Media, I've Been Able to Merge These
            Worlds for measurable impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
