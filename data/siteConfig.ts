export const siteConfig = {
  name: "微塵星海",
  lineBlessingUrl:
    process.env.NEXT_PUBLIC_LINE_BLESSING_URL?.trim() || "https://lin.ee/p5e6p7jw",
  cta: {
    joinLine: "加入 LINE 領今日祝福",
    askLine: "今天想送出祝福",
    notifyLine: "領今日平安圖",
    exploreShop: "看看禪意選品",
    learnBrand: "了解微塵星海",
  },
} as const;
