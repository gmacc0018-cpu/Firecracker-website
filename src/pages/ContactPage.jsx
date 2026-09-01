import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, ExternalLink, Navigation } from "lucide-react";
import { InstagramIcon } from "../components/InstagramIcon";
import { COMPANY_INFO } from "../data/products";

export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    // Compose inquiry text for WhatsApp
    const msg = `*NEW CONTACT INQUIRY*\nName: ${formState.name}\nPhone: ${formState.phone}\nCity: ${formState.city || "N/A"}\nMessage: ${formState.message || "I want more details about your fireworks price list."}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "40px 0 80px", position: "relative", zIndex: 1 }}>
      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="festive-badge" style={{ marginBottom: "12px" }}>
            Get in Touch
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <img
              src="/logo.webp"
              alt="Muthu Mari Fireworks Logo"
              style={{ width: "64px", height: "64px", borderRadius: "50%", border: "3px solid #0253b3" }}
            />
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span className="font-logo-title logo-brand-pink" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900 }}>
                  Muthu Mari
                </span>
                <span className="font-logo-sub logo-brand-gold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
                  Crackers
                </span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 700, letterSpacing: "1px" }}>
                {COMPANY_INFO.name.toUpperCase()}
              </div>
            </div>
          </div>
          <p style={{ color: "#475569", maxWidth: "680px", margin: "8px auto 0", fontSize: "0.95rem" }}>
            Have questions about prices, parcel dispatch to your city, or bulk festive orders? Reach out to our Sivakasi office directly via phone, WhatsApp, Instagram, or visit our factory outlet.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Contact Details & Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Phone Card */}
            <div className="glass-panel" style={{ padding: "24px", borderRadius: "16px", display: "flex", gap: "16px" }}>
              <div style={{ background: "rgba(22, 163, 74, 0.1)", padding: "14px", borderRadius: "12px", color: "#16a34a", height: "fit-content" }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                  Call Direct
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "8px" }}>
                  Speak directly with our factory sales coordinator
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  style={{ color: "#0253b3", fontWeight: 800, fontSize: "1.2rem", textDecoration: "none" }}
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-panel" style={{ padding: "24px", borderRadius: "16px", display: "flex", gap: "16px" }}>
              <div style={{ background: "rgba(37, 211, 102, 0.1)", padding: "14px", borderRadius: "12px", color: "#25D366", height: "fit-content" }}>
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                  WhatsApp Inquiries & Price List
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "10px" }}>
                  Send "PL" to receive current price list & instant quote
                </p>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=PL`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                >
                  Chat on WhatsApp ({COMPANY_INFO.phoneDisplay})
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="glass-panel" style={{ padding: "24px", borderRadius: "16px", display: "flex", gap: "16px" }}>
              <div style={{ background: "rgba(217, 27, 92, 0.1)", padding: "14px", borderRadius: "12px", color: "#d91b5c", height: "fit-content" }}>
                <InstagramIcon size={24} color="#d91b5c" />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                  Follow Us on Instagram
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "10px" }}>
                  Watch product live demos, new arrivals, and customer festival videos
                </p>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-instagram"
                  style={{ padding: "8px 18px", fontSize: "0.85rem" }}
                >
                  <InstagramIcon size={15} color="#ffffff" />
                  <span>{COMPANY_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="glass-panel" style={{ padding: "24px", borderRadius: "16px", display: "flex", gap: "16px" }}>
              <div style={{ background: "rgba(234, 88, 12, 0.1)", padding: "14px", borderRadius: "12px", color: "#ea580c", height: "fit-content" }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                  Factory & Office Address
                </h3>
                <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "12px" }}>
                  <strong style={{ color: "#0f172a" }}>Muthumari agencies</strong><br />
                  Sengamala Nachiar Puram, Thiruthangal, Tamil Nadu 626124, India
                </p>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-map"
                  style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                >
                  <Navigation size={15} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-panel" style={{ padding: "24px", borderRadius: "16px", display: "flex", gap: "16px" }}>
              <div style={{ background: "rgba(2, 83, 179, 0.1)", padding: "14px", borderRadius: "12px", color: "#0253b3", height: "fit-content" }}>
                <Clock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                  Working Hours
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
                  Monday - Sunday: 8:00 AM to 10:00 PM (Active throughout Festival Seasons)
                </p>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div
            className="glass-panel-blue"
            style={{
              padding: "32px",
              borderRadius: "20px",
              background: "#ffffff",
              border: "1px solid #bfdbfe",
              height: "fit-content",
            }}
          >
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
              Send an Instant Inquiry
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "24px" }}>
              Fill in your details below and our sales team will connect with you on WhatsApp/Phone immediately.
            </p>

            {submitted && (
              <div
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #86efac",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  color: "#166534",
                  fontSize: "0.88rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                <CheckCircle2 size={18} color="#16a34a" />
                <span>Inquiry opened in WhatsApp! We look forward to serving you.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#0f172a",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#0f172a",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Delivery City & State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chennai, Tamil Nadu / Bangalore, Karnataka"
                  value={formState.city}
                  onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#0f172a",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Message / Special Requirements
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Inquiring for Diwali 2026 family gift packs and 30-shot cakes..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: "100%",
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#0f172a",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", padding: "14px", fontSize: "1rem", marginTop: "8px" }}
              >
                <Send size={18} />
                <span>Send WhatsApp Inquiry</span>
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Maps Section */}
        <div className="glass-panel" style={{ padding: "32px", borderRadius: "20px", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <div className="festive-badge" style={{ marginBottom: "8px" }}>
                Google Map Location
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a" }}>
                Visit Muthumari Agencies in Thiruthangal
              </h2>
              <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                Sengamala Nachiar Puram, Thiruthangal, Tamil Nadu 626124, India
              </p>
            </div>

            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-map"
            >
              <Navigation size={18} />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          {/* Interactive Map Iframe */}
          <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #cbd5e1", height: "400px", position: "relative" }}>
            <iframe
              title="Muthumari Agencies Location Map"
              src="https://maps.google.com/maps?q=Muthumari%20agencies,%20Sengamala%20Nachiar%20Puram,%20Thiruthangal,%20Tamil%20Nadu%20626124&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
