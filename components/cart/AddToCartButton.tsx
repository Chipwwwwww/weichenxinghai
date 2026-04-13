"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

export function AddToCartButton({ productId, className = "" }: { productId: string; className?: string }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  return (
    <button
      type="button"
      className={`tap-target rounded-full bg-brand-teal px-5 py-3 text-base font-semibold text-white transition hover:bg-[#1f5953] ${className}`}
      onClick={() => {
        addItem(productId, 1);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 1200);
      }}
    >
      {justAdded ? "已加入購物車" : "加入購物車"}
    </button>
  );
}
