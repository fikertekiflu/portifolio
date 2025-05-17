import React, { useState, useEffect } from 'react';
import TextPressure from '../common/TextPressure';
import DecayCard from '../common/DecayCard';

const Home = () => {
  const userImagePath = "/Image.png";
  const greetingText = "Hey there";
  const nameText = "Mahder Taye";
  const roleText = "Digital Marketing Expert";

  const [showGreeting, setShowGreeting] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowGreeting(true), 300);
    const timer2 = setTimeout(() => setShowName(true), 600);
    const timer3 = setTimeout(() => setShowRole(true), 900);
    const timer4 = setTimeout(() => setShowImage(true), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animated-gradient {
          background-size: 400% 400%;
          animation: gradientFlow 15s ease infinite;
        }

        .wave-emoji {
          animation: wave 2s infinite;
          display: inline-block;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-10deg); }
          40% { transform: rotate(9deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

      <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-center py-20 px-4 font-['InterVariable']">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 animated-gradient" 
             style={{
               background: 'linear-gradient(135deg, #f0f4ff 0%, #f8faff 30%, #f5f7ff 50%, #f0f3ff 100%)'
             }}>
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light"
               style={{
                 background: 'linear-gradient(45deg, rgba(165,180,252,0.15) 0%, rgba(199,210,254,0.1) 50%, rgba(224,231,255,0.15) 100%)'
               }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div key={i} 
                 className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-float"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   animationDelay: `${Math.random() * 5}s`,
                   animationDuration: `${5 + Math.random() * 10}s`
                 }} />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-30 flex flex-col items-center space-y-6 md:space-y-8">
          {/* Animated Greeting */}
          <div className={`text-2xl md:text-3xl font-light text-indigo-600/90 transition-opacity duration-1000 ${
            showGreeting ? 'opacity-100' : 'opacity-0'
          }`}>
            {greetingText} <span className="wave-emoji">👋</span>
          </div>

          {/* Name with TextPressure */}
          <div className={`transition-opacity duration-1000 ${
            showName ? 'opacity-100' : 'opacity-0'
          }`}>
            <TextPressure
              text={nameText}
              flex={true}
              width={true}
              weight={true}
              italic={true}
              textColor="#1E293B"
              strokeColor="#3B82F6"
              minFontSize={64}
              fontFamily="inter"
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]"
            />
          </div>

          {/* Role Text */}
          <div className={`text-xl md:text-2xl font-medium text-indigo-500/90 transition-opacity duration-1000 ${
            showRole ? 'opacity-100' : 'opacity-0'
          }`}>
            {roleText}
          </div>

          {/* Profile Card */}
          <div className={`relative group transition-all duration-1000 ${
            showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 to-purple-100/20 rounded-full blur-xl animate-pulse" />
            <DecayCard
              width={300}
              height={200}
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white/80 shadow-2xl hover:shadow-3xl transition-all duration-300"
              image={userImagePath}
            >
              <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-black text-white bg-gradient-to-br from-indigo-600/90 to-purple-500/90 rounded-full backdrop-blur-sm">
                {nameText.charAt(0)}
              </span>
            </DecayCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;