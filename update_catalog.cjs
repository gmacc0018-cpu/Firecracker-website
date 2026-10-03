const fs = require('fs');

// Read existing products.js
const content = fs.readFileSync('src/data/products.js', 'utf8');

// Parse CATEGORIES and PRODUCTS
const catMatch = content.match(/export const CATEGORIES = (\[[\s\S]*?\]);\s*export const PRODUCTS/);
const prodMatch = content.match(/export const PRODUCTS = (\[[\s\S]*?\]);\s*export const SAFETY_TIPS/);

if (!catMatch || !prodMatch) {
  console.error('Failed to match CATEGORIES or PRODUCTS in products.js');
  process.exit(1);
}

let categories = eval(catMatch[1]);
let products = eval(prodMatch[1]);

console.log('Initial products count:', products.length);

// 1. CHANGE PRICE:
// Ground Chakkar Deluxe - 150
// Butterfly wings fighters - 110
products.forEach(p => {
  if (p.name === 'GROUND CHAKKARA DELUXE (10 PCS)' || p.name === 'GROUND CHAKKAR DELUXE') {
    p.name = 'GROUND CHAKKARA DELUXE (10 PCS)';
    p.originalPrice = 1000;
    p.discountPrice = 150;
    p.discountPercent = 85;
    p.desc = 'GROUND CHAKKARA DELUXE (10 PCS) - Direct from Sivakasi factory (1BOX) with flat 85% OFF.';
    console.log('Updated price for Ground Chakkar Deluxe -> Rs. 150 (Orig: 1000)');
  }
  if (p.name === 'BUTTERFLY WINGS FIGHTERS') {
    p.originalPrice = 733.33;
    p.discountPrice = 110;
    p.discountPercent = 85;
    p.desc = 'BUTTERFLY WINGS FIGHTERS - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.';
    console.log('Updated price for Butterfly wings fighters -> Rs. 110 (Orig: 733.33)');
  }
});

// 2. REMOVE PRODUCT:
// 3" Fancy Single
const initialCount = products.length;
products = products.filter(p => {
  if (p.name === '3" FANCY SINGLE (1 PCS)' || p.id === 132) {
    console.log('Removing product:', p.name, 'ID:', p.id);
    return false;
  }
  return true;
});
console.log(`Products after removal: ${products.length} (was ${initialCount})`);

// 3. ADD PRODUCT IN KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS
// Jet rider - 120
// Balle balle - 150
// Slashling stars - 113 
// Golden Drops - 101.25
// Once More - 202.5
// Orion Fountain - 150
// Bat&Ball - 225
// Pizza - 450
// Golden pops - 100 
// Glittering pops - 100 
// Red flare - 165 ,i-cone -180,
// Spinner Deluxe - 150,4x4 Wheel - 135

