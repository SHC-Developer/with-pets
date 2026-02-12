import React, { useEffect, useState } from 'react';
import { Dog, Heart } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-full w-full bg-[#FFF5F6] py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-rose-200 rounded-full opacity-20 blur-2xl" />
      <div className="absolute bottom-20 left-[-30px] w-32 h-32 bg-rose-300 rounded-full opacity-20 blur-xl" />

      <div className="flex-1 flex flex-col items-center justify-center z-10">
        {/* Logo Section */}
        <div 
          className={`flex flex-col items-center transition-all duration-1000 transform ${
            visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-rose-500 rounded-3xl flex items-center justify-center shadow-lg transform rotate-3">
              <Dog color="white" size={48} strokeWidth={2} />
            </div>
            <div className="absolute -top-2 -right-2 bg-white p-1.5 rounded-full shadow-md">
              <Heart className="text-rose-500 fill-rose-500" size={16} />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight mt-2">
            애들이랑
          </h1>
          <p className="text-gray-500 text-sm mt-1 tracking-wide">반려가족의 일상을 한 곳에서</p>
        </div>
      </div>

      {/* Illustration & Tagline Section */}
      <div 
        className={`flex flex-col items-center z-10 mb-8 transition-all duration-1000 delay-500 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <img 
          src="https://picsum.photos/300/200" 
          alt="Happy Pet" 
          className="w-48 h-32 object-cover rounded-2xl shadow-sm mb-6 grayscale-[20%] opacity-90"
        />
        <p className="text-gray-600 font-medium text-center leading-relaxed">
          우리 아이를 위한<br/>
          가장 완벽한 하루
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;