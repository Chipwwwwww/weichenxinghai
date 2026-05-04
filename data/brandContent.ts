import { uploadedImages } from "@/data/uploadedImages";

export const brandAssets = {
  brandWordmark: uploadedImages.logoWordmarkDataUri,
  philosophyDiagram: uploadedImages.logoMarkDataUri,
  products: {
    // 商品主圖為鎖定資產：文案任務不得替換、不得改來源、不得改成 SVG/placeholder/illustration。
    // Product photo sources are locked. Copy-only changes must never modify these image URIs.
    twistGlass: uploadedImages.twistGlassDataUri,
    purifier: uploadedImages.purifierDataUri,
    aromaCup: uploadedImages.aromaCupDataUri,
  },
} as const;

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  specs: string;
  placement: string;
  audience: string;
  usage: string;
  bullets: readonly string[];
  useCases: string;
  cta: string;
};

export const products: readonly Product[] = [
  {
    id: "twist-glass",
    name: "禪意日常玻璃杯禮盒",
    subtitle: "每天喝水、泡茶都會用到，把祝福放進可長久陪伴的日常",
    tagline: "禪意日常玻璃杯禮盒",
    description:
      "每天入口的杯子，比很多禮物更貼近生活。玻璃材質不易老化，也沒有塑化劑疑慮，搭配純圓形軟木杯墊與高級禮盒，讓「願你每天喝水時，都多一點安心」成為每天都會用到的祝福。",
    image: brandAssets.products.twistGlass,
    price: 888,
    compareAtPrice: 1088,
    specs: "材質 / 規格：耐熱玻璃，容量約 320ml",
    placement: "適合情境：晨起喝水、夜晚喝茶、閱讀停留片刻",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "配件說明：內附純圓形軟木杯墊（自然暖棕、細顆粒、厚版、無彩印）",
    bullets: ["每天入口，材質更安心", "玻璃材質不易老化，也沒有塑化劑疑慮", "純圓形軟木杯墊與高級禮盒，送禮更完整"],
    useCases: "自用：晨起、夜晚、閱讀時刻｜送禮：給家人朋友的一份平安祝福",
    cta: "加入購物車",
  },
  {
    id: "desktop-purifier",
    name: "小型桌面型空氣清新機｜完整禮盒版",
    subtitle: "完整禮盒版一次備齊，收到後更方便開始使用",
    tagline: "小型桌面型空氣清新機｜完整禮盒版",
    description:
      "完整禮盒版一次備齊主機、行動電源、充電線、充電器、使用說明與禮盒封裝，適合供桌旁、床邊、書桌邊、閱讀區與小房間日常使用。焚香後常停留的小空間，搭配通風與桌邊空氣清新，日常氣氛會更舒服。",
    image: brandAssets.products.purifier,
    price: 3980,
    compareAtPrice: 4980,
    specs: "內容包含：主機＋行動電源＋充電線＋充電器＋高級禮盒封裝＋品牌卡／使用說明",
    placement: "適合情境：書桌、床邊、閱讀區、供桌旁等小空間",
    audience: "適合對象：自用、送家人、送長輩、送同事",
    usage: "版本重點：完整禮盒版，一次備齊、開箱即能按步驟使用",
    bullets: [
      "完整禮盒版，一次備齊更省心",
      "白色簡潔外觀，放在家中不突兀",
      "很適合作為送給長輩與家人的祝福型禮盒",
    ],
    useCases: "自用：工作與閱讀區陪伴｜送禮：家人長輩更好上手的完整禮盒版",
    cta: "加入購物車",
  },
  {
    id: "aroma-cup",
    name: "禪意香氛杯禮盒",
    subtitle: "封裝式香氛膏搭配 4.0mm 柱狀活性炭列陣設計，香氣沉穩內斂",
    tagline: "禪意香氛杯禮盒",
    description:
      "香氣不只是一種味道，也是一個空間留給人的第一印象。以封裝式香氛膏、4.0mm 柱狀活性炭列陣設計、金色上蓋與高級禮盒封裝，帶來沉穩、內斂、陪伴型的空間氛圍。",
    image: brandAssets.products.aromaCup,
    price: 1980,
    compareAtPrice: 3000,
    specs: "材質 / 規格：陶瓷杯體、香氛膏封裝、4.0mm 柱狀活性炭列陣",
    placement: "適合情境：床頭、書桌、玄關、靜心角落",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "視覺特色：金色上蓋下的黑色節奏感，沉穩內斂",
    bullets: [
      "香氛膏封裝式設計，日常使用更俐落",
      "4.0mm 柱狀活性炭列陣封裝版，風格一致",
      "擺在小空間低調不突兀，長期陪伴感明確",
    ],
    useCases: "自用：晚間沉澱與靜心時刻｜送禮：傳遞平安與祝福心意",
    cta: "加入購物車",
  },
] as const;

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}

export const blessingFlow = [
  {
    title: "加入 LINE 領今日祝福",
    text: "每天可領今日平安圖與今日靜心小語，字句白話清楚，長輩也看得懂。",
  },
  {
    title: "點亮心意／今日共鳴",
    text: "可選 1–3 句祝福小語，也可看看今天大家點亮了哪些共鳴。",
  },
  {
    title: "今日優惠／查看優惠券",
    text: "優惠券可依系統規則疊加使用，實際折抵以下單頁或系統試算為準。",
  },
  {
    title: "看看商品與禮盒",
    text: "再挑選可自用也可送人的商品與禮盒，把祝福接到每天可使用的生活裡。",
  },
] as const;

