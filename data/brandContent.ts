import { uploadedImages } from "@/data/uploadedImages";

export const brandAssets = {
  brandWordmark: uploadedImages.logoWordmarkDataUri,
  philosophyDiagram: uploadedImages.logoMarkDataUri,
  products: {
    twistGlass: uploadedImages.twistGlassDataUri,
    purifier: uploadedImages.purifierDataUri,
    aromaCup: uploadedImages.aromaCupDataUri,
  },
} as const;

export const products = [
  {
    id: "twist-glass",
    name: "扭扭玻璃杯",
    subtitle: "每天喝水、喝茶都能用的平安杯",
    tagline: "把一句祝福，放進你每天握住的片刻。",
    description:
      "杯身好握、杯口圓潤，早上喝溫水、下午泡茶都適合。想找一個每天都會用到的安心小物，這款最容易開始。",
    image: brandAssets.products.twistGlass,
    price: "參考價格：NT$680",
    specs: "材質 / 規格：耐熱玻璃，容量約 320ml",
    placement: "適合擺放：餐桌、書桌、床邊小桌",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "白話用途：讓每天喝水的時候，都有一個提醒自己慢下來的小儀式。",
    bullets: ["異形玻璃紋理折射柔和光感", "厚實杯壁與圓潤杯口，握感穩定", "可作茶杯、溫飲杯，也能成為桌面儀式器物"],
    useCases: "自用：晨間靜心茶時｜送禮：給朋友與同事的溫柔祝福｜場景：書桌、餐桌、床邊閱讀角",
    cta: "查看價格與規格",
  },
  {
    id: "desktop-purifier",
    name: "微塵桌面清淨器",
    subtitle: "放在書桌或床頭的輕巧陪伴",
    tagline: "讓你常待的角落，更容易安定下來。",
    description:
      "機身小巧不占空間，家中書桌、床頭、玄關都好擺。外型簡單，和多數居家風格都能搭配。",
    image: brandAssets.products.purifier,
    price: "參考價格：NT$1,680",
    specs: "材質 / 規格：ABS 機身，USB 供電，桌面尺寸",
    placement: "適合擺放：書桌、床頭、玄關、客廳角落",
    audience: "適合對象：自用、送家人、送長輩、送同事",
    usage: "白話用途：把你最常待的地方整理成更舒服、較不雜亂的日常角落。",
    bullets: ["輕巧機身，桌面擺放不壓迫", "簡約外觀可融入多種空間風格", "適合書桌、床頭、玄關與靜心角落"],
    useCases: "自用：工作與閱讀空間陪伴｜送禮：給家人長輩的貼心照顧｜場景：書桌、床頭、玄關",
    cta: "LINE 一鍵詢問",
  },
  {
    id: "aroma-cup",
    name: "靜心香氣杯",
    subtitle: "回家後放鬆心情的香氛小器物",
    tagline: "讓香氣與祝福，成為回家後的小儀式。",
    description:
      "線條簡潔、體積適中，適合晚間放鬆時使用。下班後或睡前點上香氣，幫自己留一段安靜時間。",
    image: brandAssets.products.aromaCup,
    price: "參考價格：NT$980",
    specs: "材質 / 規格：陶瓷杯體，家用香氛蠟燭適用",
    placement: "適合擺放：玄關、床頭、靜心角落、客廳邊桌",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "白話用途：在忙碌一天結束後，給自己一個慢下來呼吸的時刻。",
    bullets: ["杯型線條簡潔，擺放不突兀", "香氣擴散柔和，適合晚間放鬆", "可作玄關迎賓、書桌陪伴與床邊儀式"],
    useCases: "自用：晚間靜心與放鬆｜送禮：傳遞平安與陪伴心意｜場景：玄關、床頭、靜心角落",
    cta: "加入 LINE 了解開賣通知",
  },
] as const;

export const blessingFlow = [
  {
    title: "加入 LINE 收到今日祝福",
    text: "每天會收到一張平安圖和一句靜心小語，內容簡單好懂，長輩也能輕鬆閱讀。",
  },
  {
    title: "想起家人朋友就能直接分享",
    text: "你可以把當天祝福轉傳給家人、朋友或長輩，傳遞關心不需要複雜操作。",
  },
  {
    title: "把祝福留在生活裡",
    text: "把平安圖存進手機、把喜歡的小語放在桌邊，讓每天都有一句安定提醒。",
  },
  {
    title: "再挑選適合自用或送禮的選品",
    text: "從網站看清楚用途、規格與價格，再透過 LINE 一鍵詢問，流程簡單不怕看不懂。",
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
    q: "加入 LINE 後，我每天會收到什麼？",
    a: "你會收到每日平安圖與一句靜心小語，另外也會收到新品上架或開賣通知。官網是看介紹，LINE 是每天收到內容的地方。",
  },
  {
    q: "會不會一直推播，造成打擾？",
    a: "不會。我們以日常陪伴為主，不做密集促銷轟炸。通常是每日祝福加上必要通知，想看就看、沒有壓力。",
  },
  {
    q: "沒有宗教背景也可以加入嗎？",
    a: "可以。內容重點是平安、祝福與日常關心，不需要有特定宗教背景也能安心使用。",
  },
  {
    q: "商品適合送長輩或家人嗎？",
    a: "適合。每款選品都以日常能用、好理解、可長期陪伴為原則，送家人、長輩、朋友都合適。",
  },
  {
    q: "你們會用誇大功效或神效說法嗎？",
    a: "不會。我們只談設計、材質、情境與使用方式，不做醫療暗示，也不承諾未經證實的效果。",
  },
  {
    q: "要怎麼詢問商品與收到開賣通知？",
    a: "直接加入 LINE 官方帳號就可以。我們會在 LINE 回覆價格、規格與到貨資訊，也會提供開賣通知。",
  },
] as const;

export const trustItems = [
  "品牌介紹清楚：官網說明品牌、LINE 提供每日祝福與客服回覆。",
  "客服方式明確：可直接透過 LINE 一對一詢問價格、規格與到貨資訊。",
  "安心溝通原則：不做誇大功效宣稱，不以焦慮話術推銷。",
  "商品資訊透明：提供用途、情境、適合對象與規格，讓長輩也能看懂。",
] as const;

export const aboutStory = [
  "微塵星海想做一件簡單的事：讓祝福不只是一句話，而是每天都收得到、看得懂、傳得出去。",
  "加入 LINE 後，你每天會收到平安圖與靜心小語；想關心家人朋友時，也能直接分享給他們。",
  "官網把商品資訊整理清楚，包含用途、規格、價格與送禮情境，讓你不用猜。",
  "我們希望每位第一次來訪的使用者，包含長輩，都能知道下一步該按哪裡、按了會得到什麼。",
] as const;

export const aboutPillars = [
  {
    title: "每天都看得懂的祝福內容",
    text: "用白話短句呈現，不堆疊抽象名詞，讓長輩與家人都能輕鬆閱讀。",
  },
  {
    title: "商品資訊透明，不誇大",
    text: "每項商品都說明用途、規格與送禮情境，不使用神效承諾。",
  },
  {
    title: "流程簡單：官網看清楚，LINE 直接問",
    text: "在官網先看懂，再用 LINE 一鍵詢問，減少學習成本與操作負擔。",
  },
] as const;
