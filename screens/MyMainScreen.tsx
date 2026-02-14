import React from 'react';
import { Settings, ChevronRight, CalendarCheck, RefreshCw, Activity, Plus, FileText, Bell, Headset, LogOut } from 'lucide-react';

interface MyMainScreenProps {
  onNavigateToReserve: () => void;
  onNavigateToReport: () => void;
}

const MyMainScreen: React.FC<MyMainScreenProps> = ({ onNavigateToReserve, onNavigateToReport }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-[var(--bottom-nav-total)] overflow-y-auto scrollbar-hide">
      
      {/* 1. Header & Profile */}
      <div className="bg-white px-5 pt-6 pb-6 rounded-b-3xl shadow-sm mb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900">MY</h1>
          <div className="flex gap-4 text-gray-400">
            <button><Bell size={24} /></button>
            <button><Settings size={24} /></button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
           <div className="relative">
             <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-md">
               <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                   <span className="text-[10px] text-white font-bold">P</span>
                </div>
             </div>
           </div>
           <div>
             <h2 className="text-xl font-bold text-gray-900">김집사님</h2>
             <button className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md mt-1 flex items-center gap-1">
               내 정보 수정 <ChevronRight size={12} />
             </button>
           </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-3">
           <button 
             onClick={onNavigateToReserve}
             className="flex-1 bg-rose-50 rounded-2xl p-4 flex flex-col justify-between h-24 hover:bg-rose-100 transition-colors"
           >
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-rose-500 mb-2">
                <CalendarCheck size={16} />
             </div>
             <div>
                <span className="text-xs text-rose-600 font-medium block">다가오는 예약</span>
                <span className="text-lg font-bold text-gray-900">2건</span>
             </div>
           </button>
           
           <button 
             onClick={onNavigateToReserve}
             className="flex-1 bg-blue-50 rounded-2xl p-4 flex flex-col justify-between h-24 hover:bg-blue-100 transition-colors"
           >
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500 mb-2">
                <RefreshCw size={16} />
             </div>
             <div>
                <span className="text-xs text-blue-600 font-medium block">구독 중</span>
                <span className="text-lg font-bold text-gray-900">1건</span>
             </div>
           </button>
        </div>
      </div>

      {/* 2. Pet Management */}
      <div className="px-5 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">반려동물 관리</h3>
        <div className="space-y-3">
           <div className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                 <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                 <div>
                    <h4 className="font-bold text-gray-900">보리 <span className="text-xs font-normal text-gray-500 ml-1">코숏 · 12살</span></h4>
                    <p className="text-xs text-gray-400">마지막 건강검진: 6개월 전</p>
                 </div>
              </div>
              <button className="text-gray-400 p-2"><ChevronRight size={20} /></button>
           </div>
           
           <button className="w-full py-3 rounded-2xl border border-dashed border-gray-300 text-gray-500 font-medium flex items-center justify-center gap-2 hover:bg-white hover:border-rose-300 hover:text-rose-500 transition-all">
              <Plus size={18} /> 새 가족 등록하기
           </button>
        </div>
      </div>

      {/* 3. Health & Report */}
      <div className="px-5 mb-8">
         <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-900">기록·리포트</h3>
            <button onClick={onNavigateToReport} className="text-xs text-gray-400">전체보기</button>
         </div>
         
         <div onClick={onNavigateToReport} className="bg-white p-5 rounded-2xl shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2 mb-4">
               <Activity size={18} className="text-green-500" />
               <span className="font-bold text-gray-900">최근 건강 상태</span>
            </div>
            <div className="flex gap-4">
               <div className="flex-1 pr-4 border-r border-gray-100">
                  <span className="text-xs text-gray-400 block mb-1">최근 체중 (10/20)</span>
                  <span className="text-lg font-bold text-gray-900">5.8 <span className="text-sm font-normal text-gray-500">kg</span></span>
                  <span className="text-[10px] text-green-500 bg-green-50 px-1.5 py-0.5 rounded ml-2">정상</span>
               </div>
               <div className="flex-1">
                  <span className="text-xs text-gray-400 block mb-1">다음 예방접종</span>
                  <span className="text-lg font-bold text-gray-900">D-14</span>
                  <span className="text-[10px] text-gray-500 block">종합백신 5차</span>
               </div>
            </div>
         </div>
      </div>

      {/* 4. Footer Links */}
      <div className="mt-auto px-5 space-y-1">
         <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl mb-2 text-gray-700 font-medium shadow-sm">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><FileText size={16} /></div>
               자주 묻는 질문
            </div>
            <ChevronRight size={18} className="text-gray-300" />
         </button>
         <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl mb-2 text-gray-700 font-medium shadow-sm">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><Headset size={16} /></div>
               1:1 문의하기
            </div>
            <ChevronRight size={18} className="text-gray-300" />
         </button>
         <button className="w-full flex items-center justify-center p-4 text-gray-400 text-sm font-medium gap-2 mt-4">
            <LogOut size={16} /> 로그아웃
         </button>
      </div>
    </div>
  );
};

export default MyMainScreen;