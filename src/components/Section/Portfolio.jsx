// ========================================================================
// FILE: /src/components/sections/Portfolio.jsx
// ========================================================================
// Portfolio section with added pre-title using accent color.
// Existing complex background and gradient main title are preserved.
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from '../common/CircularGallary'; // Assuming this component exists and is functional

const Portfolio = () => {
  // --- Style Definitions for new elements ---
  const styles = {
    preTitleIcon: "h-4 w-4 mr-2",
    preTitleText: "text-gray-600", // Accent color for the pre-title
    // Other colors are mostly handled by existing specific classes or gradients
  };

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

  const itemVariants = { // Used for pre-title, main header, paragraph, gallery, CTA
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
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      {/* Dynamic Gradient Background - Preserved from your code */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:4px_4px] opacity-10" />
      </div>

      {/* Animated Grid Overlay - Preserved from your code */}
      <div className="absolute inset-0 z-1 opacity-5">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,_transparent_0px,_transparent_47px,_rgba(99,102,241,0.1)_47px,_rgba(99,102,241,0.1)_48px)]" />
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,_transparent_0px,_transparent_47px,_rgba(99,102,241,0.1)_47px,_rgba(99,102,241,0.1)_48px)]" />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-5 relative z-10" // Added relative z-10 to ensure content is above backgrounds
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Pre-title with Icon - NEW */}
        <motion.div
          className="flex items-center justify-center mb-3 text-center" 
          variants={itemVariants} 
        >
          <img 
            src="/first.svg" // Path to your icon in the /public folder
            alt="" // Decorative icon
            className={styles.preTitleIcon} 
          />
          <span className={`text-sm font-medium ${styles.preTitleText} uppercase tracking-wider`}>
            Portfolio
          </span>
        </motion.div>

        {/* Section Header - Preserved from your code */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {/* Gradient text is a key feature, so it's kept */}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              Curated Excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content - Preserved from your code */}
        <div className="relative z-10"> {/* Ensured content within this div is also above section-wide pseudo-backgrounds if any confusion */}
          <motion.p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-20 text-center"
            variants={itemVariants}
          >
            Selected projects demonstrating digital innovation and measurable business impact through strategic marketing solutions.
          </motion.p>

          {/* Enhanced Gallery Container - Preserved from your code */}
          <motion.div 
            className="relative group" // Added 'group' for potential future nested hover effects
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.04)_0%,_transparent_60%)]" />
              
              <div className="p-8 md:p-12">
                <CircularGallery 
                  bend={3.5}
                  textColor="#1e293b" // slate-800
                  borderRadius={0.15}
                  itemClassName="hover:scale-105 transition-transform duration-300 cursor-pointer"
                  // renderItem prop and its internal structure are assumed to be defined within CircularGallery or passed correctly
                />
              </div>
            </div>

            {/* Decorative Elements - Preserved from your code */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10" /> {/* Sent behind card */}
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10" /> {/* Sent behind card */}
          </motion.div>

          {/* Animated CTA - Preserved from your code */}
          <motion.div className="mt-20 text-center" variants={itemVariants}>
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
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;