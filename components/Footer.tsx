import Link from "next/link";
export default function Footer(){
return <footer className="border-t mt-8 p-4"><div className="mx-auto max-w-6xl flex gap-3 flex-wrap text-sm">
<Link href="/about">品牌理念</Link><Link href="/products">商品</Link><Link href="/line">LINE</Link><Link href="/coupons">優惠</Link><Link href="/shipping-payment">配送付款</Link><Link href="/refund-policy">退款退貨</Link><Link href="/terms">服務條款</Link><Link href="/privacy">隱私權政策</Link><Link href="/disclaimer">免責聲明</Link><Link href="/contact">客服聯絡</Link><Link href="/community-guidelines">LINE 社群規範</Link><Link href="/support-creation">支持創作團隊</Link>
</div></footer>
}
