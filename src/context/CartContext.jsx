import React, { createContext, useContext, useState, useEffect } from "react";
import { PRODUCTS, COMPANY_INFO } from "../data/products";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("muthumari_cart");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [customerInfo, setCustomerInfo] = useState(() => {
    try {
      const saved = localStorage.getItem("muthumari_customer");
      return saved ? JSON.parse(saved) : { name: "", phone: "", city: "", note: "" };
    } catch {
      return { name: "", phone: "", city: "", note: "" };
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("muthumari_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("muthumari_customer", JSON.stringify(customerInfo));
  }, [customerInfo]);

  // Update item quantity
  const updateQuantity = (productId, qty) => {
    const parsedQty = Math.max(0, parseInt(qty, 10) || 0);
    setCart((prev) => {
      const next = { ...prev };
      if (parsedQty <= 0) {
        delete next[productId];
      } else {
        next[productId] = parsedQty;
      }
      return next;
    });
  };

  // Add 1 to cart
  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart({});
  };

  // Get active items with detailed information
  const cartItems = Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = PRODUCTS.find((p) => p.id === Number(productId));
      if (!product || quantity <= 0) return null;
      return { ...product, quantity };
    })
    .filter(Boolean);

  // Totals calculations
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalOriginal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const totalDiscounted = cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0);
  const totalSavings = totalOriginal - totalDiscounted;
  const packingCharges = 0;
  const finalTotal = totalDiscounted;
  const isMinOrderMet = totalDiscounted >= COMPANY_INFO.minOrderValue;

  const totals = {
    totalItems,
    totalOriginal,
    totalDiscounted,
    totalSavings,
    packingCharges,
    finalTotal,
    isMinOrderMet,
    minOrderValue: COMPANY_INFO.minOrderValue,
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        customerInfo,
        setCustomerInfo,
        updateQuantity,
        addToCart,
        clearCart,
        totals,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
