import React, { useState } from 'react';
import { ChevronLeft, Check, Smartphone, Mail, Globe } from 'lucide-react';

interface SignUpScreenProps {
  onNext: () => void;
}

type TabType = 'phone' | 'email' | 'social';

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState<TabType>('phone');
  const [agreed, setAgreed] = useState(false);
  
  // Dummy form state
  const [phone, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');

  // DESIGN REVIEW MODE: Always allow proceeding
  const canProceed = true;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-2 h-14 flex items-center mb-2">
        <button className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold ml-1">회원가입</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-8 scrollbar-hide">
        {/* Tabs */}
        <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
          {[
            { id: 'phone', label: '휴대폰', icon: Smartphone },
            { id: 'email', label: '이메일', icon: Mail },
            { id: 'social', label: '소셜', icon: Globe },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-1.5 text-sm font-medium transition-all ${
                  isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[280px]">
          {activeTab === 'phone' && (
            <div className="space-y-4 animate-[fadeIn_0.3s_ease-out]">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">휴대폰 번호</label>
                <div className="flex gap-2">
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="'-' 없이 입력" 
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
                  />
                  <button className="bg-gray-800 text-white px-4 rounded-xl text-sm font-medium whitespace-nowrap">
                    인증요청
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">인증번호</label>
                <input 
                  type="number"
                  value={authCode}
                  onChange={(e) => setAuthCode(e.target.value)}
                  placeholder="6자리 입력" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
                />
                <p className="text-xs text-gray-400 mt-1.5 ml-1">
                  * 인증번호가 오지 않으면 스팸함을 확인해주세요.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="space-y-4 animate-[fadeIn_0.3s_ease-out]">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">이메일</label>
                <input type="email" placeholder="pet@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-200" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">비밀번호</label>
                <input type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-200" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">비밀번호 확인</label>
                <input type="password" placeholder="비밀번호 재입력" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-rose-200" />
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-3 animate-[fadeIn_0.3s_ease-out]">
              <p className="text-center text-sm text-gray-500 mb-6">SNS 계정으로 간편하게 시작하세요</p>
              <button className="w-full h-12 bg-[#FAE100] text-[#371D1E] rounded-xl font-bold flex items-center justify-center gap-2">
                <span className="text-lg">💬</span> 카카오로 시작하기
              </button>
              <button className="w-full h-12 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2">
                <span className="text-lg"></span> Apple로 계속하기
              </button>
              <button className="w-full h-12 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium flex items-center justify-center gap-2">
                <span className="text-lg">G</span> Google로 계속하기
              </button>
            </div>
          )}
        </div>

        {/* Terms */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div 
            onClick={() => setAgreed(!agreed)}
            className="flex items-center gap-3 cursor-pointer select-none mb-4"
          >
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${agreed ? 'bg-rose-500 border-rose-500' : 'bg-white border-gray-300'}`}>
              <Check size={14} className="text-white" />
            </div>
            <span className="font-bold text-gray-800 text-sm">약관 전체 동의</span>
          </div>
          <ul className="space-y-2 pl-8 text-xs text-gray-500">
            <li className="flex justify-between">
              <span>[필수] 서비스 이용약관 동의</span>
              <span className="underline text-gray-400">보기</span>
            </li>
            <li className="flex justify-between">
              <span>[필수] 개인정보 수집 및 이용 동의</span>
              <span className="underline text-gray-400">보기</span>
            </li>
            <li className="flex justify-between">
              <span>[선택] 마케팅 정보 수신 동의</span>
              <span className="underline text-gray-400">보기</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-5 border-t border-gray-50 safe-area-bottom bg-white">
        <button 
          onClick={onNext}
          className={`w-full h-14 rounded-2xl text-lg font-bold transition-all ${
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

export default SignUpScreen;