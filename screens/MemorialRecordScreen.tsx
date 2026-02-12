import React, { useState } from 'react';
import { ChevronLeft, Camera, Calendar, Share2, Heart, Edit3 } from 'lucide-react';

interface MemorialRecordScreenProps {
  onBack: () => void;
}

const MemorialRecordScreen: React.FC<MemorialRecordScreenProps> = ({ onBack }) => {
  const [isCreated, setIsCreated] = useState(false);
  
  // Create Form State
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [passDate, setPassDate] = useState('');
  const [message, setMessage] = useState('');

  if (!isCreated) {
    // 1. Creation Form
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="px-2 h-14 flex items-center justify-between border-b border-stone-100">
           <button onClick={onBack} className="p-2 text-stone-600"><ChevronLeft size={24} /></button>
           <h1 className="text-lg font-bold text-stone-800">추모 페이지 만들기</h1>
           <div className="w-10" />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-hide">
           <h2 className="text-xl font-serif font-bold text-stone-800 mb-2">
              아이와의 추억을<br/>이곳에 기록해 주세요
           </h2>
           <p className="text-sm text-stone-500 mb-8">
              언제든 다시 꺼내볼 수 있는 소중한 공간이 됩니다.
           </p>

           <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-stone-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm relative">
                 <Camera size={32} className="text-stone-300" />
                 <div className="absolute bottom-0 right-0 bg-stone-800 p-2 rounded-full text-white">
                    <Edit3 size={14} />
                 </div>
              </div>
           </div>

           <div className="space-y-5">
              <div>
                 <label className="block text-sm font-bold text-stone-700 mb-2">이름</label>
                 <input 
                   type="text" 
                   value={name}
                   onChange={e => setName(e.target.value)}
                   className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-400"
                   placeholder="아이 이름을 입력해주세요"
                 />
              </div>
              <div className="flex gap-4">
                 <div className="flex-1">
                    <label className="block text-sm font-bold text-stone-700 mb-2">만난 날</label>
                    <input type="date" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-600 text-sm focus:outline-none" />
                 </div>
                 <div className="flex-1">
                    <label className="block text-sm font-bold text-stone-700 mb-2">소풍 떠난 날</label>
                    <input type="date" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-600 text-sm focus:outline-none" />
                 </div>
              </div>
              <div>
                 <label className="block text-sm font-bold text-stone-700 mb-2">마지막 인사</label>
                 <textarea 
                   value={message}
                   onChange={e => setMessage(e.target.value)}
                   className="w-full h-32 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-400 resize-none text-sm"
                   placeholder="아이에게 전하고 싶은 말을 남겨주세요."
                 />
              </div>
           </div>
        </div>

        <div className="p-5 border-t border-stone-100 safe-area-bottom">
           <button 
             onClick={() => setIsCreated(true)}
             className="w-full h-14 rounded-xl bg-stone-800 text-white font-bold text-lg shadow-lg hover:bg-stone-700 transition-colors"
           >
              기록 저장하기
           </button>
        </div>
      </div>
    );
  }

  // 2. View Mode (Finished Page)
  return (
    <div className="flex flex-col h-full bg-[#FAFAF8] relative">
      <div className="px-4 h-14 flex items-center justify-between absolute top-0 w-full z-20">
         <button onClick={() => setIsCreated(false)} className="p-2 text-white drop-shadow-md"><ChevronLeft size={24} /></button>
         <button className="p-2 text-white drop-shadow-md"><Share2 size={24} /></button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
         {/* Hero Background */}
         <div className="relative w-full h-[45vh]">
            <img 
               src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               className="w-full h-full object-cover"
               alt="Memorial"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FAFAF8]" />
            
            <div className="absolute bottom-0 w-full flex flex-col items-center pb-8 px-6 text-center">
               <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">
                  {name || '보리'}
               </h2>
               <p className="text-stone-500 font-serif text-sm flex items-center gap-2 mb-4">
                  2012.03.14 <span className="w-8 h-[1px] bg-stone-300 inline-block"/> 2023.10.24
               </p>
               <span className="text-xs text-stone-400 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  우리가 함께한 4,245일
               </span>
            </div>
         </div>

         {/* Content */}
         <div className="px-8 pb-10">
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-center relative">
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FAFAF8] p-2 rounded-full">
                  <Heart size={24} className="text-stone-300 fill-stone-100" />
               </div>
               
               <p className="text-stone-600 leading-loose font-serif text-sm whitespace-pre-line mb-6">
                  {message || "나의 작은 천사 보리야,\n너와 함께했던 모든 순간이 기적이었어.\n아프지 말고 그곳에선 마음껏 뛰어놀길.\n우리가 다시 만나는 날까지,\n매일매일 너를 기억하고 사랑할게."}
               </p>

               <div className="border-t border-stone-100 pt-6">
                  <p className="text-xs text-stone-400 mb-3">함께 기억하는 사람들</p>
                  <div className="flex justify-center -space-x-2">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-stone-100 border-2 border-white" />
                     ))}
                     <button className="w-8 h-8 rounded-full bg-stone-50 border-2 border-white flex items-center justify-center text-xs text-stone-400">
                        +5
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div className="p-6 bg-[#FAFAF8] safe-area-bottom">
         <button className="w-full py-4 border border-stone-300 text-stone-600 rounded-xl font-medium hover:bg-stone-100 transition-colors">
            추모 페이지 공유하기
         </button>
      </div>
    </div>
  );
};

export default MemorialRecordScreen;