const fs = require('fs');
const path = require('path');

const srcDir = 'D:/muthumari fireworks/update product/PHOTO02';
const destDir = 'public/images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Copy files from srcDir to destDir
const files = fs.readdirSync(srcDir);
console.log(`Copying ${files.length} images from ${srcDir} to ${destDir}...`);

files.forEach(file => {
  const srcFilePath = path.join(srcDir, file);
  const destFilePath = path.join(destDir, file);
  fs.copyFileSync(srcFilePath, destFilePath);
});
console.log('All files copied successfully!');

// 2. Read products.js
const content = fs.readFileSync('src/data/products.js', 'utf8');
const catMatch = content.match(/export const CATEGORIES = (\[[\s\S]*?\]);\s*export const PRODUCTS/);
const prodMatch = content.match(/export const PRODUCTS = (\[[\s\S]*?\]);\s*export const SAFETY_TIPS/);

let categories = eval(catMatch[1]);
let products = eval(prodMatch[1]);

// 3. Update products with their corresponding image
const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');

files.forEach(file => {
  const baseName = path.parse(file).name;
  const normBase = normalize(baseName);
  
  let match = products.find(p => normalize(p.name) === normBase);
  
  if (!match) {
    match = products.find(p => {
      const normP = normalize(p.name);
      return normP === normBase || normP.startsWith(normBase) || normBase.startsWith(normP);
    });
  }

  if (!match) {
    if (baseName === '6GANAPATHI (5 PCS)') {
      match = products.find(p => p.name.includes('GANAPATHI'));
    } else if (baseName === '100') {
      match = products.find(p => p.category === 'garland-crackers' && p.name === '100');
    } else if (baseName === '200') {
      match = products.find(p => p.category === 'garland-crackers' && p.name === '200');
    } else if (baseName === '1K') {
      match = products.find(p => p.category === 'garland-crackers' && p.name === '1K');
    } else if (baseName === '2 K') {
      match = products.find(p => p.category === 'garland-crackers' && p.name === '2 K');
    } else if (baseName === '5K') {
      match = products.find(p => p.category === 'garland-crackers' && p.name === '5K');
    } else if (baseName === '10K') {
      match = products.find(p => p.category === 'garland-crackers' && p.name === '10K');
    } else if (baseName === '1K SPECIAL') {
      match = products.find(p => p.category === 'garland-crackers' && p.name.includes('1K SPECIAL'));
    } else if (baseName === '2 K SPECIAL') {
      match = products.find(p => p.category === 'garland-crackers' && p.name.includes('2 K SPECIAL'));
    } else if (baseName === '5 K SPECIAL') {
      match = products.find(p => p.category === 'garland-crackers' && p.name.includes('5 K SPECIAL'));
    } else if (baseName === '10 KSPECIAL') {
      match = products.find(p => p.category === 'garland-crackers' && (p.name.includes('10 KSPECIAL') || p.name.includes('10K SPECIAL') || p.name.includes('10 K SPECIAL')));
    }
  }

  if (match) {
    match.image = `/images/${file}`;
    match.isLogo = false;
    console.log(`Updated Product ID ${match.id} (${match.name}) -> image: /images/${file}`);
  } else {
    console.warn(`Could not match file: ${file}`);
  }
});

// Re-generate products.js
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
console.log('Successfully updated src/data/products.js with new product images!');
