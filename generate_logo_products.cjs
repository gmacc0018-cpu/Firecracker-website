const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('raw_muthumari_data.json', 'utf8'));

// Exact map of products for which real uploaded images exist in public/images
const uploadedImageMap = {
  1: '/images/3½ LAKSHMI.jpeg',
  2: '/images/4 inch LAKSHMI.jpeg',
  3: '/images/4 inch GOLD LAKSHMI.jpeg',
  4: '/images/5 inch JALLIKATTU.jpeg',
  5: '/images/6 inch KUMKI.jpeg',
  8: '/images/2¾ KURUVI.jpeg',
  9: '/images/TWOSOUNDCRACKERS.jpeg',

  30: '/images/FLOWERPOTBIG.jpeg',
  31: '/images/FLOWERPOTSPECIAL.jpeg',
  33: '/images/COLORKOTI.jpeg',
  35: '/images/COLORKOTIDELUXE.jpeg',
  36: '/images/FlowerPot Super Deluxe (Jumbo).jpeg',

  37: "/images/GROUNDCHAKKARABIG10'S 1.jpeg",
  38: '/images/GROUNDCHAKKARAASHOKA 1.jpeg',
  39: '/images/GROUND CHAKKARA SPECIAL 1.jpeg',
  40: '/images/GROUND CHAKKARA DELUXE 10.jpeg',
  41: '/images/Spinner level.jpeg',

  42: '/images/HYDRO BOMB.jpeg',
  43: '/images/KING OF KING GREEN 1.jpeg',
  44: '/images/CLASSIC BOMB GREEN 1.jpeg',
  45: '/images/DIGITAL BOMB 12PLY 1.jpeg',
  46: '/images/KingRider.jpeg',

  47: '/images/1½ TWINKLING STAR (2).jpeg',
  48: '/images/4 TWINKLING STAR.jpeg',

  50: '/images/COLOUR ROCKET.jpeg',
  54: '/images/WHISTLING ROCKET (10PCS).jpeg',

  55: '/images/Water melonstar 1 BOX.jpeg',
  56: '/images/KULFI.jpeg',
  57: '/images/LAVA Shower 3in13inch.jpeg',
  58: '/images/Magic Sound 1BOX.jpeg',
  60: '/images/CylinderBomb.jpeg',
  61: '/images/Sky Colour 5Pcs (2).jpeg',
  62: '/images/Maxy Pencil.jpeg',
  63: '/images/CUTE 5 COLOUR FOUNTAIN 3 inch 5.jpeg',
  64: '/images/TRICOLOUR FOUNTAIN 4 INCH.jpeg',
  67: '/images/SIREN CANDEL.jpeg',
  69: '/images/1000 WATTS.jpeg',
  73: '/images/Whistling Wheel.jpeg',
  74: '/images/TRI COLOUR FLASH.jpeg',
  75: '/images/Tin Shower 8 INCH.jpeg',
  76: '/images/KungFuShower 5PCS 4 INCH 5BOX.jpeg',
  77: '/images/ROBOAT kids Shower 2¼ 5 IN1 5 BOX.jpeg',
  78: '/images/Party Night.jpeg',
  79: '/images/WATER QUEEN TIN 6 INCH.jpeg',
  82: '/images/TOP GUN.jpeg',
  83: '/images/SELFI STICK.jpeg',
  86: '/images/LOLLIPOP STICK 5PCS.jpeg',
  87: '/images/7 ShotMulti COLOUR.jpeg',
  90: '/images/PEACOCK SMALL 1 BOX.jpeg',
  91: '/images/PEACOCK BIG 1BOX.jpeg',
  92: '/images/PEACOCK BADA 1 BOX.jpeg',
  93: '/images/WIRE CHAKKAR (2).jpeg',
  95: '/images/MAGIC SHOW.jpeg',

  108: '/images/10CM ELECTRIC SPARKLERS.jpeg',
  109: '/images/10CM COLOR SPARKLERS.jpeg',
  110: '/images/10CM GREEN SPARKLERS.jpeg',
  111: '/images/10CM RED SPARKLERS.jpeg',
  112: '/images/1 2 CM ELECTRIC SPARKLERS.jpeg',
  113: '/images/12 CM COLOR SPARKLERS.jpeg',
  114: '/images/12 CM GREEN SPARKLERS.jpeg',
  115: '/images/12 CM RED SPARKLERS.jpeg',
  116: '/images/15 CM ELECTRIC SPARKLERS.jpeg',
  117: '/images/15 CM COLOR SPARKLERS.jpeg',
  120: '/images/30 CM ELECTRIC SPARKLERS 5.jpeg',
  125: '/images/50 CM COLOR SPARKLERS  (5PCS).jpeg',

  153: '/images/30 SHOT MULTICOLOR (STARVELL) 1BOX.jpeg',
  157: '/images/30 SHOT MULTICOLOR (STARVELL) 1BOX.jpeg',
  164: '/images/gujarat_festival_150_shots.jpg'
};

