export const SITE_INFO = {
  name: "재건섬김교회",
  englishName: "Jaegun Seomgim Church",
  denomination: "대한예수교장로회 재건",
  presbytery: "부산노회",
  pastor: "이남열 목사",
  address: "부산광역시 남구 고동골로78번길 74",
  shortAddress: "부산 남구 문현동",
  postalCode: "48417",
  phone: "051-632-5010",
  phoneHref: "tel:+82516325010",
  mapUrl:
    "https://map.naver.com/p/search/%EC%9E%AC%EA%B1%B4%EC%84%AC%EA%B9%80%EA%B5%90%ED%9A%8C",
  youtubeUrl:
    "https://www.youtube.com/@%EC%9E%AC%EA%B1%B4%EC%84%AC%EA%B9%80%EA%B5%90%ED%9A%8C",
} as const;

export const NAV_ITEMS = [
  { href: "/about", label: "교회소개" },
  { href: "/worship", label: "예배안내" },
  { href: "/sermons", label: "말씀" },
  { href: "/next-generation", label: "다음세대" },
  { href: "/news", label: "교회소식" },
  { href: "/visit", label: "오시는 길" },
] as const;

export const VALUES = [
  {
    number: "01",
    title: "예배",
    english: "Worship",
    description:
      "하나님을 가장 먼저 바라보며, 삶의 중심을 예배로 다시 세웁니다.",
  },
  {
    number: "02",
    title: "말씀",
    english: "Word",
    description:
      "성경의 진리 안에서 오늘을 분별하고, 다음 걸음을 함께 배웁니다.",
  },
  {
    number: "03",
    title: "섬김",
    english: "Service",
    description:
      "받은 사랑을 이웃과 나누며, 가까운 자리부터 기쁨으로 섬깁니다.",
  },
] as const;
