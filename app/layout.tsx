import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: {
    default: "微塵星海｜把祝福，變成每天都能傳遞的日常。",
    template: "%s｜微塵星海",
  },
  description:
    "微塵星海是一個以佛教祝福、靜心陪伴與禪意生活為核心的品牌；加入 LINE 領今日祝福，並看看可自用也可送禮的商品與禮盒。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body className="bg-brand-ivory font-sans text-brand-ink">
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
