export const siteConfig = {
  name: "微塵星海",
  tagline: "把祝福，變成每天都能傳遞的日常。",
  contact: {
    email: "microdust.galaxy@gmail.com",
    emails: ["microdust.galaxy@gmail.com", "microdust.galaxy001@gmail.com"],
    phone: "0909798251",
    lineId: "weichenxinghai",
    social: "微塵星海",
  },
  lineBlessingUrl:
    process.env.NEXT_PUBLIC_LINE_BLESSING_URL?.trim() || "https://lin.ee/p5e6p7jw",
  cta: {
    joinLine: "加入 LINE 領今日祝福",
    exploreProducts: "看看商品與禮盒",
    coupons: "今日優惠／查看優惠券",
    contactSupport: "真人客服／回饋建議",
  },
} as const;
