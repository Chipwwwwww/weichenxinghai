import { uploadedImages } from "@/data/uploadedImages";

export const brandAssets = {
  brandWordmark: uploadedImages.logoWordmarkDataUri,
  philosophyDiagram: uploadedImages.logoMarkDataUri,
  products: {
    twistGlass: uploadedImages.twistGlassDataUri,
    purifier: uploadedImages.purifierDataUri,
    aromaCup: uploadedImages.aromaCupDataUri,
  },
} as const;

export const lineMenuItems = [
  "收下今日平安",
  "點亮心意／今日共鳴",
  "邀請好友",
  "今日優惠／查看優惠券",
  "看看商品與禮盒",
  "真人客服／回饋建議",
] as const;

export type Product = { id: string; name: string; price: number; image: string };

export const products: Product[] = [
  { id: "glass-gift-box", name: "禪意日常玻璃杯禮盒", price: 888, image: brandAssets.products.twistGlass },
  { id: "fragrance-gift-box", name: "禪意香氛杯禮盒", price: 1980, image: brandAssets.products.aromaCup },
  { id: "air-purifier-gift-box", name: "小型桌面型空氣清新機｜完整禮盒版", price: 3980, image: brandAssets.products.purifier },
] as const;

export const faqItems = [
  { q: "第一次下單可以怎麼付款？", a: "提供線上付款與貨到付款，第一次下單可選貨到付款。" },
];

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}
