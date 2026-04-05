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
    tagline: "把一句祝福，放進你每天握住的片刻。",
    description:
      "以流動光影為靈感的異形杯身，讓晨起、晚間或讀書時刻，多一份安定與留白，適合把『平安』放進日常手感裡。",
    image: brandAssets.products.twistGlass,
    bullets: ["異形玻璃紋理折射柔和光感", "厚實杯壁與圓潤杯口，握感穩定", "可作茶杯、溫飲杯，也能成為桌面儀式器物"],
    useCases: "自用：晨間靜心茶時｜送禮：給朋友與同事的溫柔祝福｜場景：書桌、餐桌、床邊閱讀角",
    cta: "前往 LINE 詢問扭扭杯",
  },
  {
    id: "desktop-purifier",
    name: "微塵淨境桌面清淨器",
    tagline: "讓你常待的角落，更容易安定下來。",
    description:
      "以低調簡潔外型融入家中與工作空間，為長時間停留的地方帶來清爽秩序，陪你把忙碌節奏慢慢放緩。",
    image: brandAssets.products.purifier,
    bullets: ["輕巧機身，桌面擺放不壓迫", "簡約外觀可融入多種空間風格", "適合書桌、床頭、玄關與靜心角落"],
    useCases: "自用：工作與閱讀空間陪伴｜送禮：給家人長輩的貼心照顧｜場景：書桌、床頭、玄關",
    cta: "前往 LINE 詢問清淨器",
  },
  {
    id: "aroma-cup",
    name: "空性香境杯",
    tagline: "讓香氣與祝福，成為回家後的小儀式。",
    description:
      "以禪意留白為線條語言，結合香氣與空間擺設感，讓日常下班後、睡前或週末慢時光，都有被照顧的節奏。",
    image: brandAssets.products.aromaCup,
    bullets: ["杯型線條簡潔，擺放不突兀", "香氣擴散柔和，適合晚間放鬆", "可作玄關迎賓、書桌陪伴與床邊儀式"],
    useCases: "自用：晚間靜心與放鬆｜送禮：傳遞平安與陪伴心意｜場景：玄關、床頭、靜心角落",
    cta: "前往 LINE 詢問香境杯",
  },
] as const;

export const blessingFlow = [
  {
    title: "收下今日祝福",
    text: "先從 LINE 收下一張每日平安圖與一句靜心小語，讓心有一個安定起點。",
  },
  {
    title: "把祝福傳給重要的人",
    text: "當你想到家人、朋友或正在辛苦的人，可以把今天的祝福輕輕分享出去。",
  },
  {
    title: "把祝福留在生活裡",
    text: "把平安圖存進手機、把小語貼在桌邊，讓祝福不只停在訊息，而是留在日常節奏。",
  },
  {
    title: "延伸到陪伴型選品",
    text: "再慢慢挑一件適合自用或送禮的器物，讓祝福成為可以長期陪伴的生活儀式。",
  },
] as const;

export const blessingPreview = {
  peaceImageTitle: "今日平安圖（示意）",
  peaceImageDescription: "晨光入杯，願你今天心安、步伐安定。",
  quote: "把今天的祝福，先放進呼吸，再放進生活。",
  sharePrompt: "想到誰需要被照顧，就把這份平安傳給他。",
  lightBlessings: ["為家人點亮：平安順心", "為朋友點亮：工作順利", "為自己點亮：好好休息"],
  disclaimer: "以上為體驗示意內容，實際每日內容以 LINE 發送為準。",
} as const;

export const ritualItems = [
  "可抽取：每天抽一張，為自己定下一句今日祝福",
  "可收藏：把想記住的平安語句留在卡夾或筆記本",
  "可送人：在想傳遞關心時，成為一份輕柔不壓迫的禮物",
  "可放入手機殼、書桌、床頭或包包，成為日常可見的小儀式",
] as const;

export const faqItems = [
  {
    q: "加入 LINE 會收到什麼？",
    a: "你會收到每日平安圖、靜心小語，以及新品資訊或開賣通知。官網以理念與選品介紹為主，日常祝福內容會在 LINE 持續更新。",
  },
  {
    q: "會不會很常推播、造成打擾？",
    a: "我們以『日常陪伴、不過度打擾』為原則，主要是每日祝福與必要通知，不做密集促銷轟炸。",
  },
  {
    q: "沒有宗教背景也適合加入嗎？",
    a: "適合。微塵星海強調的是平安、祝福與陪伴，不需要特定宗教背景，也能把這些內容放進自己的生活節奏。",
  },
  {
    q: "商品適合送家人或朋友嗎？",
    a: "適合。每款選品都以『可長期使用、可被感受到的關心』為核心，無論自用或送給家人、長輩、朋友都很合適。",
  },
  {
    q: "你們會使用誇大功效或神效說法嗎？",
    a: "不會。我們只談設計、材質、情境與陪伴感，不做醫療暗示，也不做未經證實的功效保證。",
  },
  {
    q: "目前要怎麼詢問商品或取得開賣通知？",
    a: "請先加入 LINE 官方帳號，我們會在 LINE 回覆詢問，並同步提供上架、開賣與限量資訊。",
  },
] as const;

export const trustItems = [
  "真實商品圖呈現，維持材質與比例質感，不使用廉價 placeholder 圖。",
  "內容聚焦日常陪伴與祝福傳遞，不以誇大詞彙製造焦慮轉化。",
  "LINE 為每日祝福入口，官網為品牌母站，資訊分工清楚透明。",
  "詢問方式、通知來源與開賣節奏皆可追溯，降低資訊落差與不確定感。",
] as const;

export const aboutStory = [
  "微塵星海從一個簡單念頭開始：如果祝福不是一句說完就散去的話，而是每天都能被接住的日常，會是什麼樣子？",
  "我們想做的，不是神效承諾，也不是情緒煽動；而是把平安、關心與陪伴，變成你願意每天打開、也願意分享出去的內容。",
  "因此我們把官網作為品牌母站，承接世界觀與選品；把 LINE 作為每日入口，讓『收下祝福 → 傳遞祝福 → 留在生活』形成完整閉環。",
  "當這條路徑成立後，選品就不只是商品，而是延伸祝福的陪伴器物：可自用、可送禮，也可成為你與重要的人之間，一份穩定而不打擾的在意。",
] as const;

export const aboutPillars = [
  {
    title: "為什麼要讓祝福進入日常",
    text: "因為真正能留下來的關心，通常不是一次性的感動，而是每天都可被感受的小片刻。",
  },
  {
    title: "為什麼不使用誇大語言",
    text: "我們相信真實比承諾更重要，因此只描述設計、材質與情境，不販售神效想像。",
  },
  {
    title: "為什麼 LINE、祝福與選品是同一系統",
    text: "LINE承接每日互動，官網承接理解與信任，選品承接長期陪伴，三者一起才是完整品牌體驗。",
  },
] as const;
