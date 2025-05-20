import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock data for 6 portfolio items to fit the specific layout
const portfolioItemsData = [
  { id: 1, image: `https://picsum.photos/seed/galleryA/600/800?grayscale&blur=1`, title: 'Creative Campaign' }, // Tall
  { id: 2, image: `https://picsum.photos/seed/galleryB/800/500?grayscale&blur=1`, title: 'Brand Identity' },   // Standard/Wide
  { id: 3, image: `https://picsum.photos/seed/galleryC/600/800?grayscale&blur=1`, title: 'Web Design' },      // Tall
  { id: 4, image: `https://picsum.photos/seed/galleryD/800/500?grayscale&blur=1`, title: 'UX Research' },    // Standard/Wide
  { id: 5, image: `https://picsum.photos/seed/galleryD/800/500?grayscale&blur=1`, title: 'Mobile App' },    // Standard/Wide
    // Standard/Wide
  { id: 6, image: `https://picsum.photos/seed/galleryF/800/500?grayscale&blur=1`, title: 'Illustration Set' },// Standard/Wide
];
// Note: Added &blur=1 to picsum photos to simulate the initial blur,
// as Tailwind's filter blur might not apply until hover if the image isn't fully loaded.
// The CSS blur will still work on hover.

const PortfolioItem = ({ item, className = '' }) => {
  if (!item || typeof item.image !== 'string' || item.image.trim() === '') {
    console.error("PortfolioItem received invalid or missing item data:", item);
    return (
        <div className={`w-full h-full bg-gray-700 dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-gray-400 dark:text-gray-500 ${className}`}>
            Data Error
        </div>
    );
  }

  return (
    <motion.div
      className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl cursor-pointer ${className}`}
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

const Best= () => {
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
        delay: i * 0.07, // Faster stagger
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  // Define specific items for the layout
  const item0 = portfolioItemsData[0]; // Top-left (tall)
  const item1 = portfolioItemsData[1]; // Top-center
  const item2 = portfolioItemsData[2]; // Top-right (tall)
  const item3 = portfolioItemsData[3]; // Bottom-left
  const item4 = portfolioItemsData[4]; // Bottom-center
  const item5 = portfolioItemsData[5]; // Bottom-right

  // Define base heights for grid cells to make items smaller
  const shortItemHeight = "h-36 sm:h-40 md:h-44 lg:h-48"; // Approx 144px to 192px
  const tallItemHeight = "h-72 sm:h-80 md:h-96 lg:h-[30rem]"; // Approx double, 288px to 480px
                                                          // For md:h-96, short would be md:h-48 (if gap is 0)
                                                          // With gap-4 (1rem), tall = 2*short + gap. So if short is h-44 (176px), tall is 2*176+16 = 368px (h-92 approx)
                                                          // Let's try: short = h-44 (176px), tall = h-[calc(2*11rem+1rem)] = h-[23rem] = h-92 (368px)
                                                          // Or more simply: short: h-44, tall: row-span-2 with grid-rows-2 for these items

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-white dark:bg-gray-900 font-sans overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6"
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/*
          Grid structure to mimic the Figma design.
          Using a 3-column layout on medium screens and up.
          The grid will have 3 defined rows of equal height for simplicity in this iteration.
          Items will span rows as needed.
        */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-3 md:gap-4" // Reduced gap
          // style={{ gridTemplateRows: 'repeat(3, minmax(0, 1fr))' }} // Make rows equal height
        >
          {/* Item 1 (Top-Left, Tall) */}
          {item0 && (
            <motion.div custom={0} variants={gridItemVariants} className="md:row-span-2"> {/* Spans 2 rows */}
              <PortfolioItem item={item0} className={`w-full ${tallItemHeight}`} />
            </motion.div>
          )}

          {/* Item 2 (Top-Center) */}
          {item1 && (
            <motion.div custom={1} variants={gridItemVariants}>
              <PortfolioItem item={item1} className={`w-full ${shortItemHeight}`} />
            </motion.div>
          )}

          {/* Item 3 (Top-Right, Tall) */}
          {item2 && (
            <motion.div custom={3} variants={gridItemVariants} className="md:row-span-2"> {/* Spans 2 rows */}
              <PortfolioItem item={item2} className={`w-full ${tallItemHeight}`} />
            </motion.div>
          )}

          {/* Title Block (Center, below Item 2) */}
          <motion.div
            custom={2}
            variants={gridItemVariants}
            className="md:col-start-2 md:row-start-2 flex flex-col items-center justify-center text-center p-3" // Reduced padding
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1"> {/* Reduced font size & margin */}
              Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400"> {/* Reduced font size */}
              I design impactful digital experiences
            </p>
          </motion.div>

          {/* Bottom Row Items */}
          {item3 && (
            <motion.div custom={4} variants={gridItemVariants} className="md:row-start-3 md:col-start-1">
              <PortfolioItem item={item3} className={`w-full ${shortItemHeight}`} />
            </motion.div>
          )}
          {item4 && (
            <motion.div custom={5} variants={gridItemVariants} className="md:row-start-3 md:col-start-2">
              <PortfolioItem item={item4} className={`w-full ${shortItemHeight}`} />
            </motion.div>
          )}
           {item5 && (
            <motion.div custom={6} variants={gridItemVariants} className="md:row-start-3 md:col-start-3">
              <PortfolioItem item={item5} className={`w-full ${shortItemHeight}`} />
            </motion.div>
           )}
        </div>
      </motion.div>
    </section>
  );
};

export default Best;
