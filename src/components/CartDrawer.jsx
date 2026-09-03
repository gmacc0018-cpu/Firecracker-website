import React from "react";
import { X, Trash2, Download, AlertCircle, ShoppingBag, Plus, Minus, CheckCircle } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useCart } from "../context/CartContext";
import { COMPANY_INFO } from "../data/products";
import { generateOrderPDF, buildWhatsAppOrderUrl, openWhatsApp } from "../utils/orderHelper";
import confetti from "canvas-confetti";

export const CartDrawer = () => {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    cartItems,
    customerInfo,
    setCustomerInfo,
    updateQuantity,
    clearCart,
    totals,
  } = useCart();

  if (!isDrawerOpen) return null;

  const handleDownloadPDF = () => {
    if (cartItems.length === 0) return;
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    generateOrderPDF(cartItems, customerInfo, totals);
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
    const url = buildWhatsAppOrderUrl(cartItems, customerInfo, totals);
    openWhatsApp(url);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(4px)",
        zIndex: 130,
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={() => setIsDrawerOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          height: "100%",
          background: "#ffffff",
          borderLeft: "1px solid #e2e8f0",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-10px 0 35px rgba(0,0,0,0.15)",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "18px 24px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#ffffff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBag size={22} color="#0253b3" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
              Your Price Estimate (85% OFF)
            </h3>
            <span
              style={{
                background: "#eff6ff",
                color: "#0253b3",
                padding: "2px 8px",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              {totals.totalItems} Items
            </span>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            style={{
              background: "#f1f5f9",
              border: "none",
              color: "#64748b",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "8px",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Minimum Order Warning or Progress */}
        <div style={{ padding: "12px 24px", background: totals.isMinOrderMet ? "#f0fdf4" : "#fffbeb", borderBottom: "1px solid #e2e8f0" }}>
          {totals.isMinOrderMet ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>
              <CheckCircle size={16} color="#16a34a" />
              <span>Minimum order criteria met! Eligible for direct Sivakasi dispatch.</span>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#92400e", fontSize: "0.85rem" }}>
              <AlertCircle size={16} color="#d97706" style={{ flexShrink: 0 }} />
              <span>
                Minimum order value for factory dispatch is <strong>₹{COMPANY_INFO.minOrderValue.toLocaleString("en-IN")}</strong>. Add ₹{(COMPANY_INFO.minOrderValue - totals.totalDiscounted).toLocaleString("en-IN")} more.
              </span>
            </div>
          )}
        </div>

        {/* Item List */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#64748b" }}>
              <ShoppingBag size={48} color="#0253b3" style={{ opacity: 0.3, margin: "0 auto 16px" }} />
              <h4 style={{ color: "#0f172a", fontSize: "1.1rem", marginBottom: "6px" }}>Your estimate is empty</h4>
              <p style={{ fontSize: "0.88rem" }}>Add firecrackers from the Quick Order price list or catalog to generate your instant invoice & order.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a" }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                    {item.pieces} • Rate: <span style={{ textDecoration: "line-through", color: "#94a3b8" }}>₹{item.originalPrice}</span>{" "}
                    <strong style={{ color: "#d91b5c" }}>₹{item.discountPrice}</strong>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#334155",
                        padding: "6px 8px",
                        cursor: "pointer",
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ padding: "0 8px", fontWeight: 700, fontSize: "0.9rem", color: "#0f172a" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#334155",
                        padding: "6px 8px",
                        cursor: "pointer",
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div style={{ fontWeight: 800, fontSize: "0.95rem", minWidth: "65px", textAlign: "right", color: "#0f172a" }}>
                    ₹{(item.discountPrice * item.quantity).toLocaleString("en-IN")}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Customer Information Inputs */}
        {cartItems.length > 0 && (
          <div style={{ padding: "16px 24px", background: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0253b3", marginBottom: "10px" }}>
              Customer Details (Optional for Invoice & WhatsApp)
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Your Name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  color: "#0f172a",
                  fontSize: "0.85rem",
                }}
              />
              <input
                type="tel"
                placeholder="Phone / WhatsApp"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  color: "#0f172a",
                  fontSize: "0.85rem",
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Delivery Town / City & State (e.g. Madurai / Bangalore)"
              value={customerInfo.city}
              onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
              style={{
                width: "100%",
                background: "#f8fafc",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                padding: "8px 12px",
                color: "#0f172a",
                fontSize: "0.85rem",
                marginBottom: "12px",
              }}
            />

            {/* Totals Summary */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.88rem", color: "#475569", marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total MRP Value:</span>
                <span style={{ textDecoration: "line-through" }}>₹{totals.totalOriginal.toLocaleString("en-IN")}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "#16a34a", fontWeight: 600 }}>
                <span>85% Festive Discount Savings:</span>
                <span>- ₹{totals.totalSavings.toLocaleString("en-IN")}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Packing & Safety Crate:</span>
                <span>₹{totals.packingCharges}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  color: "#0253b3",
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "8px",
                  marginTop: "4px",
                }}
              >
                <span>Estimated Net Payable:</span>
                <span>₹{totals.finalTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                onClick={handleWhatsAppOrder}
                className="btn-whatsapp"
                style={{ width: "100%", padding: "12px", fontSize: "0.95rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <WhatsAppIcon size={20} />
                <span>Place Order (WhatsApp)</span>
              </button>

              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px" }}>
                <button
                  onClick={handleDownloadPDF}
                  className="btn-secondary"
                  style={{ width: "100%", padding: "10px", fontSize: "0.88rem" }}
                >
                  <Download size={16} color="#0253b3" />
                  <span>Download PDF Estimate</span>
                </button>

                <button
                  onClick={clearCart}
                  style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    color: "#dc2626",
                    borderRadius: "9999px",
                    padding: "0 14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.85rem",
                  }}
                  title="Clear estimate"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
