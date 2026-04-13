"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductById } from "@/data/brandContent";
import { getDeliveryFee } from "@/lib/checkout";

type CartLine = {
  productId: string;
  quantity: number;
};

type HydratedCartLine = CartLine & {
  name: string;
  image: string;
  price: number;
};

type CheckoutPayload = {
  items: HydratedCartLine[];
  subtotal: number;
  shippingFee: number;
  total: number;
  customer: {
    name: string;
    phone: string;
    email?: string;
    address: string;
    deliveryMethod: "home_delivery";
    paymentMethod: "online" | "cod";
  };
};

type CartContextValue = {
  items: HydratedCartLine[];
  itemCount: number;
  subtotal: number;
  shippingFee: number;
  total: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  createCheckoutPayload: (customer: CheckoutPayload["customer"]) => CheckoutPayload;
};

const STORAGE_KEY = "wxh_cart";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    if (typeof window === "undefined") return [];
    const cached = window.localStorage.getItem(STORAGE_KEY);
    if (!cached) return [];
    try {
      const parsed = JSON.parse(cached) as CartLine[];
      return parsed.filter((line) => typeof line.productId === "string" && line.quantity > 0);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const hydratedItems = useMemo(() => {
    return lines
      .map((line) => {
        const product = getProductById(line.productId);
        if (!product) return null;
        return {
          ...line,
          name: product.name,
          image: product.image,
          price: product.price,
        };
      })
      .filter((item): item is HydratedCartLine => item !== null);
  }, [lines]);

  const subtotal = useMemo(() => hydratedItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [hydratedItems]);
  const shippingFee = getDeliveryFee(subtotal);
  const total = subtotal + shippingFee;

  const value: CartContextValue = {
    items: hydratedItems,
    itemCount: hydratedItems.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    shippingFee,
    total,
    addItem: (productId, quantity = 1) => {
      setLines((prev) => {
        const target = prev.find((line) => line.productId === productId);
        if (!target) return [...prev, { productId, quantity }];
        return prev.map((line) => (line.productId === productId ? { ...line, quantity: line.quantity + quantity } : line));
      });
    },
    removeItem: (productId) => {
      setLines((prev) => prev.filter((line) => line.productId !== productId));
    },
    updateQuantity: (productId, quantity) => {
      if (quantity <= 0) {
        setLines((prev) => prev.filter((line) => line.productId !== productId));
        return;
      }
      setLines((prev) => prev.map((line) => (line.productId === productId ? { ...line, quantity } : line)));
    },
    clearCart: () => setLines([]),
    createCheckoutPayload: (customer) => ({
      items: hydratedItems,
      subtotal,
      shippingFee,
      total,
      customer,
    }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
