import React from "react";
import { Button } from "../ui/button"; // Ensure this path is correct
import { Card, CardContent } from "../ui/card"; // Ensure this path is correct


// Your Box component (with fixed width as requested)
const Box = ({ title, description, imageUrl, buttonUrl, imageSrc, rectangleSrc }) => {
  return (
    // KEEPING w-[570px] as requested
    <div className="w-[500px] h-[193px]">

      <Card
        // KEEPING w-[570px] as requested
        className="relative w-[500px] h-[193px] rounded-[15px] shadow-[4px_7px_26px_#0000001f] overflow-hidden"
        style={{
          background: "linear-gradient(163deg, rgba(19,4,40,1) 7%, rgba(37,16,67,1) 34%, rgba(56,18,109,1) 57%, rgba(38,16,69,1) 85%, rgba(25,6,52,1) 100%)",
        }}
      >
        <CardContent className="p-0">
          <img
            className="absolute w-[592px] h-[172px] top-0 left-[-22px]"
            alt="Mask group"
            src={imageUrl} // Dynamic image URL
          />

          <div className="absolute w-64 top-[50px] left-[219px] font-['Poppins',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[32.5px] whitespace-nowrap">
            {title} {/* Dynamic title */}
          </div>

          <div className="absolute w-[232px] top-[85px] left-[220px] font-['Poppins',Helvetica] font-medium text-white text-[8px] tracking-[0] leading-[10.5px]">
            {description} {/* Dynamic description */}
          </div>

          <div className="absolute w-[121px] h-[33px] top-[116px] left-[217px]">
            <div
              className="relative w-[119px] h-[33px] bg-[100%_100%]"
              style={{
                backgroundImage: `url(${rectangleSrc})`, // Dynamic SVG URL
              }}
            >
              <Button variant="ghost" className="absolute w-full h-full p-0">
                <span className="font-['Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                  {buttonUrl} {/* Dynamic button text */}
                </span>
              </Button>
            </div>
          </div>

          <div className="absolute w-[122px] h-[115px] top-10 left-[72px]">
            <div className="relative h-[115px]">
              <div className="absolute w-[116px] h-[115px] top-0 left-0">
                <img
                  className="absolute w-[115px] h-[115px] top-0 left-0 object-cover"
                  alt="Rectangle"
                  src={imageSrc} // Dynamic image URL
                />

                <div
                  className="absolute w-[111px] h-[42px] top-[66px] left-[3px] rounded-[55.67px/21.04px] rotate-[176.86deg]"
                  style={{
                    background: "linear-gradient(180deg, rgba(44,18,80,1) 0%, rgba(44,18,80,1) 20%, rgba(44,18,80,0) 90%)",
                  }}
                />

                <div className="absolute w-[5px] h-1 top-[77px] left-1 bg-[#ffa3a3] rounded-[2.42px/2.21px]" />
                <div className="absolute w-[5px] h-1 top-[19px] left-[19px] bg-[#683a92] rounded-[2.42px/2.21px]" />
                <div className="absolute w-[5px] h-1 top-[100px] left-[93px] bg-[#683a92] rounded-[2.42px/2.21px]" />
              </div>
              <div className="absolute w-[5px] h-1 top-[54px] left-[117px] bg-[#ffa3a3] rounded-[2.42px/2.21px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// Define your data for each card
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

export default function GridContainer() {
  return (
    // Outer container to center the entire grid and manage its width
    // Minimum width of the container will be (570px * 2) + desired_gap.
    // For gap-x-4 (16px), this is 1140px + 16px = 1156px.
    // So, if the viewport is less than 1156px wide, the cards will stack or overflow.
    <div className="flex justify-center py-8"> {/* Flex container to center the grid */}
      <div
        // Use a fixed max-width for the grid itself, or let it respond
        // For 2 cards at 570px each, plus a gap, a max-width would be appropriate
        // to prevent it from stretching too wide on very large screens.
        // max-w-[1156px] will accommodate 2x570px cards + gap-x-4 (16px)
        className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4" // Decreased gap-x to 4 (16px)
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
  );
}