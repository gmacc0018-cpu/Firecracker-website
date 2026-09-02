import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Camera,
  Video,
  PlusCircle,
  X,
  Play,
  Share2,
  Trash2,
  ExternalLink,
  Upload,
  Image as ImageIcon,
  Tag,
  Film,
  CheckCircle,
  Eye,
  Filter,
} from "lucide-react";
import { GALLERY_CATEGORIES, INITIAL_GALLERY_ITEMS } from "../data/gallery";
import { COMPANY_INFO } from "../data/products";
import { InstagramIcon } from "../components/InstagramIcon";

export const GalleryPage = () => {
  // Load gallery items from localStorage if available, or use initial items
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("muthumari_gallery_items");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to read gallery from storage", e);
    }
    return INITIAL_GALLERY_ITEMS;
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeMediaModal, setActiveMediaModal] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  // New Media Form state
  const [newItemType, setNewItemType] = useState("photo"); // 'photo' or 'video'
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemTamilTitle, setNewItemTamilTitle] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("celebration");
  const [newItemUrl, setNewItemUrl] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [newItemTags, setNewItemTags] = useState("");
  const [previewDataUrl, setPreviewDataUrl] = useState("");
  const fileInputRef = useRef(null);

  // Sync to local storage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem("muthumari_gallery_items", JSON.stringify(items));
    } catch (e) {
      console.error("Storage write failed", e);
    }
  }, [items]);

  // Toast notification timer
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const filteredItems = items.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "photos") return item.type === "photo";
    if (activeCategory === "videos") return item.type === "video";
    return item.category === activeCategory;
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewDataUrl(reader.result);
        setNewItemUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemTitle.trim()) {
      alert("Please provide a title for the media item.");
      return;
    }
    if (!newItemUrl.trim() && !previewDataUrl) {
      alert("Please provide an Image/Video URL or upload a file.");
      return;
    }

    const tagsArray = newItemTags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const isVideoType = newItemType === "video";
    const isYoutube = newItemUrl.includes("youtube.com") || newItemUrl.includes("youtu.be");

    let finalUrl = newItemUrl;
    if (isYoutube) {
      // Format to embed URL if standard YouTube link
      const videoIdMatch = newItemUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (videoIdMatch && videoIdMatch[1]) {
        finalUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
      }
    }

    const newItem = {
      id: `custom-${Date.now()}`,
      type: newItemType,
      title: newItemTitle.trim(),
      tamilTitle: newItemTamilTitle.trim() || newItemTitle.trim(),
      category: newItemCategory,
      url: finalUrl,
      thumbnail: previewDataUrl || (isVideoType ? "/images/diwali_fireworks_hero_1787842643127.jpg" : finalUrl),
      description: newItemDesc.trim() || "Captured at Muthumari Fireworks Sivakasi.",
      date: "Added Recently",
      tags: tagsArray.length > 0 ? tagsArray : [newItemCategory, newItemType],
      videoEmbed: isYoutube,
    };

    setItems([newItem, ...items]);
    setIsAddModalOpen(false);
    // Reset form
    setNewItemTitle("");
    setNewItemTamilTitle("");
    setNewItemUrl("");
    setNewItemDesc("");
    setNewItemTags("");
    setPreviewDataUrl("");
    setNotification("✨ New photo/video added to gallery successfully!");
  };

  const handleDeleteItem = (id, e) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this media item from your gallery?")) {
      setItems(items.filter((item) => item.id !== id));
      if (activeMediaModal && activeMediaModal.id === id) {
        setActiveMediaModal(null);
      }
      setNotification("Media removed from gallery.");
    }
  };

  const resetToDefaultGallery = () => {
    if (confirm("Reset gallery back to standard Muthumari showcase items?")) {
      setItems(INITIAL_GALLERY_ITEMS);
      localStorage.removeItem("muthumari_gallery_items");
      setNotification("Gallery reset to default collection.");
    }
  };

  return (
    <div className="gallery-page" style={{ paddingBottom: "80px" }}>
      {/* Toast Notification */}
      {notification && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#0253b3",
            color: "#fff",
            padding: "14px 22px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: 600,
            animation: "bounceIn 0.3s ease-out",
          }}
        >
          <CheckCircle size={20} color="#4ade80" />
          <span>{notification}</span>
        </div>
      )}

      {/* Hero Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #02367b 0%, #0253b3 40%, #870e3c 100%)",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(253, 224, 71, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(217, 27, 92, 0.25) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              padding: "6px 18px",
              borderRadius: "30px",
              fontSize: "0.88rem",
              fontWeight: 600,
              marginBottom: "16px",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <Camera size={16} color="#fde047" />
            <span>MuthuMari Crackers Visual Gallery</span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
            Photos & Videos Showcase
          </h1>
          <p style={{ color: "#ffd1dc", fontSize: "1.15rem", fontWeight: 500, marginBottom: "20px" }}>
            புகைப்படங்கள் & வீடியோக்கள் — நேரடி சிவகாசி பட்டாசு தயாரிப்பு & கொண்டாட்டங்கள்
          </p>

          <p style={{ maxWidth: "680px", margin: "0 auto 28px", color: "rgba(255,255,255,0.85)", fontSize: "0.98rem", lineHeight: 1.6 }}>
            Explore our real Sivakasi manufacturing, vibrant Diwali night sky bursts, certified green fireworks, and customer celebrations. You can easily add your own photos and videos below!
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="btn btn-primary"
              style={{
                background: "#f59e0b",
                color: "#1e1b4b",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "30px",
                boxShadow: "0 6px 20px rgba(245, 158, 11, 0.4)",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              <PlusCircle size={18} />
              <span>Add New Photo / Video</span>
            </button>

            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                color: "#fff",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 22px",
                borderRadius: "30px",
                textDecoration: "none",
                fontSize: "0.95rem",
                boxShadow: "0 6px 20px rgba(220, 39, 67, 0.35)",
              }}
            >
              <InstagramIcon size={18} color="#fff" />
              <span>Watch Instagram Reels</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="site-container" style={{ marginTop: "40px" }}>
        {/* Filter Navigation Bar & Action Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
            padding: "16px 20px",
            background: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "20px",
                    border: isActive ? "2px solid #0253b3" : "1px solid #e2e8f0",
                    background: isActive ? "rgba(2, 83, 179, 0.08)" : "#f8fafc",
                    color: isActive ? "#0253b3" : "#475569",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "0.88rem", color: "#64748b", fontWeight: 600 }}>
              Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
            </span>

            {items.length !== INITIAL_GALLERY_ITEMS.length && (
              <button
                onClick={resetToDefaultGallery}
                title="Reset to default items"
                style={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  background: "none",
                  border: "1px dashed #cbd5e1",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Reset Defaults
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              background: "#fff",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
            }}
          >
            <Camera size={48} color="#94a3b8" style={{ marginBottom: "16px" }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>
              No media found in this category
            </h3>
            <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "20px" }}>
              Be the first to add a photo or video here!
            </p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="btn btn-primary"
              style={{
                background: "#0253b3",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "20px",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <PlusCircle size={16} style={{ display: "inline", marginRight: "6px" }} />
              Add Photo / Video Now
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMediaModal(item)}
                className="gallery-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(2, 83, 179, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
                }}
              >
                {/* Media Thumbnail */}
                <div style={{ position: "relative", width: "100%", height: "230px", background: "#0f172a", overflow: "hidden" }}>
                  <img
                    src={item.thumbnail || item.url}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onError={(e) => {
                      e.target.src = "/images/diwali_fireworks_hero_1787842643127.jpg";
                    }}
                  />

                  {/* Type Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: item.type === "video" ? "rgba(220, 38, 38, 0.9)" : "rgba(2, 83, 179, 0.85)",
                      backdropFilter: "blur(4px)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {item.type === "video" ? <Video size={13} /> : <Camera size={13} />}
                    <span style={{ textTransform: "uppercase" }}>{item.type}</span>
                  </div>

                  {/* Play icon overlay for videos */}
                  {item.type === "video" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "54px",
                        height: "54px",
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#dc2626",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                      }}
                    >
                      <Play size={24} fill="#dc2626" style={{ marginLeft: "3px" }} />
                    </div>
                  )}

                  {/* Delete Button */}
                  <button
                    onClick={(e) => handleDeleteItem(item.id, e)}
                    title="Remove from gallery"
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(0,0,0,0.6)",
                      color: "#fff",
                      border: "none",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      opacity: 0.8,
                      transition: "opacity 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#dc2626";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(0,0,0,0.6)";
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                {/* Card Information */}
                <div style={{ padding: "18px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#d91b5c", textTransform: "uppercase" }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{item.date}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: 1.3,
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </h3>

                  {item.tamilTitle && (
                    <p style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 500, marginBottom: "8px" }}>
                      {item.tamilTitle}
                    </p>
                  )}

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#475569",
                      lineHeight: 1.5,
                      marginBottom: "14px",
                      flex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: "#f1f5f9",
                            color: "#475569",
                            fontSize: "0.72rem",
                            padding: "3px 8px",
                            borderRadius: "12px",
                            fontWeight: 600,
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL: Add New Photo / Video */}
      {isAddModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(6px)",
            zIndex: 9990,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "580px",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              padding: "28px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAddModalOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#f1f5f9",
                border: "none",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#64748b",
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <div style={{ background: "rgba(2, 83, 179, 0.1)", padding: "10px", borderRadius: "12px", color: "#0253b3" }}>
                <PlusCircle size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a" }}>Add to Visual Gallery</h2>
                <p style={{ fontSize: "0.85rem", color: "#64748b" }}>Upload photo or attach video to showcase on website</p>
              </div>
            </div>

            <form onSubmit={handleAddItem} style={{ marginTop: "20px" }}>
              {/* Type Selection */}
              <div style={{ marginBottom: "18px" }}>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>
                  Media Type
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <button
                    type="button"
                    onClick={() => setNewItemType("photo")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px",
                      borderRadius: "12px",
                      border: newItemType === "photo" ? "2px solid #0253b3" : "1px solid #cbd5e1",
                      background: newItemType === "photo" ? "rgba(2, 83, 179, 0.08)" : "#f8fafc",
                      color: newItemType === "photo" ? "#0253b3" : "#475569",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    <ImageIcon size={18} />
                    <span>Photo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setNewItemType("video")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px",
                      borderRadius: "12px",
                      border: newItemType === "video" ? "2px solid #dc2626" : "1px solid #cbd5e1",
                      background: newItemType === "video" ? "rgba(220, 38, 38, 0.08)" : "#f8fafc",
                      color: newItemType === "video" ? "#dc2626" : "#475569",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    <Video size={18} />
                    <span>Video / Reel</span>
                  </button>
                </div>
              </div>

              {/* Title & Tamil Title */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                    Title (English) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 240 Shot Mega Fireworks Show"
                    value={newItemTitle}
                    onChange={(e) => setNewItemTitle(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                    Tamil Title (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 240 ஷாட் வானவெடி"
                    value={newItemTamilTitle}
                    onChange={(e) => setNewItemTamilTitle(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              {/* Category */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Category
                </label>
                <select
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.9rem",
                    background: "#fff",
                  }}
                >
                  <option value="celebration">Celebrations & Aerial (வானவேடிக்கை)</option>
                  <option value="factory">Factory & Packing (தொழிற்சாலை தயாரிப்பு)</option>
                  <option value="products">Product Showcases (பட்டாசு வகைகள்)</option>
                </select>
              </div>

              {/* Photo Upload or Video URL */}
              {newItemType === "photo" ? (
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                    Upload Photo or Provide Image URL
                  </label>

                  <div
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    style={{
                      border: "2px dashed #cbd5e1",
                      borderRadius: "12px",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                      background: "#f8fafc",
                      marginBottom: "10px",
                    }}
                  >
                    <Upload size={24} color="#64748b" style={{ margin: "0 auto 8px" }} />
                    <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155" }}>
                      Click to choose image file from your device
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>JPG, PNG, WEBP up to 10MB</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                  </div>

                  {previewDataUrl && (
                    <div style={{ position: "relative", width: "100%", height: "140px", borderRadius: "10px", overflow: "hidden", marginBottom: "10px" }}>
                      <img src={previewDataUrl} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewDataUrl("");
                          setNewItemUrl("");
                        }}
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          background: "#dc2626",
                          color: "#fff",
                          border: "none",
                          borderRadius: "50%",
                          padding: "4px",
                          cursor: "pointer",
                        }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}

                  <input
                    type="text"
                    placeholder="Or enter Image URL (e.g. /images/diwali.jpg or https://...)"
                    value={newItemUrl}
                    onChange={(e) => {
                      setNewItemUrl(e.target.value);
                      if (e.target.value.startsWith("http") || e.target.value.startsWith("/")) {
                        setPreviewDataUrl(e.target.value);
                      }
                    }}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              ) : (
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                    Video URL (YouTube link / Instagram reel / MP4 link) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. https://www.youtube.com/watch?v=... or https://www.instagram.com/reel/..."
                    value={newItemUrl}
                    onChange={(e) => setNewItemUrl(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                    }}
                  />
                  <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>
                    Tip: You can paste any YouTube or Instagram reel URL directly.
                  </p>
                </div>
              )}

              {/* Description */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Description / Caption
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell visitors about this firework or celebration..."
                  value={newItemDesc}
                  onChange={(e) => setNewItemDesc(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.9rem",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Tags */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>
                  Tags (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sivakasi, Diwali 2026, Sky Shots, Green"
                  value={newItemTags}
                  onChange={(e) => setNewItemTags(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              {/* Submit Buttons */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    background: "#f8fafc",
                    color: "#475569",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "10px 24px",
                    borderRadius: "10px",
                    border: "none",
                    background: "linear-gradient(135deg, #0253b3 0%, #0369a1 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(2, 83, 179, 0.3)",
                  }}
                >
                  Publish to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Fullscreen Media Viewer */}
      {activeMediaModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 15, 29, 0.92)",
            backdropFilter: "blur(10px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setActiveMediaModal(null)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "850px",
              maxHeight: "92vh",
              overflowY: "auto",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveMediaModal(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: 10,
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: "none",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>

            {/* Media Presentation */}
            <div style={{ background: "#000", width: "100%", minHeight: "360px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {activeMediaModal.type === "video" ? (
                activeMediaModal.videoEmbed ? (
                  <iframe
                    src={activeMediaModal.url}
                    title={activeMediaModal.title}
                    style={{ width: "100%", height: "450px", border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : activeMediaModal.isInstagram ? (
                  <div style={{ padding: "40px 20px", textAlign: "center", color: "#fff" }}>
                    <InstagramIcon size={56} color="#ffd1dc" style={{ margin: "0 auto 16px" }} />
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }}>
                      Watch on Official Muthumari Instagram
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "24px", maxWidth: "450px", margin: "0 auto 20px" }}>
                      {activeMediaModal.description}
                    </p>
                    <a
                      href={activeMediaModal.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      style={{
                        background: "linear-gradient(45deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
                        color: "#fff",
                        fontWeight: 700,
                        padding: "12px 28px",
                        borderRadius: "30px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>Open Instagram Page</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                ) : (
                  <video
                    src={activeMediaModal.url}
                    controls
                    autoPlay
                    style={{ width: "100%", maxHeight: "500px" }}
                  />
                )
              ) : (
                <img
                  src={activeMediaModal.url}
                  alt={activeMediaModal.title}
                  style={{ width: "100%", maxHeight: "520px", objectFit: "contain" }}
                />
              )}
            </div>

            {/* Details Section */}
            <div style={{ padding: "24px 30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span
                  style={{
                    background: "rgba(2, 83, 179, 0.1)",
                    color: "#0253b3",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  {activeMediaModal.category}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>{activeMediaModal.date}</span>
              </div>

              <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>
                {activeMediaModal.title}
              </h2>

              {activeMediaModal.tamilTitle && (
                <p style={{ fontSize: "1rem", color: "#d91b5c", fontWeight: 600, marginBottom: "14px" }}>
                  {activeMediaModal.tamilTitle}
                </p>
              )}

              <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.6, marginBottom: "20px" }}>
                {activeMediaModal.description}
              </p>

              {/* Tags & Actions */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {activeMediaModal.tags &&
                    activeMediaModal.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: "#f1f5f9",
                          color: "#475569",
                          fontSize: "0.78rem",
                          padding: "4px 10px",
                          borderRadius: "14px",
                          fontWeight: 600,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%2C%20I%20saw%20${encodeURIComponent(activeMediaModal.title)}%20on%20your%20website%20gallery%20and%20want%20to%20order.`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#25d366",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
