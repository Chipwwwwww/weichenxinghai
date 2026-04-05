export const siteConfig = {
  name: "微塵星海",
  lineOaUrl:
    process.env.NEXT_PUBLIC_LINE_OA_URL?.trim() || "https://lin.ee/p5e6p7jw",
  cta: {
    joinLine: "加入 LINE 領今日祝福",
    askLine: "前往 LINE 詢問",
    notifyLine: "開賣通知 / 搶先了解",
    exploreShop: "查看選品",
    learnBrand: "了解品牌理念",
  },
} as const;
