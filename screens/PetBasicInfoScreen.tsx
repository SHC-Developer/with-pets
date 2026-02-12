import React, { useState } from 'react';
import { ChevronLeft, Camera, Search } from 'lucide-react';

interface PetBasicInfoScreenProps {
  onBack: () => void;
  onNext: () => void;
  petType: 'cat' | 'dog' | null;
}

const PetBasicInfoScreen: React.FC<PetBasicInfoScreenProps> = ({ onBack, onNext, petType }) => {
  // Form State
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'M' | 'F' | 'Unknown' | null>(null);
  const [neutered, setNeutered] = useState<boolean | null>(null);
  
  // DESIGN REVIEW MODE: Always allow proceeding
  const canProceed = true;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between">
        <button onClick={onBack} className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <span className="text-sm font-medium text-gray-500">1/3</span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 mt-2">
          우리 아이<br/>
          정보를 알려주세요
        </h1>

        {/* Photo Uploader */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
               {petType === 'cat' ? (
                 <img src="https://cdn-icons-png.flaticon.com/512/616/616430.png" alt="cat" className="w-16 h-16 opacity-30" />
               ) : (
                 <img src="https://cdn-icons-png.flaticon.com/512/616/616554.png" alt="dog" className="w-16 h-16 opacity-30" />
               )}
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-gray-800 text-white rounded-full border-2 border-white shadow-md">
              <Camera size={16} />
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">이름</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
            />
          </div>

          {/* Species Segment (Visual only as already selected) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">종류</label>
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <div className={`flex-1 py-2.5 text-center text-sm font-medium rounded-lg ${petType === 'dog' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}>강아지</div>
              <div className={`flex-1 py-2.5 text-center text-sm font-medium rounded-lg ${petType === 'cat' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}>고양이</div>
              <div className="flex-1 py-2.5 text-center text-sm font-medium rounded-lg text-gray-400">기타</div>
            </div>
          </div>

          {/* Breed Search */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">품종</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="품종을 검색해주세요 (예: 말티즈)"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              <Search size={20} className="absolute right-3 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Gender & Neutered */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">성별</label>
              <div className="flex gap-2">
                {['M', 'F'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g as any)}
                    className={`flex-1 py-3.5 rounded-xl text-sm font-medium border ${
                      gender === g 
                        ? 'border-rose-500 bg-rose-50 text-rose-600' 
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                    }`}
                  >
                    {g === 'M' ? '남아' : '여아'}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">중성화</label>
              <div className="flex gap-2">
                {[true, false].map((n) => (
                  <button
                    key={String(n)}
                    onClick={() => setNeutered(n)}
                    className={`flex-1 py-3.5 rounded-xl text-sm font-medium border ${
                      neutered === n 
                        ? 'border-rose-500 bg-rose-50 text-rose-600' 
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                    }`}
                  >
                    {n ? '완료' : '미완료'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Age & Weight */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">나이</label>
              <div className="relative">
                <input type="number" placeholder="0" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-8 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-200 text-right" />
                <span className="absolute right-3 top-3.5 text-gray-500 text-sm">살</span>
              </div>
            </div>
             <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">몸무게</label>
              <div className="relative">
                <input type="number" placeholder="0.0" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-8 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-200 text-right" />
                <span className="absolute right-3 top-3.5 text-gray-500 text-sm">kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-5 border-t border-gray-50 safe-area-bottom bg-white flex items-center gap-4">
        <button 
          onClick={onNext} // In real app, might skip to home
          className="text-gray-400 text-sm font-medium underline px-2"
        >
          나중에 할게요
        </button>
        <button 
          onClick={onNext}
          className={`flex-1 h-14 rounded-2xl text-lg font-bold transition-all ${
            canProceed 
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-200 active:scale-[0.98]' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default PetBasicInfoScreen;