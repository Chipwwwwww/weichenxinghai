import type { Metadata } from "next";

export const homeMeta: Metadata = {
  title: "微塵星海｜把祝福，變成每天都能傳遞的日常",
  description:
    "每天一張平安圖，一句靜心語，也可以是一份真正放進生活裡的禪意禮盒。加入 LINE 領今日祝福，第一次下單可選貨到付款。",
};

export const lineMenus = ["收下今日平安", "點亮心意／今日共鳴", "邀請好友", "今日優惠／查看優惠券", "看看商品與禮盒", "真人客服／回饋建議"] as const;

export const productRoutes = [
  { slug: "glass-gift-box", id: "twist-glass", name: "禪意日常玻璃杯禮盒", price: "NT$888" },
  { slug: "fragrance-gift-box", id: "aroma-cup", name: "禪意香氛杯禮盒", price: "NT$1,980" },
  { slug: "air-purifier-gift-box", id: "desktop-purifier", name: "小型桌面型空氣清新機｜完整禮盒版", price: "NT$3,980" },
] as const;
