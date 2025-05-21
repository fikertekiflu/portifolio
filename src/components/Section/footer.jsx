import React from 'react';
import { Separator } from "@radix-ui/react-separator";
import GradientText from './GradientText'
import './Marquee.css'; // Ensure this is imported

// Sample testimonial data (replace with your actual data)
const testimonialsData = [
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Abrha",
        avatarSrc: "/two.png", // Replace with actual image path
    },
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Abrha",
        avatarSrc: "/two.png", // Replace with actual image path
    },
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Abrha",
        avatarSrc: "/two.png", // Replace with actual image path
    },
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Abrha",
        avatarSrc: "/two.png", // Replace with actual image path
    },
];

function TestimonialCard({ quote, name, avatarSrc }) {
    return (
        <div className="bg-black/30 rounded-lg p-6 text-white flex flex-col items-center">
            <p className="text-center text-sm italic mb-4">{quote}</p>
            <div className="flex items-center mt-2">
                {avatarSrc && <img src={avatarSrc} alt={name} className="w-8 h-8 rounded-full mr-2" />}
                <span className="font-semibold text-xs">{name}</span>
            </div>
        </div>
    );
}

function Footer() {
    // Marquee text data - Duplicate sufficiently for a seamless loop
    const baseMarqueeTexts = [
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[-0.46px] leading-[41.9px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[-0.46px] leading-[41.9px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[0.115px] leading-[20.7px] font-semibold" },
    ];

    // **KEY FOR INFINITE LOOP:** Duplicate the content multiple times.
    // At least twice is necessary. Three or four times provides more buffer,
    // especially on very wide screens or with short content.
    const marqueeTexts = [...baseMarqueeTexts, ...baseMarqueeTexts, ...baseMarqueeTexts, ...baseMarqueeTexts];


    return (
        <div className="w-full bg-black h-[1140px]">
            <div className="relative max-w-[2070px] mx-auto px-[93px]">
                {/* Testimonials Section */}
                <section className="py-16">
                    <h2 className="text-center font-['Inter'] font-normal text-white text-[38.0625px] leading-[57.6px] mb-2">
                        what they say.
                    </h2>
                    <p className="text-center font-['Figtree'] font-medium text-white/60 text-[16px] leading-[24px] mb-8">
                        Feedback from people I've worked with.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </section>

                {/* Container for MAHDER HAILE and Colored Section */}
                <div className="flex items-center pt-[23px] pb-10 ">
                    {/* Left Side: MAHDER HAILE */}
                    <div className="inline-flex flex-col items-start ">
                        <h1 className="relative w-fit font-['Inter'] font-bold text-white text-[56px] leading-[68.8px] tracking-[-2.96px]">
                            MAHDER <br />
                            HAILE
                        </h1>
                        {/* Social Icons Container */}
                        <div className="flex space-x-4 mt-4">
                            {/* Email Icon */}
                            <a href="mailto:mahderhaile21@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>
                            {/* LinkedIn Icon */}
                            <a href="https://www.linkedin.com/in/mahder-haile-abera/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Colored Background Section with Marquee */}
                    <div
                        className="relative overflow-hidden flex-grow rounded-lg bg-[url('/backcolor.png')] bg-cover bg-center"
                        style={{
                            height: '600px',
                        }}
                    >
                        {/* Marquee Text Container - WRAPPER FOR OVERFLOW */}
                        <div className="absolute top-[30%] w-full flex justify-center items-center">
                            <div className="marquee-parent-wrapper"> {/* This wrapper defines the visible area */}
                                <div className="marquee-container"> {/* This is the animated element */}
                                    {marqueeTexts.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`text-white text-center font-['Inter'] ${item.className}`}
                                        >
                                            {item.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Button - Inside the colored background div */}
                        <div className="absolute bottom-20 left-[49%] -translate-x-1/2 text-[35px]">
                            <a href="mailto:mahderhaile21@gmail.com" className="inline-flex pl-12 flex-col items-center justify-center p-5 bg-black/30 rounded-[61px] shadow-[inset_0px_7px_10px_#0000000a,inset_0px_2px_2px_#bd3c007d,inset_0px_-1px_0px_#ffffff40] backdrop-blur-[0.5px] backdrop-brightness-[100%] border border-solid border-[#ffffff2b]">
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={3}
                                    showBorder={true}
                                    className="custom-class"
                                >
                                    Ready to talk! Let's chat
                                </GradientText>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;