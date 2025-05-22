import React from "react";
import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

// (styles and textContentVariants remain the same)
const styles = {
    sectionBg: "bg-white dark:bg-gray-900",
    preTitleText: "text-gray-500 dark:text-gray-400",
    preTitleIcon: "h-4 w-4 mr-2",
    mainTitle: "text-gray-900 dark:text-gray-50",
    stepNumber: "text-gray-700 dark:text-gray-500",
    stepTitle: "text-gray-900 dark:text-gray-100",
    stepDescription: "text-gray-600 dark:text-gray-300",
    separatorLineColor: "border-gray-700 dark:border-gray-700",
};

const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const Box = ({ title, description, imageUrl, buttonUrl, imageSrc, rectangleSrc }) => {
    return (
        <div className="w-full md:w-[500px] h-[193px]">
            <Card
                className="relative w-full md:w-[500px] h-[193px] rounded-[15px] shadow-[4px_7px_26px_#0000001f] overflow-hidden"
                style={{
                    background: "linear-gradient(163deg, rgba(19,4,40,1) 7%, rgba(37,16,67,1) 34%, rgba(56,18,109,1) 57%, rgba(38,16,69,1) 85%, rgba(25,6,52,1) 100%)",
                }}
            >
                <CardContent className="p-0 flex h-full"> {/* Use flexbox for main content layout */}
                    {/* Background image for the card - kept absolute for now as it's a large background */}
                    <img
                        className="absolute w-[592px] h-[172px] top-0 left-[-22px] object-cover"
                        alt="Mask group"
                        src={imageUrl}
                    />

                    {/* Left Icon Section */}
                    {/* Changed absolute positioning to flex for content layout */}
                    <div className="relative w-[122px] h-[115px] my-auto ml-8 flex-shrink-0"> {/* Adjusted margin-left and vertical centering */}
                        <div className="relative h-full">
                            <img
                                className="absolute w-[115px] h-[115px] top-0 left-0 object-cover"
                                alt="Rectangle"
                                src={imageSrc}
                            />
                            {/* Small decorative divs - kept absolute relative to their parent div */}
                            <div
                                className="absolute w-[111px] h-[42px] top-[66px] left-[3px] rounded-[55.67px/21.04px] rotate-[176.86deg]"
                                style={{
                                    background: "linear-gradient(180deg, rgba(44,18,80,1) 0%, rgba(44,18,80,1) 20%, rgba(44,18,80,0) 90%)",
                                }}
                            />
                            <div className="absolute w-[5px] h-1 top-[77px] left-1 bg-[#ffa3a3] rounded-[2.42px/2.21px]" />
                            <div className="absolute w-[5px] h-1 top-[19px] left-[19px] bg-[#683a92] rounded-[2.42px/2.21px]" />
                            <div className="absolute w-[5px] h-1 top-[100px] left-[93px] bg-[#683a92] rounded-[2.42px/2.21px]" />
                            <div className="absolute w-[5px] h-1 top-[54px] left-[117px] bg-[#ffa3a3] rounded-[2.42px/2.21px]" />
                        </div>
                    </div>

                    {/* Right Text Content Section */}
                    {/* Use flex column to stack title, description, button */}
                    <div className="flex-1 flex flex-col justify-center items-start p-4 pr-8 text-left z-10"> {/* Added padding, text alignment, and z-index */}
                        {/* Title - responsive font size */}
                        <div className="font-['Poppins',Helvetica] font-semibold text-white text-[20px] sm:text-[22px] lg:text-[26px] tracking-[0] leading-tight mb-2">
                            {title}
                        </div>

                        {/* Description - responsive font size */}
                        <div className="font-['Poppins',Helvetica] font-medium text-white text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0] leading-[1.3] mb-4">
                            {description}
                        </div>

                        {/* Button */}
                        <div
                            className="relative w-[119px] h-[33px] bg-[100%_100%]"
                            style={{
                                backgroundImage: `url(${rectangleSrc})`,
                            }}
                        >
                            <Button variant="ghost" className="absolute w-full h-full p-0">
                                <span className="font-['Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                                    {buttonUrl}
                                </span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};


// (cardData remains the same)
const cardData = [
    {
        id: 1,
        title: "Digital Strategy",
        description: "Targeted marketing plans built to reach the right audience and drive results across platforms",
        buttonText: "LEARN MORE",
        imageUrl: "/mask-group.png",
        imageSrc: "/Rectangle.png",
        rectangleSrc: "/rectangle-977.svg",
    },
    {
        id: 2,
        title: "Branding & Identity",
        description: "Crafting unique visual and verbal identities that resonate with your audience",
        buttonText: "LEARN MORE",
        imageUrl: "/mask-group.png",
        imageSrc: "/Group 1.png",
        rectangleSrc: "/rectangle-977.svg",
    },
    {
        id: 3,
        title: "Content Creation",
        description: "Developing engaging content that tells your story and connects with your customers",
        buttonText: "LEARN MORE",
        imageUrl: "/mask-group.png",
        imageSrc: "/Group 1938.png",
        rectangleSrc: "/rectangle-977.svg",
    },
    {
        id: 4,
        title: "Marketing Systems",
        description: "Implementing powerful marketing automation and CRM solutions to streamline growth",
        buttonText: "LEARN MORE",
        imageUrl: "/mask-group.png",
        imageSrc: "/Group 1 (1).png",
        rectangleSrc: "/rectangle-977.svg",
    },
];

// (GridContainer remains the same as the last full code snippet)
export default function GridContainer() {
    return (
        <section className={`py-6 ${styles.sectionBg}`}>
            {/* Title Section Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Title (What I Do) */}
                <motion.h2
                    className={`text-4xl sm:text-5xl font-semibold ${styles.mainTitle} mb-5 tracking-tight`}
                    variants={textContentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    What I Do
                </motion.h2>

                {/* Pre-title with Icon/Text (Here is what can I help with) */}
                <motion.div
                    className="flex items-center justify-center mb-8"
                    variants={textContentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className={`text-xs font-medium ${styles.preTitleText} uppercase tracking-widest`}>
                        Here is what can I help with
                    </p>
                </motion.div>
            </div>

            {/* Main container for the grid of cards - Centered */}
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 max-w-[1016px] w-full"
                >
                    {cardData.map((card) => (
                        <Box
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            buttonUrl={card.buttonText}
                            imageUrl={card.imageUrl}
                            imageSrc={card.imageSrc}
                            rectangleSrc={card.rectangleSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}