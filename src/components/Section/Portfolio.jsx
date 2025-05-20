// ========================================================================
// FILE: /src/components/sections/Portfolio.jsx
// ========================================================================
// Portfolio section, simplified to directly showcase a larger CircularGallery
// with a simple title.
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from '../common/CircularGallary'; // Assuming this component exists and is functional

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = { // Used for the title and the gallery container
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        mass: 0.5
      }
    }
  };

  return (
    <section id="portfolio" className="relative py-20 md:py-28 overflow-hidden font-sans">
      {/* Dynamic Gradient Background - Preserved */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 z-0 dark:from-indigo-900/30 dark:via-gray-900/10 dark:to-purple-900/30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:4px_4px] opacity-10 dark:opacity-5" />
      </div>

      {/* Animated Grid Overlay - Preserved */}
      <div className="absolute inset-0 z-1 opacity-5 dark:opacity-3">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,_transparent_0px,_transparent_47px,_rgba(99,102,241,0.1)_47px,_rgba(99,102,241,0.1)_48px)]" />
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,_transparent_0px,_transparent_47px,_rgba(99,102,241,0.1)_47px,_rgba(99,102,241,0.1)_48px)]" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-5 relative z-10" // Content above backgrounds
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Simple Section Title */}
        <motion.div className="mb-12 md:mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            My Portfolios
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        {/* CircularGallery Container - No extra wrapper div */}
        <motion.div
          className="relative group w-full" // Make it full width to allow gallery to size itself
          variants={itemVariants}
        >
          {/* The CircularGallery itself. Its size will be determined by its own internal logic
              and the props you pass to it (like itemSize, radius, etc., if applicable)
              or by the width of this parent container.
              We remove the explicit padding from here to let the gallery use the space.
          */}
          <CircularGallery
            bend={3.5} // This prop likely affects the curvature
            textColor="#1e293b" // slate-800
            // textColorDark="#cbd5e1" // Example for dark mode
            borderRadius={0.15} // This prop likely affects item rounding
            itemClassName="hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-xl bg-white dark:bg-gray-700/50 rounded-lg"
            // You might need to pass props to CircularGallery to control its overall size or the size of its items
            // For example, if CircularGallery accepts an `itemSize` prop:
            // itemSize={150} // Example: 150px for each item in the gallery
            // Or if it accepts a `galleryHeight` prop:
            // galleryHeight="60vh" // Example: 60% of viewport height
          />

          {/* Decorative Elements - Positioned relative to this motion.div */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Animated CTA - Preserved */}
        <motion.div className="mt-16 md:mt-20 text-center" variants={itemVariants}>
          <a
            href="#contact"
            className="
              inline-flex items-center gap-3
              px-8 py-4
              bg-gradient-to-r from-indigo-600 to-purple-500
              text-white font-medium
              rounded-xl
              shadow-lg hover:shadow-xl
              transition-all
              group
              relative overflow-hidden
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-indigo-600 before:opacity-0 before:transition-opacity hover:before:opacity-100
            "
          >
            <span className="relative z-10">Explore Full Portfolio</span>
            <svg
              className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
