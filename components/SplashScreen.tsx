import React, { useEffect, useState } from 'react';

// Brand Assets
import logoImage from '../assets/logo.png';
import mascotImage from '../assets/mascot.png';

/**
 * 애들이랑 - Splash Screen
 * 
 * Brand Colors:
 * - Primary: #F26B1D
 * - Secondary: #FF8C00
 * - Accent: #FFA042
 * - Background: #FFF9F5 (warm white)
 */

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [mascotVisible, setMascotVisible] = useState(false);

  useEffect(() => {
    // Logo animation
    const logoTimer = setTimeout(() => setVisible(true), 100);
    // Mascot animation (delayed)
    const mascotTimer = setTimeout(() => setMascotVisible(true), 600);
    
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(mascotTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-full w-full bg-[#FFF9F5] py-10 relative overflow-hidden">
      
      {/* Decorative Background Elements - Orange Tinted */}
      <div className="absolute top-[-60px] right-[-60px] w-56 h-56 bg-[#FFA042] rounded-full opacity-10 blur-3xl" />
      <div className="absolute top-[30%] left-[-40px] w-40 h-40 bg-[#F26B1D] rounded-full opacity-10 blur-2xl" />
      <div className="absolute bottom-[20%] right-[-30px] w-32 h-32 bg-[#FF8C00] rounded-full opacity-15 blur-xl" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        
        {/* Logo Section */}
        <div 
          className={`flex flex-col items-center transition-all duration-1000 transform ${
            visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {/* Brand Logo Image */}
          <div className="relative mb-4">
            <img 
              src={logoImage} 
              alt="애들이랑 로고" 
              className="h-16 w-auto object-contain drop-shadow-md"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-[#666666] text-sm mt-2 tracking-wide font-medium">
            반려가족의 일상을 한 곳에서
          </p>
        </div>
      </div>

      {/* Mascot & Bottom Section */}
      <div 
        className={`flex flex-col items-center z-10 mb-6 transition-all duration-1000 delay-300 transform ${
          mascotVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Mascot Image */}
        <div className="relative mb-5">
          <img 
            src={mascotImage}
            alt="애들이랑 마스코트" 
            className="w-40 h-auto object-contain drop-shadow-lg"
          />
          
          {/* Speech Bubble */}
          <div 
            className={`absolute -top-2 -right-8 bg-white px-3 py-1.5 rounded-xl rounded-br-none shadow-md border border-[#FFA042] transition-all duration-500 delay-700 ${
              mascotVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <p className="text-[#F26B1D] font-bold text-xs whitespace-nowrap">
              반가워요! 🐾
            </p>
          </div>
        </div>
        
        {/* Bottom Message */}
        <p className="text-[#666666] font-medium text-center leading-relaxed text-sm">
          우리 아이를 위한<br/>
          가장 완벽한 하루
        </p>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 bg-[#F26B1D] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-[#FF8C00] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-[#FFA042] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
