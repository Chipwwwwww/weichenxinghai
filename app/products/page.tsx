import Link from "next/link";
import { products } from "@/data/brandContent";
export default function Page(){return <div className='mx-auto max-w-6xl p-6'><h1>商品總覽</h1><ul>{products.map(p=><li key={p.id}><Link href={`/products/${p.id}`}>{p.name}</Link>｜NT${p.price}</li>)}</ul></div>}
