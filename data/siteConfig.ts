export const siteConfig = {
  name: "微塵星海",
  tagline: "把祝福，變成每天都能傳遞的日常。",
  lineOaName: "微塵星海｜今日祝福",
  lineCommunityName: "微塵星海｜分享今日祝福",
  contact: {
    email: "microdust.galaxy@gmail.com",
    emails: ["microdust.galaxy@gmail.com", "microdust.galaxy001@gmail.com"],
    phone: "0909798251",
    lineId: "weichenxinghai",
  },
  lineBlessingUrl: process.env.NEXT_PUBLIC_LINE_BLESSING_URL?.trim() || "https://lin.ee/p5e6p7jw",
} as const;
