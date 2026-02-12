import React from 'react';
import { Home, Grid, CalendarCheck, MessageCircle, User } from 'lucide-react';

/**
 * 애들이랑 - BottomNav Component
 * 
 * Brand Colors:
 * - Active: #F26B1D (Primary)
 * - Active Fill: #FFF3E0 (Light Orange BG)
 * - Inactive: #9CA3AF (Gray)
 */

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

  return (
    <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-[env(safe-area-inset-bottom)] z-50 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center px-1 h-16">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button 
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition-all active:scale-95 ${
                isActive ? 'bg-[#FFF3E0]/50' : ''
              }`}
            >
              <div className={`transition-colors duration-200 ${
                isActive ? 'text-[#F26B1D]' : 'text-[#9CA3AF]'
              }`}>
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2}
                  fill={isActive ? '#FFF3E0' : 'none'}
                  className={isActive ? 'drop-shadow-sm' : ''}
                />
              </div>
              <span className={`text-[10px] font-semibold transition-colors duration-200 ${
                isActive ? 'text-[#F26B1D]' : 'text-[#9CA3AF]'
              }`}>
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
