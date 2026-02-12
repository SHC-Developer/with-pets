import React, { useState } from 'react';
import { ChevronLeft, Search, ChevronRight, Sparkles } from 'lucide-react';

interface PetFoodCategoryScreenProps {
  onBack: () => void;
  onSubCategorySelect: () => void;
}

const tabs = ['주식 사료', '간식', '서플리먼트', '정기식단'];

const subCategories = [
  { id: 'dry', label: '건식 사료' },
  { id: 'wet', label: '습식·캔' },
  { id: 'soft', label: '소프트·반습식' },
  { id: 'func', label: '기능성·처방' },
  { id: 'freeze', label: '동결건조·화식' },
  { id: 'milk', label: '펫밀크·분유' },
];

const PetFoodCategoryScreen: React.FC<PetFoodCategoryScreenProps> = ({ onBack, onSubCategorySelect }) => {
  const [activeTab, setActiveTab] = useState('주식 사료');

  return (
    <div className="flex flex-col h-full bg-white pb-20">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 text-gray-800 hover:bg-gray-100 rounded-full mr-1">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">펫푸드</h1>
        </div>
        <button className="p-2 text-gray-800 hover:bg-gray-100 rounded-full">
          <Search size={24} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100 sticky top-0 bg-white z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-none px-5 py-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === tab 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide bg-gray-50">
        {/* Description */}
        <div className="px-5 py-6 bg-white mb-2">
          <p className="text-xl font-bold text-gray-900 mb-1">
            우리 아이의<br />
            {activeTab}를 골라보세요
          </p>
        </div>

        {/* AI Recommendation Banner */}
        <div className="px-5 mb-6">
          <button 
            onClick={onSubCategorySelect}
            className="w-full bg-gradient-to-r from-rose-500 to-orange-400 rounded-2xl p-5 text-white shadow-lg shadow-rose-200 flex items-center justify-between group"
          >
            <div>
              <div className="flex items-center gap-1 mb-1 opacity-90">
                <Sparkles size={14} className="text-yellow-200" />
                <span className="text-xs font-bold text-yellow-100">AI 맞춤 추천</span>
              </div>
              <p className="text-lg font-bold leading-tight">
                보리에게 딱 맞는<br />
                {activeTab} 보러가기
              </p>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ChevronRight size={18} />
            </div>
          </button>
        </div>

        {/* Sub Categories */}
        <div className="px-5">
          <h3 className="text-sm font-bold text-gray-500 mb-3">카테고리 상세</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {subCategories.map((sub, idx) => (
              <button
                key={sub.id}
                onClick={onSubCategorySelect}
                className={`w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors ${
                  idx !== subCategories.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <span className="text-sm font-medium text-gray-900">{sub.label}</span>
                <ChevronRight size={16} className="text-gray-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetFoodCategoryScreen;