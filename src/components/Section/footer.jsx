import React from 'react';
import { Separator } from "@radix-ui/react-separator";
import GradientText from './GradientText'
import './Marquee.css'; // Import the new Marquee CSS

// Sample testimonial data (replace with your actual data)
const testimonialsData = [
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Alemu",
        avatarSrc: "/two.png", // Replace with actual image path
    },
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Alemu",
        avatarSrc: "/two.png", // Replace with actual image path
    },
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Alemu",
        avatarSrc: "/two.png", // Replace with actual image path
    },
    {
        quote: "Approach to campaign strategy and maintained the balance between creative and performance marketing, showing strong focus on brand identity and quality.",
        name: "Mulugata Alemu",
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
    // Marquee text data - Duplicate to create a seamless loop
    const baseMarqueeTexts = [
        { text: "LET'S CHAT", className: "text-[11.5px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[-0.46px] leading-[41.9px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[43.1px] tracking-[-0.46px] leading-[41.9px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[11.5px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[11.5px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[11.5px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[42.4px] tracking-[-0.46px] leading-[41.9px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[43.1px] tracking-[-0.46px] leading-[41.9px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[11.5px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[11.5px] tracking-[0.115px] leading-[20.7px] font-semibold" },
        { text: "LET'S CHAT", className: "text-[11.5px] tracking-[0.115px] leading-[20.7px] font-semibold" },
    ];

    // Duplicate the content for a seamless marquee effect
    const marqueeTexts = [...baseMarqueeTexts, ...baseMarqueeTexts];

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

                {/* Container for MAHDER HAILE and Colored Section (New structure) */}
                <div className="flex items-center pt-[23px] pb-10 ">
                    {/* Left Side: MAHDER HAILE */}
                    <div className="inline-flex flex-col items-start ">
                        <h1 className="relative w-fit font-['Inter'] font-bold text-white text-[56px] leading-[68.8px] tracking-[-2.96px]">
                            MAHDER <br />
                            HAILE
                        </h1>
                    </div>

                    {/* Colored Background Section with Marquee - Adjusted */}
                    <div
                        className="relative overflow-hidden flex-grow rounded-lg bg-[url('/backcolor.png')] bg-cover bg-center"
                        style={{
                            height: '600px',
                        }}
                    >
                        {/* Marquee Text Container */}
                        <div className="absolute top-[30%] w-full flex justify-center items-center ml-[10%] mr-[10%] overflow-hidden">
                          <div className="marquee-container"> {/* Apply the marquee-container class here */}
                                {marqueeTexts.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`text-white text-center whitespace-nowrap font-['Inter'] ${item.className}`}
                                    >
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button - Inside the colored background div */}
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                            <div className="inline-flex flex-col items-center justify-center p-5 bg-black/30 rounded-[61px] shadow-[inset_0px_7px_10px_#0000000a,inset_0px_2px_2px_#bd3c007d,inset_0px_-1px_0px_#ffffff40] backdrop-blur-[0.5px] backdrop-brightness-[100%] border border-solid border-[#ffffff2b]">
                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={7}
                                    showBorder={false}
                                    className="custom-class"
                                >
                                    Ready to talk! Let's chat
                                </GradientText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;