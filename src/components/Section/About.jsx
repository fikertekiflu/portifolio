// ========================================================================
// FILE: /src/components/sections/About.jsx
// ========================================================================
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 15 }
    }
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/30 to-purple-50/20" />

      <motion.div 
        className="max-w-5xl mx-auto px-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="mb-16 text-center" variants={item}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              About My Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Personal Story */}
          <motion.div className="space-y-8" variants={item}>
            <div className="group relative p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center p-4">
                  <img src="/one.png" alt="Marketing" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Digital Marketing Expertise
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    With over 5 years in digital strategy, I've honed my skills in SEO, SEM, and 
                    social media marketing. My data-driven approach combines analytics with creative 
                    execution to deliver measurable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center p-4">
                  <img src="/two.png" alt="Creative" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Creative Strategy
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Bridging the gap between technical precision and artistic vision. I specialize in 
                    crafting campaigns that resonate emotionally while maintaining analytical rigor.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div className="space-y-8" variants={item}>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
                  <img src="/one.png" alt="SEO" className="w-6 h-6" />
                  <span className="font-medium text-slate-700">SEO Strategy</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <img src="/two.png" alt="SEM" className="w-6 h-6" />
                  <span className="font-medium text-slate-700">SEM Management</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
                  <img src="/one.png" alt="Analytics" className="w-6 h-6" />
                  <span className="font-medium text-slate-700">Data Analytics</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <img src="/two.png" alt="Social" className="w-6 h-6" />
                  <span className="font-medium text-slate-700">Social Media</span>
                </div>
              </div>
            </div>

            {/* Navbar-style CTA */}
            <motion.div className="mt-8" variants={item}>
              <a
                href="#contact"
                className="
                  w-full
                  bg-gradient-to-r from-indigo-600 to-purple-500
                  text-white font-semibold
                  px-8 py-4
                  rounded-2xl
                  shadow-lg hover:shadow-xl
                  transition-all
                  flex items-center justify-center gap-2
                  hover:scale-[1.02]
                "
              >
                <span>Let's Collaborate</span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;