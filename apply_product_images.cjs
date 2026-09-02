const fs = require('fs');

const productsFilePath = 'src/data/products.js';
let content = fs.readFileSync(productsFilePath, 'utf8');

const match = content.match(/export const PRODUCTS = (\[[\s\S]*?\]);\r?\n\r?\nexport const SAFETY_TIPS/);
if (!match) {
  console.error('Could not match PRODUCTS array');
  process.exit(1);
}

const products = eval(match[1]);
console.log('Original products loaded:', products.length);

const imageMapById = {
  7: '/images/6”LION (5 PCS).jpeg', // 6"LION (5 PCS)
  11: '/images/PAPER SOUND BOMB ¼KG.jpeg', // PAPER SOUND BOMB ¼KG
  12: '/images/PAPER SOUND BOMB 12KG.jpeg', // PAPER SOUND BOMB 1/2KG
  28: '/images/RED BIJILI.jpeg', // RED BIJILLI
  29: '/images/STRIPPED BIJILI.jpeg', // STRIPPED BUILLI
  34: '/images/COLOR KOTI XL (10 PCS).jpeg', // COLOR KOTI XL (10 PCS)
  36: '/images/FlowerPotSuperDeluxe (Jumbo).jpeg', // FLOWER POTS SUPER DELUXE (JUMBO)
  49: '/images/ROCKET BOMB.jpeg', // ROCKET BOMB (10 PCS)
  52: '/images/TWO SOUND ROCKET (10 PCS).jpeg', // TWO SOUND ROCKET (10 PCS)
  59: '/images/VELUM MAYILUM.jpeg', // VELUM MAYILUM (1 PCS)
  72: '/images/BAMBARAM.jpeg', // BAMBARAM (10 PCS)
  81: '/images/HELICOPTER.jpeg', // HELICOPTER (5 PCS)
  85: '/images/44 WHEEL.jpeg', // 4 * 4 WHEEL (5 PCS)
  88: '/images/SMOKE.jpeg', // COLOUR SMOKE (3 PCS)
  102: '/images/BALLE BALLE.jpeg', // 777 (5 PCS) / BALLE BALLE
  118: '/images/15CM GREEN SPARKLING.jpeg', // 15 CM GREEN SPARKLERS (10 PCS)
  119: '/images/15CM RED SPARKLING.jpeg', // 15 CM RED SPARKLERS (10 PCS)
  121: '/images/30CM COLOR SPARKLING.jpeg', // 30 CM COLOUR SPARKLERS (5 PCS)
  122: '/images/30CM GREEN SPARKLING.jpeg', // 30 CM GREEN SPARKLERS (5 PCS)
  123: '/images/30CM RED SPARKLING.jpeg', // 30 CM RED SPARKLERS (5 PCS)
  124: '/images/50 CM ELECTRIC SPARKLERS (5 PCS ).jpeg', // 50 CM ELECTRIC SPARKLERS (5 PCS)
  127: '/images/SLASHING STAR.jpeg', // CELEBRATION 4 IN 1 SPARKLING (5 PCS)
  129: '/images/1 inch CHOTTA FANCY.jpeg', // 1 inch CHOTTA FANCY
  130: '/images/2 inch FANCY.jpeg', // 2 inch FANCY
  131: '/images/2 ¼  FANCY (3 PCS).jpeg', // 2 1/4 FANCY (3 PCS)
  132: '/images/3½ FANCY SINGLE (1 PCS).jpeg', // 3" FANCY SINGLE (1 PCS)
  133: '/images/3 12 NAYAGRA FALLS 2 PCS.jpeg', // 3 NAYAGARA FALLS (1 PCS)
  134: '/images/3½ FANCY SINGLE (1 PCS).jpeg', // 3 1/2" FANCY SINGLE (1 PCS)
  135: '/images/3 12 Sizzling.jpeg', // 3½ SIZZLING SINGLE (1 PCS)
  136: '/images/3 12 inch FANCY (2PCS).jpeg', // 3 1/2 inch FANCY (2PCS)
  137: '/images/3 12 inch FANCY (2PCS).jpeg', // 31/2 "FANCY DOUBLE BALL (2PCS)
  138: '/images/4 INCH FANCY SINGLE.jpeg', // 4" FANCY 7STEP (1 PCS)
  139: '/images/4 INCH FANCY SINGLE.jpeg', // 4 " FANCY SINGLE
  140: '/images/3 12 NAYAGRA FALLS 2 PCS.jpeg', // 4 inch NAYAGARA FALLS
  141: '/images/4 inch FANCY (2PCS).jpeg', // 4 inch FANCY (2PCS)
  142: '/images/4 inch FANCY (2PCS).jpeg', // 4 inch FANCY DOUBLE BALL
  143: '/images/5 inchFANCY (2 PCS).jpeg', // 5 inchFANCY (2 PCS)
  144: '/images/5 inchFANCY (2 PCS).jpeg', // 5 inch SINGLE
  145: '/images/6 inch (2 PCS).jpeg', // 6 inch SINGLE
  146: '/images/6 inch (2 PCS).jpeg', // 6 inch (2 PCS)
  148: '/images/12 SHOT CRACKLING.jpeg', // 12 SHOT CRACKLING
  149: '/images/12 SHOT.jpeg', // 12 SHOT MULTICOLOUR
  150: '/images/12 SHOT.jpeg', // 12 SHOT WHISTLING
  151: '/images/25 shot whizzling.jpeg', // 25 SHOT WHISTLING
  154: '/images/60 SHOT MULTICOLOR.jpeg', // 60 SHOT MUTICOLOUR
  155: '/images/120 SHOT MULTICOLOR.jpeg', // 120 SHOT MULTICOLOR
  156: '/images/240 SHOT MULTICOLOR SPL.jpeg', // 240 SHOT MULTICOLOR
  158: '/images/60 SHOT MULTICOLOR.jpeg', // 60 SHOT MULTICOLOR SPL
  159: '/images/120 SHOT MULTICOLOR.jpeg', // 120 SHOT MULTICOLOR SPL
  160: '/images/240 SHOT MULTICOLOR SPL.jpeg', // 240 SHOT MULTICOLOR SPL
  165: '/images/GANG BANGERS.jpeg', // GANG BANGERS 32 SHOT
  166: '/images/1010.jpeg', // 10X10
  168: '/images/JET RIDER.jpeg', // RIDER COLOUR MATCHES
};

