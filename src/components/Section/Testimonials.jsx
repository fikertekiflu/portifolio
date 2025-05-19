import React from 'react';
import { motion } from 'framer-motion';

// --- TESTIMONIAL DATA ---
const testimonialData = [
    {
        id: 1,
        quote: "Their strategic insights and creative execution led to phenomenal growth for our brand. Highly recommended!",
        name: "Alex Johnson",
        title: "CEO, Tech Solutions",
        avatarUrl: "https://source.unsplash.com/random/80x80/?portrait&1", // Smaller image
    },
    {
        id: 2,
        quote: "Mahder truly understood our vision and brought it to life with impressive impact. Outstanding results!",
        name: "Samantha Lee",
        title: "Founder, Creative Co.",
        avatarUrl: "https://source.unsplash.com/random/80x80/?portrait&2",  // Smaller image
    },
    {
        id: 3,
        quote: "Professional, insightful, and consistently delivered beyond expectations. Our online presence has never been stronger.",
        name: "Michael Chen",
        title: "Marketing Director, Innovate Group",
        avatarUrl: "https://source.unsplash.com/random/80x80/?portrait&3", // Smaller image
    },
];

// --- Testimonial Card Component ---
const TestimonialCard = ({ quote, name, title, avatarUrl }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-64 md:w-72 snap-center bg-[#1A1D32] p-4 md:p-6 rounded-xl shadow-lg
                        border border-neutral-700 flex flex-col text-center
                        transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-orange-500/50" // Smaller width and padding
        >
            <p className="text-neutral-300 italic text-xs md:text-sm mb-3 md:mb-4 leading-relaxed before:content-['“'] before:mr-0.5 after:content-['”'] after:ml-0.5">  {/* Smaller font size and margin */}
                {quote}
            </p>
            <div className="flex flex-col items-center mt-auto">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mb-2 md:mb-3 border-2 border-orange-500/70" // Smaller avatar size
                />
                <h4 className="text-sm md:text-md font-semibold text-white">{name}</h4> {/* Smaller font size */}
                {title && <p className="text-xs text-neutral-400">{title}</p>}
            </div>
        </motion.div>
    );
};

// --- Main Component ---
const Testimonials = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    };
    const textContentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    const scrollContainerVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
    };
    const ctaElementsVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.5 } },
    };

    return (
        <section
            id="testimonials-cta"
            className="min-h-screen bg-black text-white section-padding flex flex-col justify-between"
        >
            {/* --- Top: Testimonials Section --- */}
            <motion.div
                className="container-responsive mx-auto mb-12 md:mb-16" // Reduced margin
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.p
                    className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4 md:mb-6 text-center" // Reduced margin
                    variants={textContentVariants}
                >
                    what they say.
                </motion.p>
                <motion.div
                    className="mt-6 md:mt-8" // Reduced margin
                    variants={scrollContainerVariants}
                >
                    <div
                        className="flex overflow-x-auto space-x-2 md:space-x-4 pb-4 md:pb-6 snap-x snap-mandatory
                                    scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900
                                    scrollbar-thumb-rounded-full" // Reduced space between
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
                    </div>
                </motion.div>
            </motion.div>

            {/* --- Bottom: CTA Section --- */}
            <motion.div
                className="relative flex-grow flex flex-col items-center justify-center overflow-hidden py-8 md:py-0" // Reduced padding
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Decorative "LET'S CHAT" Texts */}
                 <motion.span
                    className="absolute top-1/4 left-4 md:left-6 text-4xl md:text-5xl font-bold text-neutral-800 opacity-50 -z-10 transform -translate-y-1/2 select-none" // Further reduced size and adjusted positioning
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    variants={textContentVariants}
                >
                    LET'S CHAT
                </motion.span>
                <motion.span
                    className="absolute top-1/2 right-4 md:right-6 text-4xl md:text-5xl font-bold text-neutral-800 opacity-50 -z-10 transform -translate-y-1/2 select-none"  // Further reduced size and adjusted positioning
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'translateY(-50%) rotate(180deg)' }}
                    variants={textContentVariants}
                >
                    LET'S CHAT
                </motion.span>
                <motion.span
                    className="absolute bottom-1/4 left-1/2 text-4xl md:text-5xl font-bold text-neutral-800 opacity-50 -z-10 transform -translate-x-1/2 select-none" // Further reduced size
                    variants={textContentVariants}
                >
                    LET'S CHAT
                </motion.span>

                {/* Orange/Red Blurred Gradient Background for CTA */}
                <div
                    className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[160%] h-[60%] max-w-[800px] z-0 opacity-60" //  Reduced height, width and opacity to make it smaller
                    style={{
                        background: 'radial-gradient(ellipse 60% 40% at 50% 100%, hsla(25, 100%, 55%, 0.5) 0%, hsla(10, 95%, 50%, 0.3) 35%, transparent 70%)', // More constrained ellipse, more transparent
                        filter: 'blur(120px) saturate(180%)', //  Slightly reduced blur
                    }}
                ></div>

                {/* "MAHDER HAILE" Text */}
                <motion.div
                    className="absolute left-4 md:left-8 bottom-8 md:bottom-1/2 md:transform md:translate-y-1/2 z-10" // Reduced left and bottom
                    variants={ctaElementsVariants}
                >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-none">  {/* Reduced font size */}
                        MAHDER<br />HAILE
                    </h3>
                </motion.div>

                {/* Central CTA Content */}
                <motion.div
                    className="relative z-10 text-center flex flex-col items-center"
                    variants={ctaElementsVariants}
                >
                    <button
                        className="bg-white text-orange-600 font-bold
                                    py-4 px-8 md:py-5 md:px-10 rounded-xl shadow-2xl
                                    hover:bg-gray-100 transition-all duration-300 ease-in-out
                                    transform hover:scale-105 focus:outline-none
                                    focus:ring-4 focus:ring-orange-500/50 text-lg md:text-xl leading-tight" // Reduced padding and font
                        onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        Ready to Scale?
                        <br />
                        <span className="text-md md:text-lg">Let's Talk.</span> {/* Reduced font size */}
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
