import React from 'react';
import { motion } from 'framer-motion';

const skillItemsData = [
  { id: 1, name: "Google Add", logoUrl: "/Logo1.svg" },
  { id: 2, name: "Google Analytics", logoUrl: "/Logo2.svg" },
  { id: 3, name: "Meta", logoUrl: "/Logo3.svg" },
  { id: 4, name: "Canva", logoUrl: "/Logo4.svg" },
  { id: 5, name: "Jira", logoUrl: "/Logo5.svg" },
  { id: 6, name: "metricool", logoUrl: "/Logo6.svg" },
];

// Increased duplication for smoother loop
const duplicatedSkillItems = [...skillItemsData, ...skillItemsData, ...skillItemsData, ...skillItemsData];

const Skills = () => {
  const styles = {
    preTitleIcon: "h-3.5 w-3.5 mr-1.5",
    subHeadlineText: "text-indigo-600 dark:text-indigo-400",
    mainHeadline: "text-gray-800 dark:text-white",
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="skills" className="py-20 md:py-28   overflow-hidden">
      {/* Container for headings only */}
      <div className="container-responsive mx-auto text-center">
        <motion.div
          className="flex items-center justify-center mb-2"
          variants={textContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="/first.svg" alt="" className={styles.preTitleIcon} />
          <span className={`text-xs font-semibold ${styles.subHeadlineText} uppercase tracking-wider`}>
            Tools & Skills
          </span>
        </motion.div>

        <motion.h2
          className={`text-3xl sm:text-4xl font-bold ${styles.mainHeadline} mb-12 md:mb-16 tracking-tight`}
          variants={textContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Explore My Tools & Skills
        </motion.h2>
      </div>

      {/* Full-width carousel container */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 container-responsive">
        <motion.div
          className="flex items-center animate-scroll-logos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {duplicatedSkillItems.map((skill, index) => (
            <img
              key={`${skill.id}-${index}`}
              src={skill.logoUrl}
              alt={`${skill.name} logo`}
              className="h-12 sm:h-14 md:h-16 w-auto mx-4 md:mx-6 opacity-90 
                       hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;