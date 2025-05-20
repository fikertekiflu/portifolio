import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu'; // For the "Learn More" button icon

// Define your service items.
const serviceItemsData = [
  {
    id: 1,
    title: "Digital Strategy",
    description: "Crafting targeted digital blueprints to elevate your brand's online presence and achieve measurable goals.",
    iconUrl: "/bulb.svg", // Path relative to the public folder
    learnMoreLink: "#" // Placeholder link
  },
  {
    id: 2,
    title: "Branding & Identity",
    description: "Developing unique brand identities that resonate with your audience and establish a strong market position.",
    iconUrl: "/cup.svg", // Path relative to the public folder
    learnMoreLink: "#"
  },
  {
    id: 3,
    title: "Content Creation",
    description: "Producing compelling and engaging content tailored to your brand's voice and marketing objectives.",
    iconUrl: "/point.svg", // Path relative to the public folder
    learnMoreLink: "#"
  },
  {
    id: 4,
    title: "Marketing Systems",
    description: "Implementing and optimizing marketing automation and analytics systems for efficient campaign management.",
    iconUrl: "/star.svg", // Path relative to the public folder
    learnMoreLink: "#"
  },
];

const ServiceCard = ({ item, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="relative rounded-2xl overflow-hidden shadow-xl group transform transition-all duration-300 ease-out hover:scale-[1.03]"
      style={{
        backgroundImage: `url('/Rectangle.png')`, // Purple rectangle background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional: Add a very subtle dark overlay if text readability is an issue over rectangle.png
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-5 transition-opacity duration-300"></div>
      */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
        {/* Icon and Title Area */}
        <div className="mb-4">
          <img
            src={item.iconUrl}
            alt={`${item.title} icon`}
            className="w-12 h-12 md:w-14 md:h-14 mb-4 opacity-90 group-hover:opacity-100 transition-opacity"
            // Add filter for white color if SVGs are not already white
            // style={{ filter: 'brightness(0) invert(1)' }}
          />
          <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
            {item.title}
          </h3>
        </div>

        {/* Description and Learn More */}
        <div>
          <p className="text-sm text-gray-200/90 mb-5 leading-relaxed">
            {item.description}
          </p>
          <a
            href={item.learnMoreLink}
            className="inline-flex items-center text-xs font-medium text-white uppercase tracking-wider pb-1 border-b border-transparent hover:border-white/70 transition-colors duration-300 group/link"
          >
            Learn More
            <LuArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1" />
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
      className="py-16 md:py-24 bg-white dark:bg-gray-900 font-sans overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        // Animate when isLoaded is true or use a scroll trigger hook
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
