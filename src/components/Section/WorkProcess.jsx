// ========================================================================
// FILE: /src/components/sections/WorkProcess.jsx
// ========================================================================
// "Work Process" section styled to precisely match the reference image,
// focusing on correct single separator line styling.
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';

// Define your work process steps here.
const processStepsData = [
  {
    id: 1,
    number: "01",
    title: "Project Research and Analysis",
    description: "Get a clear view of how I approach each project — from research and strategy to execution and results. Every step is built to ensure your brand gets the visibility, engagement, and growth it deserves.",
    imageUrl: "/workk.png", 
    iconUrl: "/iconnn.svg",
  },
  {
    id: 2,
    number: "02",
    title: "Strategy Development",
    description: "Build a custom marketing plan that aligns with your goals — from channel selection and messaging to timing and budget.",
    imageUrl: "/work.png",
    iconUrl: "/iconn.svg",
  },
  {
    id: 3,
    number: "03",
    title: "Creative Execution",
    description: "Design and develop impactful content, visuals, and campaigns tailored to engage your audience and elevate your brand.",
    imageUrl: "/wor.png",
    iconUrl: "/icon.svg",
  },
  {
    id: 4,
    number: "04",
    title: "Launch & Optimization",
    description: "Execute the campaign across platforms, monitor performance, and optimize continuously to maximize ROI and growth.",
    imageUrl: "/wo.png",
    iconUrl: "/ico.svg",
  },
];

const WorkProcess = () => {
  // --- Style Definitions to Match Reference Image ---
  const styles = {
    sectionBg: "bg-white dark:bg-gray-900",
    preTitleText: "text-gray-500 dark:text-gray-400", 
    preTitleIcon: "h-4 w-4 mr-2", 
    mainTitle: "text-gray-900 dark:text-gray-50",
    stepNumber: "text-gray-700 dark:text-gray-500", // Light gray, font-bold for "bolder" numbers
    stepTitle: "text-gray-900 dark:text-gray-100",
    stepDescription: "text-gray-600 dark:text-gray-300",
    separatorLineColor: "border-gray-700 dark:border-gray-700", // Light gray line color
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.25 },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stepRowVariants = (index) => ({
    hidden: { opacity: 0, x: -50 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: index * 0.15, 
      },
    },
  });

  return (
    <section
      id="work-process"
      className={`py-20 md:py-28 ${styles.sectionBg} section-padding overflow-hidden`}
    >
      <motion.div
        className="container-responsive mx-auto" 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Pre-title with Icon */}
        <motion.div 
          className="flex items-center justify-center mb-3" 
          variants={textContentVariants} 
        >
          <img 
            src="/first.svg" 
            alt="" 
            className={styles.preTitleIcon} 
          />
          <p className={`text-xs font-medium ${styles.preTitleText} uppercase tracking-widest`}>
            Work Process
          </p>
        </motion.div>
        
        {/* Main Title */}
        <motion.h2
          className={`text-4xl sm:text-5xl font-semibold ${styles.mainTitle} mb-16 md:mb-20 text-center tracking-tight`}
          variants={textContentVariants}
        >
          Explore My Work Process
        </motion.h2>

        {/* Process Steps */}
        <div className="space-y-10 md:space-y-0"> 
          {processStepsData.map((step, index) => (
            <motion.div
              key={step.id}
              className={`
                flex flex-col md:flex-row items-center 
                md:gap-x-8 lg:gap-x-12 xl:gap-x-16 
                py-10 md:py-12 
                border-b-2 ${styles.separatorLineColor} last:border-b-0
              `} 
              // Only bottom border (2px thick), removed from the last item.
              // No top border on items, to prevent line above the first step.
              variants={stepRowVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }} 
            >
              {/* Step Number */}
              <motion.div
                className={`
                  w-full md:w-20 lg:w-24 
                  text-center md:text-left 
                  text-5xl lg:text-6xl font-bold ${styles.stepNumber} 
                  mb-4 md:mb-0 shrink-0
                `}
              >
                {step.number}
              </motion.div>

              {/* Step Image */}
              <motion.div
                className="w-full max-w-sm mx-auto md:mx-0 md:w-[40%] lg:w-[42%] xl:w-[45%] order-first md:order-none mb-6 md:mb-0"
              >
                <img
                  src={step.imageUrl}
                  alt={step.title} 
                  className="w-full h-auto object-contain" 
                />
              </motion.div>

              {/* Step Content (Icon, Title & Description) */}
              <div className="md:w-[calc(60%-2rem)] lg:w-[calc(58%-3rem)] xl:w-[calc(55%-4rem)] text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <img
                    src={step.iconUrl}
                    alt="" 
                    className="h-6 w-6 md:h-7 md:w-7 mr-3 object-contain shrink-0"
                  />
                  <h3 className={`text-xl md:text-2xl font-semibold ${styles.stepTitle}`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-sm md:text-base ${styles.stepDescription} leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkProcess;