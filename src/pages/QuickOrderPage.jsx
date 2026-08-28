import React, { useState, useMemo } from "react";
import { Search, Download, MessageSquare, Flame, Sparkles, Filter, Check, ShoppingBag, Plus, Minus, AlertCircle, Phone, MapPin, Eye, X } from "lucide-react";
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from "../data/products";
import { useCart } from "../context/CartContext";
import { generateOrderPDF, buildWhatsAppOrderUrl } from "../utils/orderHelper";
import confetti from "canvas-confetti";

export const QuickOrderPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [previewProduct, setPreviewProduct] = useState(null);
  const {
    cart,
    cartItems,
    customerInfo,
    setCustomerInfo,
    updateQuantity,
    clearCart,
    totals,
    setIsDrawerOpen,
  } = useCart();

  // Filter products by search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tamilName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleDownloadPDF = () => {
    if (cartItems.length === 0) {
      alert("Please add at least 1 item to your estimate to download the PDF.");
      return;
    }
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    generateOrderPDF(cartItems, customerInfo, totals);
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      alert("Please add products to your estimate list first.");
      return;
    }
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
    const url = buildWhatsAppOrderUrl(cartItems, customerInfo, totals);
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
      <div className="site-container">
        {/* Header Title */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="festive-badge" style={{ marginBottom: "12px" }}>
            Direct Factory Price List 2026 • Flat 85% Discount
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <img
              src="/logo.webp"
              alt="Muthu Mari Fireworks"
              style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid #0253b3" }}
            />
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
              <span className="font-logo-title logo-brand-pink" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 900 }}>
                Muthu Mari
              </span>
              <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)", fontWeight: 700 }}>
                Fireworks
              </span>
            </div>
          </div>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>
            Quick Order & Estimate Maker ({COMPANY_INFO.name})
          </h2>
          <p style={{ color: "#475569", maxWidth: "700px", margin: "8px auto 0", fontSize: "0.95rem" }}>
            Select your desired quantity for each firecracker below. Real-time calculation with factory direct <strong style={{ color: "#d91b5c" }}>85% discount</strong>. Click on any product thumbnail or name to view high-resolution photo popout.
          </p>
        </div>

        {/* Live Estimate Summary Bar (Sticky top for quick viewing) */}
        <div
          className="glass-panel"
          style={{
            padding: "18px 24px",
            borderRadius: "16px",
            marginBottom: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            boxShadow: "0 10px 30px -10px rgba(2, 83, 179, 0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Total Items</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>
                {totals.totalItems} <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#64748b" }}>boxes</span>
              </div>
            </div>

            <div style={{ borderLeft: "1px solid #e2e8f0", paddingLeft: "16px" }}>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>MRP Value</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#94a3b8", textDecoration: "line-through" }}>
                ₹{totals.totalOriginal.toLocaleString("en-IN")}
              </div>
            </div>

            <div style={{ borderLeft: "1px solid #e2e8f0", paddingLeft: "16px" }}>
              <div style={{ fontSize: "0.78rem", color: "#16a34a", fontWeight: 700 }}>You Save (85%)</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#16a34a" }}>
                - ₹{totals.totalSavings.toLocaleString("en-IN")}
              </div>
            </div>

            <div style={{ borderLeft: "1px solid #e2e8f0", paddingLeft: "16px" }}>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Estimated Total</div>
              <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "#0253b3" }}>
                ₹{totals.finalTotal.toLocaleString("en-IN")}
              </div>
            </div>
          </div>

          {/* Quick CTA buttons */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="btn-primary"
              style={{ padding: "10px 18px", fontSize: "0.88rem" }}
            >
              <ShoppingBag size={16} />
              <span>View Estimate ({totals.totalItems})</span>
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="btn-whatsapp"
              style={{ padding: "10px 18px", fontSize: "0.88rem" }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Estimate</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="btn-secondary"
              style={{ padding: "10px 18px", fontSize: "0.88rem" }}
            >
              <Download size={16} color="#0253b3" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Search Box */}
          <div style={{ position: "relative", width: "100%", maxWidth: "360px" }}>
            <Search
              size={18}
              color="#64748b"
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              placeholder="Search firecrackers (English / தமிழ்)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "9999px",
                padding: "10px 16px 10px 42px",
                color: "#0f172a",
                fontSize: "0.92rem",
                outline: "none",
                boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
              }}
            />
          </div>

          {/* Category Badges Horizontal List */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    background: isSelected ? "linear-gradient(135deg, #0253b3, #d91b5c)" : "#ffffff",
                    color: isSelected ? "#fff" : "#475569",
                    border: isSelected ? "none" : "1px solid #e2e8f0",
                    borderRadius: "9999px",
                    padding: "6px 14px",
                    fontSize: "0.82rem",
                    fontWeight: isSelected ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Price Table / Order Form */}
        <div
          className="glass-panel"
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
            background: "#ffffff",
          }}
        >
          {/* Table Header for Desktop */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "70px 1fr 110px 120px 130px 120px",
              padding: "14px 20px",
              background: "#f1f5f9",
              borderBottom: "1px solid #e2e8f0",
              fontWeight: 700,
              fontSize: "0.82rem",
              color: "#334155",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
            className="hidden-mobile"
          >
            <div>Code</div>
            <div>Product Description (Click Image to Pop Out)</div>
            <div style={{ textAlign: "right" }}>MRP</div>
            <div style={{ textAlign: "right", color: "#d91b5c" }}>85% OFF</div>
            <div style={{ textAlign: "center" }}>Order Qty</div>
            <div style={{ textAlign: "right" }}>Total (₹)</div>
          </div>

          {/* Product Rows */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {filteredProducts.map((product, idx) => {
              const qty = cart[product.id] || 0;
              const rowTotal = product.discountPrice * qty;

              return (
                <div
                  key={product.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "70px 1fr 110px 120px 130px 120px",
                    padding: "14px 20px",
                    alignItems: "center",
                    borderBottom: "1px solid #f1f5f9",
                    background: qty > 0 ? "#eff6ff" : idx % 2 === 0 ? "#ffffff" : "#fcfcfd",
                    transition: "background 0.2s",
                  }}
                  className="quick-order-row"
                >
                  {/* Product Code */}
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#64748b" }}>
                    #{product.id}
                  </div>

                  {/* Description with Clickable Image Popout */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{ position: "relative", cursor: "pointer" }}
                      onClick={() => setPreviewProduct(product)}
                      title="Click to zoom / pop out image"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          flexShrink: 0,
                          border: "1px solid #cbd5e1",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          background: "rgba(2, 83, 179, 0.85)",
                          color: "#fff",
                          padding: "2px",
                          borderRadius: "4px 0 8px 0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Eye size={10} />
                      </div>
                    </div>

                    <div>
                      <div
                        style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", cursor: "pointer" }}
                        onClick={() => setPreviewProduct(product)}
                      >
                        {product.name}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                        {product.tamilName} • <span style={{ color: "#0253b3", fontWeight: 600 }}>{product.pieces}</span>
                        {product.badge && (
                          <span style={{ marginLeft: "8px", background: "#fef3c7", color: "#b45309", padding: "1px 6px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: 700 }}>
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* MRP */}
                  <div style={{ textAlign: "right", fontSize: "0.88rem", color: "#94a3b8", textDecoration: "line-through" }}>
                    ₹{product.originalPrice}
                  </div>

                  {/* 85% Discount Price */}
                  <div style={{ textAlign: "right", fontSize: "1.08rem", fontWeight: 800, color: "#d91b5c" }}>
                    ₹{product.discountPrice}
                  </div>

                  {/* Qty Selector */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#ffffff",
                        border: "1px solid #cbd5e1",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(product.id, qty - 1)}
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

                      <input
                        type="number"
                        min="0"
                        value={qty === 0 ? "" : qty}
                        placeholder="0"
                        onChange={(e) => updateQuantity(product.id, e.target.value)}
                        style={{
                          width: "44px",
                          background: "transparent",
                          border: "none",
                          textAlign: "center",
                          color: "#0f172a",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          outline: "none",
                        }}
                      />

                      <button
                        onClick={() => updateQuantity(product.id, qty + 1)}
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
                  </div>

                  {/* Row Total */}
                  <div style={{ textAlign: "right", fontWeight: 800, fontSize: "1rem", color: rowTotal > 0 ? "#16a34a" : "#94a3b8" }}>
                    ₹{rowTotal.toLocaleString("en-IN")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer & Inquiry Box */}
        <div
          className="glass-panel"
          style={{
            marginTop: "40px",
            padding: "32px",
            borderRadius: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
                Confirm Customer Details (Optional)
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "20px" }}>
                Adding your name, phone, and delivery town will automatically format your PDF quotation and WhatsApp dispatch message.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#0f172a",
                    fontSize: "0.9rem",
                  }}
                />

                <input
                  type="tel"
                  placeholder="Phone / WhatsApp (e.g. 9787010042)"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#0f172a",
                    fontSize: "0.9rem",
                  }}
                />

                <input
                  type="text"
                  placeholder="Destination City / Town (e.g. Chennai, Bangalore, Coimbatore)"
                  value={customerInfo.city}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#0f172a",
                    fontSize: "0.9rem",
                  }}
                />
              </div>
            </div>

            {/* Total Calculation Card */}
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>
                  Estimate Summary ({totals.totalItems} Items)
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.92rem", color: "#475569" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Total MRP:</span>
                    <span style={{ textDecoration: "line-through" }}>₹{totals.totalOriginal.toLocaleString("en-IN")}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#16a34a", fontWeight: 700 }}>
                    <span>85% Direct Factory Discount:</span>
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
                      fontSize: "1.25rem",
                      fontWeight: 900,
                      color: "#0253b3",
                      borderTop: "1px solid #e2e8f0",
                      paddingTop: "10px",
                      marginTop: "4px",
                    }}
                  >
                    <span>Net Payable:</span>
                    <span>₹{totals.finalTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
                <button
                  onClick={handleWhatsAppOrder}
                  className="btn-whatsapp"
                  style={{ flex: 1, padding: "12px", fontSize: "0.95rem" }}
                >
                  <MessageSquare size={18} />
                  <span>Send Order via WhatsApp</span>
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="btn-secondary"
                  style={{ padding: "12px 18px", fontSize: "0.95rem" }}
                >
                  <Download size={18} color="#0253b3" />
                  <span>PDF Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Image Popout Modal */}
        {previewProduct && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(6px)",
              zIndex: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setPreviewProduct(null)}
          >
            <div
              className="modal-popin"
              style={{
                width: "100%",
                maxWidth: "540px",
                borderRadius: "20px",
                overflow: "hidden",
                background: "#ffffff",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setPreviewProduct(null)}
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "none",
                  color: "#fff",
                  padding: "8px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  zIndex: 2,
                }}
              >
                <X size={20} />
              </button>

              {/* Large Product Image */}
              <div style={{ width: "100%", height: "300px", background: "#f8fafc", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src={previewProduct.image}
                  alt={previewProduct.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              {/* Product Info inside modal */}
              <div style={{ padding: "22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="festive-badge">
                    Product #{previewProduct.id} • Flat 85% OFF
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 700 }}>
                    {previewProduct.pieces}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                  {previewProduct.name}
                </h3>
                <div style={{ fontSize: "0.95rem", color: "#0253b3", fontWeight: 700, marginBottom: "12px" }}>
                  {previewProduct.tamilName}
                </div>

                <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "18px" }}>
                  {previewProduct.desc}
                </p>

                {/* Price and Quantity Modifier in Modal */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid #e2e8f0",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "#94a3b8", textDecoration: "line-through" }}>
                      MRP: ₹{previewProduct.originalPrice}
                    </div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#d91b5c" }}>
                      ₹{previewProduct.discountPrice}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#f1f5f9",
                        border: "1px solid #cbd5e1",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(previewProduct.id, (cart[previewProduct.id] || 0) - 1)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#334155",
                          padding: "8px 12px",
                          cursor: "pointer",
                        }}
                      >
                        <Minus size={16} />
                      </button>

                      <span style={{ padding: "0 10px", fontWeight: 800, fontSize: "1rem", color: "#0f172a" }}>
                        {cart[previewProduct.id] || 0}
                      </span>

                      <button
                        onClick={() => updateQuantity(previewProduct.id, (cart[previewProduct.id] || 0) + 1)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#334155",
                          padding: "8px 12px",
                          cursor: "pointer",
                        }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        updateQuantity(previewProduct.id, (cart[previewProduct.id] || 0) + 1);
                        setPreviewProduct(null);
                        setIsDrawerOpen(true);
                      }}
                      className="btn-primary"
                      style={{ padding: "10px 18px", fontSize: "0.9rem" }}
                    >
                      <ShoppingBag size={16} />
                      <span>Add Box</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Style for responsive rows */}
      <style>{`
        @media (max-width: 768px) {
          .quick-order-row {
            grid-template-columns: 1fr !important;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};