const kidsNoveltiesToAdd = [
  {
    name: 'JET RIDER',
    tamilName: 'ஜெட் ரைடர்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 800,
    discountPrice: 120,
    discountPercent: 85,
    image: '/images/JET RIDER.jpeg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'JET RIDER - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'BALLE BALLE',
    tamilName: 'பல்லே பல்லே',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1000,
    discountPrice: 150,
    discountPercent: 85,
    image: '/images/BALLE BALLE.jpeg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'BALLE BALLE - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'SLASHLING STARS',
    tamilName: 'ஸ்லாஷிங் ஸ்டார்ஸ்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 753.33,
    discountPrice: 113,
    discountPercent: 85,
    image: '/images/SLASHING STAR.jpeg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'SLASHLING STARS - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'GOLDEN DROPS',
    tamilName: 'கோல்டன் டிராப்ஸ்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 675,
    discountPrice: 101.25,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'GOLDEN DROPS - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'ONCE MORE',
    tamilName: 'ஒன்ஸ் மோர்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1350,
    discountPrice: 202.5,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'ONCE MORE - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'ORION FOUNTAIN',
    tamilName: 'ஓரியன் பவுண்டன்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1000,
    discountPrice: 150,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'ORION FOUNTAIN - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'BAT & BALL',
    tamilName: 'பேட் & பால்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1500,
    discountPrice: 225,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'BAT & BALL - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'PIZZA',
    tamilName: 'பீட்சா',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 3000,
    discountPrice: 450,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'PIZZA - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'GOLDEN POPS',
    tamilName: 'கோல்டன் பாப்ஸ்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 666.67,
    discountPrice: 100,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'GOLDEN POPS - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'GLITTERING POPS',
    tamilName: 'கிளிட்டரிங் பாப்ஸ்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 666.67,
    discountPrice: 100,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'GLITTERING POPS - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'RED FLARE',
    tamilName: 'ரெட் பிளேர்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1100,
    discountPrice: 165,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'RED FLARE - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'I-CONE',
    tamilName: 'ஐ-கோன்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1200,
    discountPrice: 180,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'I-CONE - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: 'SPINNER DELUXE',
    tamilName: 'ஸ்பின்னர் டீலக்ஸ்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1000,
    discountPrice: 150,
    discountPercent: 85,
    image: '/images/Spinner level.jpeg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'SPINNER DELUXE - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: '4X4 WHEEL (5 PCS)',
    tamilName: '4x4 சக்கரம்',
    category: 'kids-special-novelties-fountain-crackers',
    categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS',
    categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 900,
    discountPrice: 135,
    discountPercent: 85,
    image: '/images/44 WHEEL.jpeg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: '4X4 WHEEL (5 PCS) - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  }
];

// Remove existing duplicate placeholder 4*4 wheel or 777 if present to avoid confusion
products = products.filter(p => p.name !== '4 * 4 WHEEL (5 PCS)' && p.name !== '777 (5 PCS)');

// Find last index of kids novelties to insert them in proper category order
let lastKidsIndex = -1;
for (let i = 0; i < products.length; i++) {
  if (products[i].category === 'kids-special-novelties-fountain-crackers') {
    lastKidsIndex = i;
  }
}
if (lastKidsIndex !== -1) {
  products.splice(lastKidsIndex + 1, 0, ...kidsNoveltiesToAdd);
} else {
  products.push(...kidsNoveltiesToAdd);
}

