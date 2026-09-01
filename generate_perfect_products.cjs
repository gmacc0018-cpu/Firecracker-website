const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('raw_muthumari_data.json', 'utf8'));
const availableImages = fs.readdirSync('public/images');

// Map available image files to best matching keys
function findImageForProduct(name, code, categoryName) {
  const normName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Specific known mappings
  if (code === 1) return '/images/3½ LAKSHMI.jpeg';
  if (code === 2) return '/images/4 inch LAKSHMI.jpeg';
  if (code === 3) return '/images/4 inch GOLD LAKSHMI.jpeg';
  if (code === 4) return '/images/5 inch JALLIKATTU.jpeg';
  if (code === 5) return '/images/6 inch KUMKI.jpeg';
  if (code === 8) return '/images/2¾ KURUVI.jpeg';
  if (code === 9) return '/images/TWOSOUNDCRACKERS.jpeg';
  
  if (code === 30) return '/images/FLOWERPOTBIG.jpeg';
  if (code === 31) return '/images/FLOWERPOTSPECIAL.jpeg';
  if (code === 32) return '/images/GROUNDCHAKKARAASHOKA 1.jpeg'; // or flower pot
  if (code === 33) return '/images/COLORKOTI.jpeg';
  if (code === 35) return '/images/COLORKOTIDELUXE.jpeg';
  if (code === 36) return '/images/FlowerPot Super Deluxe (Jumbo).jpeg';

  if (code === 37) return "/images/GROUNDCHAKKARABIG10'S 1.jpeg";
  if (code === 38) return '/images/GROUNDCHAKKARAASHOKA 1.jpeg';
  if (code === 39) return '/images/GROUND CHAKKARA SPECIAL 1.jpeg';
  if (code === 40) return '/images/GROUND CHAKKARA DELUXE 10.jpeg';
  if (code === 41) return '/images/Spinner level.jpeg';

  if (code === 42) return '/images/HYDRO BOMB.jpeg';
  if (code === 43) return '/images/KING OF KING GREEN 1.jpeg';
  if (code === 44) return '/images/CLASSIC BOMB GREEN 1.jpeg';
  if (code === 45) return '/images/DIGITAL BOMB 12PLY 1.jpeg';
  if (code === 46) return '/images/KingRider.jpeg';

  if (code === 47) return '/images/1½ TWINKLING STAR (2).jpeg';
  if (code === 48) return '/images/4 TWINKLING STAR.jpeg';

  if (code === 50) return '/images/COLOUR ROCKET.jpeg';
  if (code === 54) return '/images/WHISTLING ROCKET (10PCS).jpeg';

  if (code === 55) return '/images/Water melonstar 1 BOX.jpeg';
  if (code === 56) return '/images/KULFI.jpeg';
  if (code === 57) return '/images/LAVA Shower 3in13inch.jpeg';
  if (code === 58) return '/images/Magic Sound 1BOX.jpeg';
  if (code === 60) return '/images/CylinderBomb.jpeg';
  if (code === 61) return '/images/Sky Colour 5Pcs (2).jpeg';
  if (code === 62) return '/images/Maxy Pencil.jpeg';
  if (code === 63) return '/images/CUTE 5 COLOUR FOUNTAIN 3 inch 5.jpeg';
  if (code === 64) return '/images/TRICOLOUR FOUNTAIN 4 INCH.jpeg';
  if (code === 67) return '/images/SIREN CANDEL.jpeg';
  if (code === 69) return '/images/1000 WATTS.jpeg';
  if (code === 73) return '/images/Whistling Wheel.jpeg';
  if (code === 74) return '/images/TRI COLOUR FLASH.jpeg';
  if (code === 75) return '/images/Tin Shower 8 INCH.jpeg';
  if (code === 76) return '/images/KungFuShower 5PCS 4 INCH 5BOX.jpeg';
  if (code === 77) return '/images/ROBOAT kids Shower 2¼ 5 IN1 5 BOX.jpeg';
  if (code === 78) return '/images/Party Night.jpeg';
  if (code === 79) return '/images/WATER QUEEN TIN 6 INCH.jpeg';
  if (code === 82) return '/images/TOP GUN.jpeg';
  if (code === 83) return '/images/SELFI STICK.jpeg';
  if (code === 86) return '/images/LOLLIPOP STICK 5PCS.jpeg';
  if (code === 87) return '/images/7 ShotMulti COLOUR.jpeg';
  if (code === 90) return '/images/PEACOCK SMALL 1 BOX.jpeg';
  if (code === 91) return '/images/PEACOCK BIG 1BOX.jpeg';
  if (code === 92) return '/images/PEACOCK BADA 1 BOX.jpeg';
  if (code === 93) return '/images/WIRE CHAKKAR (2).jpeg';
  if (code === 95) return '/images/MAGIC SHOW.jpeg';

  if (code === 108) return '/images/10CM ELECTRIC SPARKLERS.jpeg';
  if (code === 109) return '/images/10CM COLOR SPARKLERS.jpeg';
  if (code === 110) return '/images/10CM GREEN SPARKLERS.jpeg';
  if (code === 111) return '/images/10CM RED SPARKLERS.jpeg';
  if (code === 112) return '/images/1 2 CM ELECTRIC SPARKLERS.jpeg';
  if (code === 113) return '/images/12 CM COLOR SPARKLERS.jpeg';
  if (code === 114) return '/images/12 CM GREEN SPARKLERS.jpeg';
  if (code === 115) return '/images/12 CM RED SPARKLERS.jpeg';
  if (code === 116) return '/images/15 CM ELECTRIC SPARKLERS.jpeg';
  if (code === 117) return '/images/15 CM COLOR SPARKLERS.jpeg';
  if (code === 120) return '/images/30 CM ELECTRIC SPARKLERS 5.jpeg';
  if (code === 125) return '/images/50 CM COLOR SPARKLERS  (5PCS).jpeg';

  if (code === 153 || code === 157) return '/images/30 SHOT MULTICOLOR (STARVELL) 1BOX.jpeg';
  if (code === 164) return '/images/gujarat_festival_150_shots.jpg';
  if (code === 171 || code === 172) return '/images/gift_box_combo_1787842665035.jpg';

  // Category based fallback images
  const cat = categoryName.toLowerCase();
  if (cat.includes('sparkler')) return '/images/sparklers.jpg';
  if (cat.includes('flower pot')) return '/images/flower-pots.jpg';
  if (cat.includes('chakkar')) return '/images/chakkars.jpg';
  if (cat.includes('multi-shot') || cat.includes('night arrival') || cat.includes('day shot')) return '/images/sky-shots.jpg';
  if (cat.includes('sound') || cat.includes('bomb') || cat.includes('bullet') || cat.includes('garland') || cat.includes('bijili')) return '/images/lakshmi_crackers.jpg';
  if (cat.includes('gift')) return '/images/gift-box.jpg';

  return '/images/hero.jpg';
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

// Generate Category list maintaining exact PDF sequence
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

categoryMap.forEach((val, key) => {
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
  const image = findImageForProduct(item.name, item.code, item.categoryName);
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
    rating: 4.9,
    soundLevel: item.categoryName.includes('SOUND') || item.categoryName.includes('BOMB') || item.categoryName.includes('GARLAND') ? 'High' : 'Medium',
    desc: `${item.name} - Direct from Sivakasi factory (${item.packing}) with flat ${item.discount > 0 ? item.discount + '% OFF' : 'NET RATE'}.`
  };
});

const output = { categories, products };
fs.writeFileSync('scratch_perfect_products.json', JSON.stringify(output, null, 2));
console.log('Categories generated:', categories.length);
console.log('Products generated:', products.length);
