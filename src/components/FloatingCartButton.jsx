import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export const FloatingCartButton = () => {
  const { totals, setIsDrawerOpen } = useCart();

  return (
    <button
      onClick={() => setIsDrawerOpen(true)}
      className="floating-cart-fab"
      title="View Shopping Cart & Estimate"
      aria-label="View Shopping Cart"
    >
      <div className="animate-moving-cart">
        <ShoppingCart size={28} color="#ffffff" strokeWidth={2.4} />
      </div>

      {totals.totalItems > 0 && (
        <span className="floating-cart-fab-badge">
          {totals.totalItems}
        </span>
      )}
    </button>
  );
};
