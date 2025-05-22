// components/WhatIDoCard.js
import React from 'react';

const WhatIDoCard = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-[#2a2a47] rounded-lg p-6 flex flex-col items-center text-center shadow-lg transform transition duration-300 hover:scale-105">
      {/* You'll replace this with your actual icon component or image */}
      <img src={iconSrc} alt={title} className="w-24 h-24 mb-4 object-contain" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <button className="bg-purple-700 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-800 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default WhatIDoCard;