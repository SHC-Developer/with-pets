import React, { useState } from 'react';
import { Search, Check, Smartphone, Download } from 'lucide-react';

// Brand Assets
import logoImage from '../../assets/logo.png';
import mascotImage from '../../assets/mascot.png';

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

  const features = [
    '우리 아이 맞춤 펫푸드·용품 추천',
    '동네 동물병원·미용실 간편 예약',
    '함께 가는 여행·라이프스타일 정보',
  ];

  return (
    <aside className="brand-panel relative h-full w-full flex flex-col p-10 lg:p-14 xl:p-16 overflow-hidden bg-white">
      
      {/* ========================================
          1. HEADER - Logo Section
          ======================================== */}
      <header className="brand-panel-logo flex items-center gap-3 mb-10 lg:mb-12">
        <div className="relative">
          <img 
            src={logoImage} 
            alt="애들이랑 로고" 
            className="h-12 lg:h-14 w-auto object-contain drop-shadow-sm"
          />
        </div>
      </header>

      {/* ========================================
          2. MAIN CONTENT - Brand Message & Search
          ======================================== */}
      <div className="brand-panel-content flex-1 flex flex-col justify-center max-w-xl z-20">
        
        {/* Hero Headline */}
        <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-[#212121] leading-[1.15] mb-4">
          반려가족 라이프를
          <br />
          <span className="text-[#F26B1D]">한 번에, 애들이랑</span>
        </h1>
        
        {/* Sub Copy */}
        <p className="text-lg lg:text-xl text-[#666666] font-medium mb-8 leading-relaxed">
          사료부터 병원 예약까지,<br className="hidden lg:block" />
          우리 아이에게 필요한 모든 것을 한 곳에서.
        </p>

        {/* Feature List with Checkmarks */}
        <div className="space-y-3 mb-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FFF3E0] flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-[#F26B1D]" strokeWidth={3} />
              </div>
              <span className="text-base lg:text-lg text-[#666666] font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Search Box */}
        <form 
          onSubmit={handleSearch} 
          className={`relative w-full rounded-full transition-all duration-300 mb-5 ${
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
            className="w-full h-14 lg:h-16 pl-6 lg:pl-8 pr-16 lg:pr-20 rounded-full border-none bg-white text-base lg:text-lg placeholder-gray-400 focus:outline-none focus:ring-0"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 lg:h-12 w-10 lg:w-12 bg-[#F26B1D] hover:bg-[#FF8C00] rounded-full flex items-center justify-center text-white transition-all active:scale-95 shadow-md"
            aria-label="검색"
          >
            <Search size={20} className="lg:w-6 lg:h-6" />
          </button>
        </form>

        {/* Keyword Tags/Chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSearch(tag)}
              className="tag tag-outline px-4 py-2 bg-white border border-gray-200 text-[#666666] rounded-full text-sm font-bold hover:border-[#FFA042] hover:text-[#F26B1D] hover:bg-[#FFF3E0]/40 transition-all"
            >
              #{tag}
            </button>
          ))}
        </div>
        
        {/* App Download Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2.5 bg-[#212121] hover:bg-black text-white px-5 py-3 rounded-xl transition-colors group">
            <span className="text-2xl"></span>
            <div className="text-left leading-none">
              <span className="text-[10px] font-medium block mb-0.5 opacity-80">Download on the</span>
              <span className="text-sm font-bold">App Store</span>
            </div>
          </button>
          <button className="flex items-center gap-2.5 bg-[#212121] hover:bg-black text-white px-5 py-3 rounded-xl transition-colors group">
            <span className="text-2xl">▶</span>
            <div className="text-left leading-none">
              <span className="text-[10px] font-medium block mb-0.5 opacity-80">GET IT ON</span>
              <span className="text-sm font-bold">Google Play</span>
            </div>
          </button>
        </div>
      </div>

      {/* ========================================
          3. MASCOT SECTION - Character Illustration
          ======================================== */}
      <div className="brand-panel-mascot absolute bottom-0 right-0 w-[420px] lg:w-[480px] xl:w-[520px] h-[420px] lg:h-[480px] xl:h-[520px] pointer-events-none select-none z-10">
        
        {/* Decorative Background Glow */}
        <div className="absolute bottom-[60px] right-[60px] w-[280px] h-[280px] bg-[#FFF3E0] rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-[120px] right-[120px] w-[200px] h-[200px] bg-[#FFA042] rounded-full opacity-20 blur-2xl" />
        
        {/* Mascot Image */}
        <div className="relative w-full h-full flex items-end justify-end">
          <img 
            src={mascotImage}
            alt="애들이랑 마스코트 - 강아지와 고양이"
            className="w-[320px] lg:w-[380px] xl:w-[420px] h-auto object-contain drop-shadow-2xl mr-4 mb-4"
          />
          
          {/* Speech Bubble */}
          <div className="absolute top-[140px] lg:top-[160px] left-[40px] lg:left-[60px] bg-white px-5 py-3 rounded-2xl rounded-br-none shadow-lg border-2 border-[#FFA042] z-30">
            <p className="text-[#F26B1D] font-bold text-sm whitespace-nowrap">
              우리가 도와줄게요! 🐾
            </p>
          </div>
        </div>
      </div>

      {/* ========================================
          4. FOOTER - Subtle Brand Mark
          ======================================== */}
      <footer className="absolute bottom-6 left-14 lg:left-16 z-20">
        <p className="text-xs text-[#BDBDBD] font-medium">
          © 2026 애들이랑. All rights reserved.
        </p>
      </footer>
    </aside>
  );
};

export default WebLandingSide;
