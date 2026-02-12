import React, { useState } from 'react';
import { Search, Dog, ArrowRight, Download, Check } from 'lucide-react';

interface WebLandingSideProps {
  onSearch: (keyword: string) => void;
}

const WebLandingSide: React.FC<WebLandingSideProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) onSearch(keyword);
  };

  const tags = ['사료', '배변패드', '동물병원', '펫시터', '캣타워', '영양제'];

  return (
    <div className="relative h-full w-full flex flex-col p-10 lg:p-16 overflow-hidden bg-white">
      {/* 1. Header (Logo) */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 bg-[#F26B1D] rounded-xl flex items-center justify-center transform -rotate-6 shadow-md shadow-orange-100">
          <Dog className="text-white" size={24} strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-bold text-gray-900 tracking-tight">애들이랑</span>
      </div>

      {/* 2. Content Centered Vertically */}
      <div className="flex-1 flex flex-col justify-center max-w-xl z-20">
        <h1 className="text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] mb-6">
          반려가족 라이프<br />
          <span className="text-[#F26B1D]">애들이랑 한 번에.</span>
        </h1>
        
        <div className="space-y-2 mb-10">
           <div className="flex items-center gap-2 text-lg text-gray-500 font-medium">
              <Check size={20} className="text-[#FF8C00]" strokeWidth={3} />
              <span>우리 아이 맞춤 펫푸드·용품 추천</span>
           </div>
           <div className="flex items-center gap-2 text-lg text-gray-500 font-medium">
              <Check size={20} className="text-[#FF8C00]" strokeWidth={3} />
              <span>동네 동물병원·미용실 간편 예약</span>
           </div>
           <div className="flex items-center gap-2 text-lg text-gray-500 font-medium">
              <Check size={20} className="text-[#FF8C00]" strokeWidth={3} />
              <span>함께 가는 여행·라이프스타일 정보</span>
           </div>
        </div>

        {/* Search Box - White BG + Orange Border Focus */}
        <form 
          onSubmit={handleSearch} 
          className={`relative w-full rounded-full transition-all duration-300 mb-6 ${
             isFocused 
             ? 'shadow-[0_8px_30px_rgba(242,107,29,0.15)] ring-2 ring-[#F26B1D] ring-offset-2' 
             : 'shadow-lg border border-gray-100'
          }`}
        >
          <input
            type="text"
            value={keyword}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="사료, 병원, 카페를 검색해 보세요"
            className="w-full h-16 pl-8 pr-20 rounded-full border-none bg-white text-lg placeholder-gray-400 focus:outline-none focus:ring-0"
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 h-12 w-12 bg-[#F26B1D] hover:bg-[#FF8C00] rounded-full flex items-center justify-center text-white transition-colors active:scale-95"
          >
            <Search size={24} />
          </button>
        </form>

        {/* Keyword Chips - Outline Style */}
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSearch(tag)}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-500 rounded-full text-sm font-bold hover:border-[#FFA042] hover:text-[#F26B1D] hover:bg-[#FFF3E0]/30 transition-all"
            >
              #{tag}
            </button>
          ))}
        </div>
        
        {/* Download Buttons */}
        <div className="mt-12 flex gap-3 opacity-80 hover:opacity-100 transition-opacity">
           <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
              <span className="text-xl"></span>
              <div className="text-left leading-none">
                 <span className="text-[9px] font-medium block mb-0.5">Download on the</span>
                 <span className="text-xs font-bold">App Store</span>
              </div>
           </button>
           <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
              <span className="text-xl">▶</span>
              <div className="text-left leading-none">
                 <span className="text-[9px] font-medium block mb-0.5">GET IT ON</span>
                 <span className="text-xs font-bold">Google Play</span>
              </div>
           </button>
        </div>
      </div>

      {/* 3. Mascots / Illustration Area */}
      {/* Positioned absolutely to fill the bottom right corner without interfering with content */}
      <div className="absolute bottom-[-20px] right-[-20px] w-[500px] h-[500px] pointer-events-none select-none z-10 opacity-100">
         {/* Simple decorative circle instead of gradient blob */}
         <div className="absolute bottom-[50px] right-[50px] w-[300px] h-[300px] bg-[#FFF3E0] rounded-full opacity-50 blur-3xl" />
         
         <div className="relative w-full h-full">
            {/* Dog */}
            <img 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=500&q=80"
              alt="Dog Mascot"
              className="absolute bottom-[40px] right-[140px] w-72 h-auto z-20 drop-shadow-2xl grayscale-[5%]" 
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
            />
            {/* Cat */}
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80"
              alt="Cat Mascot"
              className="absolute bottom-[30px] right-[0px] w-56 h-auto z-10 drop-shadow-xl"
              style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
            />
            
            {/* Speech Bubble */}
            <div className="absolute top-[180px] left-[100px] bg-white px-5 py-3 rounded-2xl rounded-br-none shadow-lg border border-[#FFA042] z-30 animate-bounce">
               <p className="text-[#F26B1D] font-bold text-sm">함께해요! 🐾</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default WebLandingSide;