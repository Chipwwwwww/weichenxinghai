"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar(){const [open,setOpen]=useState(false);const items=[['/about','品牌理念'],['/products','商品'],['/line','LINE'],['/coupons','優惠'],['/shipping-payment','配送付款'],['/contact','客服聯絡']] as const;return <header className="glass-nav fixed inset-x-0 top-0 z-50"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4"><Link href="/">微塵星海</Link><button onClick={()=>setOpen(!open)} className="md:hidden">選單</button><nav className="hidden gap-4 md:flex">{items.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</nav></div>{open&&<nav className="md:hidden">{items.map(([h,l])=><Link key={h} href={h} className="block" onClick={()=>setOpen(false)}>{l}</Link>)}</nav>}</header>}
