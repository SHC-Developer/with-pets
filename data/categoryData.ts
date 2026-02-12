/**
 * 애들이랑 - 카테고리 데이터
 * iconKey: 실제 일러스트 아이콘 교체 시 참조용
 */

export interface CategoryItem {
  id: string;
  label: string;
  iconKey: string;
  /** 선택 시 상품/서비스 목록으로 이동 시 전달할 쿼리 파라미터 */
  query?: string;
}

export interface CategorySection {
  id: string;
  title: string;
  items: CategoryItem[];
}

export interface MainCategory {
  id: string;
  tabLabel: string;
  sections: CategorySection[];
}

export const categoryData: MainCategory[] = [
  // 1) 펫푸드 (식단 케어)
  {
    id: 'pet-food',
    tabLabel: '펫푸드',
    sections: [
      {
        id: 'pet-food-age',
        title: '급여 연령',
        items: [
          { id: 'puppy', label: '퍼피', iconKey: 'puppy' },
          { id: 'adult', label: '어덜트', iconKey: 'adult' },
          { id: 'senior', label: '시니어', iconKey: 'senior' },
          { id: 'all-age', label: '전연령', iconKey: 'all-age' },
        ],
      },
      {
        id: 'pet-food-form',
        title: '사료 형태',
        items: [
          { id: 'dry-kibble', label: '건식 사료(키블)', iconKey: 'kibble' },
          { id: 'wet-pouch', label: '습식·파우치 사료', iconKey: 'wet-food' },
          { id: 'functional', label: '기능성·처방 사료', iconKey: 'functional-food' },
        ],
      },
      {
        id: 'pet-food-treat',
        title: '간식 타입',
        items: [
          { id: 'treat-general', label: '일반 간식', iconKey: 'treat' },
          { id: 'treat-functional', label: '기능성 간식', iconKey: 'dental-treat' },
        ],
      },
      {
        id: 'pet-food-supplement',
        title: '서플리먼트',
        items: [
          { id: 'supplement', label: '영양제', iconKey: 'supplement' },
          { id: 'topper', label: '토핑·부스터', iconKey: 'topper' },
        ],
      },
      {
        id: 'pet-food-diet',
        title: '정기식단 관리',
        items: [
          { id: 'meal-subscription', label: '맞춤 식단 구독', iconKey: 'subscription' },
          { id: 'diet-report', label: '식단·체중 관리 리포트', iconKey: 'report' },
        ],
      },
    ],
  },

  // 2) 펫용품 (생활 & 환경 케어)
  {
    id: 'pet-item',
    tabLabel: '펫용품',
    sections: [
      {
        id: 'pet-item-hygiene',
        title: '배변·위생',
        items: [
          { id: 'pad-diaper', label: '배변패드·기저귀', iconKey: 'pad' },
          { id: 'litter', label: '고양이모래', iconKey: 'litter' },
          { id: 'shampoo', label: '샴푸·바디케어', iconKey: 'shampoo' },
          { id: 'ear-eye', label: '귀·눈·탈취', iconKey: 'ear-care' },
        ],
      },
      {
        id: 'pet-item-living',
        title: '생활·휴식',
        items: [
          { id: 'bed-house', label: '침대·하우스', iconKey: 'bed' },
          { id: 'mat-rug', label: '매트·러그', iconKey: 'mat' },
          { id: 'steps-ramp', label: '계단·경사로', iconKey: 'stairs' },
        ],
      },
      {
        id: 'pet-item-outdoor',
        title: '외출·이동',
        items: [
          { id: 'harness-leash', label: '하네스·리드줄', iconKey: 'harness' },
          { id: 'carrier-stroller', label: '이동장·유모차', iconKey: 'carrier' },
          { id: 'clothing', label: '의류', iconKey: 'clothing' },
        ],
      },
      {
        id: 'pet-item-toy',
        title: '장난감',
        items: [
          { id: 'toy', label: '토이', iconKey: 'toy' },
          { id: 'puzzle', label: '노즈워크·퍼즐', iconKey: 'puzzle' },
          { id: 'scrather', label: '스크래처·캣타워', iconKey: 'scrather' },
        ],
      },
      {
        id: 'pet-item-smart',
        title: '스마트/헬스',
        items: [
          { id: 'feeder-water', label: '자동급식·급수', iconKey: 'auto-feeder' },
          { id: 'petcam-scale', label: '펫캠·체중계', iconKey: 'petcam' },
          { id: 'wearable', label: '웨어러블', iconKey: 'wearable' },
        ],
      },
    ],
  },

  // 3) 펫 서비스 (현장서비스 + 의료)
  {
    id: 'pet-service',
    tabLabel: '펫 서비스',
    sections: [
      {
        id: 'pet-service-medical',
        title: '헬스·메디컬',
        items: [
          { id: 'vet', label: '동물병원 진료', iconKey: 'vet' },
          { id: 'vaccine', label: '예방접종·검진', iconKey: 'vaccine' },
          { id: 'rehab', label: '재활·물리치료', iconKey: 'rehab' },
        ],
      },
      {
        id: 'pet-service-grooming',
        title: '미용·목욕',
        items: [
          { id: 'grooming', label: '미용(부분·전체)', iconKey: 'grooming' },
          { id: 'spa', label: '목욕·스파', iconKey: 'spa' },
        ],
      },
      {
        id: 'pet-service-care',
        title: '돌봄·위탁',
        items: [
          { id: 'petsitter', label: '방문 돌봄·펫시터', iconKey: 'petsitter' },
          { id: 'hotel', label: '호텔·데이케어', iconKey: 'hotel' },
        ],
      },
      {
        id: 'pet-service-transport',
        title: '이동지원',
        items: [
          { id: 'pettaxi', label: '펫택시', iconKey: 'taxi' },
          { id: 'hospital-escort', label: '병원동행·장거리', iconKey: 'escort' },
        ],
      },
      {
        id: 'pet-service-behavior',
        title: '행동·심리 케어',
        items: [
          { id: 'behavior', label: '행동 교정', iconKey: 'behavior' },
          { id: 'psychology', label: '심리·사회성 클래스', iconKey: 'psychology' },
        ],
      },
    ],
  },

  // 4) 펫 라이프스타일 (일상 & 공간)
  {
    id: 'lifestyle',
    tabLabel: '라이프스타일',
    sections: [
      {
        id: 'lifestyle-space',
        title: '공간·로컬',
        items: [
          { id: 'cafe', label: '동반 카페', iconKey: 'cafe' },
          { id: 'store', label: '로컬 매장·라운지', iconKey: 'store' },
        ],
      },
      {
        id: 'lifestyle-travel',
        title: '산책·여행',
        items: [
          { id: 'walk', label: '산책 코스', iconKey: 'walk' },
          { id: 'travel', label: '여행지·숙소', iconKey: 'travel' },
        ],
      },
      {
        id: 'lifestyle-community',
        title: '커뮤니티',
        items: [
          { id: 'meetup', label: '보호자 모임', iconKey: 'meetup' },
          { id: 'event', label: '반려가족 행사', iconKey: 'event' },
        ],
      },
      {
        id: 'lifestyle-photo',
        title: '사진·기록',
        items: [
          { id: 'album', label: '데일리 앨범', iconKey: 'album' },
          { id: 'profile', label: '프로필·성장 기록', iconKey: 'profile' },
        ],
      },
    ],
  },

  // 5) 펫 엔터 (문화 · 감성)
  {
    id: 'enter',
    tabLabel: '펫 엔터',
    sections: [
      {
        id: 'enter-culture',
        title: '전시·컬처',
        items: [
          { id: 'exhibition', label: '사진·일러스트 전시', iconKey: 'exhibition' },
          { id: 'collab', label: '콜라보 굿즈', iconKey: 'collab' },
        ],
      },
      {
        id: 'enter-event',
        title: '이벤트',
        items: [
          { id: 'festival', label: '반려 축제·시즌 행사', iconKey: 'festival' },
          { id: 'birthday-photo', label: '생일·기념 촬영', iconKey: 'birthday' },
        ],
      },
      {
        id: 'enter-class',
        title: '클래스·창작',
        items: [
          { id: 'creative-class', label: '드로잉·사진·영상', iconKey: 'creative' },
          { id: 'creator-class', label: '보호자·크리에이터 클래스', iconKey: 'creator' },
        ],
      },
      {
        id: 'enter-memory',
        title: '추억 보관',
        items: [
          { id: 'life-video', label: '라이프 영상·메모리 북', iconKey: 'memory-book' },
          { id: 'art-object', label: '아트 오브제', iconKey: 'art' },
        ],
      },
    ],
  },

  // 6) 펫 장례 (배웅 · 추모)
  {
    id: 'funeral',
    tabLabel: '펫 장례',
    sections: [
      {
        id: 'funeral-service',
        title: '배웅 서비스',
        items: [
          { id: 'ceremony', label: '장례 의전·의식', iconKey: 'ceremony' },
          { id: 'cremation', label: '화장·봉안', iconKey: 'cremation' },
        ],
      },
      {
        id: 'funeral-product',
        title: '추모 제품',
        items: [
          { id: 'urn', label: '유골함·액세서리', iconKey: 'urn' },
          { id: 'memorial-box', label: '메모리얼 박스·오브제', iconKey: 'memorial-box' },
        ],
      },
      {
        id: 'funeral-care',
        title: '심리·유가족 케어',
        items: [
          { id: 'grief-counsel', label: '상실 심리 상담', iconKey: 'counsel' },
          { id: 'grief-group', label: '슬픔 케어·그룹', iconKey: 'group' },
        ],
      },
      {
        id: 'funeral-record',
        title: '메모리얼 기록',
        items: [
          { id: 'photo-restore', label: '사진 복원·생애 영상', iconKey: 'photo-restore' },
          { id: 'memorial-space', label: '추모 공간·전시', iconKey: 'memorial-space' },
        ],
      },
    ],
  },
];
