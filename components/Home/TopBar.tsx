import React from 'react';
import { MapPin, Search, Bell, ChevronDown, User } from 'lucide-react';

// Brand Assets
import logoImage from '../../assets/logo.png';

/**
 * 애들이랑 - TopBar Component
 * 
 * Brand Colors:
 * - Primary: #F26B1D
 * - Secondary: #FF8C00
 * - Accent: #FFA042
 * - Light BG: #FFF3E0
 */

interface TopBarProps {
  onProfileClick?: () => void;
  onLocationClick?: () => void;
  currentLocation?: string;
  showLogo?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ 
  onProfileClick, 
  onLocationClick, 
  currentLocation = '화성시 동탄',
  showLogo = false 
}) => {
  const hasProfileImage = true; 

  return (
    <header className="bg-white sticky top-0 z-40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      {/* Row 1: Logo/Location & Icons */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        {/* Left: Logo or Location */}
        <div className="flex items-center gap-3">
          {showLogo && (
            <img 
              src={logoImage} 
              alt="애들이랑" 
              className="h-7 w-auto object-contain"
            />
          )}
          
          {/* Location Selector */}
          <button 
            onClick={onLocationClick}
            className="flex items-center gap-1 cursor-pointer group select-none hover:bg-[#FFF3E0]/50 -ml-2 px-2 py-1 rounded-xl transition-colors"
          >
            <MapPin size={20} className="text-[#F26B1D] fill-[#FFF3E0]" />
            <span className="text-lg font-bold text-[#212121] tracking-tight">{currentLocation}</span>
            <ChevronDown size={18} className="text-[#666666] group-hover:text-[#F26B1D] transition-colors" strokeWidth={2.5} />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Notification */}
          <button className="relative p-2 text-[#666666] hover:text-[#F26B1D] hover:bg-[#FFF3E0]/50 rounded-full transition-colors active:scale-95">
            <Bell size={24} />
            {/* Notification Badge */}
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#F26B1D] rounded-full border-2 border-white"></span>
          </button>
          
          {/* Profile Avatar */}
          <button 
            onClick={onProfileClick}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100 hover:border-[#FFA042] shadow-sm active:scale-95 transition-all flex items-center justify-center relative group"
            aria-label="MY 메뉴로 이동"
          >
            {hasProfileImage ? (
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" 
              />
            ) : (
              <div className="w-full h-full bg-[#FFF3E0] flex items-center justify-center group-hover:bg-[#FFE4CC] transition-colors">
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
            className="w-full bg-[#F9FAFB] text-[#212121] text-sm font-medium py-3.5 pl-11 pr-4 rounded-2xl border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FFA042] focus:border-[#FFA042] focus:bg-white transition-all placeholder-[#9CA3AF]"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
