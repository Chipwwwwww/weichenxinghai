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

export const products = [
  {
    id: "twist-glass",
    name: "禪意日常玻璃杯｜光影流動款",
    subtitle: "把一杯水與一杯茶，變成可停留的祝福日常",
    tagline: "禪意日常玻璃杯",
    description:
      "以光影流動與安定停留感為靈感，適合晨起、夜晚、閱讀、喝茶或安靜獨處時使用，讓日常補水也帶著溫柔節奏。",
    image: brandAssets.products.twistGlass,
    price: "NT$1,000",
    crossedPrice: "NT$888",
    specs: "材質 / 規格：耐熱玻璃，容量約 320ml",
    placement: "適合情境：晨起喝水、夜晚喝茶、閱讀停留片刻",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "禮盒建議：高級禮盒封裝，體面又有日常感",
    bullets: [
      "光影流動杯身，日常常用也耐看",
      "圓潤杯口與穩定握感，長輩也容易上手",
      "可自用也可送禮，放進生活不突兀",
    ],
    useCases: "自用：晨起、夜晚、閱讀時刻｜送禮：給家人朋友的一份平安祝福",
    cta: "看看選品",
  },
  {
    id: "desktop-purifier",
    name: "小型桌面型空氣清新機",
    subtitle: "為書桌、床邊與供桌周邊留下清爽、整齊的日常感",
    tagline: "小型桌面型空氣清新機",
    description:
      "適合書桌、床邊、閱讀區與供桌周邊等小空間。很多人誦念、焚香後，小範圍空間更容易留下較明顯香氣與煙味，這款更不占位、好移動，也更容易融入原本的禪意空間。",
    image: brandAssets.products.purifier,
    price: "NT$5,000",
    crossedPrice: "NT$3,680",
    specs: "材質 / 規格：ABS 機身，USB 供電，小型桌面尺寸",
    placement: "適合情境：供桌旁、書桌邊、床邊、閱讀區",
    audience: "適合對象：自用、送家人、送長輩、送同事",
    usage: "使用重點：小型白色簡潔設計，不占位、好擺放",
    bullets: [
      "小型尺寸，對小空間更剛好",
      "白色簡潔外觀，更容易融入家中佈置",
      "焚香後日常陪伴使用，維持清爽停留感",
    ],
    useCases: "自用：工作與閱讀區陪伴｜送禮：給家人長輩的貼心心意",
    cta: "看看選品",
  },
  {
    id: "aroma-cup",
    name: "禪意香氛杯",
    subtitle: "沉穩、內斂、陪伴型的空間香氣日常",
    tagline: "禪意香氛杯",
    description:
      "內含天然木炭與香氛設計，適合放在床頭、書桌、玄關與靜心角落。不是張揚濃烈的路線，而是讓空間維持沉穩、內斂、可長期陪伴的感受。",
    image: brandAssets.products.aromaCup,
    price: "NT$3,000",
    crossedPrice: "NT$1,980",
    specs: "材質 / 規格：陶瓷杯體，天然木炭與香氛設計",
    placement: "適合情境：床頭、書桌、玄關、靜心角落",
    audience: "適合對象：自用、送朋友、送家人、送長輩",
    usage: "系列說明：空性香境系列，正式商品名為禪意香氛杯",
    bullets: [
      "天然木炭與香氛設計，沉穩不張揚",
      "擺放不突兀，日常陪伴感明確",
      "高級禮盒封裝，自用與送禮都體面",
    ],
    useCases: "自用：晚間沉澱與靜心時刻｜送禮：傳遞平安與祝福心意",
    cta: "看看選品",
  },
] as const;

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
    title: "看看選品",
    text: "再挑選可自用也可送人的禪意選品，讓祝福在生活裡被長久接住。",
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
    a: "微塵星海是一個以佛教祝福、靜心陪伴與禪意生活為核心的祝福感生活品牌。我們透過每日祝福內容與可融入生活的禪意選品，讓祝福成為每天都能傳遞的日常。",
  },
  {
    q: "加入 LINE 有什麼？",
    a: "加入 LINE 領今日祝福後，你可以收到今日平安圖、今日靜心小語、點亮祝福互動、今日優惠與選品資訊。整體內容以長輩友善、白話清楚為原則。",
  },
  {
    q: "你們的商品適合送人嗎？",
    a: "適合。三條商品線都以可自用也可送人為核心，並搭配高級禮盒封裝，送家人、朋友與長輩都體面自然。",
  },
  {
    q: "玻璃杯線的定位是什麼？",
    a: "禪意日常玻璃杯是祝福感日常器物，重點在光影流動、安定停留感與日常常用情境，讓一杯水、一杯茶也能傳遞平安與祝福。",
  },
  {
    q: "你們會講神奇效果嗎？",
    a: "不會。我們只描述設計方向、外觀、使用情境、空間氛圍與送禮意義，不做未經證實的效果宣稱。",
  },
] as const;

export const trustItems = [
  "品牌定位清楚：佛教祝福、靜心陪伴、禪意生活三軸一致。",
  "加入 LINE 領今日祝福：今日平安圖、今日靜心小語與互動內容每日可領。",
  "商品語氣一致：只談設計、外觀、情境與送禮意義，不做未經證實宣稱。",
  "長輩友善可讀：按鈕、流程與說明白話清楚，第一次使用也不複雜。",
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
