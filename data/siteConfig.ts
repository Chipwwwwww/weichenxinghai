export const siteConfig = {
  name: "微塵星海",
  lineOaUrl:
    process.env.NEXT_PUBLIC_LINE_OA_URL?.trim() || "https://lin.ee/p5e6p7jw",
  cta: {
    joinLine: "加入 LINE 領今日祝福",
    askLine: "LINE 一鍵詢問",
    notifyLine: "加入 LINE 了解開賣通知",
    exploreShop: "查看價格與規格",
    learnBrand: "了解品牌理念",
  },
} as const;
