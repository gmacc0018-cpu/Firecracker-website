import React, { useState, useMemo } from "react";
import { Search, ShoppingBag, Eye, Star, Volume2, ShieldCheck, Sparkles, Filter, X, Check } from "lucide-react";
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from "../data/products";
import { useCart } from "../context/CartContext";

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalProduct, setModalProduct] = useState(null);
  const { addToCart, setIsDrawerOpen, cart } = useCart();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tamilName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Group filtered products by category order for continuous list with separator headings
  const groupedProducts = useMemo(() => {
    const groups = [];
    let currentCategory = null;
    let currentItems = [];

    filteredProducts.forEach((product) => {
      if (product.categoryName !== currentCategory) {
        if (currentItems.length > 0) {
          groups.push({
            categoryName: currentCategory,
            categoryDesc: currentItems[0].categoryDesc,
            items: currentItems,
          });
        }
        currentCategory = product.categoryName;
        currentItems = [product];
      } else {
        currentItems.push(product);
      }
    });

    if (currentItems.length > 0) {
      groups.push({
        categoryName: currentCategory,
        categoryDesc: currentItems[0].categoryDesc,
        items: currentItems,
      });
    }

    return groups;
  }, [filteredProducts]);

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    if (catId !== "all") {
      const element = document.getElementById(`prod-cat-heading-${catId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

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
              Crackers Catalog
            </span>
          </div>
          <p style={{ color: "#475569", maxWidth: "680px", margin: "8px auto 0", fontSize: "0.95rem" }}>
            Explore high quality green crackers manufactured by {COMPANY_INFO.name} in Sivakasi in exact price list order with flat 85% direct factory discount. Click on any item for image popout and quick order.
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
              placeholder="Search by product name (English / தமிழ்)..."
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
                  onClick={() => handleCategoryClick(cat.id)}
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

        {/* Continuous Single Product List with inbetween Category Headings */}
        {groupedProducts.length === 0 ? (
          <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
            No products found matching your search term.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {groupedProducts.map((group) => {
              const catObj = CATEGORIES.find((c) => c.name === group.categoryName) || { id: group.categoryName };
              return (
                <div key={group.categoryName} id={`prod-cat-heading-${catObj.id}`}>
                  {/* Category Separator Header */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #0253b3 0%, #1e40af 60%, #d91b5c 100%)",
                      color: "#ffffff",
                      padding: "12px 20px",
                      borderRadius: "12px",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      letterSpacing: "0.5px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                      boxShadow: "0 4px 12px rgba(2, 83, 179, 0.15)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Sparkles size={18} />
                      <span>{group.categoryDesc || group.categoryName}</span>
                    </div>
                    <span
                      style={{
                        background: "rgba(255, 255, 255, 0.22)",
                        color: "#fff",
                        padding: "3px 12px",
                        borderRadius: "9999px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        border: "1px solid rgba(255, 255, 255, 0.35)",
                      }}
                    >
                      {group.items.length} {group.items.length === 1 ? "Product" : "Products"}
                    </span>
                  </div>

                  {/* Product Cards Grid under this Category */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                      gap: "24px",
                    }}
                  >
                    {group.items.map((product) => {
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
                            style={{ position: "relative", height: "190px", overflow: "hidden", cursor: "pointer", background: "#f8fafc" }}
                            onClick={() => setModalProduct(product)}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: product.isLogo || product.image === "/logo.webp" ? "contain" : "cover",
                                padding: product.isLogo || product.image === "/logo.webp" ? "18px" : "0",
                                background: product.isLogo || product.image === "/logo.webp" ? "#fff9f0" : "#f8fafc",
                                transition: "transform 0.3s ease"
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                background: "#d91b5c",
                                color: "#fff",
                                fontSize: "0.75rem",
                                fontWeight: 800,
                                padding: "4px 8px",
                                borderRadius: "6px",
                              }}
                            >
                              {product.discountPercent > 0 ? `${product.discountPercent}% OFF` : "NET RATE"}
                            </div>

                            <div
                              style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "#0253b3",
                                color: "#fff",
                                fontSize: "0.75rem",
                                fontWeight: 800,
                                padding: "4px 8px",
                                borderRadius: "6px",
                              }}
                            >
                              #{product.id}
                            </div>

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
                              <Eye size={14} /> Zoom
                            </button>
                          </div>

                          {/* Content */}
                          <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                              <span style={{ fontSize: "0.75rem", color: "#0253b3", fontWeight: 700, textTransform: "uppercase" }}>
                                {product.categoryName}
                              </span>
                              <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.78rem", color: "#e69100" }}>
                                <Star size={13} fill="#e69100" />
                                <span>{product.rating}</span>
                              </div>
                            </div>

                            <h3
                              style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", marginBottom: "3px", cursor: "pointer" }}
                              onClick={() => setModalProduct(product)}
                            >
                              {product.name}
                            </h3>
                            <div style={{ fontSize: "0.82rem", color: "#64748b", marginBottom: "12px" }}>
                              {product.tamilName}
                            </div>

                            {/* Packing Spec */}
                            <div
                              style={{
                                background: "#f8fafc",
                                border: "1px solid #e2e8f0",
                                padding: "6px 10px",
                                borderRadius: "8px",
                                fontSize: "0.8rem",
                                color: "#475569",
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "14px",
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
                                marginTop: "auto",
                              }}
                            >
                              <div>
                                <div style={{ fontSize: "0.78rem", color: "#94a3b8", textDecoration: product.originalPrice > 0 ? "line-through" : "none" }}>
                                  {product.originalPrice > 0 ? `MRP: ₹${product.originalPrice}` : "-"}
                                </div>
                                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#d91b5c" }}>
                                  {product.discountPrice > 0 ? `₹${product.discountPrice}` : "Net Rate"}
                                </div>
                              </div>

                              <button
                                onClick={() => {
                                  addToCart(product.id);
                                  setIsDrawerOpen(true);
                                }}
                                className="btn-primary"
                                style={{ padding: "8px 14px", fontSize: "0.82rem" }}
                              >
                                <ShoppingBag size={14} />
                                <span>{inCartQty > 0 ? `Added (${inCartQty})` : "Add to Order"}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

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
              zIndex: 140,
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
                background: "#ffffff",
                borderRadius: "20px",
                maxWidth: "460px",
                width: "100%",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                border: "1px solid #cbd5e1",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: "relative", height: "300px", background: "#f8fafc" }}>
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
                <button
                  onClick={() => setModalProduct(null)}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(15, 23, 42, 0.7)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={18} />
                </button>
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    background: "linear-gradient(135deg, #d91b5c, #ea580c)",
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                  }}
                >
                  {modalProduct.discountPercent > 0 ? `${modalProduct.discountPercent}% FACTORY DISCOUNT` : "NET RATE"}
                </div>
              </div>

              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#0253b3", fontWeight: 700, textTransform: "uppercase" }}>
                    Code #{modalProduct.id} • {modalProduct.categoryName}
                  </span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569" }}>
                    Pack: {modalProduct.pieces}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                  {modalProduct.name}
                </h3>
                <div style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "16px" }}>
                  {modalProduct.tamilName}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "14px",
                    borderTop: "1px solid #e2e8f0",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "#94a3b8", textDecoration: modalProduct.originalPrice > 0 ? "line-through" : "none" }}>
                      {modalProduct.originalPrice > 0 ? `MRP: ₹${modalProduct.originalPrice}` : "-"}
                    </div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#d91b5c" }}>
                      {modalProduct.discountPrice > 0 ? `₹${modalProduct.discountPrice}` : "Net Rate"}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(modalProduct.id);
                      setModalProduct(null);
                      setIsDrawerOpen(true);
                    }}
                    className="btn-primary"
                    style={{ padding: "10px 18px", fontSize: "0.9rem" }}
                  >
                    <ShoppingBag size={16} />
                    <span>Add to Order</span>
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
