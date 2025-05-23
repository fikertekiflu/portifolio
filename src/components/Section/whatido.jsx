import React from "react";
import { motion } from 'framer-motion';
import { Button } from "../ui/button"; // Assuming this path is correct
import { Card, CardContent } from "../ui/card"; // Assuming this path is correct

// Styles remain the same
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

// Text content variants for Framer Motion animations
const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

// The Box component (remains unchanged from your provided code)
const Box = ({ title, description, imageUrl, buttonUrl, imageSrc, rectangleSrc, backgroundImg }) => {
    return (
        <div className="w-full md:w-[500px] h-[193px]">
            <Card
                className="relative w-full h-[193px] shadow-none border-none overflow-hidden"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'transparent',
                }}
            >
                <CardContent className="p-0 flex h-full">
                    {/* Left Icon Section */}
                    <div className="relative w-[122px] h-[115px] my-auto ml-8 flex-shrink-0">
                        <div className="relative h-full">
                            {/* Commented out image elements as in your original */}
                        </div>
                    </div>
                    {/* Right Text Content Section */}
                    <div className="flex-1 flex flex-col justify-center items-start p-4 pr-8 text-left z-10">
                        <div className="font-['Poppins',Helvetica] font-semibold text-white text-[20px] sm:text-[22px] lg:text-[26px] tracking-[0] leading-tight mb-2">
                            {title}
                        </div>
                        <div className="font-['Poppins',Helvetica] font-medium text-white text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0] leading-[1.3] mb-4">
                            {description}
                        </div>
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

// Card data (remains unchanged)
const cardData = [
    { id: 1, title: "Digital Strategy", description: "Targeted marketing plans built to reach the right audience and drive results across platforms", buttonText: "LEARN MORE", imageUrl: "/mask-group.png", imageSrc: "/Rectangle.png", rectangleSrc: "/rectangle-977.svg", backgroundImg: "/f1.png" },
    { id: 2, title: "Branding & Identity", description: "Crafting unique visual and verbal identities that resonate with your audience", buttonText: "LEARN MORE", imageUrl: "/mask-group.png", imageSrc: "/Group 1.png", rectangleSrc: "/rectangle-977.svg", backgroundImg: "/f2.png" },
    { id: 3, title: "Content Creation", description: "Developing engaging content that tells your story and connects with your customers", buttonText: "LEARN MORE", imageUrl: "/mask-group.png", imageSrc: "/Group 1938.png", rectangleSrc: "/rectangle-977.svg", backgroundImg: "/f3.png" },
    { id: 4, title: "Marketing Systems", description: "Implementing powerful marketing automation and CRM solutions to streamline growth", buttonText: "LEARN MORE", imageUrl: "/mask-group.png", imageSrc: "/Group 1 (1).png", rectangleSrc: "/rectangle-977.svg", backgroundImg: "/f4.png" },
];

// The main GridContainer component
export default function GridContainer() {
    return (
        <section className={`py-6 ${styles.sectionBg}`}>
            {/* Title Section Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    className={`text-4xl sm:text-5xl font-semibold ${styles.mainTitle} mb-5 tracking-tight`}
                    variants={textContentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    What I Do
                </motion.h2>
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
            {/* MODIFICATION: Added 'relative' class for positioning context */}
            <div className="flex justify-center px-4 sm:px-6 lg:px-8 relative">

                {/* ==== GRADIENT LINE START ==== */}
                {/* This div creates the vertical gradient line between columns on md+ screens */}
                <div
                   className="
        absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 /* Center the separator */
      w-[1400px]
        hidden md:block /* Only show on md screens and up */
        z-0
        /* Helps center the img if its aspect ratio differs from div */
         /* Optional: In case image tries to overflow */
    "
    aria-hidden="true"
>
    <img
        src="/Gradient.png" // IMPORTANT: Path to your image in public folder
        alt="" // Alt text is empty as parent is aria-hidden
        className="h-full w-[1400px] object-contain"
        // Adjust className for the <img> tag as needed:
        // - "h-full w-full object-cover": Fills the div, maintains aspect ratio, may crop.
        // - "h-full w-full object-fill": Stretches to fill the div, may change aspect ratio.
        // - "h-full w-auto object-contain": Fits height, width auto, contained. (Good for tall, thin images)
        // - "max-h-full w-auto": Image will not exceed div height, width auto.
    /></div>
                {/* ==== GRADIENT LINE END ==== */}

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-0 max-w-[1016px] w-full z-[1]" // Optional: ensure grid is above gradient line
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
                            backgroundImg={card.backgroundImg}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}