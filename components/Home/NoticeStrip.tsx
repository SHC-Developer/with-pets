import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const NOTICES = [
  '[알림] 이번 주 할인전+기획전 모아보기 (클릭!)',
  '[이벤트] 신규 가입 시 첫 구매 20% 할인 쿠폰을 드려요',
  '[공지] 배송 일정이 2일 지연될 수 있습니다. 양해 부탁드립니다.',
  '[알림] 반려동물 등록 이벤트 진행 중 – 참여 시 포인트 적립',
];

const ROTATE_INTERVAL_MS = 3000;
const ANIMATION_MS = 400;

const NoticeStrip: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const currentRef = useRef(0);
  currentRef.current = current;

  useEffect(() => {
    const run = () => {
      const cur = currentRef.current;
      const nextIndex = (cur + 1) % NOTICES.length;
      setNext(nextIndex);
      setIsSliding(true);
      timeoutRef.current = setTimeout(() => {
        setCurrent(nextIndex);
        setIsSliding(false);
      }, ANIMATION_MS);
    };
    const timer = setInterval(run, ROTATE_INTERVAL_MS);
    return () => {
      clearInterval(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="bg-white border-b border-gray-100 overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-gray-50/80 active:bg-gray-100 transition-colors"
        aria-label="공지 보기"
      >
        <span className="text-[11px] font-semibold text-[#F26B1D] shrink-0">공지</span>
        {/* 한 줄 고정: line-height=높이, overflow-hidden으로 잘림 방지 */}
        <div className="flex-1 min-w-0 h-[1.25rem] relative overflow-hidden">
          {/* 현재 공지: 슬라이드할 때만 transition 적용 → 끝나고 isSliding false 시 이전 글로 되돌아가는 애니 없음 */}
          <span
            className={`absolute left-0 right-0 top-0 text-xs text-gray-700 font-medium truncate leading-[1.25rem] ${
              isSliding ? 'transition-transform duration-300 ease-out' : ''
            }`}
            style={{ transform: isSliding ? 'translateY(-100%)' : 'translateY(0)' }}
          >
            {NOTICES[current]}
          </span>
          {/* 다음 공지: 아래에서 위로 올라옴 */}
          <span
            className="absolute left-0 right-0 top-0 text-xs text-gray-700 font-medium truncate leading-[1.25rem] transition-transform duration-300 ease-out"
            style={{ transform: isSliding ? 'translateY(0)' : 'translateY(100%)' }}
          >
            {NOTICES[next]}
          </span>
        </div>
        <ChevronRight size={14} className="text-gray-400 shrink-0" />
      </button>
    </div>
  );
};

export default NoticeStrip;