let updatedCount = 0;
products.forEach(p => {
  if (imageMapById[p.id]) {
    p.image = imageMapById[p.id];
    p.isLogo = false;
    updatedCount++;
  }
});

console.log('Updated', updatedCount, 'products with new specific images');

// Category intelligent fallbacks for remaining products without custom photo so everything looks great
products.forEach(p => {
  if (p.image === '/logo.webp' || p.isLogo) {
    p.isLogo = false;
    if (p.category === 'one-sound-crackers' || p.category === 'mega-bullet-crackers') {
      p.image = '/images/lakshmi_crackers.jpg';
    } else if (p.category === 'garland-crackers') {
      p.image = '/images/diwali_fireworks_hero_1787842643127.jpg';
    } else if (p.category === 'flower-pots') {
      p.image = '/images/flower_pots_fireworks_1787842753629.jpg';
    } else if (p.category === 'chakkar-crackers') {
      p.image = '/images/ground_chakkars_firework_1787842775152.jpg';
    } else if (p.category === 'atom-bomb-crackers') {
      p.image = '/images/HYDRO BOMB.jpeg';
    } else if (p.category === 'twinkling-star') {
      p.image = '/images/4 TWINKLING STAR.jpeg';
    } else if (p.category === 'rocket-crackers') {
      p.image = '/images/COLOUR ROCKET.jpeg';
    } else if (p.category === 'sparklers' || p.category === 'fancy-sparklers') {
      p.image = '/images/sparkler_celebration_1787842685632.jpg';
    } else if (p.category === 'multi-shots' || p.category === 'night-arrival-attractions' || p.category === 'day-shots' || p.category === 'festival-mega-multi-shots') {
      p.image = '/images/sky_shots_aerial_1787842799367.jpg';
    } else if (p.category === 'gift-boxes') {
      p.image = '/images/gift_box_combo_1787842665035.jpg';
    } else if (p.category === 'kids-special-novelties-fountain-crackers') {
      p.image = '/images/Magic Sound 1BOX.jpeg';
    } else {
      p.image = '/images/hero.jpg';
    }
  }
});

// Serialize back
const newProductsJson = JSON.stringify(products, null, 2);
const updatedContent = content.replace(
  /export const PRODUCTS = \[[\s\S]*?\];\r?\n\r?\nexport const SAFETY_TIPS/,
  'export const PRODUCTS = ' + newProductsJson + ';\n\nexport const SAFETY_TIPS'
);

fs.writeFileSync(productsFilePath, updatedContent, 'utf8');
console.log('Successfully updated src/data/products.js');
