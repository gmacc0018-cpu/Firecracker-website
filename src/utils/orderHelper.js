import jsPDF from "jspdf";
import "jspdf-autotable";
import { COMPANY_INFO } from "../data/products";

/**
 * Generates and downloads a clean, professional PDF estimate / order quotation
 */
export function generateOrderPDF(orderItems, customerInfo, totals) {
  const doc = new jsPDF();
  const dateStr = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const estimateNo = `MFW-${Date.now().toString().slice(-6)}`;

  // Header Banner Background
  doc.setFillColor(2, 83, 179); // Brand blue
  doc.rect(0, 0, 210, 40, "F");

  // Gold accent line
  doc.setFillColor(217, 27, 92); // Pink accent
  doc.rect(0, 40, 210, 3, "F");

  // Company Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("MUTHU MARI CRACKERS", 14, 18);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(254, 240, 138);
  doc.text(`${COMPANY_INFO.name.toUpperCase()} • SIVAKASI DIRECT FACTORY ESTIMATE`, 14, 25);

  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text(`Phone: ${COMPANY_INFO.phone}  |  Instagram: ${COMPANY_INFO.instagramHandle}`, 14, 32);
  doc.text(`Address: ${COMPANY_INFO.address}`, 14, 37);

  // Estimate Info Box
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("PRICE ESTIMATE / QUOTATION (85% OFF)", 14, 52);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Estimate Ref: #${estimateNo}`, 14, 59);
  doc.text(`Date: ${dateStr}`, 14, 65);

  // Customer Details Block
  if (customerInfo && customerInfo.name) {
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(120, 47, 76, 26, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.text("Customer Details:", 124, 53);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${customerInfo.name || "Valued Customer"}`, 124, 59);
    doc.text(`Phone: ${customerInfo.phone || "N/A"}`, 124, 65);
    if (customerInfo.city) {
      doc.text(`City: ${customerInfo.city}`, 124, 71);
    }
  }

  // Table Data
  const tableRows = orderItems.map((item, index) => [
    index + 1,
    item.name,
    item.pieces || "-",
    `Rs. ${item.originalPrice}`,
    `Rs. ${item.discountPrice}`,
    item.quantity,
    `Rs. ${(item.discountPrice * item.quantity).toLocaleString("en-IN")}`,
  ]);

  doc.autoTable({
    startY: 78,
    head: [["#", "Product Description", "Packing", "MRP Rate", "85% OFF Rate", "Qty", "Subtotal"]],
    body: tableRows,
    theme: "striped",
    headStyles: {
      fillColor: [2, 83, 179], // Blue
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8,
    },
    styles: {
      fontSize: 8,
      cellPadding: 2.5,
    },
    columnStyles: {
      0: { cellWidth: 10, halign: "center" },
      1: { cellWidth: 70 },
      2: { cellWidth: 28 },
      3: { cellWidth: 20, halign: "right" },
      4: { cellWidth: 24, halign: "right", fontStyle: "bold", textColor: [217, 27, 92] },
      5: { cellWidth: 14, halign: "center", fontStyle: "bold" },
      6: { cellWidth: 24, halign: "right", fontStyle: "bold" },
    },
  });

  const finalY = doc.lastAutoTable.finalY + 8;

  // Calculation Summary Box on right
  const summaryX = 120;
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(summaryX - 4, finalY - 4, 78, 32, 2, 2, "F");

  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  doc.setFont("helvetica", "normal");
  doc.text(`Total Items Selected:`, summaryX, finalY + 2);
  doc.text(`${totals.totalItems} boxes`, 185, finalY + 2, { align: "right" });

  doc.text(`Original MRP Value:`, summaryX, finalY + 8);
  doc.text(`Rs. ${totals.totalOriginal.toLocaleString("en-IN")}`, 185, finalY + 8, { align: "right" });

  doc.setTextColor(22, 101, 52); // Green
  doc.setFont("helvetica", "bold");
  doc.text(`85% Factory Savings:`, summaryX, finalY + 14);
  doc.text(`- Rs. ${totals.totalSavings.toLocaleString("en-IN")}`, 185, finalY + 14, { align: "right" });

  doc.setTextColor(220, 38, 38);
  doc.text(`Packing & Safety Box:`, summaryX, finalY + 20);
  doc.text(`Rs. ${totals.packingCharges}`, 185, finalY + 20, { align: "right" });

  doc.setDrawColor(245, 158, 11);
  doc.line(summaryX, finalY + 22, 190, finalY + 22);

  doc.setFontSize(11);
  doc.setTextColor(2, 83, 179);
  doc.setFont("helvetica", "bold");
  doc.text(`NET PAYABLE:`, summaryX, finalY + 27);
  doc.text(`Rs. ${totals.finalTotal.toLocaleString("en-IN")}`, 185, finalY + 27, { align: "right" });

  // Safety & Legal Note Footer
  const noteY = finalY + 38;
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text(
    "IMPORTANT NOTICE: As per Honorable Supreme Court guidelines & PESO regulations, online sales are strictly not conducted. This is an inquiry quotation & estimate. Minimum dispatch order value is Rs. 2,500. Transport & delivery charges payable on parcel pickup.",
    14,
    noteY,
    { maxWidth: 182 }
  );

  doc.setFont("helvetica", "bold");
  doc.setTextColor(2, 83, 179);
  doc.text(`To confirm this order, share this PDF or send on WhatsApp: ${COMPANY_INFO.phone}`, 14, noteY + 14);

  // Save document
  doc.save(`MuthuMari_Crackers_Estimate_${estimateNo}.pdf`);
}

/**
 * Builds formatted WhatsApp message for direct 1-tap ordering
 */
export function buildWhatsAppOrderUrl(orderItems, customerInfo, totals) {
  let text = `🎆 *NEW CRACKERS ESTIMATE / ORDER INQUIRY (85% OFF)* 🎆\n`;
  text += `*Brand:* Muthu Mari Crackers (${COMPANY_INFO.name} - Sivakasi)\n\n`;

  if (customerInfo && customerInfo.name) {
    text += `👤 *Customer:* ${customerInfo.name}\n`;
    text += `📞 *Phone:* ${customerInfo.phone || "N/A"}\n`;
    if (customerInfo.city) text += `📍 *City / Address:* ${customerInfo.city}\n`;
    if (customerInfo.note) text += `💬 *Note:* ${customerInfo.note}\n`;
    text += `\n`;
  }

  text += `📋 *ORDERED ITEMS (${orderItems.length} Variety / ${totals.totalItems} Qty):*\n`;
  orderItems.forEach((item, idx) => {
    const itemTotal = item.discountPrice * item.quantity;
    text += `${idx + 1}. ${item.name} (${item.pieces}) x *${item.quantity}* = ₹${itemTotal.toLocaleString("en-IN")}\n`;
  });

  text += `\n💰 *PRICE BREAKDOWN:*\n`;
  text += `• Total MRP: ~₹${totals.totalOriginal.toLocaleString("en-IN")}~\n`;
  text += `• *85% Discounted Value: ₹${totals.totalDiscounted.toLocaleString("en-IN")}*\n`;
  text += `• Festive Savings (85%): ₹${totals.totalSavings.toLocaleString("en-IN")}\n`;
  text += `• Packing & Safety Box: ₹${totals.packingCharges}\n`;
  text += `------------------------------------\n`;
  text += `🔥 *FINAL ESTIMATE AMOUNT: ₹${totals.finalTotal.toLocaleString("en-IN")}*\n\n`;
  text += `Please confirm product availability, delivery parcel transport charges, and dispatch date. Thank you!`;

  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
