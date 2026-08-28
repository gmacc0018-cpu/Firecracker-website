import React, { useState } from "react";
import { Search, ShoppingBag, Eye, Star, Volume2, ShieldCheck, Sparkles, Filter, X } from "lucide-react";
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from "../data/products";
import { useCart } from "../context/CartContext";

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalProduct, setModalProduct] = useState(null);
  const { addToCart, setIsDrawerOpen, cart } = useCart();

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tamilName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="festive-badge" style={{ marginBottom: "12px" }}>
            Sivakasi Factory Catalog • 85% Discount
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
            <span className="font-logo-title logo-brand-pink" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", fontWeight: 900 }}>
              Muthu Mari
            </span>
            <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 700 }}>
              Fireworks Catalog
            </span>
          </div>
          <p style={{ color: "#475569", maxWidth: "680px", margin: "8px auto 0", fontSize: "0.95rem" }}>
            Explore high quality green fireworks manufactured by {COMPANY_INFO.name} in Sivakasi with flat 85% direct factory discount. Click on any item for image popout and quick order.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {/* Search Box */}
          <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>
            <Search
              size={18}
              color="#64748b"
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "9999px",
                padding: "12px 18px 12px 42px",
                color: "#0f172a",
                fontSize: "0.95rem",
                outline: "none",
                boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
              }}
            />
          </div>

          {/* Category Badges */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
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
                    padding: "8px 14px",
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

        {/* Product Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredProducts.map((product) => {
            const inCartQty = cart[product.id] || 0;

            return (
              <div
                key={product.id}
                className="glass-panel"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: inCartQty > 0 ? "2px solid #0253b3" : "1px solid #e2e8f0",
                  transition: "all 0.3s ease",
                  position: "relative",
                  background: "#ffffff",
                }}
              >
                {/* Image & Badges */}
                <div
                  style={{ position: "relative", height: "200px", overflow: "hidden", cursor: "pointer" }}
                  onClick={() => setModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "#d91b5c",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    85% OFF
                  </div>

                  {product.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "#0253b3",
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        padding: "4px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Quick View Button Overlay */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProduct(product);
                    }}
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      background: "rgba(15, 23, 42, 0.8)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 10px",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Eye size={14} /> Zoom Image
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.75rem", color: "#0253b3", fontWeight: 700, textTransform: "uppercase" }}>
                      {product.category.replace("-", " ")}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.78rem", color: "#e69100" }}>
                      <Star size={13} fill="#e69100" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h3
                    style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px", cursor: "pointer" }}
                    onClick={() => setModalProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <div style={{ fontSize: "0.82rem", color: "#64748b", marginBottom: "8px" }}>
                    {product.tamilName}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#475569", marginBottom: "16px", flex: 1 }}>
                    {product.desc}
                  </div>

                  {/* Packing Spec */}
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      color: "#475569",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <span>Pack: <strong style={{ color: "#0f172a" }}>{product.pieces}</strong></span>
                    <span>Sound: <strong style={{ color: "#d91b5c" }}>{product.soundLevel}</strong></span>
                  </div>

                  {/* Pricing and Action */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "12px",
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.78rem", color: "#94a3b8", textDecoration: "line-through" }}>
                        MRP: ₹{product.originalPrice}
                      </div>
                      <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#d91b5c" }}>
                        ₹{product.discountPrice}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product.id);
                        setIsDrawerOpen(true);
                      }}
                      className="btn-primary"
                      style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                    >
                      <ShoppingBag size={15} />
                      <span>{inCartQty > 0 ? `Added (${inCartQty})` : "Add to Order"}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Quick View / Zoom Modal */}
        {modalProduct && (
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
            onClick={() => setModalProduct(null)}
          >
            <div
              className="modal-popin"
              style={{
                width: "100%",
                maxWidth: "580px",
                borderRadius: "20px",
                overflow: "hidden",
                background: "#ffffff",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProduct(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(15, 23, 42, 0.6)",
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

              <div style={{ height: "280px", background: "#f8fafc", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              <div style={{ padding: "24px" }}>
                <div className="festive-badge" style={{ marginBottom: "8px" }}>
                  Product Code #{modalProduct.id} • Flat 85% Discount
                </div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                  {modalProduct.name}
                </h2>
                <div style={{ fontSize: "0.95rem", color: "#0253b3", fontWeight: 600, marginBottom: "14px" }}>
                  {modalProduct.tamilName}
                </div>

                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "20px" }}>
                  {modalProduct.desc}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    padding: "14px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Packaging Unit</div>
                    <div style={{ fontWeight: 700, color: "#0f172a" }}>{modalProduct.pieces}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Sound Intensity</div>
                    <div style={{ fontWeight: 700, color: "#d91b5c" }}>{modalProduct.soundLevel}</div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#94a3b8", textDecoration: "line-through" }}>
                      MRP: ₹{modalProduct.originalPrice}
                    </div>
                    <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#d91b5c" }}>
                      ₹{modalProduct.discountPrice}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(modalProduct.id);
                      setModalProduct(null);
                      setIsDrawerOpen(true);
                    }}
                    className="btn-primary"
                    style={{ padding: "12px 24px" }}
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Estimate Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
