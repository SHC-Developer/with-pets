/**
 * iconKey → Emoji/Placeholder 매핑
 * 실제 일러스트 아이콘 교체 시 이 맵만 수정하면 됨
 */

export const iconEmojiMap: Record<string, string> = {
  // 펫푸드
  puppy: '🐶',
  adult: '🐕',
  senior: '🐕‍🦺',
  'all-age': '🐾',
  kibble: '🥣',
  'wet-food': '🍖',
  'functional-food': '💊',
  treat: '🦴',
  'dental-treat': '🦷',
  supplement: '💊',
  topper: '✨',
  subscription: '📦',
  report: '📋',

  // 펫용품
  pad: '🧻',
  litter: '🏖️',
  shampoo: '🫧',
  'ear-care': '👂',
  bed: '🛏️',
  mat: '🧺',
  stairs: '🪜',
  harness: '🦮',
  carrier: '🎒',
  clothing: '👕',
  toy: '🎾',
  puzzle: '🧩',
  scrather: '🌳',
  'auto-feeder': '⏰',
  petcam: '📷',
  wearable: '⌚',

  // 펫 서비스
  vet: '🏥',
  vaccine: '💉',
  rehab: '🩹',
  grooming: '✂️',
  spa: '🛁',
  petsitter: '👋',
  hotel: '🏨',
  taxi: '🚕',
  escort: '🚗',
  behavior: '📚',
  psychology: '🧠',

  // 라이프스타일
  cafe: '☕',
  store: '🏪',
  walk: '🚶',
  travel: '✈️',
  meetup: '👥',
  event: '🎉',
  album: '📷',
  profile: '📒',

  // 펫 엔터
  exhibition: '🖼️',
  collab: '🤝',
  festival: '🎪',
  birthday: '🎂',
  creative: '🎨',
  creator: '✏️',
  'memory-book': '📔',
  art: '🖼️',

  // 펫 장례
  ceremony: '🕯️',
  cremation: '⚱️',
  urn: '📦',
  'memorial-box': '📿',
  counsel: '💬',
  group: '🤲',
  'photo-restore': '🖼️',
  'memorial-space': '🕊️',

  // fallback
  default: '🐾',
};

export function getIconEmoji(iconKey: string): string {
  return iconEmojiMap[iconKey] ?? iconEmojiMap.default;
}
