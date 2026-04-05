export const brandAssets = {
  logoMark: "/brand/logo-mark.svg",
  logoWordmark: "/brand/logo-wordmark.svg",
  products: {
    ritualCards: "/brand/product-twist-glass.svg",
    aroma: "/brand/product-aroma-cup.svg",
    purifier: "/brand/product-air-purifier.svg",
  },
} as const;

export const homeSteps = [
  {
    title: "來到微塵星海",
    description: "先認識品牌理念與選品方向，找到適合你與家人的陪伴方式。",
  },
  {
    title: "在 LINE 收下今日祝福",
    description: "每日可領平安圖、靜心小語與互動祝福題，節奏輕量、不打擾。",
  },
  {
    title: "把祝福送出去",
    description: "你可以轉傳一張圖、一句話，或點亮一份祝福給重要的人。",
  },
] as const;

export const dailyBlessingPreview = {
  imageTitle: "今日平安圖（示意）",
  imageSubtitle: "晨光裡，願你步伐安穩、心也柔軟。",
  quote: "今天先照顧好呼吸，再照顧今天。",
  sharePrompt: "今天想把這份祝福送給誰？",
  communityNote: "點亮牆為示意畫面，實際互動內容將以 LINE 官方帳號公告為準。",
  blessingOptions: ["給辛苦工作的自己", "給準備考試的孩子", "給遠方的家人"],
  litExamples: ["平安入眠", "工作順心", "一家安好", "旅途順利"],
} as const;

export const ritualMoments = [
  {
    title: "可抽取",
    description: "每天抽一張祝福儀式物，給今天一個溫柔開場。",
  },
  {
    title: "可收藏",
    description: "把想留下的祝福卡收進書本、手帳或抽屜，慢慢累積心意。",
  },
  {
    title: "可送人",
    description: "探望、道謝、生日或平常日，都能自然送出一句祝福。",
  },
  {
    title: "可隨身放置",
    description: "手機殼、書桌、床頭、包包都能放一張，提醒自己慢下來。",
  },
] as const;

export const products = [
  {
    id: "ritual-card-set",
    name: "每日祝福儀式物組",
    tagline: "一組可抽取、收藏、轉送的祝福卡。",
    description:
      "以低飽和色調與留白設計呈現日常祝福，適合放在手機殼、書桌、床頭與包包。",
    image: brandAssets.products.ritualCards,
    bullets: ["卡面柔霧紙感與簡潔排版", "適合晨間抽卡或睡前一分鐘儀式", "可作為心意小禮搭配主禮贈送"],
    useCase: "適合：想建立每日小儀式、想自然傳遞關心的人",
    cta: "搶先了解祝福卡組",
  },
  {
    id: "aroma-cup",
    name: "靜心香氛杯",
    tagline: "讓空間先安定，心也比較容易慢下來。",
    description:
      "為書桌、床邊與玄關設計的香氛器皿，兼顧氣味陪伴與空間質感。",
    image: brandAssets.products.aroma,
    bullets: ["線條簡潔，易融入不同居家風格", "適合搭配晚間放鬆、閱讀、靜坐", "可作為送禮的日常陪伴品"],
    useCase: "適合：重視居家氛圍與放鬆節奏的人",
    cta: "了解香氛杯細節",
  },
  {
    id: "space-purifier",
    name: "靜心空間桌面清淨器",
    tagline: "在日常工作區，留一塊安定角落。",
    description:
      "小體積設計，適合桌面與床邊。提供乾淨外觀與輕巧擺放，不佔生活節奏。",
    image: brandAssets.products.purifier,
    bullets: ["輕巧體積，移動方便", "外型中性，適合居家與辦公", "可作為陪伴型生活禮物"],
    useCase: "適合：長時間工作、希望空間更清爽的人",
    cta: "前往 LINE 詢問規格",
  },
] as const;

export const shopCollections = [
  {
    title: "香氛 / 靜心空間",
    description: "以香氣與器皿建立下班後的緩慢節奏。",
    scenario: "使用情境：晚間放鬆、閱讀、睡前安定。",
  },
  {
    title: "祝福儀式物",
    description: "可抽取、收藏、送人的日常祝福卡與儀式小物。",
    scenario: "使用情境：晨間抽卡、送禮附卡、桌面陪伴。",
  },
  {
    title: "心意送禮",
    description: "把祝福內容與生活選品搭配成完整心意。",
    scenario: "使用情境：生日、探望、節日與日常關心。",
  },
] as const;

export const homeTrustItems = [
  {
    q: "這是什麼樣的品牌？",
    a: "微塵星海是以日常祝福為核心的生活風格品牌，透過內容與選品陪伴日常，不主打神秘功效。",
  },
  {
    q: "加入 LINE 會得到什麼？",
    a: "你會收到每日平安圖、靜心小語與互動祝福內容，也能把祝福分享給親友。",
  },
  {
    q: "會不會很常推播、很打擾？",
    a: "我們採低干擾節奏，重點是每日一則可被吸收的祝福內容，重要通知才額外提醒。",
  },
] as const;

export const faqItems = [
  {
    q: "商品與祝福內容有什麼關係？",
    a: "祝福內容是日常互動入口，選品則是把陪伴感帶進生活空間，兩者共同服務同一個日常儀式。",
  },
  {
    q: "目前可以直接下單嗎？",
    a: "部分品項仍在上線前整理中，可先透過 LINE 了解檔期、規格與開賣通知。",
  },
  {
    q: "加入後要如何開始？",
    a: "加入 LINE 後先領取今日祝福，再依指引收藏、分享或點亮一份祝福即可。",
  },
  {
    q: "有物流與付款政策嗎？",
    a: "正式上線政策將統一公告。現階段可先於 LINE 詢問，我們會提供可確認的最新資訊。",
  },
] as const;

export const aboutStory = [
  "微塵星海從一個很簡單的問題開始：為什麼我們想說的祝福，常常停在心裡，沒有被好好送出去？",
  "我們相信，祝福不需要很大聲，也不需要神秘包裝。它可以是一句話、一張圖、一份小小儀式，安靜地陪你過一天。",
  "因此我們把官網定位為母站，承接品牌世界觀與選品；把 LINE 官方帳號做成每日互動場域，讓祝福真正流動起來。",
] as const;

export const aboutDifferences = [
  {
    title: "不是硬宗教販售",
    text: "我們尊重信念，但不以壓迫式語言溝通，也不把商品包裝成宗教保證。",
  },
  {
    title: "不是空泛療癒話術",
    text: "我們只描述可被感受的使用情境、材質與設計，不做未證實功效宣稱。",
  },
  {
    title: "是可持續的日常陪伴",
    text: "從每日祝福到空間選品，目標是讓你能長期使用、分享，形成溫柔而穩定的習慣。",
  },
] as const;
