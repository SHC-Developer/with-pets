import React, { useState } from 'react';
import { Search, PenLine, Heart, MessageCircle, Share2, MapPin, Users, MoreHorizontal, MessageSquare, ChevronDown, Calendar, Plus } from 'lucide-react';

const CommunityScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'meetup' | 'qna'>('feed');
  const [activeFilter, setActiveFilter] = useState('전체');

  // Dummy Data
  const feedItems = [
    { id: 1, user: '보리맘', pet: '보리 (코숏·2살)', time: '10분 전', content: '오늘 날씨가 너무 좋아서 보리랑 동탄 호수공원 산책 다녀왔어요! 🍁 가을 단풍이 정말 예쁘네요.', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=80', likes: 24, comments: 5 },
    { id: 2, user: '두부아빠', pet: '두부 (말티즈·5살)', time: '1시간 전', content: '새로 산 노즈워크 장난감을 너무 좋아하네요. 혼자서 30분째 킁킁거리는 중 ㅋㅋ', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80', likes: 56, comments: 12 },
  ];

  const meetupItems = [
    { id: 1, title: '동탄 호수공원 저녁 산책 모임', type: '산책', loc: '화성시 동탄2동', date: '10/24(화) 19:00', users: '3/6명', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: '주말 퍼피 사회화 클래스', type: '교육', loc: '멍멍 스쿨', date: '10/28(토) 14:00', users: '2/4명', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80' },
  ];

  const qnaItems = [
    { id: 1, cat: '건강', title: '강아지가 갑자기 사료를 안 먹어요 ㅠㅠ', content: '어제까진 잘 먹었는데 오늘 아침부터 입도 안 대네요. 간식은 먹는데...', answers: 5, time: '방금 전' },
    { id: 2, cat: '훈련', title: '분리불안 훈련 어떻게 시작하나요?', content: '출근만 하면 하울링이 너무 심해서 이웃 민원이 들어왔어요.', answers: 12, time: '30분 전' },
    { id: 3, cat: '용품', title: '슬개골 탈구 예방 매트 추천해주세요', content: '미끄럼 방지 잘 되고 청소하기 편한 걸로 찾고 있습니다.', answers: 8, time: '2시간 전' },
  ];

  const getTags = () => {
    switch(activeTab) {
      case 'feed': return ['내 주변', '인기 글', '강아지', '고양이', '일상', '꿀팁'];
      case 'meetup': return ['전체', '산책', '교육', '소셜', '봉사', '이번 주말'];
      case 'qna': return ['전체', '건강', '영양', '훈련', '용품', '미용', '기타'];
    }
  };

  const getFabIcon = () => {
    switch(activeTab) {
      case 'feed': return <PenLine size={24} />;
      case 'meetup': return <Plus size={24} />;
      case 'qna': return <MessageSquare size={24} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white pb-20 relative">
      {/* 1. Header */}
      <div className="px-5 h-14 flex items-center justify-between bg-white sticky top-0 z-30">
        <h1 className="text-xl font-bold text-gray-900">커뮤니티</h1>
        <button className="p-2 text-gray-800 hover:bg-gray-100 rounded-full">
          <Search size={24} />
        </button>
      </div>

      {/* 2. Tabs */}
      <div className="flex border-b border-gray-100 sticky top-14 bg-white z-20">
        {[
          { id: 'feed', label: '피드' },
          { id: 'meetup', label: '모임' },
          { id: 'qna', label: 'Q&A' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as any);
              setActiveFilter('전체');
            }}
            className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. Filter Chips */}
      <div className="bg-white px-5 py-3 sticky top-[105px] z-10 border-b border-gray-50">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {getTags().map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(tag)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                (activeFilter === tag || (idx === 0 && activeFilter === '전체'))
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-500 border-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide bg-gray-50 pb-[var(--bottom-nav-total)]">
        
        {/* --- FEED TAB --- */}
        {activeTab === 'feed' && (
          <div className="pb-24">
            {feedItems.map(item => (
              <div key={item.id} className="bg-white mb-2 p-5 border-b border-gray-100">
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden">
                       <img src={`https://source.unsplash.com/random/100x100?face&sig=${item.id}`} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{item.user}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span>{item.time}</span>
                        <span className="w-0.5 h-0.5 bg-gray-300 rounded-full" />
                        <span className="text-rose-500">{item.pet}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-300"><MoreHorizontal size={18} /></button>
                </div>
                
                {/* Content */}
                <p className="text-sm text-gray-800 leading-relaxed mb-3 whitespace-pre-line">
                  {item.content}
                </p>
                {item.img && (
                  <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden mb-4 border border-gray-50">
                    <img src={item.img} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-gray-500 hover:text-rose-500 transition-colors">
                    <Heart size={20} />
                    <span className="text-xs font-medium">{item.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle size={20} />
                    <span className="text-xs font-medium">{item.comments}</span>
                  </button>
                  <button className="ml-auto text-gray-400">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- MEETUP TAB --- */}
        {activeTab === 'meetup' && (
          <div className="p-5 space-y-4 pb-24">
            {meetupItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-32 bg-gray-200 relative">
                  <img src={item.img} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-gray-800">
                    {item.type}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                  <div className="space-y-1.5 mb-4">
                     <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin size={14} /> {item.loc}
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={14} /> {item.date}
                     </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-50 pt-3">
                     <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
                        <Users size={14} /> {item.users} 참여 중
                     </div>
                     <button className="bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-lg">
                        참여하기
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- Q&A TAB --- */}
        {activeTab === 'qna' && (
          <div className="pb-24">
            {qnaItems.map(item => (
              <div key={item.id} className="bg-white p-5 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-bold">
                       {item.cat}
                    </span>
                    <span className="text-xs text-gray-400">{item.time}</span>
                 </div>
                 <h3 className="font-bold text-gray-900 text-base mb-1.5">
                    <span className="text-rose-500 mr-1">Q.</span>{item.title}
                 </h3>
                 <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {item.content}
                 </p>
                 <div className="flex items-center gap-1.5 text-xs font-bold text-blue-500">
                    <MessageCircle size={14} />
                    답변 {item.answers}개
                 </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-5 z-40">
        <button className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-200 hover:bg-rose-600 hover:scale-105 transition-all">
           {getFabIcon()}
        </button>
      </div>
    </div>
  );
};

export default CommunityScreen;