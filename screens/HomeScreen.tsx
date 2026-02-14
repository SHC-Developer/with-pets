import React, { useState } from 'react';
import TopBar from '../components/Home/TopBar';
import HeroSection from '../components/Home/HeroSection';
import StatusSection from '../components/Home/StatusSection';
import GridMenu from '../components/Home/GridMenu';
import PopularSection from '../components/Home/PopularSection';
import BottomNav from '../components/Layout/BottomNav';
import LocationSheet from '../components/Layout/LocationSheet';

interface HomeScreenProps {
  onServiceClick?: () => void;
  onNavigateToMy?: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onServiceClick, onNavigateToMy }) => {
  const [currentLocation, setCurrentLocation] = useState('화성시 동탄');
  const [isLocationSheetOpen, setLocationSheetOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Top Fixed Header with Profile & Location Click Handlers */}
      <TopBar 
        onProfileClick={onNavigateToMy} 
        onLocationClick={() => setLocationSheetOpen(true)}
        currentLocation={currentLocation}
      />

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto scrollbar-hide pb-[var(--bottom-nav-total)] bg-gray-50">
        
        {/* 1. 오늘의 추천 (Hero) */}
        <section className="mt-4">
          <HeroSection />
        </section>

        {/* 2. 진행 중 (Status) */}
        <section className="mt-6 px-5">
          <StatusSection onClick={onServiceClick} />
        </section>

        {/* 3. 대분류 바로가기 (Grid) */}
        <section className="mt-8 px-5">
          <GridMenu />
        </section>

        {/* 4. 이번 주 인기 (Popular) */}
        <section className="mt-8 pb-6">
          <PopularSection />
        </section>

        {/* Footer/Info Area */}
        <div className="px-5 py-8 bg-gray-100 text-center">
          <p className="text-xs text-gray-400">
            (주)애들이랑 | 사업자 등록번호 123-45-67890<br/>
            고객센터 1544-0000 (09:00 - 18:00)
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Location Selection Bottom Sheet */}
      <LocationSheet 
        isOpen={isLocationSheetOpen}
        onClose={() => setLocationSheetOpen(false)}
        onSelectLocation={(loc) => setCurrentLocation(loc)}
      />
    </div>
  );
};

export default HomeScreen;