// 4. ADD IT IN FANCY SPARKLERS CATEGORY
// 3” Fancy 3 Step - 225
// 3 1/2 Nayagara Falls (2PCS) - 600
const fancySparklersToAdd = [
  {
    name: '3" FANCY 3 STEP',
    tamilName: '3" பேன்சி 3 ஸ்டெப்',
    category: 'fancy-sparklers',
    categoryName: 'FANCY SPARKLERS',
    categoryDesc: 'FANCY SPARKLERS (85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 1500,
    discountPrice: 225,
    discountPercent: 85,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: '3" FANCY 3 STEP - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  },
  {
    name: '3 1/2" NAYAGARA FALLS (2 PCS)',
    tamilName: '3 1/2" நயாகரா பால்ஸ் (2 PCS)',
    category: 'fancy-sparklers',
    categoryName: 'FANCY SPARKLERS',
    categoryDesc: 'FANCY SPARKLERS (85% DISCOUNT)',
    pieces: '(1 BOX)',
    originalPrice: 4000,
    discountPrice: 600,
    discountPercent: 85,
    image: '/images/3 12 NAYAGRA FALLS 2 PCS.jpeg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: '3 1/2" NAYAGARA FALLS (2 PCS) - Direct from Sivakasi factory ((1 BOX)) with flat 85% OFF.'
  }
];

let lastFancySparklerIndex = -1;
for (let i = 0; i < products.length; i++) {
  if (products[i].category === 'fancy-sparklers') {
    lastFancySparklerIndex = i;
  }
}
if (lastFancySparklerIndex !== -1) {
  products.splice(lastFancySparklerIndex + 1, 0, ...fancySparklersToAdd);
} else {
  products.push(...fancySparklersToAdd);
}

// 5. ADD IT IN COLOUR MATCHES CATEGORY
// Deluxe Color Matches - 100
// Rider Matches - 200
// Twister Matches - 250
const colourMatchesToAdd = [
  {
    name: 'DELUXE COLOR MATCHES',
    tamilName: 'டீலக்ஸ் கலர் தீக்குச்சி',
    category: 'colour-matches',
    categoryName: 'COLOUR MATCHES',
    categoryDesc: 'COLOUR MATCHES (NET RATE)',
    pieces: '1Pkt',
    originalPrice: 100,
    discountPrice: 100,
    discountPercent: 0,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'DELUXE COLOR MATCHES - Direct from Sivakasi factory (1Pkt) with flat NET RATE.'
  },
  {
    name: 'RIDER MATCHES',
    tamilName: 'ரைடர் கலர் தீக்குச்சி',
    category: 'colour-matches',
    categoryName: 'COLOUR MATCHES',
    categoryDesc: 'COLOUR MATCHES (NET RATE)',
    pieces: '1Pkt',
    originalPrice: 200,
    discountPrice: 200,
    discountPercent: 0,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'RIDER MATCHES - Direct from Sivakasi factory (1Pkt) with flat NET RATE.'
  },
  {
    name: 'TWISTER MATCHES',
    tamilName: 'ட்விஸ்டர் தீக்குச்சி',
    category: 'colour-matches',
    categoryName: 'COLOUR MATCHES',
    categoryDesc: 'COLOUR MATCHES (NET RATE)',
    pieces: '1Pkt',
    originalPrice: 250,
    discountPrice: 250,
    discountPercent: 0,
    image: '/logo.webp',
    isLogo: true,
    rating: 4.9,
    soundLevel: 'Medium',
    desc: 'TWISTER MATCHES - Direct from Sivakasi factory (1Pkt) with flat NET RATE.'
  }
];

// Remove existing placeholder colour matches with 0 price
products = products.filter(p => !(p.category === 'colour-matches' && (p.name === 'RIDER COLOUR MATCHES' || p.discountPrice === 0)));

let lastColourMatchIndex = -1;
for (let i = 0; i < products.length; i++) {
  if (products[i].category === 'colour-matches') {
    lastColourMatchIndex = i;
  }
}
if (lastColourMatchIndex !== -1) {
  products.splice(lastColourMatchIndex + 1, 0, ...colourMatchesToAdd);
} else {
  // place before serpent-cracker or gift-boxes
  let insertIdx = products.findIndex(p => p.category === 'gift-boxes' || p.category === 'serpent-cracker');
  if (insertIdx !== -1) products.splice(insertIdx, 0, ...colourMatchesToAdd);
  else products.push(...colourMatchesToAdd);
}

// 6. ADD IN GIFTBOX CATEGORY (everything here is NET RATE)
// Gift Box 25 Item - 450
// Gift Box 30 Item - 550
// Gift Box 40 Item - 700
// Gift Box 50 Item - 800
// Gift Box 60 Item - 900
const giftBoxesToAdd = [
  {
    name: 'GIFT BOX 25 ITEM',
    tamilName: 'கிஃப்ட் பாக்ஸ் (25 பொருட்கள்)',
    category: 'gift-boxes',
    categoryName: 'GIFT BOXES',
    categoryDesc: 'GIFT BOXES (NET RATE)',
    pieces: '(1 BOX)',
    originalPrice: 450,
    discountPrice: 450,
    discountPercent: 0,
    image: '/images/gift-box.jpg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    badge: '25 Items Combo',
    desc: 'GIFT BOX 25 ITEM - Assorted festive hamper with sparklers, flowerpots, ground wheels, and sound crackers.'
  },
  {
    name: 'GIFT BOX 30 ITEM',
    tamilName: 'கிஃப்ட் பாக்ஸ் (30 பொருட்கள்)',
    category: 'gift-boxes',
    categoryName: 'GIFT BOXES',
    categoryDesc: 'GIFT BOXES (NET RATE)',
    pieces: '(1 BOX)',
    originalPrice: 550,
    discountPrice: 550,
    discountPercent: 0,
    image: '/images/gift-box.jpg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    badge: '30 Items Family Pack',
    desc: 'GIFT BOX 30 ITEM - Complete family celebration box packed with colorful fountains, sparklers, and crackers.'
  },
  {
    name: 'GIFT BOX 40 ITEM',
    tamilName: 'கிஃப்ட் பாக்ஸ் (40 பொருட்கள்)',
    category: 'gift-boxes',
    categoryName: 'GIFT BOXES',
    categoryDesc: 'GIFT BOXES (NET RATE)',
    pieces: '(1 BOX)',
    originalPrice: 700,
    discountPrice: 700,
    discountPercent: 0,
    image: '/images/gift-box.jpg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    badge: '40 Items Deluxe',
    desc: 'GIFT BOX 40 ITEM - Deluxe festival hamper loaded with premium sparklers, pots, novelty fountains, and aerial shots.'
  },
  {
    name: 'GIFT BOX 50 ITEM',
    tamilName: 'கிஃப்ட் பாக்ஸ் (50 பொருட்கள்)',
    category: 'gift-boxes',
    categoryName: 'GIFT BOXES',
    categoryDesc: 'GIFT BOXES (NET RATE)',
    pieces: '(1 BOX)',
    originalPrice: 800,
    discountPrice: 800,
    discountPercent: 0,
    image: '/images/gift-box.jpg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    badge: '50 Items Super Special',
    desc: 'GIFT BOX 50 ITEM - Super deluxe 50-item grand festival hamper with complete variety for endless joy.'
  },
  {
    name: 'GIFT BOX 60 ITEM',
    tamilName: 'கிஃப்ட் பாக்ஸ் (60 பொருட்கள்)',
    category: 'gift-boxes',
    categoryName: 'GIFT BOXES',
    categoryDesc: 'GIFT BOXES (NET RATE)',
    pieces: '(1 BOX)',
    originalPrice: 900,
    discountPrice: 900,
    discountPercent: 0,
    image: '/images/gift-box.jpg',
    isLogo: false,
    rating: 4.9,
    soundLevel: 'Medium',
    badge: '60 Items Mega Combo',
    desc: 'GIFT BOX 60 ITEM - Mega royal 60-item combo gift pack with maximum variety of night aerials, sparklers, pots, and chakkars.'
  }
];

// Remove old placeholder gift-boxes items with 0 price
products = products.filter(p => p.category !== 'gift-boxes');
products.push(...giftBoxesToAdd);

// Re-index all product IDs sequentially 1..N
products.forEach((p, idx) => {
  p.id = idx + 1;
});

// Update category item counts and overall product total
categories.forEach(cat => {
  if (cat.id === 'all') {
    cat.name = `All Products (${products.length} Items)`;
  } else {
    const count = products.filter(p => p.category === cat.id).length;
    cat.itemCount = count;
  }
});

console.log('Final product count:', products.length);

// Generate final products.js code
const finalCode = `// Exact Price List Catalog from MUTHUMARI CRACKERS Official Price List Document
export const COMPANY_INFO = {
  name: "Muthumari Agencies",
  brandName: "MuthuMari Crackers",
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
  packingCharges: 0, // No packing charges - 100% Free
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
    text: "Ordered our company and family Diwali crackers from MuthuMari Crackers. The 85% factory discount saved us ₹22,000 and the packing arrived safely via parcel with zero damage. 10/10 quality!",
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

fs.writeFileSync('src/data/products.js', finalCode, 'utf8');
console.log('Successfully updated src/data/products.js!');
