import React, { useState } from 'react';
import { ChevronLeft, Calendar, MapPin, MoreVertical, RefreshCw, Package, Truck, Clock } from 'lucide-react';

interface MyReservationScreenProps {
  onBack: () => void;
}

const MyReservationScreen: React.FC<MyReservationScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'reserve' | 'subscribe'>('reserve');
  const [filter, setFilter] = useState('upcoming'); // upcoming, completed, canceled

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 sticky top-0 bg-white z-10">
        <button onClick={onBack} className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">예약·구독 관리</h1>
        <div className="w-10" />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button 
          onClick={() => setActiveTab('reserve')}
          className={`flex-1 py-3 text-sm font-bold transition-colors border-b-2 ${activeTab === 'reserve' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400'}`}
        >
          예약 내역
        </button>
        <button 
          onClick={() => setActiveTab('subscribe')}
          className={`flex-1 py-3 text-sm font-bold transition-colors border-b-2 ${activeTab === 'subscribe' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400'}`}
        >
          정기구독 관리
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50 p-5 scrollbar-hide pb-[var(--bottom-nav-total)]">
        
        {/* Reservation Content */}
        {activeTab === 'reserve' && (
          <>
            {/* Filter Chips */}
            <div className="flex gap-2 mb-4">
              {[{id: 'upcoming', label: '이용 예정'}, {id: 'completed', label: '이용 완료'}, {id: 'canceled', label: '취소'}]
                .map(f => (
                  <button 
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      filter === f.id ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 border border-gray-200'
                    }`}
                  >
                    {f.label}
                  </button>
              ))}
            </div>

            <div className="space-y-4">
               {/* Card 1 */}
               <div className="bg-white p-5 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                     <span className="bg-rose-50 text-rose-600 text-[10px] font-bold px-2 py-1 rounded">D-4</span>
                     <button className="text-gray-300"><MoreVertical size={16} /></button>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">몽몽 살롱 동탄점</h3>
                  <p className="text-sm text-gray-500 mb-4">소형견 전체미용</p>
                  
                  <div className="space-y-2 mb-4">
                     <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-gray-400" /> 2023.10.28 (월)
                     </div>
                     <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-gray-400" /> 14:00 방문
                     </div>
                     <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-gray-400" /> 경기 화성시 동탄대로 123
                     </div>
                  </div>
                  
                  <div className="flex gap-2">
                     <button className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">문의하기</button>
                     <button className="flex-1 py-2.5 bg-rose-500 rounded-xl text-sm font-bold text-white shadow-sm">상세보기</button>
                  </div>
               </div>

               {/* Card 2 (Completed Mock) */}
               {filter === 'completed' && (
                 <div className="bg-white p-5 rounded-2xl shadow-sm opacity-60">
                    <div className="flex justify-between items-start mb-3">
                       <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded">이용완료</span>
                       <button className="text-gray-300"><MoreVertical size={16} /></button>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">동탄 24시 동물병원</h3>
                    <p className="text-sm text-gray-500 mb-4">기본 건강검진</p>
                    <button className="w-full py-2.5 border border-rose-200 text-rose-500 rounded-xl text-sm font-bold bg-rose-50">후기 작성하기</button>
                 </div>
               )}
            </div>
          </>
        )}

        {/* Subscription Content */}
        {activeTab === 'subscribe' && (
           <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100">
                 <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-50">
                    <RefreshCw size={16} className="text-rose-500" />
                    <span className="font-bold text-gray-900 text-sm">구독중</span>
                    <span className="text-xs text-gray-400 ml-auto">다음 결제일: 10/24</span>
                 </div>
                 
                 <div className="flex gap-3 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                       <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <h3 className="font-bold text-gray-900 text-sm line-clamp-2">오리젠 오리지널 캣 1.8kg (전연령용)</h3>
                       <div className="flex items-center gap-1 mt-1">
                          <Package size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-500">1개 / 4주 간격</span>
                       </div>
                    </div>
                 </div>

                 <div className="bg-gray-50 rounded-xl p-3 mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <Truck size={16} className="text-gray-500" />
                       <span className="text-xs font-bold text-gray-700">10/26 (목) 도착 예정</span>
                    </div>
                    <button className="text-xs text-gray-400 underline">배송조회</button>
                 </div>

                 <div className="grid grid-cols-3 gap-2">
                    <button className="py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-600">주기 변경</button>
                    <button className="py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-600">이번만 건너뛰기</button>
                    <button className="py-2 border border-gray-200 rounded-lg text-xs font-medium text-red-400">해지</button>
                 </div>
              </div>

              {/* Add New Subscription */}
              <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-400 font-bold flex items-center justify-center gap-2 hover:bg-white hover:border-gray-400 transition-colors">
                 + 새 구독 상품 추가하기
              </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default MyReservationScreen;