import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-30 bg-white dark:bg-gray-900 font-sans overflow-hidden"
    >
      <motion.div
        className="container-responsive mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="mx-auto">
          <p 
            className="text-lg md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 
                      leading-relaxed md:leading-loose font-bold tracking-wide"
            style={{ wordSpacing: '0.25em' }}
          >
            As a Digital Marketing
            <img
              src="/one.png"
              alt="decorative icon one"
              className="inline-block h-9 w-11 md:h-12 md:w-14 mx-3 align-middle"
            />
            Specialist, I Aim to Push the <br />
            Boundaries of Creativity. With a Background in analytics<br />
            and Digital
            <img
              src="/two.png"
              alt="decorative icon two"
              className="inline-block h-7 w-20 md:h-12 md:w-32 mx-3 align-middle"
            />
            Media, I've Been Able to Merge These<br />
            Worlds for measurable impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;