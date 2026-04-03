import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "微塵星海｜每日祝福與靜心生活",
    template: "%s｜微塵星海",
  },
  description:
    "微塵星海把祝福，變成每天都能傳遞的日常。以禪意設計選品、香氣陪伴與空間淨感，陪伴自己與家人。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body className="font-sans bg-brand-ivory text-brand-ink">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
