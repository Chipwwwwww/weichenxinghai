import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "微塵星海｜把祝福變成每天都能傳遞的日常",
    template: "%s｜微塵星海",
  },
  description:
    "微塵星海以官網承接品牌與選品，並導向 LINE 官方帳號提供每日平安圖、靜心小語與祝福互動。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body className="bg-brand-ivory font-sans text-brand-ink">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
