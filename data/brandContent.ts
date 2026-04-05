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
    cta: "了解扭扭杯",
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
    cta: "了解桌面清淨器",
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
    cta: "了解空性香境杯",
  },
] as const;

export const faqItems = [
  {
    q: "加入 LINE 可以獲得什麼？",
    a: "可每日領取平安圖、靜心小語，並不定期收到新品與開賣通知。",
  },
  {
    q: "目前可以直接下單嗎？",
    a: "現階段以選品介紹與 LINE 詢問為主，正式開賣檔期會在 LINE 與官網公告。",
  },
  {
    q: "商品適合送禮嗎？",
    a: "適合。每款選品都以日常陪伴為核心，適合作為關心家人朋友的心意禮物。",
  },
  {
    q: "會有誇大功效宣稱嗎？",
    a: "不會。我們只描述材質、設計與使用情境，不做醫療或未證實功效承諾。",
  },
] as const;

export const aboutStory = [
  "微塵星海從一個很簡單的提問開始：想說出口的祝福，能不能被更自然地送進日常？",
  "我們相信，祝福不需要高聲宣示，也不需要神秘包裝。它可以是一句話、一份香氣、一件讓空間更安定的器物。",
  "因此我們把官網作為品牌母站，承接理念與選品；把 LINE 作為每日互動入口，讓祝福真的流動起來。",
] as const;

export const aboutPillars = [
  {
    title: "日常祝福",
    text: "每天一點點，不打擾地陪伴。讓祝福成為可以被接住的生活節奏。",
  },
  {
    title: "空間淨感",
    text: "用器物與留白整理生活氛圍，讓家與工作角落都更容易安定下來。",
  },
  {
    title: "心意送禮",
    text: "把關心轉成看得見的禮物，不用誇張語言，也能傳遞真實溫度。",
  },
] as const;
