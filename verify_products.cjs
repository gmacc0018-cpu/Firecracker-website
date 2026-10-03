const fs = require('fs');
const content = fs.readFileSync('src/data/products.js', 'utf8');

const prodMatch = content.match(/export const PRODUCTS = (\[[\s\S]*?\]);\s*export const SAFETY_TIPS/);
const catMatch = content.match(/export const CATEGORIES = (\[[\s\S]*?\]);\s*export const PRODUCTS/);

const PRODUCTS = eval(prodMatch[1]);
const CATEGORIES = eval(catMatch[1]);

console.log('=== PRODUCT VERIFICATION REPORT ===');
console.log('Total Categories:', CATEGORIES.length);
console.log('Total Products:', PRODUCTS.length);

// Check price changes
const chakkarDeluxe = PRODUCTS.find(p => p.name.includes('GROUND CHAKKARA DELUXE'));
console.log('Ground Chakkar Deluxe:', chakkarDeluxe ? { name: chakkarDeluxe.name, originalPrice: chakkarDeluxe.originalPrice, discountPrice: chakkarDeluxe.discountPrice } : 'NOT FOUND');

const butterfly = PRODUCTS.find(p => p.name === 'BUTTERFLY WINGS FIGHTERS');
console.log('Butterfly Wings Fighters:', butterfly ? { name: butterfly.name, originalPrice: butterfly.originalPrice, discountPrice: butterfly.discountPrice } : 'NOT FOUND');

// Check removed
const removed = PRODUCTS.find(p => p.name === '3" FANCY SINGLE (1 PCS)');
console.log('3" Fancy Single (1 PCS) present?:', !!removed);

// Check Kids Novelties
const kidsItems = [
  'JET RIDER', 'BALLE BALLE', 'SLASHLING STARS', 'GOLDEN DROPS', 'ONCE MORE',
  'ORION FOUNTAIN', 'BAT & BALL', 'PIZZA', 'GOLDEN POPS', 'GLITTERING POPS',
  'RED FLARE', 'I-CONE', 'SPINNER DELUXE', '4X4 WHEEL (5 PCS)'
];
console.log('\n--- Kids Novelties Items ---');
kidsItems.forEach(k => {
  const item = PRODUCTS.find(p => p.name === k);
  console.log(k, '->', item ? `Found (Selling Price: Rs. ${item.discountPrice}, Orig: Rs. ${item.originalPrice})` : 'MISSING');
});

// Check Fancy Sparklers
console.log('\n--- Fancy Sparklers ---');
['3" FANCY 3 STEP', '3 1/2" NAYAGARA FALLS (2 PCS)'].forEach(k => {
  const item = PRODUCTS.find(p => p.name === k);
  console.log(k, '->', item ? `Found (Selling Price: Rs. ${item.discountPrice}, Orig: Rs. ${item.originalPrice})` : 'MISSING');
});

// Check Colour Matches
console.log('\n--- Colour Matches ---');
['DELUXE COLOR MATCHES', 'RIDER MATCHES', 'TWISTER MATCHES'].forEach(k => {
  const item = PRODUCTS.find(p => p.name === k);
  console.log(k, '->', item ? `Found (Selling Price: Rs. ${item.discountPrice}, Net Rate)` : 'MISSING');
});

// Check Gift Boxes
console.log('\n--- Gift Boxes ---');
['GIFT BOX 25 ITEM', 'GIFT BOX 30 ITEM', 'GIFT BOX 40 ITEM', 'GIFT BOX 50 ITEM', 'GIFT BOX 60 ITEM'].forEach(k => {
  const item = PRODUCTS.find(p => p.name === k);
  console.log(k, '->', item ? `Found (Selling Price: Rs. ${item.discountPrice}, Net Rate)` : 'MISSING');
});