export const blessingPreview = {
  peaceImageTitle: "今日平安圖",
  peaceImageDescription: "晨光入杯，願你今天心安、步伐安定。",
  quote: "把今天的祝福，先放進呼吸，再放進生活。",
  sharePrompt: "點亮心意後，把今天的祝福傳給家人朋友。",
  lightBlessings: ["為家人點亮：平安順心", "為朋友點亮：工作順利", "為自己點亮：好好休息"],
  disclaimer: "以上為體驗示意內容，實際每日內容以 LINE 發送為準。",
} as const;

export const ritualItems = [
  "除了目前三款禪意禮盒，我們也會持續整理適合分享與收藏的祝福內容。",
  "未來也會持續整理平安圖、靜心小語與祝福卡等結緣內容。",
  "尚未正式上架的項目，不會作為目前商品承諾。",
  "正式品項與取得方式，皆以官網與 LINE 公告為準。",
] as const;

export const faqItems = [
  {
    q: "微塵星海是做什麼的？",
    a: "微塵星海是一個以佛教祝福、靜心陪伴與禪意生活為核心的祝福感生活品牌，透過每日祝福內容與可融入日常的商品與禮盒，讓祝福成為每天都能傳遞的日常。",
  },
  {
    q: "加入 LINE 有什麼？",
    a: "加入 LINE 後可收到今日平安圖、今日靜心小語，並可使用六個入口：收下今日平安、點亮心意／今日共鳴、邀請好友、今日優惠／查看優惠券、看看商品與禮盒、真人客服／回饋建議。",
  },
  {
    q: "不太會網路下單可以請客服幫忙嗎？",
    a: "可以。你可先透過 LINE 或電話聯絡客服，我們會用簡單步驟協助你完成商品確認、購物車與結帳流程。",
  },
  {
    q: "首次購買不安心可以貨到付款嗎？",
    a: "可以。目前以宅配到府為主，提供線上付款與貨到付款兩種方式。第一次下單若想更安心，也可以直接選擇貨到付款，收到商品後再付款即可。",
  },
  {
    q: "這些商品是宗教用品嗎？",
    a: "不是傳統宗教用品。我們以佛教祝福為靈感，提供可融入日常、可自用也可送禮的生活禮盒。",
  },
  { q: "適合送禮嗎？", a: "適合。三款商品都以可自用也可送人為核心，並以禮盒感與日常實用性並重，送家人、朋友與長輩都自然體面。" },
  { q: "收到後有問題怎麼辦？", a: "可直接聯絡微塵星海客服，我們會協助你確認商品、配送或售後相關問題。" },
  {
    q: "優惠券怎麼用？",
    a: "優惠券可依系統規則疊加使用，主要限制由各商品折抵上限控管。禪意日常玻璃杯禮盒最高折 NT$100、禪意香氛杯禮盒最高折 NT$200、小型桌面型空氣清新機｜完整禮盒版最高折 NT$300；實際折抵以下單頁或系統試算為準。",
  },
  { q: "空氣清新機完整禮盒版和裸機差在哪？", a: "完整禮盒版一次備齊主機、行動電源、充電線、充電器、使用說明與禮盒封裝，重點是完整交付、送禮體面與日常使用體驗。" },
  { q: "香氛杯會不會太香？", a: "禪意香氛杯禮盒走沉穩、內斂、陪伴路線，適合床頭、玄關、書桌與靜心位置，不走濃烈刺激的香氣敘事。" },
  { q: "玻璃杯禮盒為什麼值得買？", a: "每天喝水、泡茶的杯子是高頻用品。禪意日常玻璃杯禮盒以玻璃材質、純圓形軟木杯墊與高級禮盒完整呈現，適合送父母、老師、親友與長輩。" },
  {
    q: "微塵星海的商品要怎麼理解？",
    a: "微塵星海的商品不是要替生活做誇張承諾，而是把祝福、日常使用與送禮心意整理得更完整。杯子回到每天入口的安心感，香氛杯回到空間裡的沉穩陪伴，小型桌面型空氣清新機｜完整禮盒版回到小空間日常使用與完整交付。更詳細的使用邊界與免責說明，可參考免責聲明頁。",
  },
] as const;

export const trustItems = [
  "品牌定位清楚：佛教祝福、靜心陪伴、禪意生活三軸一致。",
  "加入 LINE 領今日祝福：今日平安圖、今日靜心小語與互動內容每日可領。",
  "商品語氣一致：只談設計、外觀、情境與送禮意義，不做未經證實宣稱。",
  "購物流程完整：商品頁加入購物車、結帳填寫收件資料後再選擇付款方式。",
] as const;

export const aboutStory = [
  "很多人本來就有誦念、祈福、替家人祝願平安的習慣。",
  "微塵星海想做的，是把這份心意變成更容易領取、分享、收藏，也能陪伴生活的形式。",
  "所以我們一邊做每日祝福內容，一邊做能真正放進生活裡的商品與禮盒。",
  "這不是誇大神效的商品路線，而是兼具禪意、美感、陪伴感、送禮意義與高級封裝感的日常用品。",
] as const;

export const aboutPillars = [
  {
    title: "佛教祝福，回到可傳遞的日常",
    text: "把一句平安與一份關心，做成每天都能領取、分享、送出的生活節奏。",
  },
  {
    title: "靜心陪伴，保持溫柔而穩",
    text: "內容與選品都以陪伴為核心，不浮誇、不神棍，保留體面與生活感。",
  },
  {
    title: "禪意生活，可自用也可送禮",
    text: "三款禪意禮盒與每日祝福內容彼此承接，形成可自用、可送禮的祝福感生活節奏。",
  },
] as const;
