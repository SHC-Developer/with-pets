import React, { useState } from 'react';
import { ChevronLeft, Search, Map, List, Users, Camera, MapPin, Heart } from 'lucide-react';

interface LifestyleCategoryScreenProps {
  onBack: () => void;
}

const tabs = [
  { id: 'space', label: '공간·로컬', icon: MapPin },
  { id: 'walk', label: '산책·여행', icon: Map },
  { id: 'community', label: '커뮤니티', icon: Users },
  { id: 'photo', label: '사진·기록', icon: Camera },
];

const LifestyleCategoryScreen: React.FC<LifestyleCategoryScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('space');

  return (
    <div className="flex flex-col h-full bg-white pb-20">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-20">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 text-gray-800 hover:bg-gray-100 rounded-full mr-1">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">라이프스타일</h1>
        </div>
        <button className="p-2 text-gray-800 hover:bg-gray-100 rounded-full">
          <Search size={24} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide sticky top-14 bg-white z-10">
        {tabs.map((tab) => {
           const Icon = tab.icon;
           const isActive = activeTab === tab.id;
           return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[25%] py-3 flex flex-col items-center gap-1 border-b-2 transition-colors ${
                isActive ? 'border-green-500 text-green-600' : 'border-transparent text-gray-400'
              }`}
            >
              <Icon size={18} />
              <span className="text-xs font-bold">{tab.label}</span>
            </button>
           );
        })}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide bg-gray-50">
        
        {/* Space Tab Content */}
        {activeTab === 'space' && (
           <>
              <div className="px-5 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide bg-white mb-2">
                 <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-white rounded-full text-xs font-bold">
                    <List size={12} /> 리스트
                 </button>
                 <button className="px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-600 font-medium">실내/야외</button>
                 <button className="px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-600 font-medium">주차가능</button>
                 <button className="px-3 py-1.5 border border-gray-200 rounded-full text-xs text-gray-600 font-medium">대형견 가능</button>
              </div>

              <div className="px-5 pb-6 space-y-4">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                       <div className="h-40 bg-gray-200 relative">
                          <img src={`https://source.unsplash.com/random/400x300?cafe,dog&sig=${i}`} className="w-full h-full object-cover" alt="Cafe" />
                          <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-rose-500">
                             <Heart size={16} />
                          </button>
                       </div>
                       <div className="p-4">
                          <div className="flex justify-between items-start mb-1">
                             <h3 className="text-lg font-bold text-gray-900">어반펫 라운지</h3>
                             <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">영업중</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">경기 화성시 동탄대로 · 카페/라운지</p>
                          <div className="flex gap-1">
                             <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">실내+야외</span>
                             <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">주차가능</span>
                             <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">노키즈존</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </>
        )}

        {/* Walk Tab Content */}
        {activeTab === 'walk' && (
           <div className="px-5 py-6 space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl p-5 text-white shadow-lg">
                 <h3 className="font-bold text-lg mb-1">이번 주말엔 여기 어때요?</h3>
                 <p className="text-sm opacity-90 mb-4">반려견과 걷기 좋은 가을 숲길 TOP 3</p>
                 <button className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold">코스 전체보기</button>
              </div>
              
              <h3 className="font-bold text-gray-900 mt-6">추천 산책 코스</h3>
              <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
                 {[1, 2, 3].map(i => (
                    <div key={i} className="min-w-[160px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                       <div className="h-24 bg-gray-200">
                           <img src={`https://source.unsplash.com/random/300x200?park&sig=${i}`} className="w-full h-full object-cover" />
                       </div>
                       <div className="p-3">
                          <h4 className="font-bold text-gray-900 text-sm mb-1">동탄 호수공원 B코스</h4>
                          <span className="text-xs text-gray-500">2.5km · 40분 소요</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        )}

        {/* Community Content */}
        {activeTab === 'community' && (
           <div className="px-5 py-6">
              <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
                 <button className="px-3 py-1.5 bg-gray-800 text-white rounded-full text-xs font-bold">전체</button>
                 <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">동네산책</button>
                 <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">육아꿀팁</button>
              </div>
              
              <div className="space-y-3">
                 {[1, 2].map(i => (
                    <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                       <div className="flex items-center gap-2 mb-3">
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded font-bold">산책모임</span>
                          <span className="text-xs text-gray-400">동탄2신도시 · 10분 전</span>
                       </div>
                       <h3 className="font-bold text-gray-900 text-base mb-1">오늘 저녁 8시 치동천 산책하실 분!</h3>
                       <p className="text-sm text-gray-500 line-clamp-2">
                          저희 강아지는 비숑이고 사회성이 좋아서 친구들을 좋아해요. 같이 가볍게 산책하고 편의점...
                       </p>
                       <div className="mt-3 flex items-center justify-between border-t border-gray-50 pt-3">
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                             <Users size={12} /> 2/4명 참여중
                          </div>
                          <button className="text-xs font-bold text-green-600">참여하기</button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        )}

        {/* Photo Content */}
        {activeTab === 'photo' && (
           <div className="px-5 py-6 grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2">
                 <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500 mb-1">
                    <Camera size={24} />
                 </div>
                 <h3 className="font-bold text-gray-900 text-sm">스튜디오 촬영</h3>
                 <p className="text-xs text-gray-400">증멍사진/프로필</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2">
                 <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-1">
                    <Heart size={24} />
                 </div>
                 <h3 className="font-bold text-gray-900 text-sm">성장 앨범</h3>
                 <p className="text-xs text-gray-400">매월 기록하기</p>
              </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default LifestyleCategoryScreen;