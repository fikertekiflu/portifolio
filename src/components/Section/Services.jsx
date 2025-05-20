import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu'; // For the "Learn More" button icon

// Define your service items.
// Now using cardImageUrl for the full background image of the card.
const serviceItemsData = [
  {
    id: 1,
    title: "Digital Strategy",
    description: "Crafting targeted digital blueprints to elevate your brand's online presence and achieve measurable goals.",
    cardImageUrl: "/card1.png", // Path relative to the public folder
    learnMoreLink: "#" // Placeholder link
  },
  {
    id: 2,
    title: "Branding & Identity",
    description: "Developing unique brand identities that resonate with your audience and establish a strong market position.",
    cardImageUrl: "/card2.png", // Path relative to the public folder
    learnMoreLink: "#"
  },
  {
    id: 3,
    title: "Content Creation",
    description: "Producing compelling and engaging content tailored to your brand's voice and marketing objectives.",
    cardImageUrl: "/card3.png", // Path relative to the public folder
    learnMoreLink: "#"
  },
  {
    id: 4,
    title: "Marketing Systems",
    description: "Implementing and optimizing marketing automation and analytics systems for efficient campaign management.",
    cardImageUrl: "/card4.png", // Path relative to the public folder
    learnMoreLink: "#"
  },
];

const ServiceCard = ({ item, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="relative rounded-2xl overflow-hidden shadow-xl group transform transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl"
      style={{
        backgroundImage: `url('${item.cardImageUrl}')`, // Use the full card image as background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle overlay to enhance text readability if card images are very busy */}
      <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-15 transition-opacity duration-300"></div>

      {/* Content container: positions text on top of the background image */}
      {/* Using flex to push "Learn More" to the bottom */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between min-h-[260px] sm:min-h-[280px] md:min-h-[300px]">
        {/* Top part: Title and Description */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-200/90 mb-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-200">
            {/* line-clamp-3 will show 3 lines and add '...' if text is longer. Expands on hover. */}
            {/* You might need to install @tailwindcss/line-clamp: npm install -D @tailwindcss/line-clamp */}
            {/* Then add require('@tailwindcss/line-clamp') to your tailwind.config.js plugins array. */}
            {item.description}
          </p>
        </div>

        {/* Bottom part: Learn More Button */}
        <div>
          <a
            href={item.learnMoreLink}
            // Styling the button to match the small, dark button in image_d58ac2.png
            className="inline-flex items-center text-xs font-medium text-gray-200 
                       bg-black/50 hover:bg-black/70 backdrop-blur-sm
                       py-1.5 px-4 rounded-md
                       transition-all duration-200 ease-in-out
                       transform group-hover:scale-105 group/link"
          >
            LEARN MORE
            <LuArrowRight className="w-3 h-3 ml-1.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};


const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white dark:bg-gray-900 font-sans overflow-hidden section-padding" // Assuming section-padding is defined
    >
      <motion.div
        className="container-responsive mx-auto px-6" // Assuming container-responsive is defined
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div
          variants={textContentVariants}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">
            what i do.
          </p>
          <h2 className="text-xs text-gray-500 dark:text-gray-500">
            Here's what I can help you with.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {serviceItemsData.map((item) => (
            <ServiceCard key={item.id} item={item} variants={cardVariants} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
