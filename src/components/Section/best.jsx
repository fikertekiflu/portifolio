import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Updated Portfolio items data for the revised 7-image, 4-column layout
const portfolioItemsData = [
  // Item for C1R1-2 (Tall Left)
  { id: 1, type: 'image', image: `https://picsum.photos/seed/gallery_rev_c1_tall/400/600?grayscale&blur=1`, title: 'Strategic Design Initiative' },
  // Item for C1R3 (Left Bottom) -> User data had this as item 2, mapping to C2R1 in JSX
  { id: 2, type: 'image', image: `https://picsum.photos/seed/gallery_rev_c1_short/600/400?grayscale&blur=1`, title: 'User Experience Audit' },
  // Item for C2R1 (Column 2, Row 1) -> User data had this as item 3, mapping to C3R1-2 in JSX
  { id: 3, type: 'image', image: `https://picsum.photos/seed/gallery_rev_c2_r1/600/400?grayscale&blur=1`, title: 'Interactive Prototyping' },
  // This item (id:4) from original data is not explicitly used by index in the JSX below.
  // { id: 4, type: 'image', image: `https://picsum.photos/seed/8/800/600?grayscale`, title: 'Mobile-First Development' },
  // Item for C2R3 (Column 2, Row 3) -> User data had this as item 5, mapping to C1R3 in JSX
  { id: 5, type: 'image', image: `https://picsum.photos/seed/gallery_rev_c2_r3/600/400?grayscale&blur=1`, title: 'Mobile-First Development' },
  // Item for C3R1-3 (Column 3, Tall) -> User data had this as item 6, mapping to C2R3 in JSX
  { id: 6, type: 'image', image: `https://picsum.photos/seed/10/800/600?grayscale`, title: 'Brand Identity System' }, // Dark placeholder, was C3R1-3, now used for portfolioItemsData[5]
  // Item for C4R1-2 (Column 4, Tall) -> User data had this as item 7, mapping to C3R3 in JSX
  { id: 7, type: 'image', image: `https://picsum.photos/seed/gallery_rev_c4_tall/400/600?grayscale&blur=1`, title: 'E-commerce Optimization' },
  // Item for C4R3 (Column 4, Row 3) -> This would be portfolioItemsData[7] if used.
  // { id: 8, type: 'image', image: `https://picsum.photos/seed/gallery_rev_c4_short/600/400?grayscale&blur=1`, title: 'Content Management System' },
];
// Adjusted data array to match the 6 image items used in the JSX + 1 unused for safety.
const currentPortfolioItems = [
    portfolioItemsData[0], // For C1R1-2
    portfolioItemsData[1], // For C2R1
    portfolioItemsData[2], // For C3R1-2
    portfolioItemsData[3], // For C1R3 (was portfolioItemsData[4] in user's JSX, now using index 3 from original data)
    portfolioItemsData[4], // For C2R3 (was portfolioItemsData[5] in user's JSX, now using index 4 from original data)
    portfolioItemsData[5], // For C3R3 (was portfolioItemsData[6] in user's JSX, now using index 5 from original data)
];


const PortfolioItem = ({ item, className = '' }) => {
  // Check if item or item.image is missing or invalid
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
        // Ensure image covers the container and maintains aspect ratio
        className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all duration-300 ease-in-out transform group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null; // Prevents looping if fallback also fails
          e.target.src = "https://placehold.co/600x400/7f1d1d/ffffff?text=Img+Load+Error"; // Fallback image
        }}
      />
      {/* "YA" Logo */}
      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] md:text-xs font-bold p-1.5 rounded-sm z-10">
        YA
      </div>
      {/* Hover effect to show title */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end p-2.5 z-10">
        <h3 className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-2 group-hover:translate-y-0">
          {item.title || 'View Project'}
        </h3>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1, duration: 0.4 } },
  };

  // Animation variants for grid items (staggered)
  const gridItemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: (i) => ({ // `i` is the custom stagger index
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.07, duration: 0.35, ease: 'easeOut' },
    }),
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white mb-10 dark:bg-gray-900 overflow-hidden">
      <motion.div
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full"
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Grid container:
            - Mobile: Defaults to single column (grid-cols-1), height is auto.
            - Desktop (md+): 3 columns, 3 rows, fixed height.
        */}
        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr_1fr] md:grid-rows-3 gap-2.5 md:h-[600px]"> {/* Increased desktop height slightly for better fit */}

          {/* Column 1, Row 1 & 2 (Left Tall Image - now thinner) */}
          {/* Mobile: Full width, specific height. Desktop: Grid placement, h-auto (inherits from grid cell) */}
          <motion.div
            custom={0}
            variants={gridItemVariants}
            className="h-96 md:h-auto md:col-start-1 md:row-start-1 md:row-span-2"
          >
            <PortfolioItem item={currentPortfolioItems[0]} className="h-full" />
          </motion.div>

          {/* Column 2, Row 1 (Middle Top Image) */}
          <motion.div
            custom={1}
            variants={gridItemVariants}
            className="h-72 md:h-auto md:col-start-2 md:row-start-1"
          >
            <PortfolioItem item={currentPortfolioItems[1]} className="h-full" />
          </motion.div>

          {/* Column 3, Row 1 & 2 (Right Tall Image) */}
          <motion.div
            custom={2}
            variants={gridItemVariants}
            className="h-96 md:h-auto md:col-start-3 md:row-start-1 md:row-span-2"
          >
            <PortfolioItem item={currentPortfolioItems[2]} className="h-full" />
          </motion.div>

          {/* Column 1, Row 3 (Left Bottom Image) */}
          <motion.div
            custom={3}
            variants={gridItemVariants}
            className="h-72 md:h-auto md:col-start-1 md:row-start-3"
          >
            {/* User's JSX used portfolioItemsData[4], mapping to currentPortfolioItems[3] */}
            <PortfolioItem item={currentPortfolioItems[3]} className="h-full" />
          </motion.div>

          {/* Title Block: Column 2, Row 2 */}
          <motion.div
            custom={4}
            variants={gridItemVariants}
            // Mobile: Specific min-height. Desktop: Grid placement, h-auto.
            className="min-h-[10rem] md:min-h-0 md:h-auto md:col-start-2 md:row-start-2 flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2 text-center">
              Portfolios
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center">
              I design impactful digital experiences
            </p>
          </motion.div>

          {/* Column 2, Row 3 (Middle Bottom Image) */}
          <motion.div
            custom={5}
            variants={gridItemVariants}
            className="h-72 md:h-auto md:col-start-2 md:row-start-3"
          >
            {/* User's JSX used portfolioItemsData[5], mapping to currentPortfolioItems[4] */}
            <PortfolioItem item={currentPortfolioItems[4]} className="h-full" />
          </motion.div>

          {/* Column 3, Row 3 (Right Bottom Image) */}
          <motion.div
            custom={6}
            variants={gridItemVariants}
            className="h-72 md:h-auto md:col-start-3 md:row-start-3"
          >
            {/* User's JSX used portfolioItemsData[6], mapping to currentPortfolioItems[5] */}
            <PortfolioItem item={currentPortfolioItems[5]} className="h-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default App;
