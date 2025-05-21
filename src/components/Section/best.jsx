import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Portfolio items data (URL for id:4 is corrected)
const portfolioItemsData = [
  { id: 1, type: 'image', image: `https://picsum.photos/seed/img1_tall_left_v2/500/800?grayscale&blur=1`, title: 'Digital Transformation Strategy' }, // For Left Tall
  { id: 2, type: 'image', image: `https://picsum.photos/seed/img2_top_mid_v2/800/500?grayscale&blur=1`, title: 'E-commerce Platform Build' },    // For Mid Top
  { id: 3, type: 'image', image: `https://picsum.photos/seed/21/800/600?grayscale`, title: 'UX Research Project' },                         // For Right Tall (black box)
  { id: 4, type: 'image', image: `https://picsum.photos/seed/10/800/600?grayscale&blur=1`, title: 'E-commerce Platform Build' }, // Originally itemMidRightPlaceholder - THIS WILL BE UNUSED to match the image
  { id: 5, type: 'image', image: `https://picsum.photos/seed/img3_bot_left_v2/800/500?grayscale&blur=1`, title: 'Mobile App UX Overhaul' },      // For Left Bottom
  { id: 6, type: 'image', image: `https://picsum.photos/seed/img4_bot_mid_v2/800/500?grayscale&blur=1`, title: 'Interactive Data Visualization' },// For Mid Bottom
  { id: 7, type: 'image', image: `https://picsum.photos/seed/img5_bot_right_v2/800/500?grayscale&blur=1`, title: 'Brand Storytelling Campaign' }, // For Right Bottom
];

const PortfolioItem = ({ item, className = '' }) => {
  if (!item || (item.type === 'image' && (typeof item.image !== 'string' || item.image.trim() === ''))) {
    return (
      <div className={`w-full h-full bg-gray-700 dark:bg-gray-800 rounded-lg shadow flex items-center justify-center text-gray-400 dark:text-gray-500 ${className}`}>
        Data Error
      </div>
    );
  }

  return (
    <motion.div
      className={`relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md cursor-pointer ${className}`}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <img
        src={item.image}
        alt={item.title || 'Portfolio item'}
        className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all duration-300 ease-in-out transform group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/600x400/7f1d1d/ffffff?text=Img+Error";
        }}
      />
      <div className="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-[8px] md:text-[9px] font-bold p-1 rounded-sm z-10">
        YA
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end p-2 z-10">
        <h3 className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-1.5 group-hover:translate-y-0">
          {item.title || 'View Project'}
        </h3>
      </div>
    </motion.div>
  );
};

const Best = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1 } },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' },
    }),
  };

  return (
    <section id="portfolio" className="py-4 md:py-8 bg-white dark:bg-gray-900 overflow-hidden">
      <motion.div
        className="container-responsive" // Or your preferred container class e.g., mx-auto px-4
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* 3-column grid. First column is now 0.5fr to make it thinner. */}
        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr_1fr] md:grid-rows-3 gap-1.5 md:gap-2.5 h-[500px]">
          
          {/* Column 1, Row 1 & 2 (Left Tall Image - now thinner) */}
          <motion.div 
            custom={0} 
            variants={gridItemVariants} 
            className="md:col-start-1 md:row-start-1 md:row-span-2"
          >
            <PortfolioItem item={portfolioItemsData[0]} className="h-full" />
          </motion.div>

          {/* Column 2, Row 1 (Middle Top Image) */}
          <motion.div 
            custom={1} 
            variants={gridItemVariants} 
            className="md:col-start-2 md:row-start-1"
          >
            <PortfolioItem item={portfolioItemsData[1]} className="h-full" />
          </motion.div>

          {/* Column 3, Row 1 & 2 (Right Tall Image - black box) */}
          <motion.div 
            custom={2} 
            variants={gridItemVariants} 
            className="md:col-start-3 md:row-start-1 md:row-span-2"
          >
            <PortfolioItem item={portfolioItemsData[2]} className="h-full" />
          </motion.div>
          
          {/* Column 1, Row 3 (Left Bottom Image) */}
          <motion.div 
            custom={3} 
            variants={gridItemVariants} 
            className="md:col-start-1 md:row-start-3"
          >
            <PortfolioItem item={portfolioItemsData[4]} className="h-full" />
          </motion.div>

          {/* Title Block: Column 2, Row 2 */}
          <motion.div
            custom={4} 
            variants={gridItemVariants}
            className="md:col-start-2 md:row-start-2 flex flex-col items-center justify-center p-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-1">
              Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
              I design impactful digital experiences
            </p>
          </motion.div>
          
          {/* Column 2, Row 3 (Middle Bottom Image) */}
          <motion.div 
            custom={5} 
            variants={gridItemVariants} 
            className="md:col-start-2 md:row-start-3"
          >
            <PortfolioItem item={portfolioItemsData[5]} className="h-full" />
          </motion.div>

          {/* Column 3, Row 3 (Right Bottom Image) */}
          <motion.div 
            custom={6} 
            variants={gridItemVariants} 
            className="md:col-start-3 md:row-start-3"
          >
            <PortfolioItem item={portfolioItemsData[6]} className="h-full" />
          </motion.div>

          {/* The extra motion.div that attempted col-start-4 and portfolioItemsData[7] has been removed 
              as it doesn't fit the 3-column layout depicted in the image and uses an out-of-bounds index. 
              The image shows 3 items in the bottom row. */}

        </div>
      </motion.div>
    </section>
  );
};

export default Best;