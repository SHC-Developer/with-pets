import React from 'react';
import { Home, Grid, CalendarCheck, MessageCircle, User } from 'lucide-react';

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'home', onTabChange }) => {
  const tabs = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'category', label: '카테고리', icon: Grid },
    { id: 'reserve', label: '예약·구독', icon: CalendarCheck },
    { id: 'community', label: '커뮤니티', icon: MessageCircle },
    { id: 'my', label: 'MY', icon: User },
  ];

  // Brand Colors:
  // Active Text/Icon: text-[#F26B1D] (Orange)
  // Active Bg Fill: fill-[#FFF3E0] (Light Orange)

  return (
    <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-[env(safe-area-inset-bottom)] z-50 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center px-2 h-16">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button 
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className="flex-1 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            >
              <div className={`transition-colors duration-200 ${isActive ? 'text-[#F26B1D]' : 'text-gray-300'}`}>
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2}
                  fill={isActive ? "currentColor" : "none"}
                  className={isActive ? "fill-[#FFF3E0]" : ""}
                />
              </div>
              <span className={`text-[10px] font-medium transition-colors duration-200 ${isActive ? 'text-[#F26B1D]' : 'text-gray-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;