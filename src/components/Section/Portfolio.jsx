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

 const styles = {
    
    preTitleText: "text-gray-500 dark:text-gray-400", 
    preTitleIcon: "h-4 w-4 mr-2", 
    mainTitle: "text-gray-900 dark:text-gray-50",
    // Light gray line color
  };
  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
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
      className=" section-padding"
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
      <motion.div 
  className="flex items-center justify-center mb-3 relative"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-20%" }}
  variants={{}}
>
  {/* Animated Particles Background */}
  <motion.div
    className="absolute inset-0 pointer-events-none"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.4
        }
      }
    }}
  >
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-brand-primary rounded-full"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            x: `calc(${Math.random() * 100 - 50}%)`,
            y: `calc(${Math.random() * 100 - 50}%)`,
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 1
            }
          }
        }}
      />
    ))}
  </motion.div>

  {/* Animated Icon with Morphing */}
  <motion.svg
    viewBox="0 0 24 24"
    className="h-6 w-6 mr-2 text-brand-primary"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0, scale: 0.5, rotate: -45 },
      visible: { 
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.2
        }
      }
    }}
    whileHover={{
      scale: 1.1,
      rotate: [0, -15, 15, 0],
      transition: { 
        duration: 1.2,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor"
      initial={{ pathLength: 0 }}
      animate={{
        pathLength: [0, 1, 0.8, 1],
        pathOffset: [0, 0.1, 0],
        fill: ["#000", "#4f46e5", "#000"]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.svg>

  {/* Text with Gradient Animation */}
  <motion.p 
    className="text-xs font-medium bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent uppercase tracking-widest"
    initial={{ opacity: 0, x: -20 }}
    animate={{
      opacity: 1,
      x: 0,
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
    }}
    transition={{
      opacity: { duration: 0.4, delay: 0.3 },
      x: { duration: 0.3, delay: 0.3 },
      backgroundPosition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }
    }}
  >
    FAQ
  </motion.p>
</motion.div>
                    <motion.h2
                              className={`text-4xl sm:text-5xl font-semibold ${styles.mainTitle} mb-16 md:mb-20 text-center tracking-tight`}
                              variants={textContentVariants}
                            >
                             Frequently asked questions
                            </motion.h2>

        {/* Circular Gallery */}
        <motion.div 
          className="w-full max-w-12xl mx-auto" // Constrain width of the gallery container
          variants={galleryVariants}
        >
          <div style={{ height: '400px', position: 'relative'}}>
            {/* Added borderRadius and overflow:hidden for a cleaner look if gallery has sharp edges */}
            {/* The background of this div can be styled if the gallery itself is transparent */}
            {/* e.g., className="bg-brand-backgroundLight shadow-xl rounded-lg" */}
            <CircularGallery 
              bend={4} 
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