import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Modified to accept an 'id' prop
const About = ({ id }) => {
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
      id={id} // **CRUCIAL:** This `id` prop must match the `path` in Navbar's `pagesDropdownItems`
      className="py-0 md:py-90 dark:bg-gray-900 font-sans overflow-hidden" // Note: md:py-90 might be a custom class value. Standard Tailwind goes up to py-96.
    >
      <motion.div
        className="md:ml-14 ml-5 mx-auto md:block hidden" // Ensure 'container-responsive' is defined or use 'container'
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="mx-auto"> {/* You might want to add a max-w- class here to control text line length, e.g., max-w-3xl */}
          <p
            className="text-lg md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300
                       leading-relaxed md:leading-loose font-bold
                       tracking-wider" // CHANGED: from tracking-wide to tracking-wider for increased letter spacing
            style={{
              // CHANGED: wordSpacing to 'normal' to decrease the gap from 0.25em.
              // Options for wordSpacing:
              // 'normal' or '0em' for default spacing.
              // '0.1em' for a little extra space (but less than 0.25em).
              // '-0.05em' for slightly tighter words (use with caution).
              wordSpacing: 'normal',
              // OPTIONAL: For even more custom letter spacing, you could remove the 'tracking-wider'
              // class and use an inline style here, e.g., letterSpacing: '0.075em',
            }}
          >
            As a Digital Marketing
            <img
              src="/one.png"
              alt="decorative icon one"
              className="inline-block h-9 w-11 md:h-12 md:w-14 mx-3 align-middle"
            />
            Specialist,I Aim to Push Boundaries <br />
            of Creativity.With a Background in analytics and Digital<img
              src="/two.png"
              alt="decorative icon two"
              className="inline-block h-7 w-20 md:h-12 md:w-32 mx-3 align-middle"
            /><br />


            Media, I've Been Able to Merge These Worlds for measurable<br />
            impact.
          </p>
        </div>
      </motion.div>








      <motion.div
        className="md:ml-14 ml-5 mx-auto md:hidden block" // Ensure 'container-responsive' is defined or use 'container'
        variants={sectionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="mx-auto"> {/* You might want to add a max-w- class here to control text line length, e.g., max-w-3xl */}
          <p
            className="text-lg md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300
                       leading-relaxed md:leading-loose font-bold
                       tracking-wider" // CHANGED: from tracking-wide to tracking-wider for increased letter spacing
            style={{
              // CHANGED: wordSpacing to 'normal' to decrease the gap from 0.25em.
              // Options for wordSpacing:
              // 'normal' or '0em' for default spacing.
              // '0.1em' for a little extra space (but less than 0.25em).
              // '-0.05em' for slightly tighter words (use with caution).
              wordSpacing: 'normal',
              // OPTIONAL: For even more custom letter spacing, you could remove the 'tracking-wider'
              // class and use an inline style here, e.g., letterSpacing: '0.075em',
            }}
          >
            As a Digital Marketing
            <img
              src="/one.png"
              alt="decorative icon one"
              className="inline-block h-9 w-11 md:h-12 md:w-14 mx-3 align-middle"
            />
            Specialist,I Aim to Push the <br />
            Boundaries of Creativity. With<br/> a Background in analytics and Digital   <img
              src="/two.png"
              alt="decorative icon two"
              className="inline-block h-7 w-20 md:h-12 md:w-32 mx-3 align-middle"
            />Media, I've <br />


          Been Able to Merge These <br/> Worlds for measurable impact.<br />

          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;