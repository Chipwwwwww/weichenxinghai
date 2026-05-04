import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-wrap gap-4">
        <Link href="/about">品牌理念</Link><Link href="/products">商品總覽</Link><Link href="/line">加入 LINE 領今日祝福</Link><Link href="/coupons">今日優惠／查看優惠券</Link><Link href="/shipping-payment">付款配送</Link><Link href="/refund-policy">退款退貨</Link><Link href="/terms">服務條款</Link><Link href="/privacy">隱私權政策</Link><Link href="/disclaimer">免責聲明</Link><Link href="/community-guidelines">LINE 社群規範</Link><Link href="/support-creation">支持創作團隊</Link><Link href="/contact">客服聯絡</Link>
      </div>
    </footer>
  );
}
