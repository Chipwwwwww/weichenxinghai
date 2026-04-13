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
    name: "禪意日常玻璃杯",
    subtitle: "讓一杯水與一杯茶，成為能長久停留的祝福日常",
    tagline: "禪意日常玻璃杯",
    description:
      "以光影流動與安定停留感為靈感，適合晨起、夜晚、閱讀、喝茶或安靜獨處時使用，讓日常補水也帶著溫柔節奏。",
    image: brandAssets.products.twistGlass,
    price: 888,
    compareAtPrice: 1000,
    specs: "材質 / 規格：耐熱玻璃，容量約 320ml",
    placement: "適合情境：晨起喝水、夜晚喝茶、閱讀停留片刻",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "配件說明：內附純圓形軟木杯墊（自然暖棕、細顆粒、厚版、無彩印）",
    bullets: [
      "光影流動杯身，日常常用也耐看",
      "圓潤杯口與穩定握感，長輩也容易上手",
      "純圓形軟木杯墊低存在感，放在桌面更自然",
    ],
    useCases: "自用：晨起、夜晚、閱讀時刻｜送禮：給家人朋友的一份平安祝福",
    cta: "加入購物車",
  },
  {
    id: "desktop-purifier",
    name: "小型桌面型空氣清新機｜完整禮盒版",
    subtitle: "完整禮盒版一次備齊，收到後更方便開始使用",
    tagline: "小型桌面型空氣清新機｜完整禮盒版",
    description:
      "適合書桌、床邊、閱讀區、供桌旁等小空間日常使用。完整禮盒版把主機與日常需要配件一次整理好，從開箱到開始使用更直覺，也更適合作為送給家人長輩的祝福型禮盒。",
    image: brandAssets.products.purifier,
    price: 3680,
    compareAtPrice: 5000,
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
    name: "禪意香氛杯｜4.0mm 柱狀活性炭列陣封裝版",
    subtitle: "香氛膏封裝式設計，沉穩、內斂、陪伴型空間感受",
    tagline: "禪意香氛杯｜4.0mm 柱狀活性炭列陣封裝版",
    description:
      "以香氛膏封裝式設計結合 4.0mm 柱狀活性炭列陣，呈現金色上蓋下的黑色節奏感。適合放在床頭、書桌、玄關與靜心角落，讓空間維持穩定、低調、長期陪伴的節奏。",
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
    title: "今天想送出祝福",
    text: "想到誰，就把祝福傳給誰；分享流程簡單，不需要額外學習。",
  },
  {
    title: "看看大家點亮了什麼",
    text: "你可以參與點亮祝福，讓平安、關心與陪伴在日常裡流動。",
  },
  {
    title: "看看禪意選品",
    text: "再挑選可自用也可送人的禪意選品，把祝福接到每天可使用的生活裡。",
  },
] as const;

export const blessingPreview = {
  peaceImageTitle: "今日平安圖",
  peaceImageDescription: "晨光入杯，願你今天心安、步伐安定。",
  quote: "把今天的祝福，先放進呼吸，再放進生活。",
  sharePrompt: "今天想送出祝福，就把這份平安傳給家人朋友。",
  lightBlessings: ["為家人點亮：平安順心", "為朋友點亮：工作順利", "為自己點亮：好好休息"],
  disclaimer: "以上為體驗示意內容，實際每日內容以 LINE 發送為準。",
} as const;

export const ritualItems = [
  "祝福儀式物：每天可抽取一句今日祝福，為生活定下安定節奏",
  "隨身祝福系統：可收藏在卡夾、筆記本或手機殼，日常都看得見",
  "可自用也可送人：想表達關心時，是輕柔而體面的祝福媒介",
  "可放在書桌、床頭、包包與禮盒中，成為長期陪伴的一部分",
] as const;

export const faqItems = [
  {
    q: "微塵星海是做什麼的？",
    a: "微塵星海是一個以佛教祝福、靜心陪伴與禪意生活為核心的祝福感生活品牌，透過每日祝福內容與可融入日常的選品，讓祝福成為每天都能傳遞的日常。",
  },
  {
    q: "加入 LINE 有什麼？",
    a: "加入 LINE 後可收到今日平安圖、今日靜心小語、點亮祝福互動與選品資訊，整體內容以長輩友善、白話清楚為原則。",
  },
  {
    q: "商品是否適合送禮？",
    a: "適合。三條商品線都以可自用也可送人為核心，並以禮盒感與日常實用性並重，送家人、朋友與長輩都自然體面。",
  },
  {
    q: "為什麼主推小型桌面型空氣清新機的完整禮盒版？",
    a: "完整禮盒版一次備齊主機與常用配件，收到後更容易直接開始使用，也更適合作為送給家人長輩的祝福型禮盒。",
  },
  {
    q: "完整禮盒版包含什麼？",
    a: "內容包含：主機、行動電源、充電線、充電器、高級禮盒封裝、品牌卡與使用說明。",
  },
  {
    q: "你們會做神奇效果宣稱嗎？",
    a: "不會。我們只描述設計方向、外觀、使用情境、空間氛圍與送禮意義，不做未經證實或誇大效果宣稱。",
  },
  {
    q: "配送與付款方式是什麼？",
    a: "目前配送方式以宅配到府為主；付款方式提供線上付款與貨到付款。第一次下單想更安心，也可選貨到付款。",
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
  "所以我們一邊做每日祝福內容，一邊做能真正放進生活裡的禪意選品。",
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
    text: "三商品線與祝福儀式物共同承接，形成可長期使用、可送禮的祝福感生活系統。",
  },
] as const;
