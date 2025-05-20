import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock data for 7 portfolio items (5 images, 2 placeholders)
const portfolioItemsData = [
  { id: 1, type: 'image', image: `https://picsum.photos/seed/img1_tall_left_v2/500/800?grayscale&blur=1`, title: 'Digital Transformation Strategy' },
  { id: 2, type: 'image', image: `https://picsum.photos/seed/img2_top_mid_v2/800/500?grayscale&blur=1`, title: 'E-commerce Platform Build' },
  { id: 3, type: 'image', image: `https://picsum.photos/seed/21/800/600?grayscale`, title: 'E-commerce Platform Build' },
  { id: 4, type: 'image', image: `https://picsum.photos/seed/10/800/600?grayscaleblure&blur=1`, title: 'E-commerce Platform Build' },
  { id: 5, type: 'image', image: `https://picsum.photos/seed/img3_bot_left_v2/800/500?grayscale&blur=1`, title: 'Mobile App UX Overhaul' },
  { id: 6, type: 'image', image: `https://picsum.photos/seed/img4_bot_mid_v2/800/500?grayscale&blur=1`, title: 'Interactive Data Visualization' },
  { id: 7, type: 'image', image: `https://picsum.photos/seed/img5_bot_right_v2/800/500?grayscale&blur=1`, title: 'Brand Storytelling Campaign' },
];
// Changed seed slightly for picsum photos to avoid cache if re-testing.

const PortfolioItem = ({ item, className = '' }) => {
  // Validate item structure, especially for image types
  if (!item || (item.type === 'image' && (typeof item.image !== 'string' || item.image.trim() === ''))) {
    console.error("PortfolioItem received invalid or missing item data:", item);
    return (
      <div className={`w-full h-full bg-gray-700 dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-gray-400 dark:text-gray-500 ${className}`}>
        Data Error
      </div>
    );
  }

  // Placeholder Item Type
  if (item.type === 'placeholder') {
    return (
      <div className={`relative bg-black rounded-2xl shadow-md ${className}`}>
        {/* "YA" Logo Placeholder */}
        <div className="absolute bottom-2 left-2 md:bottom-2.5 md:left-2.5 bg-black/60 text-white text-[9px] md:text-[10px] font-bold p-1 rounded-sm z-10">
          YA
        </div>
      </div>
    );
  }

  // Image Item Type
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer ${className}`} // Increased border radius
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
          console.error(`Error loading image: ${item.image} for item ID: ${item.id}`);
        }}
      />
      {/* "YA" Logo Placeholder */}
      <div className="absolute bottom-2 left-2 md:bottom-2.5 md:left-2.5 bg-black/60 text-white text-[9px] md:text-[10px] font-bold p-1 rounded-sm z-10">
        YA
      </div>
      {/* Title overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end p-2.5 md:p-3 z-10">
        <h3 className="text-white text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
          {item.title || 'View Project'}
        </h3>
      </div>
    </motion.div>
  );
};

const Best = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1 } },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.07,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  const itemTallLeft           = portfolioItemsData[0];
  const itemTopMid             = portfolioItemsData[1];
  const itemTopRightPlaceholder  = portfolioItemsData[2];
  const itemMidRightPlaceholder  = portfolioItemsData[3];
  const itemBotLeft            = portfolioItemsData[4];
  const itemBotMid             = portfolioItemsData[5];
  const itemBotRight           = portfolioItemsData[6];

  return (
    <section
      id="portfolio"
      className="py-5 md:py-10 bg-white dark:bg-gray-900 font-sans overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6"
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Adjusted grid columns for narrower first column, and reduced gap */}
        <div
          className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1fr] md:grid-rows-3 gap-2 md:gap-3"
        >
          {/* Item 1 (Tall Left Image) - Col 1, Row 1&2 */}
          {itemTallLeft && (
            <motion.div custom={0} variants={gridItemVariants} className="md:row-span-2">
              <PortfolioItem item={itemTallLeft} className="w-full h-full" />
            </motion.div>
          )}

          {/* Item 2 (Top Middle Image) - Col 2, Row 1 */}
          {itemTopMid && (
            <motion.div custom={1} variants={gridItemVariants}>
              <PortfolioItem item={itemTopMid} className="w-full h-full" />
            </motion.div>
          )}

          {/* Item 3 (Top Right Placeholder) - Col 3, Row 1 */}
          {itemTopRightPlaceholder && (
            <motion.div custom={2} variants={gridItemVariants}>
              <PortfolioItem item={itemTopRightPlaceholder} className="w-full h-full" />
            </motion.div>
          )}

          {/* Title Block (Center) - Col 2, Row 2 */}
          <motion.div
            custom={3}
            variants={gridItemVariants}
            className="md:col-start-2 md:row-start-2 flex flex-col items-center justify-center text-center p-3"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
              Portfolios
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              I design impactful digital experiences
            </p>
          </motion.div>

          {/* Item 4 (Middle Right Placeholder) - Col 3, Row 2 */}
          {itemMidRightPlaceholder && (
            <motion.div custom={4} variants={gridItemVariants} className="md:col-start-3 md:row-start-2">
              <PortfolioItem item={itemMidRightPlaceholder} className="w-full h-full" />
            </motion.div>
          )}
          
          {/* Item 5 (Bottom Left Image) - Col 1, Row 3 */}
          {itemBotLeft && (
            <motion.div custom={5} variants={gridItemVariants} className="md:row-start-3 md:col-start-1">
              <PortfolioItem item={itemBotLeft} className="w-full h-full" />
            </motion.div>
          )}

          {/* Item 6 (Bottom Middle Image) - Col 2, Row 3 */}
          {itemBotMid && (
            <motion.div custom={6} variants={gridItemVariants} className="md:row-start-3 md:col-start-2">
              <PortfolioItem item={itemBotMid} className="w-full h-full" />
            </motion.div>
          )}

          {/* Item 7 (Bottom Right Image) - Col 3, Row 3 */}
          {itemBotRight && (
            <motion.div custom={7} variants={gridItemVariants} className="md:row-start-3 md:col-start-3">
              <PortfolioItem item={itemBotRight} className="w-full h-full" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Best;