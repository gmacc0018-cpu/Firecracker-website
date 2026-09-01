import React from "react";
import { Award, ShieldCheck, Truck, Users, Sparkles, CheckCircle, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "../data/products";

export const AboutPage = ({ setActivePage }) => {
  return (
    <div style={{ padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="festive-badge" style={{ marginBottom: "12px" }}>
            Our Sivakasi Heritage
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
            <span className="font-logo-title logo-brand-pink" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", fontWeight: 900 }}>
              Muthu Mari
            </span>
            <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 700 }}>
              Crackers
            </span>
          </div>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#64748b", marginBottom: "8px" }}>
            About {COMPANY_INFO.name} (Thiruthangal / Sivakasi)
          </h2>
          <p style={{ color: "#475569", maxWidth: "680px", margin: "8px auto 0", fontSize: "0.95rem" }}>
            The premier hub of pyrotechnic excellence located in Sengamala Nachiar Puram, Thiruthangal, Tamil Nadu, supplying safe and world-class festival crackers across India.
          </p>
        </div>

        {/* Story & History Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginBottom: "16px" }}>
              Direct From The Fireworks Capital of India
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "16px" }}>
              <strong>{COMPANY_INFO.name}</strong>, known as <strong>{COMPANY_INFO.brandName}</strong>, was established with a singular mission: to eliminate multiple middleman markups and bring authentic, top-grade Sivakasi firecrackers directly from the factory floor to families and businesses at true wholesale rates (flat 75% to 80% discount).
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "24px" }}>
              Our facilities in Thiruthangal adhere to the highest fire safety and pyrotechnic standards. Every sparkler, flower pot, aerial cake, and sound cracker is crafted using certified green formulation techniques that deliver vibrant colors, majestic sound, and maximum safety for all ages.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className="glass-panel" style={{ padding: "16px", borderRadius: "12px", border: "1px solid #fed7aa", background: "#fffbeb" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#d97706" }}>20+</div>
                <div style={{ fontSize: "0.85rem", color: "#92400e", fontWeight: 600 }}>Years of Pyrotechnic Legacy</div>
              </div>
              <div className="glass-panel" style={{ padding: "16px", borderRadius: "12px", border: "1px solid #bfdbfe", background: "#eff6ff" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#0253b3" }}>1,00,000+</div>
                <div style={{ fontSize: "0.85rem", color: "#1e40af", fontWeight: 600 }}>Happy Festive Celebrations</div>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
            <img
              src="/images/sparklers.jpg"
              alt="Muthumari Crackers Celebration"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Why Choose Us Pillars */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a" }}>
              Why Choose Muthu Mari Crackers?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            <div className="glass-panel" style={{ padding: "28px", borderRadius: "16px", background: "#ffffff" }}>
              <Award size={32} color="#e69100" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                Direct Factory Pricing
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.6" }}>
                Enjoy wholesale prices up to 75%-80% cheaper than local seasonal retail shops. No middlemen markups.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "28px", borderRadius: "16px", background: "#ffffff" }}>
              <ShieldCheck size={32} color="#16a34a" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                100% Quality & Safety Tested
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.6" }}>
                Strict testing of chemical density, ignition fuses, and shell integrity. Zero dud rate guaranteed.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "28px", borderRadius: "16px", background: "#ffffff" }}>
              <Truck size={32} color="#0253b3" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                Reliable Transport Dispatch
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.6" }}>
                Strong corrugated multi-layer wooden crate packing dispatched through authorized parcel lorries all over India.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: "28px", borderRadius: "16px", background: "#ffffff" }}>
              <Sparkles size={32} color="#d91b5c" style={{ marginBottom: "16px" }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                Green Cracker Compliant
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: "1.6" }}>
                Eco-certified low-emission formulations with authorized QR verification stickers as per NEERI norms.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="glass-panel"
          style={{
            padding: "36px",
            borderRadius: "20px",
            textAlign: "center",
            background: "linear-gradient(135deg, #eff6ff, #fdf2f8)",
            border: "1px solid #bfdbfe",
          }}
        >
          <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
            Ready to Celebrate This Festival Season?
          </h3>
          <p style={{ color: "#475569", maxWidth: "600px", margin: "0 auto 24px" }}>
            Explore our price list now and prepare your estimation in seconds.
          </p>
          <button
            onClick={() => {
              setActivePage("quick-order");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-primary"
            style={{ padding: "12px 28px" }}
          >
            Start Price List Estimation
          </button>
        </div>
      </div>
    </div>
  );
};
