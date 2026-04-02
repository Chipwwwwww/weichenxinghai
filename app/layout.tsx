import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "微塵星海｜物理現象學 × 佛教意象",
    template: "%s｜微塵星海",
  },
  description:
    "微塵星海是一個以純視覺呈現物理現象學與佛教意象的品牌網站，提供每日祈福空間與結緣商城。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body className="font-sans bg-brand-deep text-slate-100">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
