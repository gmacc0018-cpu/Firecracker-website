import React, { useState } from "react";
import { Sparkles, Phone, ShoppingBag, Menu, X, MapPin } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { COMPANY_INFO } from "../data/products";
import { useCart } from "../context/CartContext";

export const Navbar = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totals, setIsDrawerOpen } = useCart();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "quick-order", label: "Price List / Quick Order", badge: "85% OFF" },
    { id: "products", label: "Products Catalog" },
    { id: "safety-tips", label: "Safety Guidelines" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact & Location" },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full" style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* Top Promotional Bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #0253b3 0%, #d91b5c 50%, #ea580c 100%)",
          color: "#fff",
          fontSize: "0.82rem",
          fontWeight: 600,
          padding: "7px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px", margin: "0 auto" }}>
          <Sparkles size={15} color="#fde047" className="animate-spark" />
          <span>{COMPANY_INFO.festiveBanner}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginLeft: "auto" }}>
          {/* Instagram link */}
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontWeight: 700,
              fontSize: "0.8rem",
            }}
            title="Follow us on Instagram"
          >
            <InstagramIcon size={14} color="#ffd1dc" />
            <span className="hidden-mobile">Instagram</span>
          </a>

          {/* Map link */}
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: 700,
              fontSize: "0.8rem",
            }}
            title="View Factory Location on Google Maps"
          >
            <MapPin size={14} color="#ffd700" />
            <span className="hidden-mobile">Location</span>
          </a>

          {/* Phone call link */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: 700,
              background: "rgba(255, 255, 255, 0.18)",
              padding: "2px 10px",
              borderRadius: "9999px",
            }}
          >
            <Phone size={13} color="#fde047" />
            <span>Call: {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Clean White Bar */}
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="site-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {/* Brand Logo with exact font match */}
          <div
            onClick={() => handleNavClick("home")}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px rgba(2, 83, 179, 0.15)",
                border: "2px solid #0253b3",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src="/logo.webp"
                alt="Muthu Mari Fireworks Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "6px",
                  lineHeight: "1.1",
                }}
              >
                <span
                  className="font-logo-title logo-brand-pink"
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 900,
                  }}
                >
                  Muthu Mari
                </span>
                <span
                  className="font-logo-sub logo-brand-gold"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                  }}
                >
                  Fireworks
                </span>
              </div>
              <div style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 600, letterSpacing: "0.5px" }}>
                MUTHUMARI AGENCIES • SIVAKASI DIRECT
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: isActive ? "#eff6ff" : "transparent",
                    color: isActive ? "#0253b3" : "#334155",
                    border: isActive ? "1px solid #bfdbfe" : "1px solid transparent",
                    borderRadius: "9999px",
                    padding: "8px 16px",
                    fontSize: "0.92rem",
                    fontWeight: isActive ? 700 : 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#0253b3";
                      e.currentTarget.style.background = "#f8fafc";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#334155";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      style={{
                        background: "linear-gradient(135deg, #d91b5c, #ea580c)",
                        color: "#fff",
                        fontSize: "0.68rem",
                        padding: "2px 7px",
                        borderRadius: "9999px",
                        fontWeight: 800,
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Cart Estimate & Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Estimate / Cart Trigger Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              style={{
                background: "linear-gradient(135deg, #0253b3, #d91b5c)",
                color: "#fff",
                border: "none",
                borderRadius: "9999px",
                padding: "8px 18px",
                fontWeight: 700,
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(2, 83, 179, 0.25)",
                transition: "all 0.2s ease",
              }}
            >
              <ShoppingBag size={18} />
              <span className="hidden-mobile">Estimate:</span>
              <span style={{ color: "#fff", fontWeight: 800 }}>
                ₹{totals.totalDiscounted.toLocaleString("en-IN")}
              </span>
              {totals.totalItems > 0 && (
                <span
                  style={{
                    background: "#ffd700",
                    color: "#0f172a",
                    borderRadius: "9999px",
                    padding: "2px 7px",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                  }}
                >
                  {totals.totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="show-mobile-btn"
              style={{
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                color: "#0f172a",
                padding: "8px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "none",
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "#ffffff",
              borderTop: "1px solid #e2e8f0",
              padding: "16px 20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: activePage === link.id ? "#eff6ff" : "#f8fafc",
                  color: activePage === link.id ? "#0253b3" : "#1e293b",
                  border: activePage === link.id ? "1px solid #bfdbfe" : "1px solid #e2e8f0",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    style={{
                      background: "linear-gradient(135deg, #d91b5c, #ea580c)",
                      color: "#fff",
                      fontSize: "0.7rem",
                      padding: "2px 8px",
                      borderRadius: "9999px",
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-instagram"
                  style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem" }}
                >
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-map"
                  style={{ textAlign: "center", padding: "10px", fontSize: "0.85rem" }}
                >
                  <MapPin size={16} /> Google Map
                </a>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", padding: "12px" }}
              >
                <Phone size={16} /> Call Direct: {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Embedded CSS for responsive navbar toggle */}
      <style>{`
        @media (max-width: 992px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
