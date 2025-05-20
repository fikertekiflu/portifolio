// GradientText.js
import React from "react";
import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div >
      {showBorder && <div className="gradient-overlay rounded-3xl w-[500px] h-[100px]" style={gradientStyle}></div>}
      <div className="text-content  rounded-lg" style={gradientStyle}>{children}</div>
    </div>
  );
}