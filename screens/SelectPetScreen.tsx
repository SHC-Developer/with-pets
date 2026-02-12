import React from 'react';

interface SelectPetScreenProps {
  onSelect: (type: 'cat' | 'dog') => void;
}

const SelectPetScreen: React.FC<SelectPetScreenProps> = ({ onSelect }) => {
  return (
    <div className="h-full w-full relative flex">
      {/* Left Side: Cat */}
      <div 
        onClick={() => onSelect('cat')}
        className="relative w-1/2 h-full bg-[#8D6E63] cursor-pointer group overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Cat" 
          className="absolute bottom-0 left-0 w-full h-[65%] object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-24 left-0 right-0 flex justify-center z-20">
          <button className="px-8 py-2.5 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-[#8D6E63] transition-all">
            고양이
          </button>
        </div>
      </div>

      {/* Right Side: Dog */}
      <div 
        onClick={() => onSelect('dog')}
        className="relative w-1/2 h-full bg-[#D7CCC8] cursor-pointer group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-300 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Dog" 
          className="absolute bottom-0 right-0 w-full h-[65%] object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-24 left-0 right-0 flex justify-center z-20">
          <button className="px-8 py-2.5 rounded-full border border-[#5D4037] text-[#5D4037] text-sm font-medium hover:bg-[#5D4037] hover:text-white transition-all">
            강아지
          </button>
        </div>
      </div>

      {/* Center Overlay Text */}
      <div className="absolute top-[12%] left-0 right-0 z-30 text-center pointer-events-none">
        <h2 className="text-2xl font-bold text-white drop-shadow-md leading-relaxed">
          저는 <span className="inline-block border-b-2 border-white/50 w-16 mx-1"></span> 와<br />
          함께 살고있어요!
        </h2>
        <p className="text-white/80 text-sm mt-3 animate-pulse">
          선택해주세요!
        </p>
      </div>

      {/* Bottom Disclaimer */}
      <div className="absolute bottom-8 left-0 right-0 z-30 text-center pointer-events-none">
        <p className="text-white/50 text-[10px] font-light tracking-wide">
          HOME에서 언제든지 변경 가능합니다.
        </p>
      </div>
    </div>
  );
};

export default SelectPetScreen;