import React from 'react';
import { Truck, Calendar, ChevronRight, Clock } from 'lucide-react';

interface StatusSectionProps {
  onClick?: () => void;
}

const StatusSection: React.FC<StatusSectionProps> = ({ onClick }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">진행 중인 서비스</h2>
      </div>
      
      <div className="space-y-3">
        {/* Card 1: Subscription (Delivery) */}
        <div className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-rose-100 flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shrink-0">
                <Truck size={24} />
              </div>
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                D-2
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">정기배송</span>
              </div>
              <h4 className="text-base font-bold text-gray-900">로얄캐닌 맞춤 사료</h4>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">10월 24일 (목) 도착 예정</p>
            </div>
          </div>
          <button className="text-gray-300 group-hover:text-rose-500 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Card 2: Reservation (Visit) */}
        <div 
          onClick={onClick}
          className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                <Calendar size={24} />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-gray-100">
                 <Clock size={12} className="text-blue-500" />
              </div>
            </div>
            <div>
               <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">미용예약</span>
                <span className="text-[11px] text-gray-400 font-medium">방문 예정</span>
              </div>
              <h4 className="text-base font-bold text-gray-900">몽몽 살롱 동탄점</h4>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">10월 28일 (월) 14:00 방문</p>
            </div>
          </div>
          <button className="text-gray-300 group-hover:text-blue-500 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusSection;