import React from "react";
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Heart, ArrowRight, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { COMPANY_INFO } from "../data/products";

export const Footer = ({ setActivePage }) => {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "quick-order", label: "Price List & Estimate Maker" },
    { id: "gift-boxes", label: "Gift Boxes & Diwali Combos" },
    { id: "products", label: "Sivakasi Products Catalog" },
    { id: "safety-tips", label: "Fireworks Safety Guidelines" },
    { id: "about", label: "About Muthu Mari Fireworks" },
    { id: "contact", label: "Contact & Google Location" },
  ];

  const categories = [
    "Sparklers (கம்பி மத்தாப்பு)",
    "Ground Chakkars (தரை சக்கரம்)",
    "Flower Pots (பூந்தொட்டி)",
    "Sound Crackers (வெடி வகைகள்)",
    "Garland Crackers (சரவெடி)",
    "Sky Shots & Aerial Cakes (வானவெடி)",
    "Kids & Fancy Specials (குழந்தைகள் வெடி)",
  ];

  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e2e8f0",
        paddingTop: "60px",
        paddingBottom: "30px",
        marginTop: "80px",
        position: "relative",
        zIndex: 10,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.03)",
      }}
    >
      <div className="site-container">
        {/* Top Feature Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
            paddingBottom: "40px",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <div className="glass-panel" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ background: "rgba(2, 83, 179, 0.1)", padding: "12px", borderRadius: "12px", color: "#0253b3" }}>
              <Sparkles size={28} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0f172a" }}>100% Genuine Sivakasi</h4>
              <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Factory direct authentic crackers</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ background: "rgba(217, 27, 92, 0.1)", padding: "12px", borderRadius: "12px", color: "#d91b5c" }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0f172a" }}>Flat 85% Factory Discount</h4>
              <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Wholesale direct pricing</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ background: "rgba(34, 197, 94, 0.1)", padding: "12px", borderRadius: "12px", color: "#16a34a" }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0f172a" }}>Green Cracker Certified</h4>
              <p style={{ color: "#64748b", fontSize: "0.85rem" }}>CSIR-NEERI & PESO compliant</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ background: "rgba(234, 88, 12, 0.1)", padding: "12px", borderRadius: "12px", color: "#ea580c" }}>
              <Phone size={28} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#0f172a" }}>Fast WhatsApp Support</h4>
              <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Instant quote & dispatch info</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img
                src="/logo.webp"
                alt="Muthu Mari Fireworks Logo"
                style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid #0253b3" }}
              />
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                  <span className="font-logo-title logo-brand-pink" style={{ fontSize: "1.55rem", fontWeight: 900 }}>
                    Muthu Mari
                  </span>
                  <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                    Crackers
                  </span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>
                  {COMPANY_INFO.name.toUpperCase()}
                </div>
              </div>
            </div>

            <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "20px" }}>
              Direct factory fireworks manufacturers & wholesale suppliers from Sivakasi, Tamil Nadu. Delivering safe, high-burst, eco-certified fireworks across India for grand celebrations.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <span className="blue-badge">Sivakasi Direct</span>
              <span className="gold-badge">PESO Licensed</span>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: "18px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-instagram"
                style={{ padding: "8px 16px", fontSize: "0.85rem" }}
              >
                <InstagramIcon size={16} />
                <span>Instagram</span>
              </a>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-map"
                style={{ padding: "8px 16px", fontSize: "0.85rem" }}
              >
                <MapPin size={16} />
                <span>Google Map</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: "#0f172a", fontSize: "1.1rem", fontWeight: 700, marginBottom: "18px" }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActivePage(item.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#475569",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "color 0.2s",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0253b3")}
                    onMouseLeave={(e) => (e.target.style.color = "#475569")}
                  >
                    <ArrowRight size={14} color="#0253b3" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Fireworks Categories */}
          <div>
            <h4 style={{ color: "#0f172a", fontSize: "1.1rem", fontWeight: 700, marginBottom: "18px" }}>
              Crackers Categories
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {categories.map((cat, i) => (
                <li
                  key={i}
                  style={{
                    color: "#475569",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d91b5c" }} />
                  <span>{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Factory Location & Contact */}
          <div>
            <h4 style={{ color: "#0f172a", fontSize: "1.1rem", fontWeight: 700, marginBottom: "18px" }}>
              Factory & Location
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.9rem", color: "#475569" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <MapPin size={22} color="#ea580c" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ color: "#0f172a", display: "block" }}>{COMPANY_INFO.name}</strong>
                  <span>Sengamala Nachiar Puram, Thiruthangal, Tamil Nadu 626124, India</span>
                  <div style={{ marginTop: "4px" }}>
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#0253b3", fontWeight: 700, textDecoration: "underline", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.82rem" }}
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Phone size={18} color="#16a34a" style={{ flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: "#0f172a", textDecoration: "none", fontWeight: 700 }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Mail size={18} color="#0253b3" style={{ flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: "#475569", textDecoration: "none" }}>
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <InstagramIcon size={18} color="#d91b5c" style={{ flexShrink: 0 }} />
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#d91b5c", textDecoration: "none", fontWeight: 600 }}
                >
                  {COMPANY_INFO.instagramHandle}
                </a>
              </div>

              <div style={{ marginTop: "6px" }}>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ width: "100%", fontSize: "0.88rem" }}
                >
                  WhatsApp Direct Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "16px 20px",
            fontSize: "0.8rem",
            color: "#64748b",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          <strong style={{ color: "#0f172a" }}>Statutory Compliance Notice:</strong> In compliance with the Hon'ble Supreme Court of India order (WP No. 728/2015) and PESO regulations, online sales/e-commerce of firecrackers is strictly not carried out on this portal. This website is purely a digital catalog, price list estimate calculator, and inquiry platform for direct customer dispatch from Sivakasi factory outlet.
        </div>

        {/* Copyright */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.85rem",
            color: "#64748b",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "20px",
          }}
        >
          <div>
            © 2026 {COMPANY_INFO.name} • {COMPANY_INFO.brandName} (Sivakasi). All Rights Reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Crafted with passion for festive celebrations</span>
            <Heart size={14} color="#d91b5c" fill="#d91b5c" />
          </div>
        </div>
      </div>
    </footer>
  );
};
