import React, { useState } from 'react';
import TopBar from '../components/Home/TopBar';
import HeroSection from '../components/Home/HeroSection';
import NoticeStrip from '../components/Home/NoticeStrip';
import StatusSection from '../components/Home/StatusSection';
import GridMenu from '../components/Home/GridMenu';
import PopularSection from '../components/Home/PopularSection';
import BottomNav from '../components/Layout/BottomNav';

interface HomeScreenProps {
  onServiceClick?: () => void;
  onNavigateToMy?: () => void;
  /** 선택된 반려동물 (온보딩에서 설정) */
  petType?: 'cat' | 'dog' | null;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  onServiceClick,
  onNavigateToMy,
  petType = 'dog',
}) => {
  const [deliveryAddress, setDeliveryAddress] = useState('');

  return (
    <div className="flex flex-col h-full bg-white relative">
      <TopBar
        onProfileClick={onNavigateToMy}
        petType={petType}
        onDeliveryAddressClick={() => {}}
        deliveryPlaceholder={deliveryAddress || '배송지 입력'}
      />

      <main className="flex-1 overflow-y-auto scrollbar-hide pb-[var(--bottom-nav-total)] bg-gray-50">
        {/* 광고 캐러셀 */}
        <section className="mt-4">
          <HeroSection />
        </section>

        {/* 공지 한 줄 (3초마다 위로 스크롤 전환) */}
        <NoticeStrip />

        {/* 진행 중 */}
        <section className="mt-6 px-5">
          <StatusSection onClick={onServiceClick} />
        </section>

        {/* 대분류 바로가기 */}
        <section className="mt-8 px-5">
          <GridMenu />
        </section>

        {/* 이번 주 인기 */}
        <section className="mt-8 pb-6">
          <PopularSection />
        </section>

        <div className="px-5 py-8 bg-gray-100 text-center">
          <p className="text-xs text-gray-400">
            (주)애들이랑 | 사업자 등록번호 123-45-67890<br />
            고객센터 1544-0000 (09:00 - 18:00)
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default HomeScreen;
