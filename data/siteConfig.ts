export const siteConfig = {
  name: "微塵星海",
  tagline: "把祝福，變成每天都能傳遞的日常。",
  contact: {
    email: "microdust.galaxy@gmail.com",
    emails: ["microdust.galaxy@gmail.com", "microdust.galaxy001@gmail.com"],
    phone: "0909798251",
    lineId: "weichenxinghai",
    social: "微塵星海｜分享今日祝福",
  },
  lineBlessingUrl:
    process.env.NEXT_PUBLIC_LINE_BLESSING_URL?.trim() || "https://lin.ee/p5e6p7jw",
  cta: {
    joinLine: "加入 LINE 領今日祝福",
    askLine: "點亮心意／今日共鳴",
    notifyLine: "領今日平安圖",
    exploreShop: "看看商品與禮盒",
    learnBrand: "了解微塵星海",
    contactSupport: "聯絡我們",
  },
} as const;
