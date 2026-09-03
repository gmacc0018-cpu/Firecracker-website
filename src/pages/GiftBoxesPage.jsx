import React from "react";
import { Gift, ShieldCheck, Sparkles, Check, ShoppingBag, Truck, Star, Phone } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { PRODUCTS, COMPANY_INFO } from "../data/products";
import { useCart } from "../context/CartContext";

export const GiftBoxesPage = () => {
  const { addToCart, setIsDrawerOpen } = useCart();
  const giftBoxes = PRODUCTS.filter((p) => p.category === "gift-boxes");

  return (
    <div style={{ padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
      <div className="site-container">
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="festive-badge" style={{ marginBottom: "12px" }}>
            Diwali 2026 Special Hampers
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
            <span className="font-logo-title logo-brand-pink" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", fontWeight: 900 }}>
              Muthu Mari
            </span>
            <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 700 }}>
              Gift Box Combos
            </span>
          </div>
          <p style={{ color: "#475569", maxWidth: "700px", margin: "8px auto 0", fontSize: "0.95rem" }}>
            Thoughtfully curated festival gift boxes packed with sparklers, flowerpots, spinning ground wheels, aerial crackers and sound bombs in a royal decorative festive hamper box.
          </p>
        </div>

        {/* Gift Boxes Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            marginBottom: "60px",
          }}
        >
          {giftBoxes.map((box) => (
            <div
              key={box.id}
              className="glass-panel"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ position: "relative", height: "240px" }}>
                <img
                  src={box.image}
                  alt={box.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "#d91b5c",
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  {Math.round(((box.originalPrice - box.discountPrice) / box.originalPrice) * 100)}% OFF
                </div>

                {box.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      background: "#0253b3",
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {box.badge}
                  </div>
                )}
              </div>

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                  {box.name}
                </h3>
                <div style={{ fontSize: "0.9rem", color: "#0253b3", fontWeight: 600, marginBottom: "12px" }}>
                  {box.tamilName}
                </div>
                <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.6", marginBottom: "20px" }}>
                  {box.desc}
                </p>

                {/* Box Contents Checklist */}
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "16px", borderRadius: "12px", marginBottom: "24px" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>
                    Assorted Contents Included:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem", color: "#475569" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={14} color="#16a34a" />
                      <span>Sparklers (Electric, Red, Green & Colour)</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={14} color="#16a34a" />
                      <span>Flower Pots (Big, Ashoka & Multi-Color)</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={14} color="#16a34a" />
                      <span>Ground Chakkars & Whizzing Wheels</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={14} color="#16a34a" />
                      <span>Lakshmi Sound Crackers & Paper Bombs</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Check size={14} color="#16a34a" />
                      <span>Sky Shot Aerial Extravaganza</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Add */}
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#94a3b8", textDecoration: "line-through" }}>
                      MRP: ₹{box.originalPrice.toLocaleString("en-IN")}
                    </div>
                    <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#d91b5c" }}>
                      ₹{box.discountPrice.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(box.id);
                      setIsDrawerOpen(true);
                    }}
                    className="btn-primary"
                    style={{ padding: "12px 22px" }}
                  >
                    <ShoppingBag size={18} />
                    <span>Add Hamper</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate / Bulk Inquiries Banner */}
        <div
          className="glass-panel"
          style={{
            padding: "36px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #eff6ff, #fdf2f8)",
            border: "1px solid #fed7aa",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>
            Corporate & Bulk Festival Gift Orders
          </h3>
          <p style={{ color: "#475569", maxWidth: "600px", margin: "0 auto 20px" }}>
            Need 50 to 1,000+ customized gift boxes for your company employees, client gifting, or community celebrations? We offer customized branding and special bulk discounts directly from {COMPANY_INFO.name}.
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsappNumber}&text=${encodeURIComponent("Hi Muthumari Crackers, I am interested in Bulk Corporate Diwali Gift Boxes from Muthumari Agencies.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: "12px 28px", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <WhatsAppIcon size={18} />
            <span>Place Order / Corporate Bulk Inquiries</span>
          </a>
        </div>
      </div>
    </div>
  );
};
