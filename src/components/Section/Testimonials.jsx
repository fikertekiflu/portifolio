// ========================================================================
// FILE: /src/components/sections/Testimonials.jsx
// ========================================================================
// A modern and elegant "Testimonials" section, designed to showcase
// client feedback in a horizontally scrollable or carousel-like manner.
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';

// Define your testimonial data here.
// CRUCIAL: Replace placeholder content and avatarUrl paths with your actual data.
// Avatar images should be placed in your /public folder (e.g., /assets/avatars/name.png)
const testimonialData = [
  {
    id: 1,
    quote: "Working with Mahder was a game-changer. Their strategic insights and creative execution led to phenomenal growth for our brand. Highly recommended!",
    name: "Alex Johnson",
    title: "CEO, Tech Solutions Inc.", // Optional title/company
    avatarUrl: "/assets/avatars/alex-johnson.png", // Placeholder - REPLACE
  },
  {
    id: 2,
    quote: "The attention to detail and commitment to results were outstanding. Mahder truly understood our vision and brought it to life with impressive impact.",
    name: "Samantha Lee",
    title: "Founder, Creative Co.",
    avatarUrl: "/assets/avatars/samantha-lee.png", // Placeholder - REPLACE
  },
  {
    id: 3,
    quote: "An absolute pleasure to collaborate with. Professional, insightful, and consistently delivered beyond expectations. Our online presence has never been stronger.",
    name: "Michael Chen",
    title: "Marketing Director, Innovate Group",
    avatarUrl: "/assets/avatars/michael-chen.png", // Placeholder - REPLACE
  },
  {
    id: 4,
    quote: "If you're looking for a digital marketing specialist who genuinely cares about your success, Mahder is the one. The results speak for themselves.",
    name: "Jessica Williams",
    title: "Owner, Bloom & Grow Florists",
    avatarUrl: "/assets/avatars/jessica-williams.png", // Placeholder - REPLACE
  },
  // Add more testimonials as needed
];

// Individual Testimonial Card Component
const TestimonialCard = ({ quote, name, title, avatarUrl }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-80 md:w-96 snap-center bg-neutral-800 p-6 md:p-8 rounded-xl shadow-xl
                 border border-neutral-700 flex flex-col items-center text-center
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-brand-primary/50"
      // Using neutral-800 for card background, adjust to match screenshot if needed
      // The screenshot cards have a dark purple/blue hue.
      // You might want to use a custom color like `bg-[#2A2D4B]` if defined in your theme.
    >
      <p className="text-neutral-300 italic text-md mb-6 leading-relaxed before:content-['“'] before:mr-1 after:content-['”'] after:ml-1">
        {quote}
      </p>
      <div className="flex flex-col items-center mt-auto"> {/* mt-auto pushes avatar & name to bottom if quote is short */}
        <img 
          src={avatarUrl} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-brand-primary/70" 
        />
        <h4 className="text-lg font-semibold text-white">{name}</h4>
        {title && <p className="text-sm text-neutral-400">{title}</p>}
      </div>
    </motion.div>
  );
};


const Testimonials = () => {
  // Framer Motion variants for animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  // Variants for the scrollable container for a subtle entrance
  const scrollContainerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 md:py-32 bg-brand-textDark text-white section-padding overflow-hidden" 
      // Using a dark background for the section as per the screenshot
      // section-padding is a custom class you might have in index.css
    >
      <motion.div 
        className="container-responsive mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Pre-title */}
        <motion.p 
          className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-3 text-center"
          variants={textContentVariants}
        >
          what they say.
        </motion.p>
        
        {/* Optional: Main Title (Screenshot doesn't have a large one, but good for structure) */}
        {/* <motion.h2 
          className="text-4xl sm:text-5xl font-semibold text-white mb-12 md:mb-16 text-center tracking-tight"
          variants={textContentVariants}
        >
          Trusted by Clients
        </motion.h2> */}

        {/* Testimonial Cards - Horizontal Scroll with Snap */}
        {/* For a more robust carousel, consider libraries like Swiper.js */}
        <motion.div 
          className="mt-10 md:mt-12"
          variants={scrollContainerVariants}
        >
          <div 
            className="flex overflow-x-auto space-x-6 md:space-x-8 pb-8 snap-x snap-mandatory 
                       scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800 
                       scrollbar-thumb-rounded-full"
            // Custom scrollbar styles (requires tailwind-scrollbar plugin or custom CSS)
            // If you don't have the plugin, the default scrollbar will appear.
          >
            {testimonialData.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
            {/* Add a few empty divs at the end if snap-mandatory causes issues with the last item not being fully visible */}
            {/* <div className="flex-shrink-0 w-1 snap-center"></div> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
