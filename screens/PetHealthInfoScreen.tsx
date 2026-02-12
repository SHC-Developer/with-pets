import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface PetHealthInfoScreenProps {
  onBack: () => void;
  onNext: () => void;
}

const healthTags = ['관절/뼈', '피부/털', '소화기/위장', '다이어트', '심장', '신장/요로', '면역력', '구강관리', '눈/눈물', '해당 없음'];
const envTags = ['실내', '실외', '실내+실외', '아파트/빌라', '단독주택'];

const PetHealthInfoScreen: React.FC<PetHealthInfoScreenProps> = ({ onBack, onNext }) => {
  const [selectedHealth, setSelectedHealth] = useState<string[]>([]);
  const [selectedEnv, setSelectedEnv] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<number>(2); // 1: Low, 2: Normal, 3: High

  const toggleHealth = (tag: string) => {
    if (tag === '해당 없음') {
      setSelectedHealth(['해당 없음']);
      return;
    }
    
    let newTags = selectedHealth.includes('해당 없음') ? [] : [...selectedHealth];
    
    if (newTags.includes(tag)) {
      newTags = newTags.filter(t => t !== tag);
    } else {
      newTags.push(tag);
    }
    setSelectedHealth(newTags);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between">
        <button onClick={onBack} className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <span className="text-sm font-medium text-gray-500">2/3</span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 mt-2">
          건강·생활 정보
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          딱 맞는 상품 추천을 위해 필요해요
        </p>

        <div className="space-y-8">
          {/* Health Section */}
          <section>
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-1">
              건강 고민 <span className="text-gray-400 font-normal text-xs">(중복 선택 가능)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {healthTags.map((tag) => {
                const isSelected = selectedHealth.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleHealth(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                      isSelected 
                        ? 'bg-rose-50 border-rose-200 text-rose-600' 
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Environment Section */}
          <section>
             <h3 className="text-sm font-bold text-gray-800 mb-3">생활 환경</h3>
             <div className="flex flex-wrap gap-2">
              {envTags.map((tag) => {
                const isSelected = selectedEnv === tag;
                 return (
                  <button
                    key={tag}
                    onClick={() => setSelectedEnv(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                      isSelected 
                        ? 'bg-blue-50 border-blue-200 text-blue-600' 
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
             </div>
          </section>

          {/* Activity Level */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-800">평소 활동량</h3>
              <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-0.5 rounded">
                {activityLevel === 1 ? '조용해요' : activityLevel === 2 ? '보통이에요' : '활발해요!'}
              </span>
            </div>
            
            <div className="relative h-2 bg-gray-100 rounded-full mb-6 mx-1">
              <div 
                className="absolute h-full bg-rose-400 rounded-full transition-all duration-300"
                style={{ width: `${(activityLevel - 1) * 50}%` }}
              />
              <div className="absolute w-full flex justify-between -top-1.5">
                {[1, 2, 3].map((step) => (
                  <button 
                    key={step}
                    onClick={() => setActivityLevel(step)}
                    className={`w-5 h-5 rounded-full border-2 transition-all ${
                      step <= activityLevel 
                        ? 'bg-white border-rose-500 scale-110' 
                        : 'bg-white border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 px-1">
              <span>낮음</span>
              <span>보통</span>
              <span>높음</span>
            </div>
          </section>

          {/* Notes */}
          <section>
            <h3 className="text-sm font-bold text-gray-800 mb-3">기타 특이사항</h3>
            <textarea 
              placeholder="알레르기 성분이나 특별히 조심해야 할 점이 있다면 적어주세요."
              className="w-full h-24 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 resize-none"
            />
          </section>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-5 border-t border-gray-50 safe-area-bottom bg-white flex gap-3">
        <button 
          onClick={onBack}
          className="flex-none w-14 h-14 rounded-2xl bg-gray-100 text-gray-500 font-bold flex items-center justify-center hover:bg-gray-200"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={onNext}
          className="flex-1 h-14 rounded-2xl bg-rose-500 text-white text-lg font-bold shadow-lg shadow-rose-200 active:scale-[0.98] transition-all"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default PetHealthInfoScreen;