function getProductImage(code) {
  if (uploadedImageMap[code]) {
    return {
      image: uploadedImageMap[code],
      isLogo: false
    };
  }
  return {
    image: '/logo.webp',
    isLogo: true
  };
}

function getTamilName(name) {
  const n = name.toUpperCase();
  if (n.includes('LAKSHMI')) return 'லட்சுமி வெடி';
  if (n.includes('JALLIKATTU')) return 'ஜல்லிக்கட்டு வெடி';
  if (n.includes('KUMKI')) return 'கும்கி வெடி';
  if (n.includes('GANAPATHI')) return 'கணபதி வெடி';
  if (n.includes('LION')) return 'லயன் வெடி';
  if (n.includes('KURUVI')) return 'குருவி வெடி';
  if (n.includes('TWO SOUND')) return 'டூ சவுண்ட் வெடி';
  if (n.includes('PAPER')) return 'பேப்பர் பாம்ப்';
  if (n.includes('MEGA')) return 'மெகா புல்லட்';
  if (n.includes('GARLAND') || /^\d+K?(\s*SPECIAL)?$/.test(n)) return 'சரவெடி / வாலா';
  if (n.includes('BIJILLI') || n.includes('BUILLI')) return 'பிஜிலி வெடி';
  if (n.includes('FLOWER POT')) return 'பூந்தொட்டி';
  if (n.includes('COLOR KOTI')) return 'கலர் கோட்டி';
  if (n.includes('CHAKKAR')) return 'தரைச்சக்கரம்';
  if (n.includes('BOMB')) return 'ஆட்டம் பாம்';
  if (n.includes('TWINKLING STAR')) return 'ட்விங்க்ளிங் ஸ்டார்';
  if (n.includes('ROCKET')) return 'ராக்கெட்';
  if (n.includes('SPARKLER')) return 'மத்தாப்பு';
  if (n.includes('FANCY') || n.includes('SETOUT') || n.includes('SHOT')) return 'ஸ்கை ஷாட்ஸ் / ஃபேன்சி வெடி';
  if (n.includes('GIFT BOX')) return 'கிஃப்ட் பாக்ஸ்';
  return 'சிவகாசி பட்டாசு';
}

const categoryMap = new Map();
rawData.forEach(item => {
  if (!categoryMap.has(item.categoryName)) {
    const slug = item.categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    categoryMap.set(item.categoryName, {
      id: slug,
      name: item.categoryName,
      title: item.categoryName,
      desc: item.categoryDesc,
      discount: item.discount,
      items: []
    });
  }
  categoryMap.get(item.categoryName).items.push(item);
});

const categories = [
  {
    id: "all",
    name: "All Products (172 Items)",
    icon: "Sparkles",
    desc: "Complete official price list in exact order"
  }
];

categoryMap.forEach((val) => {
  categories.push({
    id: val.id,
    name: val.name,
    icon: "Sparkles",
    desc: val.desc,
    itemCount: val.items.length
  });
});

const products = rawData.map(item => {
  const catObj = categoryMap.get(item.categoryName);
  const { image, isLogo } = getProductImage(item.code);
  const tamilName = getTamilName(item.name);
  
  return {
    id: item.code,
    name: item.name,
    tamilName: tamilName,
    category: catObj.id,
    categoryName: item.categoryName,
    categoryDesc: item.categoryDesc,
    pieces: item.packing,
    originalPrice: item.originalPrice,
    discountPrice: item.discountPrice,
    discountPercent: item.discount,
    image: image,
    isLogo: isLogo,
    rating: 4.9,
    soundLevel: item.categoryName.includes('SOUND') || item.categoryName.includes('BOMB') || item.categoryName.includes('GARLAND') ? 'High' : 'Medium',
    desc: `${item.name} - Direct from Sivakasi factory (${item.packing}) with flat ${item.discount > 0 ? item.discount + '% OFF' : 'NET RATE'}.`
  };
});

const output = { categories, products };
fs.writeFileSync('scratch_perfect_products.json', JSON.stringify(output, null, 2));

const code = `// Exact Price List Catalog from MUTHUMARI CRACKERS Official Price List Document
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

fs.writeFileSync('src/data/products.js', code);
console.log('src/data/products.js generated with /logo.webp fallback for unuploaded products.');
