import React, { useState } from 'react';
import { ChevronLeft, Syringe, Scissors, Stethoscope, Weight, Activity, ChevronRight, Plus } from 'lucide-react';

interface MyReportScreenProps {
  onBack: () => void;
}

const MyReportScreen: React.FC<MyReportScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'health' | 'weight'>('health');

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 sticky top-0 bg-white z-10">
        <button onClick={onBack} className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">기록·리포트</h1>
        <button className="p-2 text-gray-800">
          <Plus size={24} />
        </button>
      </div>

      {/* Tabs */}
      <div className="px-5 pt-4 pb-2">
         <div className="flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('health')}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'health' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}
            >
               헬스 기록
            </button>
            <button 
              onClick={() => setActiveTab('weight')}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'weight' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}
            >
               식단·체중
            </button>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 scrollbar-hide pb-[var(--bottom-nav-total)]">
        {activeTab === 'health' && (
           <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-gray-100" />
              
              <div className="space-y-6">
                 {/* Item 1 */}
                 <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white z-10 flex-shrink-0">
                       <Stethoscope size={18} className="text-blue-600" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl p-4">
                       <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-bold text-gray-900">정기 건강검진</span>
                          <span className="text-xs text-gray-400">2023.10.15</span>
                       </div>
                       <p className="text-xs text-gray-500 mb-2">동탄 24시 동물병원</p>
                       <p className="text-xs text-gray-700 bg-white p-2 rounded-lg border border-gray-100">
                          특이사항 없음. 치석 관리가 필요하다는 소견. 스케일링 예약 고려할 것.
                       </p>
                    </div>
                 </div>

                 {/* Item 2 */}
                 <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center border-4 border-white z-10 flex-shrink-0">
                       <Scissors size={18} className="text-rose-600" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl p-4">
                       <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-bold text-gray-900">전체 미용</span>
                          <span className="text-xs text-gray-400">2023.09.20</span>
                       </div>
                       <p className="text-xs text-gray-500">몽몽 살롱</p>
                    </div>
                 </div>

                 {/* Item 3 */}
                 <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-4 border-white z-10 flex-shrink-0">
                       <Syringe size={18} className="text-green-600" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl p-4">
                       <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-bold text-gray-900">심장사상충 접종</span>
                          <span className="text-xs text-gray-400">2023.09.01</span>
                       </div>
                       <p className="text-xs text-gray-500">자가 접종 (넥스가드)</p>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {activeTab === 'weight' && (
           <div className="space-y-6">
              {/* Insight Card */}
              <div className="bg-rose-50 rounded-2xl p-5 flex items-start gap-3">
                 <div className="p-2 bg-white rounded-full text-rose-500 shadow-sm"><Activity size={20} /></div>
                 <div>
                    <h3 className="font-bold text-gray-900 mb-1">체중 관리가 아주 잘 되고 있어요!</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                       최근 3개월 평균 체중이 <span className="font-bold">5.8kg</span>으로 일정해요.<br/>
                       현재 급여중인 사료 양을 유지해도 좋아요.
                    </p>
                 </div>
              </div>

              {/* Weight Chart (CSS) */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                       <Weight size={18} className="text-gray-400" /> 체중 변화
                    </h3>
                    <span className="text-xs text-gray-400">최근 6개월</span>
                 </div>
                 
                 <div className="h-40 flex items-end justify-between gap-2 px-2">
                    {[5.5, 5.6, 5.9, 5.8, 5.7, 5.8].map((w, idx) => (
                       <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                          <span className="text-[10px] font-bold text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity mb-1">{w}</span>
                          <div 
                            className="w-full bg-rose-100 rounded-t-lg relative group-hover:bg-rose-300 transition-colors"
                            style={{ height: `${(w / 7) * 100}%` }}
                          >
                          </div>
                          <span className="text-[10px] text-gray-400">{idx + 5}월</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Food Info */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between cursor-pointer">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <p className="text-xs text-gray-500 mb-0.5">현재 급여 중</p>
                       <h4 className="font-bold text-gray-900 text-sm">오리젠 오리지널 캣</h4>
                    </div>
                 </div>
                 <ChevronRight size={18} className="text-gray-300" />
              </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default MyReportScreen;