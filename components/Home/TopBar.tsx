import React from 'react';
import { MapPin, Search, Bell, ChevronDown, User } from 'lucide-react';

interface TopBarProps {
  onProfileClick?: () => void;
  onLocationClick?: () => void;
  currentLocation?: string;
}

const TopBar: React.FC<TopBarProps> = ({ onProfileClick, onLocationClick, currentLocation = '화성시 동탄' }) => {
  const hasProfileImage = true; 

  return (
    <header className="bg-white sticky top-0 z-40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      {/* Row 1: Location & Icons */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        {/* Left: Location (Clickable) */}
        <button 
          onClick={onLocationClick}
          className="flex items-center gap-1 cursor-pointer group select-none hover:bg-gray-50 -ml-2 px-2 py-1 rounded-xl transition-colors"
        >
          <MapPin size={20} className="text-[#F26B1D] fill-[#FFF3E0]" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">{currentLocation}</span>
          <ChevronDown size={20} className="text-gray-800 group-hover:text-[#F26B1D] transition-colors" strokeWidth={2.5} />
        </button>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Notification */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors active:scale-95">
            <Bell size={24} />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#F26B1D] rounded-full border-2 border-white"></span>
          </button>
          
          {/* Profile Avatar */}
          <button 
            onClick={onProfileClick}
            className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 shadow-sm active:scale-95 transition-transform flex items-center justify-center relative group"
            aria-label="MY 메뉴로 이동"
          >
            {hasProfileImage ? (
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" 
              />
            ) : (
              <div className="w-full h-full bg-[#FFF3E0] flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <User size={20} className="text-[#F26B1D]" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Row 2: Search Bar */}
      <div className="px-5 pb-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={20} className="text-[#F26B1D]" />
          </div>
          <input 
            type="text" 
            placeholder="사료, 병원, 카페를 검색해 보세요" 
            className="w-full bg-gray-50 text-gray-800 text-sm font-medium py-3.5 pl-11 pr-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all placeholder-gray-400 shadow-inner"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;