import { uploadedImages } from "@/data/uploadedImages";

export const brandAssets = {
  logoMark: uploadedImages.logoMarkDataUri,
  logoWordmark: uploadedImages.logoWordmarkDataUri,
  products: {
    twistGlass: uploadedImages.twistGlassDataUri,
    purifier: uploadedImages.purifierDataUri,
    aromaCup: uploadedImages.aromaCupDataUri,
  },
} as const;

export const products = [
  {
    id: "twist-glass",
    name: "扭扭杯 / 異形玻璃杯",
    tagline: "把片刻靜心，握在手裡。",
    description:
      "以光影扭曲與流動感為靈感，讓晨起、夜晚與閱讀片刻，都多一份安定節奏。",
    image: brandAssets.products.twistGlass,
    bullets: ["異形玻璃紋理，折射柔和光感", "厚實杯壁與圓潤杯口，手感穩定", "適合茶、溫飲與桌面陳設"],
    useCases: "自用：晨間靜心茶時｜送禮：把平安與陪伴送給重要的人",
    cta: "查看扭扭杯",
  },
  {
    id: "desktop-purifier",
    name: "微塵淨境桌面清淨器",
    tagline: "讓桌面，更適合停留。",
    description:
      "為書桌、閱讀區與茶席周邊打造清爽淨感，以簡潔外型融入日常空間。",
    image: brandAssets.products.purifier,
    bullets: ["輕巧機身，桌面擺放不壓迫", "簡約外觀，融入居家與辦公風格", "適合書桌、床邊、玄關與靜心角落"],
    useCases: "自用：長時間閱讀與工作空間｜送禮：給重視生活質感的家人朋友",
    cta: "查看桌面清淨器",
  },
  {
    id: "aroma-cup",
    name: "空性香境杯",
    tagline: "一杯香氣，一份安定。",
    description:
      "以禪意空間為設計靈感，將香氣與擺設美感結合，讓日常多一點溫柔陪伴。",
    image: brandAssets.products.aromaCup,
    bullets: ["杯型線條簡潔，適合多種空間風格", "香氣擴散柔和，營造放鬆氛圍", "可作為床頭、玄關、書桌擺設"],
    useCases: "自用：晚間放鬆與靜心時刻｜送禮：傳遞祝福與體貼心意",
    cta: "查看空性香境杯",
  },
] as const;

export const faqItems = [
  {
    q: "第一次購買，可以貨到付款嗎？",
    a: "可以，目前提供貨到付款，讓第一次下單更安心。",
  },
  {
    q: "商品是台灣出貨嗎？",
    a: "是的，商品由台灣出貨，並提供出貨通知與物流資訊。",
  },
  {
    q: "下單後多久會出貨？",
    a: "一般訂單約 1-3 個工作天出貨，節慶檔期將於頁面公告更新。",
  },
  {
    q: "如果收到商品有問題怎麼辦？",
    a: "請透過客服或 LINE 官方帳號聯繫，我們會協助處理後續流程。",
  },
  {
    q: "這些商品適合送禮嗎？",
    a: "非常適合。三款商品都以日常陪伴與質感設計為核心，適合作為心意禮物。",
  },
  {
    q: "加入 LINE 可以獲得什麼？",
    a: "可每日領取平安圖、靜心小語，並不定期獲得結緣回饋與點數資訊。",
  },
] as const;
