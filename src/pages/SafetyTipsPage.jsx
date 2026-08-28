import React from "react";
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, HeartHandshake, Sparkles, HelpCircle } from "lucide-react";
import { SAFETY_TIPS, COMPANY_INFO } from "../data/products";

export const SafetyTipsPage = () => {
  return (
    <div style={{ padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="festive-badge" style={{ marginBottom: "12px" }}>
            Safe & Joyful Celebrations
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
            <span className="font-logo-title logo-brand-pink" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", fontWeight: 900 }}>
              Muthu Mari
            </span>
            <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 700 }}>
              Safety Guidelines
            </span>
          </div>
          <p style={{ color: "#475569", maxWidth: "680px", margin: "8px auto 0", fontSize: "0.95rem" }}>
            At {COMPANY_INFO.name}, safety is our paramount priority. Please read and follow these safety protocols prescribed by PESO and fire safety authorities to ensure a secure Diwali celebration.
          </p>
        </div>

        {/* Dos and Don'ts Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            marginBottom: "60px",
          }}
        >
          {/* DOS Section */}
          <div
            className="glass-panel"
            style={{
              padding: "32px",
              borderRadius: "20px",
              border: "1px solid #bbf7d0",
              background: "#f0fdf4",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ background: "rgba(22, 163, 74, 0.15)", padding: "10px", borderRadius: "12px", color: "#16a34a" }}>
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#166534" }}>
                  DO's (Follow These)
                </h2>
                <div style={{ fontSize: "0.8rem", color: "#15803d" }}>Essential safety precautions</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {SAFETY_TIPS.dos.map((tip, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontSize: "0.92rem",
                    color: "#1e293b",
                    lineHeight: "1.6",
                  }}
                >
                  <span
                    style={{
                      background: "#22c55e",
                      color: "#ffffff",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DONT'S Section */}
          <div
            className="glass-panel"
            style={{
              padding: "32px",
              borderRadius: "20px",
              border: "1px solid #fecaca",
              background: "#fef2f2",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ background: "rgba(220, 38, 38, 0.15)", padding: "10px", borderRadius: "12px", color: "#dc2626" }}>
                <XCircle size={28} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#991b1b" }}>
                  DON'Ts (Strictly Avoid)
                </h2>
                <div style={{ fontSize: "0.8rem", color: "#b91c1c" }}>Hazardous actions to prevent accidents</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {SAFETY_TIPS.donts.map((tip, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontSize: "0.92rem",
                    color: "#1e293b",
                    lineHeight: "1.6",
                  }}
                >
                  <span
                    style={{
                      background: "#ef4444",
                      color: "#ffffff",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✕
                  </span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Green Crackers Environmental Compliance Note */}
        <div
          className="glass-panel"
          style={{
            padding: "36px",
            borderRadius: "20px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <Sparkles size={24} color="#16a34a" />
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a" }}>
              Green Crackers & Eco-Friendly Commitment
            </h3>
          </div>
          <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "18px" }}>
            All fireworks sold by <strong>{COMPANY_INFO.name}</strong> ({COMPANY_INFO.brandName}) are manufactured using formulas approved by CSIR-NEERI (National Environmental Engineering Research Institute). Green crackers result in 30% to 35% reduced particulate emissions, are free from banned barium salts, and use green QR code verification seals.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              paddingTop: "16px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <div>
              <strong style={{ color: "#16a34a", display: "block", marginBottom: "4px" }}>SWAS (Safe Water Releaser)</strong>
              <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Suppresses dust and smoke particles upon ignition.</span>
            </div>
            <div>
              <strong style={{ color: "#16a34a", display: "block", marginBottom: "4px" }}>STAR (Safe Thermite Cracker)</strong>
              <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Eliminates potassium nitrate & sulfur usage.</span>
            </div>
            <div>
              <strong style={{ color: "#16a34a", display: "block", marginBottom: "4px" }}>SAFAL (Safe Minimal Aluminium)</strong>
              <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Reduces sound reverberation and chemical fallout.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
