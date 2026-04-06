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
    subtitle: "把祝福放進每天都會握住的片刻",
    tagline: "把一句祝福，放進你每天握住的片刻。",
    description: "流動光影落在杯身上，晨起喝水、午後泡茶、夜晚靜心都很合適。是一件好上手、也很有儀式感的日常器物。",
    image: brandAssets.products.twistGlass,
    price: "參考價格：NT$680",
    specs: "材質 / 規格：耐熱玻璃，容量約 320ml",
    placement: "適合擺放：餐桌、書桌、床邊小桌",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "白話用途：每天喝水時提醒自己放慢一點，把心安穩下來。",
    bullets: ["異形玻璃紋理折射柔和光感", "厚實杯壁與圓潤杯口，握感穩定", "可作茶杯、溫飲杯，也能成為桌面儀式器物"],
    useCases: "自用：晨間靜心茶時｜送禮：給朋友與同事的溫柔祝福｜場景：書桌、餐桌、床邊閱讀角",
    cta: "LINE 詢問這款選品",
  },
  {
    id: "desktop-purifier",
    name: "微塵桌面清淨器",
    subtitle: "讓常待角落更清爽、也更安定",
    tagline: "讓你常待的角落，更容易安定下來。",
    description: "外型低調、尺寸輕巧，書桌、床頭、玄關都能自然融入。把忙碌的生活角落，整理成更舒服的停留點。",
    image: brandAssets.products.purifier,
    price: "參考價格：NT$1,680",
    specs: "材質 / 規格：ABS 機身，USB 供電，桌面尺寸",
    placement: "適合擺放：書桌、床頭、玄關、客廳角落",
    audience: "適合對象：自用、送家人、送長輩、送同事",
    usage: "白話用途：讓家人和自己常待的地方更整齊舒心。",
    bullets: ["輕巧機身，桌面擺放不壓迫", "簡約外觀可融入多種空間風格", "適合書桌、床頭、玄關與靜心角落"],
    useCases: "自用：工作與閱讀空間陪伴｜送禮：給家人長輩的貼心照顧｜場景：書桌、床頭、玄關",
    cta: "LINE 詢問這款選品",
  },
  {
    id: "aroma-cup",
    name: "靜心香氣杯",
    subtitle: "在回家後，留一段緩慢呼吸的時間",
    tagline: "讓香氣與祝福，成為回家後的小儀式。",
    description: "線條簡潔、擺放不突兀，適合下班後或睡前使用。點上熟悉香氣，讓空間從忙碌切換成安靜與陪伴。",
    image: brandAssets.products.aromaCup,
    price: "參考價格：NT$980",
    specs: "材質 / 規格：陶瓷杯體，家用香氛蠟燭適用",
    placement: "適合擺放：玄關、床頭、靜心角落、客廳邊桌",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "白話用途：在一天結束時，幫自己留一個沉澱心情的小儀式。",
    bullets: ["杯型線條簡潔，擺放不突兀", "香氣擴散柔和，適合晚間放鬆", "可作玄關迎賓、書桌陪伴與床邊儀式"],
    useCases: "自用：晚間靜心與放鬆｜送禮：傳遞平安與陪伴心意｜場景：玄關、床頭、靜心角落",
    cta: "LINE 詢問這款選品",
  },
] as const;

export const blessingFlow = [
  {
    title: "加入 LINE，收下今日祝福",
    text: "每天會收到一張平安圖與一句靜心小語，字句白話清楚，長輩也能安心閱讀。",
  },
  {
    title: "想到誰，就把祝福傳給誰",
    text: "你可以把當天內容直接轉傳給家人、朋友、長輩，讓關心自然發生，不需要額外學習。",
  },
  {
    title: "把祝福留在生活場景裡",
    text: "把平安圖存進手機、把小語留在書桌或床頭，讓安定感不只停在訊息裡。",
  },
  {
    title: "再挑選適合自用或送禮的選品",
    text: "先在官網看懂用途、規格、情境，再用 LINE 詢問；流程簡單，也保留慢慢選的節奏。",
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
    a: "你會收到每日平安圖與靜心小語，也會在必要時收到新品或開賣通知。官網負責介紹，LINE 負責每日陪伴。",
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
    a: "適合。每款選品都以日常能用、規格清楚、情境明確為原則，送家人、長輩、朋友都很自然。",
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
  "品牌分工清楚：官網看理念與選品，LINE 收每日祝福與客服回覆。",
  "客服入口明確：可透過 LINE 一對一詢問價格、規格與到貨資訊。",
  "安心溝通原則：不做誇大功效宣稱，不以焦慮話術推銷。",
  "資訊對中高齡友善：用途、情境、適合對象與規格都寫清楚。",
] as const;

export const aboutStory = [
  "微塵星海從一個念頭開始：如果祝福不是說完就散去，而是每天都能被接住，生活會不會更安穩一點。",
  "所以我們把 LINE 當成每日入口，讓你收到平安圖與靜心小語；想起家人朋友時，也能把祝福轉傳出去。",
  "官網則把選品資訊寫清楚：用途、規格、價格、適合誰、適合放哪裡，讓第一次來訪的人也不會迷路。",
  "我們希望留下詩性與留白，也同時照顧可讀性：讓年輕人喜歡，讓長輩也看得懂、用得上。",
] as const;

export const aboutPillars = [
  {
    title: "祝福要能被日常接住",
    text: "真正能留下來的關心，不是一次性的感動，而是每天都可被看見的小片刻。",
  },
  {
    title: "資訊要清楚，也要有溫度",
    text: "我們用白話寫清楚用途、規格與情境，同時保留溫潤節奏，不讓內容變成硬邦邦資料表。",
  },
  {
    title: "流程要簡單，陪伴要長期",
    text: "官網先理解、LINE 再互動、選品做延伸，三者形成可持續的祝福閉環。",
  },
] as const;
