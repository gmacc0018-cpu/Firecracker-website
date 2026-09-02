import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { FireworksCanvas } from "./components/FireworksCanvas";
import { HomePage } from "./pages/HomePage";
import { QuickOrderPage } from "./pages/QuickOrderPage";
import { ProductsPage } from "./pages/ProductsPage";
import { GiftBoxesPage } from "./pages/GiftBoxesPage";
import { SafetyTipsPage } from "./pages/SafetyTipsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";
import { MessageSquare, Phone } from "lucide-react";
import { COMPANY_INFO } from "./data/products";

export function App() {
  const [activePage, setActivePage] = useState("quick-order");

  // Handle browser title change according to active page
  useEffect(() => {
    const titles = {
      home: `${COMPANY_INFO.name} | Sivakasi Direct Factory Firecrackers - 85% OFF`,
      "quick-order": `Price List & Quick Order Estimation 2026 | ${COMPANY_INFO.name}`,
      "gift-boxes": `Diwali Gift Boxes & Family Combos | ${COMPANY_INFO.name}`,
      products: `Sivakasi Products Catalog | ${COMPANY_INFO.name}`,
      gallery: `Photos & Videos Gallery | ${COMPANY_INFO.name}`,
      "safety-tips": `Firecrackers Safety Guidelines & Green Norms | ${COMPANY_INFO.name}`,
      about: `About Us | ${COMPANY_INFO.name} & ${COMPANY_INFO.sisterBrand} Sivakasi`,
      contact: `Contact Us & Factory Location | ${COMPANY_INFO.name}`,
    };
    document.title = titles[activePage] || COMPANY_INFO.name;
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage setActivePage={setActivePage} />;
      case "quick-order":
        return <QuickOrderPage />;
      case "gift-boxes":
        return <GiftBoxesPage setActivePage={setActivePage} />;
      case "products":
        return <ProductsPage />;
      case "gallery":
        return <GalleryPage />;
      case "safety-tips":
        return <SafetyTipsPage />;
      case "about":
        return <AboutPage setActivePage={setActivePage} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <CartProvider>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
        {/* Ambient Fireworks canvas */}
        <FireworksCanvas />

        {/* Top Sticky Navigation */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* Main Content Area */}
        <main style={{ flex: 1 }}>{renderPage()}</main>

        {/* Global Footer */}
        <Footer setActivePage={setActivePage} />

        {/* Slide-out Cart & Estimate Drawer */}
        <CartDrawer />

        {/* Floating WhatsApp Quick Action Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Muthu%20Mari%20Crackers%20price%20list.`}
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            color: "#fff",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 25px rgba(37, 211, 102, 0.5)",
            zIndex: 45,
            border: "2px solid #fff",
            textDecoration: "none",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          title="Direct WhatsApp Inquiry"
        >
          <MessageSquare size={28} />
        </a>
      </div>
    </CartProvider>
  );
}

export default App;
