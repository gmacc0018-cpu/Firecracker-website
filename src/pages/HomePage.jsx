import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Flame, Truck, Percent, Star, ChevronRight, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "../components/InstagramIcon";
import { COMPANY_INFO, CATEGORIES, PRODUCTS, TESTIMONIALS } from "../data/products";
import { useCart } from "../context/CartContext";
import confetti from "canvas-confetti";

export const HomePage = ({ setActivePage }) => {
  const { addToCart, setIsDrawerOpen } = useCart();

  const bestSellers = PRODUCTS.filter((p) => p.badge === "Best Seller" || p.badge === "Super Special" || p.badge === "Super Hit").slice(0, 4);

  const handleBurstFestive = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "82vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 50%, #fff5f5 100%)",
          borderBottom: "1px solid #e2e8f0",
          overflow: "hidden",
        }}
      >
        <div className="site-container" style={{ padding: "60px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            {/* Left Content */}
            <div style={{ maxWidth: "650px" }}>
              {/* Top Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  marginBottom: "20px",
                }}
              >
                <Sparkles size={16} color="#0253b3" className="animate-spark" />
                <span style={{ color: "#0253b3", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                  SIVAKASI DIRECT WHOLESALE & RETAIL FACTORY OUTLET
                </span>
              </div>

              {/* Main Headline with Logo Brand Style */}
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                  fontWeight: 900,
                  lineHeight: "1.15",
                  marginBottom: "18px",
                  color: "#0f172a",
                }}
              >
                Celebrate Diwali with <br />
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                  <span className="font-logo-title logo-brand-pink" style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)" }}>
                    Muthu Mari
                  </span>
                  <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
                    Crackers
                  </span>
                </div>
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                  color: "#475569",
                  marginBottom: "28px",
                  maxWidth: "600px",
                  lineHeight: "1.6",
                }}
              >
                Premium Sivakasi firecrackers with genuine <strong style={{ color: "#d91b5c" }}>flat 85% direct factory discount</strong>. Sound crackers, dazzling flower pots, high aerial sky shots & star cakes dispatched safely across India.
              </p>

              {/* CTA Action Buttons */}
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
                <button
                  onClick={() => {
                    handleBurstFestive();
                    setActivePage("quick-order");
                  }}
                  className="btn-primary"
                  style={{ fontSize: "1.05rem", padding: "14px 30px" }}
                >
                  <Flame size={20} />
                  <span>Open Price List / Quick Order</span>
                </button>

                <button
                  onClick={() => setActivePage("products")}
                  className="btn-secondary"
                  style={{ fontSize: "1.05rem", padding: "14px 26px" }}
                >
                  <Sparkles size={20} color="#0253b3" />
                  <span>Products Catalog</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ fontSize: "1.05rem", padding: "14px 24px" }}
                >
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              {/* Social and Map Shortcuts */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-instagram"
                  style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                >
                  <InstagramIcon size={16} />
                  <span>Instagram: @muthumari_crackers_sivakasi</span>
                </a>

                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-map"
                  style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                >
                  <MapPin size={16} />
                  <span>Google Map: Thiruthangal</span>
                </a>
              </div>
            </div>

            {/* Right Logo / Visual Banner */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                  background: "#ffffff",
                  borderRadius: "28px",
                  padding: "30px",
                  boxShadow: "0 20px 45px rgba(2, 83, 179, 0.15), 0 10px 20px rgba(217, 27, 92, 0.1)",
                  border: "2px solid #fed7aa",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    overflow: "hidden",
                    border: "4px solid #0253b3",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    background: "#fff",
                  }}
                >
                  <img
                    src="/logo.webp"
                    alt="Muthu Mari Fireworks Logo"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
                  <span className="font-logo-title logo-brand-pink" style={{ fontSize: "1.95rem", fontWeight: 900 }}>
                    Muthu Mari
                  </span>
                  <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "1.65rem", fontWeight: 700 }}>
                    Crackers
                  </span>
                </div>

                <p style={{ fontSize: "0.88rem", color: "#64748b", fontWeight: 600, marginBottom: "16px" }}>
                  {COMPANY_INFO.name.toUpperCase()}
                </p>

                <div
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #86efac",
                    padding: "10px",
                    borderRadius: "12px",
                    color: "#166534",
                    fontSize: "0.92rem",
                    fontWeight: 800,
                  }}
                >
                  🔥 Flat 85% Direct Sivakasi Factory Discount
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section style={{ padding: "60px 0", background: "#ffffff" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="festive-badge" style={{ marginBottom: "10px" }}>
              Explore Our Range
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f172a" }}>
              Popular Firecracker Categories
            </h2>
            <p style={{ color: "#64748b", maxWidth: "600px", margin: "8px auto 0", fontSize: "0.95rem" }}>
              From kid-friendly sparkles to thunderous aerial shows, discover our comprehensive Sivakasi catalog.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {CATEGORIES.slice(1).map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  setActivePage("products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="glass-panel"
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: "1px solid #e2e8f0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#0253b3";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(2, 83, 179, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(2, 83, 179, 0.1), rgba(217, 27, 92, 0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: "#0253b3",
                  }}
                >
                  <Sparkles size={24} color="#d91b5c" />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "6px" }}>
                  {cat.name}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: "1.5" }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Showcase */}
      <section style={{ padding: "60px 0", background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="site-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
            <div>
              <div className="festive-badge" style={{ marginBottom: "10px" }}>
                Top Highlights
              </div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f172a" }}>
                Festival Best Sellers (Flat 85% OFF)
              </h2>
            </div>

            <button
              onClick={() => setActivePage("quick-order")}
              className="btn-secondary"
              style={{ padding: "10px 20px", fontSize: "0.9rem" }}
            >
              <span>View All Price List</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {bestSellers.map((item) => (
              <div
                key={item.id}
                className="glass-panel"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ position: "relative", height: "190px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span
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
                  </span>
                  {item.badge && (
                    <span
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
                      {item.badge}
                    </span>
                  )}
                </div>

                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontSize: "0.75rem", color: "#0253b3", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                    {item.category.replace("-", " ")}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                    {item.name}
                  </h3>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "12px" }}>
                    {item.tamilName} • {item.pieces}
                  </div>

                  <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8", textDecoration: "line-through" }}>
                        MRP: ₹{item.originalPrice}
                      </div>
                      <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#d91b5c" }}>
                        ₹{item.discountPrice}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(item.id);
                        setIsDrawerOpen(true);
                      }}
                      className="btn-primary"
                      style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                    >
                      Add to Estimate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section style={{ padding: "60px 0", background: "#ffffff" }}>
        <div className="site-container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="festive-badge" style={{ marginBottom: "10px" }}>
              Customer Trust
            </div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f172a" }}>
              Loved Across India
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#e69100" color="#e69100" />
                  ))}
                </div>
                <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "16px", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div>
                  <strong style={{ color: "#0f172a", fontSize: "0.95rem", display: "block" }}>{t.name}</strong>
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
