const fs = require('fs');
const { categories, products } = JSON.parse(fs.readFileSync('scratch_perfect_products.json', 'utf8'));

const code = `// Exact Price List Catalog from MUTHUMARI CRACKERS Official Price List Document
export const COMPANY_INFO = {
  name: "Muthumari Agencies",
  brandName: "Muthumari Crackers",
  tagline: "Direct from Sivakasi Factory - Safe, Certified & Supreme Quality Fireworks",
  sisterBrand: "Sivakasi Direct",
  phone: "+91 99945 72004",
  phoneDisplay: "9994572004",
  alternatePhones: ["99945 72004", "97870 10042", "90806 70853"],
  whatsappNumber: "919994572004",
  email: "muthumarifireworks@gmail.com",
  instagramUrl: "https://www.instagram.com/muthumari_crackers_sivakasi?igsi=dWtvMXNxaXV1ODk=",
  instagramHandle: "@muthumari_crackers_sivakasi",
  googleMapsUrl: "https://maps.app.goo.gl/tzswJvZr9UR4kG1S8",
  address: "3/243A, Thiruthangal Main Road, Sengamala Nachiar Puram, Thiruthangal, Tamil Nadu 626124, India",
  defaultDiscount: 85, // 85% OFF Factory Direct
  minOrderValue: 2500, // Minimum order ₹2500 for dispatch
  packingCharges: 150, // Standard safe packing & box fee
  festiveBanner: "🎉 FESTIVE MEGA SALE: FLAT 85% OFF ON DIRECT SIVAKASI ORDERS! BOOK NOW FOR DIWALI 2026!",
};

export const CATEGORIES = ${JSON.stringify(categories, null, 2)};

export const PRODUCTS = ${JSON.stringify(products, null, 2)};

export const SAFETY_TIPS = {
  dos: [
    "Always buy green crackers with authentic CSIR-NEERI & PESO QR codes.",
    "Always ignite fireworks outdoors in an open space, away from thatched houses and dry grass.",
    "Keep a bucket of clean water and dry sand nearby for immediate emergencies.",
    "Maintain a safe distance of at least 5 meters after lighting ground fireworks and 15 meters for aerial cakes.",
    "Wear fitted cotton clothes while bursting crackers; avoid synthetic or flowing clothing.",
    "Always light aerial fireworks with a long agarbatti or sparkler; never use direct matchsticks.",
    "Supervise children at all times while they enjoy sparklers and kids specials.",
  ],
  donts: [
    "Never attempt to relight or check a firecracker that failed to ignite right away.",
    "Never hold lit crackers, flower pots, or chakkars in your hands.",
    "Never burst sound crackers near hospitals, silence zones, senior citizen residences, or animals.",
    "Never store crackers inside living rooms near lamps, gas cylinders, or stoves.",
    "Never light crackers inside metal or glass containers.",
    "Never throw crackers casually at other people or passing vehicles.",
  ],
};

export const TESTIMONIALS = [
  {
    name: "Karthikeyan Ramasamy",
    city: "Chennai, TN",
    rating: 5,
    text: "Ordered our company and family Diwali crackers from Muthumari Crackers. The 85% factory discount saved us ₹22,000 and the packing arrived safely via parcel with zero damage. 10/10 quality!",
  },
  {
    name: "Suresh Babu",
    city: "Bengaluru, KA",
    rating: 5,
    text: "The Quick Order estimate system was so easy to pick item quantities. Downloaded the PDF estimate, shared directly on WhatsApp, and got swift confirmation. The Gujarat Festival 150 Shots cake was sensational!",
  },
  {
    name: "Anandhi Priya",
    city: "Coimbatore, TN",
    rating: 5,
    text: "Genuine Sivakasi factory crackers. Sparklers burned long and the green crackers produced noticeably less smoke. Our kids loved the peacock fountain. Highly recommended!",
  },
  {
    name: "Dr. Murali Mohan",
    city: "Hyderabad, TS",
    rating: 5,
    text: "Deluxe Supreme Lakshmi crackers had unbelievable blast and quality. Every single piece worked flawlessly. Reliable delivery and very polite customer support on WhatsApp.",
  },
];
`;

fs.writeFileSync('src/data/products.js', code);
console.log('src/data/products.js successfully updated with exact Muthumari price list data!');
