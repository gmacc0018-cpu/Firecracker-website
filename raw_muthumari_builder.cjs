const fs = require('fs');

const rawData = [
  // ONE SOUND CRACKERS ( 85% DISCOUNT)
  { code: 1, name: '3½ LAKSHMI (5 PCS)', packing: '1Pkt', originalPrice: 80, discountPrice: 12, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 2, name: '4"LAKSHMI (5 PCS)', packing: '1Pkt', originalPrice: 100, discountPrice: 15, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 3, name: '4" GOLD LAKSHMI (5 PCS)', packing: '1Pkt', originalPrice: 180, discountPrice: 27, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 4, name: '5" JALLIKATTU (5 PCS)', packing: '1Pkt', originalPrice: 260, discountPrice: 39, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 5, name: '6" KUMKI (5 PCS)', packing: '1Pkt', originalPrice: 490, discountPrice: 73.5, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 6, name: '6"GANAPATHI (5 PCS)', packing: '1Pkt', originalPrice: 580, discountPrice: 87, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 7, name: '6"LION (5 PCS)', packing: '1Pkt', originalPrice: 230, discountPrice: 34.5, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 8, name: '2 ¾" KURUVI (5 PCS)', packing: '1Pkt', originalPrice: 70, discountPrice: 10.5, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 9, name: 'TWO SOUND CRACKERS (5 PCS)', packing: '1Pkt', originalPrice: 200, discountPrice: 30, categoryName: 'ONE SOUND CRACKERS', categoryDesc: 'ONE SOUND CRACKERS ( 85% DISCOUNT)', discount: 85 },

  // PAPER BOMB (85% DISCOUNT)
  { code: 10, name: 'PAPER COLOUR BOMB', packing: '1Pkt', originalPrice: 500, discountPrice: 75, categoryName: 'PAPER BOMB', categoryDesc: 'PAPER BOMB (85% DISCOUNT)', discount: 85 },
  { code: 11, name: 'PAPER SOUND BOMB ¼KG', packing: '1Pkt', originalPrice: 250, discountPrice: 37.5, categoryName: 'PAPER BOMB', categoryDesc: 'PAPER BOMB (85% DISCOUNT)', discount: 85 },
  { code: 12, name: 'PAPER SOUND BOMB 1/2KG', packing: '1Pkt', originalPrice: 500, discountPrice: 75, categoryName: 'PAPER BOMB', categoryDesc: 'PAPER BOMB (85% DISCOUNT)', discount: 85 },
  { code: 13, name: 'PAPER SOUND BOMB 1KG', packing: '1Pkt', originalPrice: 1000, discountPrice: 150, categoryName: 'PAPER BOMB', categoryDesc: 'PAPER BOMB (85% DISCOUNT)', discount: 85 },

  // MEGA BULLET CRACKERS (85% DISCOUNT)
  { code: 14, name: '24 MEGA', packing: '(1 BOX)', originalPrice: 250, discountPrice: 37.5, categoryName: 'MEGA BULLET CRACKERS', categoryDesc: 'MEGA BULLET CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 15, name: '28 MEGA', packing: '(1 BOX)', originalPrice: 300, discountPrice: 45, categoryName: 'MEGA BULLET CRACKERS', categoryDesc: 'MEGA BULLET CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 16, name: '50 MEGA', packing: '(1 BOX)', originalPrice: 620, discountPrice: 93, categoryName: 'MEGA BULLET CRACKERS', categoryDesc: 'MEGA BULLET CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 17, name: '100 MEGA', packing: '(1 BOX)', originalPrice: 1250, discountPrice: 187.5, categoryName: 'MEGA BULLET CRACKERS', categoryDesc: 'MEGA BULLET CRACKERS (85% DISCOUNT)', discount: 85 },

  // GARLAND CRACKERS (85% DISCOUNT)
  { code: 18, name: '100', packing: '(1 BOX)', originalPrice: 300, discountPrice: 45, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 19, name: '200', packing: '(1 BOX)', originalPrice: 600, discountPrice: 90, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 20, name: '1K', packing: '(1 BOX)', originalPrice: 1000, discountPrice: 150, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 21, name: '2 K', packing: '(1 BOX)', originalPrice: 2000, discountPrice: 300, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 22, name: '5K', packing: '(1 BOX)', originalPrice: 5000, discountPrice: 750, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 23, name: '10K', packing: '(1 BOX)', originalPrice: 10000, discountPrice: 1500, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 24, name: '1K SPECIAL', packing: '(1 BOX)', originalPrice: 1750, discountPrice: 262.5, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 25, name: '2 K SPECIAL', packing: '(1 BOX)', originalPrice: 3500, discountPrice: 525, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 26, name: '5 K SPECIAL', packing: '(1 BOX)', originalPrice: 8750, discountPrice: 1312.5, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },
  { code: 27, name: '10 KSPECIAL', packing: '(1 BOX)', originalPrice: 17500, discountPrice: 2625, categoryName: 'GARLAND CRACKERS', categoryDesc: 'GARLAND CRACKERS (85% DISCOUNT)', discount: 85 },

  // BIJILI CRACKERS ( 85% DISCOUNT)
  { code: 28, name: 'RED BIJILLI', packing: '1Pkt', originalPrice: 200, discountPrice: 30, categoryName: 'BIJILI CRACKERS', categoryDesc: 'BIJILI CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 29, name: 'STRIPPED BUILLI', packing: '1Pkt', originalPrice: 230, discountPrice: 35, categoryName: 'BIJILI CRACKERS', categoryDesc: 'BIJILI CRACKERS ( 85% DISCOUNT)', discount: 85 },

  // FLOWER POTS ( 85% DISCOUNT)
  { code: 30, name: 'FLOWER POT BIG (10 PCS)', packing: '1BOX', originalPrice: 460, discountPrice: 69, categoryName: 'FLOWER POTS', categoryDesc: 'FLOWER POTS (85% DISCOUNT)', discount: 85 },
  { code: 31, name: 'FLOWER POT SPECIAL (10 PCS)', packing: '1BOX', originalPrice: 620, discountPrice: 93, categoryName: 'FLOWER POTS', categoryDesc: 'FLOWER POTS (85% DISCOUNT)', discount: 85 },
  { code: 32, name: 'FLOWER POT ASHOKA (10 PCS)', packing: '1BOX', originalPrice: 800, discountPrice: 120, categoryName: 'FLOWER POTS', categoryDesc: 'FLOWER POTS (85% DISCOUNT)', discount: 85 },
  { code: 33, name: 'COLOR KOTI (10 PCS)', packing: '1BOX', originalPrice: 1250, discountPrice: 187.5, categoryName: 'FLOWER POTS', categoryDesc: 'FLOWER POTS (85% DISCOUNT)', discount: 85 },
  { code: 34, name: 'COLOR KOTI XL (10 PCS)', packing: '1BOX', originalPrice: 1500, discountPrice: 225, categoryName: 'FLOWER POTS', categoryDesc: 'FLOWER POTS (85% DISCOUNT)', discount: 85 },
  { code: 35, name: 'COLOR KOTI DELUXE (10 PCS)', packing: '1BOX', originalPrice: 2200, discountPrice: 330, categoryName: 'FLOWER POTS', categoryDesc: 'FLOWER POTS (85% DISCOUNT)', discount: 85 },
  { code: 36, name: 'FLOWER POTS SUPER DELUXE (JUMBO) (10 PCS)', packing: '1BOX', originalPrice: 3200, discountPrice: 480, categoryName: 'FLOWER POTS', categoryDesc: 'FLOWER POTS (85% DISCOUNT)', discount: 85 },

  // CHAKKAR CRACKERS ( 85% DISCOUNT)
  { code: 37, name: 'GROUND CHAKKARA BIG (10 PCS)', packing: '1BOX', originalPrice: 240, discountPrice: 36, categoryName: 'CHAKKAR CRACKERS', categoryDesc: 'CHAKKAR CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 38, name: 'GROUND CHAKKARA ASHOKA (10 PCS)', packing: '1BOX', originalPrice: 350, discountPrice: 52.5, categoryName: 'CHAKKAR CRACKERS', categoryDesc: 'CHAKKAR CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 39, name: 'GROUND CHAKKARA SPECIAL (10 PCS)', packing: '1BOX', originalPrice: 500, discountPrice: 75, categoryName: 'CHAKKAR CRACKERS', categoryDesc: 'CHAKKAR CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 40, name: 'GROUND CHAKKARA DELUXE (10 PCS)', packing: '1BOX', originalPrice: 850, discountPrice: 127.5, categoryName: 'CHAKKAR CRACKERS', categoryDesc: 'CHAKKAR CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 41, name: 'SPINNER LEVEL (10 PCS)', packing: '1BOX', originalPrice: 900, discountPrice: 135, categoryName: 'CHAKKAR CRACKERS', categoryDesc: 'CHAKKAR CRACKERS ( 85% DISCOUNT)', discount: 85 },

  // ATOM BOMB CRACKERS ( 85% DISCOUNT)
  { code: 42, name: 'HYDRO BOMB (10 PCS)', packing: '1BOX', originalPrice: 450, discountPrice: 67.5, categoryName: 'ATOM BOMB CRACKERS', categoryDesc: 'ATOM BOMB CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 43, name: 'KING OF KING GREEN (10 PCS)', packing: '1BOX', originalPrice: 500, discountPrice: 75, categoryName: 'ATOM BOMB CRACKERS', categoryDesc: 'ATOM BOMB CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 44, name: 'CLASSIC BOMB GREEN (10 PCS)', packing: '1BOX', originalPrice: 650, discountPrice: 97.5, categoryName: 'ATOM BOMB CRACKERS', categoryDesc: 'ATOM BOMB CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 45, name: 'DIGITAL BOMB 12 PLY (10 PCS)', packing: '1BOX', originalPrice: 1850, discountPrice: 277.5, categoryName: 'ATOM BOMB CRACKERS', categoryDesc: 'ATOM BOMB CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 46, name: 'KING RIDER (10 PCS)', packing: '1BOX', originalPrice: 2000, discountPrice: 300, categoryName: 'ATOM BOMB CRACKERS', categoryDesc: 'ATOM BOMB CRACKERS ( 85% DISCOUNT)', discount: 85 },

  // TWINKLING STAR ( 85% DISCOUNT)
  { code: 47, name: '1½ TWINKLING STAR (10 PCS)', packing: '1BOX', originalPrice: 130, discountPrice: 19.5, categoryName: 'TWINKLING STAR', categoryDesc: 'TWINKLING STAR ( 85% DISCOUNT)', discount: 85 },
  { code: 48, name: '4 TWINKLING STAR (10 PCS)', packing: '1BOX', originalPrice: 400, discountPrice: 60, categoryName: 'TWINKLING STAR', categoryDesc: 'TWINKLING STAR ( 85% DISCOUNT)', discount: 85 },

  // ROCKET CRACKERS ( 85% DISCOUNT)
  { code: 49, name: 'ROCKET BOMB (10 PCS)', packing: '1BOX', originalPrice: 320, discountPrice: 48, categoryName: 'ROCKET CRACKERS', categoryDesc: 'ROCKET CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 50, name: 'COLOUR ROCKET (10 PCS)', packing: '1BOX', originalPrice: 500, discountPrice: 75, categoryName: 'ROCKET CRACKERS', categoryDesc: 'ROCKET CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 51, name: 'LUNIK ROCKET (10 PCS)', packing: '1BOX', originalPrice: 600, discountPrice: 90, categoryName: 'ROCKET CRACKERS', categoryDesc: 'ROCKET CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 52, name: 'TWO SOUND ROCKET (10 PCS)', packing: '1BOX', originalPrice: 1000, discountPrice: 150, categoryName: 'ROCKET CRACKERS', categoryDesc: 'ROCKET CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 53, name: 'MUSICAL ROCKET (5 PCS)', packing: '1BOX', originalPrice: 1200, discountPrice: 180, categoryName: 'ROCKET CRACKERS', categoryDesc: 'ROCKET CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 54, name: 'WHISTLING ROCKET (10PCS)', packing: '1BOX', originalPrice: 1000, discountPrice: 150, categoryName: 'ROCKET CRACKERS', categoryDesc: 'ROCKET CRACKERS ( 85% DISCOUNT)', discount: 85 },

  // KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)
  { code: 55, name: 'WATERMELON STAR (1 PCS)', packing: '(1 BOX)', originalPrice: 1200, discountPrice: 180, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 56, name: 'KULFI (3 PCS)', packing: '(1 BOX)', originalPrice: 1750, discountPrice: 262.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 57, name: 'LAVA SHOWER (1 PCS)', packing: '(1 BOX)', originalPrice: 400, discountPrice: 60, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 58, name: 'MAGIC SOUND (1 PCS)', packing: '(1 BOX)', originalPrice: 1000, discountPrice: 150, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 59, name: 'VELUM MAYILUM (1 PCS)', packing: '(1 BOX)', originalPrice: 1500, discountPrice: 225, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 60, name: 'CYLINDER BOMB (2 PCS)', packing: '(1 BOX)', originalPrice: 1550, discountPrice: 232.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 61, name: 'SKY COLOUR (5 PCS)', packing: '(1 BOX)', originalPrice: 1300, discountPrice: 195, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 62, name: 'MAXY PENCIL (2 PCS)', packing: '(1 BOX)', originalPrice: 1270, discountPrice: 190.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 63, name: 'CUTE 5 COLOUR FOUNTAIN 3inch (5 PCS)', packing: '(1 BOX)', originalPrice: 1500, discountPrice: 225, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 64, name: 'TRI COLOUR FOUNTAIN 4 INCH (5 PCS)', packing: '(1 BOX)', originalPrice: 1900, discountPrice: 285, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 65, name: 'CRACKLING FOUNTAIN (5 PCS)', packing: '(1 BOX)', originalPrice: 1600, discountPrice: 240, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 66, name: 'MINI SIREN (5 PCS)', packing: '(1 BOX)', originalPrice: 900, discountPrice: 135, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 67, name: 'SIREN CANDLE (1 PCS)', packing: '(1 BOX)', originalPrice: 500, discountPrice: 75, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 68, name: 'KING SIREN (3 PCS)', packing: '(1 BOX)', originalPrice: 1200, discountPrice: 180, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 69, name: '1000 WATTS (1 PCS)', packing: '(1 BOX)', originalPrice: 1250, discountPrice: 187.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 70, name: 'KITKAT BIG', packing: '(1 BOX)', originalPrice: 240, discountPrice: 36, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 71, name: 'BUTTERFLY WINGS FIGHTERS', packing: '(1 BOX)', originalPrice: 500, discountPrice: 75, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 72, name: 'BAMBARAM (10 PCS)', packing: '(1 BOX)', originalPrice: 670, discountPrice: 100, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 73, name: 'WHISTLING WHEEL (5 PCS)', packing: '(1 BOX)', originalPrice: 870, discountPrice: 130.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 74, name: 'TRICOLOUR PHOTOFLASH (5 PCS)', packing: '(1 BOX)', originalPrice: 700, discountPrice: 105, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 75, name: 'TIN MAX (1 PCS)', packing: '(1 BOX)', originalPrice: 1140, discountPrice: 171, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 76, name: 'KUNG FU PANDA (1 PCS)', packing: '(1 BOX)', originalPrice: 430, discountPrice: 65, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 77, name: 'ROBO KIDS SHOWER (1 PCS)', packing: '(1 BOX)', originalPrice: 300, discountPrice: 45, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 78, name: 'PARTY NIGHT (3 PCS)', packing: '(1 BOX)', originalPrice: 1200, discountPrice: 180, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 79, name: 'WATER QUEEN (1 PCS)', packing: '(1 BOX)', originalPrice: 1320, discountPrice: 198, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 80, name: 'PHOTO FLASH', packing: '(1 BOX)', originalPrice: 450, discountPrice: 68, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 81, name: 'HELICOPTER (5 PCS)', packing: '(1 BOX)', originalPrice: 600, discountPrice: 90, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 82, name: 'TOP GUN (5 PCS)', packing: '(1 BOX)', originalPrice: 1560, discountPrice: 234, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 83, name: 'SELFIE STICK (5 PCS)', packing: '(1 BOX)', originalPrice: 700, discountPrice: 105, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 84, name: 'PLANET WHEEL', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 85, name: '4 * 4 WHEEL (5 PCS)', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 86, name: 'LOLLIPOP STICK (5PCS)', packing: '(1 BOX)', originalPrice: 1560, discountPrice: 234, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 87, name: '7 SHOT MULTICOLOUR (5PCS)', packing: '(1 BOX)', originalPrice: 550, discountPrice: 82.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 88, name: 'COLOUR SMOKE (3 PCS)', packing: '(1 BOX)', originalPrice: 800, discountPrice: 120, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 89, name: 'DISCO SHOWER (5PCS)', packing: '(1 BOX)', originalPrice: 600, discountPrice: 90, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 90, name: 'PEACOCK SMALL (1 PCS)', packing: '(1 BOX)', originalPrice: 1170, discountPrice: 175.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 91, name: 'PEACOCK BIG (1 PCS)', packing: '(1 BOX)', originalPrice: 1500, discountPrice: 225, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 92, name: 'PEACOCK BADA (1 PCS)', packing: '(1 BOX)', originalPrice: 2500, discountPrice: 375, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 93, name: 'WIRE CHAKKAR (10 PCS)', packing: '(1 BOX)', originalPrice: 940, discountPrice: 141, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 94, name: 'WATER FALLS', packing: '(1 BOX)', originalPrice: 900, discountPrice: 135, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 95, name: 'MAGIC SHOW (2 PCS)', packing: '(1 BOX)', originalPrice: 1150, discountPrice: 172.5, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 96, name: 'SPACE COMET', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 97, name: 'STAR NIGHT', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 98, name: 'EMERALD (10 PCS)', packing: '(1 BOX)', originalPrice: 367, discountPrice: 55, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 99, name: 'FLOWER GARDEN (5 PCS)', packing: '(1 BOX)', originalPrice: 1400, discountPrice: 210, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 100, name: 'WORLD WONDER (5 PCS)', packing: '(1 BOX)', originalPrice: 1400, discountPrice: 210, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 101, name: 'CRACKLING FLOWER (5 PCS)', packing: '(1 BOX)', originalPrice: 1400, discountPrice: 210, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 102, name: '777 (5 PCS)', packing: '(1 BOX)', originalPrice: 1400, discountPrice: 210, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 103, name: 'X MAS TREE (5 PCS)', packing: '(1 BOX)', originalPrice: 1400, discountPrice: 210, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 104, name: 'GALAXY (5 PCS)', packing: '(1 BOX)', originalPrice: 1000, discountPrice: 150, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 105, name: 'WAR IN THE SKY (5 PCS)', packing: '(1 BOX)', originalPrice: 1500, discountPrice: 225, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 106, name: 'GOLDEN TREE (5 PCS)', packing: '(1 BOX)', originalPrice: 1400, discountPrice: 210, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },
  { code: 107, name: 'SERPENT EGG', packing: '(1 BOX)', originalPrice: 250, discountPrice: 38, categoryName: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS', categoryDesc: 'KIDS SPECIAL NOVELTIES FOUNTAIN CRACKERS ( 85% DISCOUNT)', discount: 85 },

  // SPARKLERS (85% DISCOUNT)
  { code: 108, name: '10 CM ELECTRIC SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 110, discountPrice: 16.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 109, name: '10 CM COLOR SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 125, discountPrice: 18.75, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 110, name: '10 CM GREEN SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 130, discountPrice: 19.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 111, name: '10 CM RED SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 140, discountPrice: 21, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 112, name: '12 CM ELECTRIC SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 165, discountPrice: 24.75, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 113, name: '12 CM COLOR SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 180, discountPrice: 27, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 114, name: '12 CM GREEN SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 195, discountPrice: 29.25, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 115, name: '12 CM RED SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 210, discountPrice: 31.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 116, name: '15 CM ELECTRIC SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 250, discountPrice: 37.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 117, name: '15 CM COLOR SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 270, discountPrice: 40.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 118, name: '15 CM GREEN SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 280, discountPrice: 42, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 119, name: '15 CM RED SPARKLERS (10 PCS)', packing: '(1 BOX)', originalPrice: 300, discountPrice: 45, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 120, name: '30 CM ELECTRIC SPARKLERS (5 PCS)', packing: '(1 BOX)', originalPrice: 250, discountPrice: 37.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 121, name: '30 CM COLOUR SPARKLERS (5 PCS)', packing: '(1 BOX)', originalPrice: 270, discountPrice: 40.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 122, name: '30 CM GREEN SPARKLERS (5 PCS)', packing: '(1 BOX)', originalPrice: 280, discountPrice: 42, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 123, name: '30 CM RED SPARKLERS (5 PCS)', packing: '(1 BOX)', originalPrice: 300, discountPrice: 45, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 124, name: '50 CM ELECTRIC SPARKLERS (5 PCS)', packing: '(1 BOX)', originalPrice: 1100, discountPrice: 165, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 125, name: '50CM COLOR SPARKLERS (5PCS)', packing: '(1 BOX)', originalPrice: 1150, discountPrice: 172.5, categoryName: 'SPARKLERS', categoryDesc: 'SPARKLERS (85% DISCOUNT)', discount: 85 },

  // FANCY SPARKLERS (85% DISCOUNT)
  { code: 126, name: 'LOVELY HEART SPARKLING (5 PCS)', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'FANCY SPARKLERS', categoryDesc: 'FANCY SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 127, name: 'CELEBRATION 4 IN 1 SPARKLING (5 PCS)', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'FANCY SPARKLERS', categoryDesc: 'FANCY SPARKLERS (85% DISCOUNT)', discount: 85 },
  { code: 128, name: 'SPINNING SPARKLING (1 BOX)', packing: '(1 BOX)', originalPrice: 1500, discountPrice: 225, categoryName: 'FANCY SPARKLERS', categoryDesc: 'FANCY SPARKLERS (85% DISCOUNT)', discount: 85 },

  // NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)
  { code: 129, name: '1 inch CHOTTA FANCY', packing: '(1 BOX)', originalPrice: 235, discountPrice: 35.25, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 130, name: '2 inch FANCY', packing: '(1 BOX)', originalPrice: 1100, discountPrice: 165, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 131, name: '2 1/4 FANCY (3 PCS)', packing: '(1 BOX)', originalPrice: 1700, discountPrice: 255, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 132, name: '3" FANCY SINGLE (1 PCS)', packing: '(1 BOX)', originalPrice: 1400, discountPrice: 210, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 133, name: '3 NAYAGARA FALLS (1 PCS)', packing: '(1 BOX)', originalPrice: 1500, discountPrice: 225, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 134, name: '3 1/2" FANCY SINGLE (1 PCS)', packing: '(1 BOX)', originalPrice: 1800, discountPrice: 270, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 135, name: '3½ SIZZLING SINGLE (1 PCS)', packing: '(1 BOX)', originalPrice: 2200, discountPrice: 330, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 136, name: '3 1/2 inch FANCY (2PCS)', packing: '(1 BOX)', originalPrice: 3850, discountPrice: 577.5, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 137, name: '31/2 "FANCY DOUBLE BALL (2PCS)', packing: '(1 BOX)', originalPrice: 2900, discountPrice: 435, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 138, name: '4" FANCY 7STEP (1 PCS)', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 139, name: '4 " FANCY SINGLE', packing: '(1 BOX)', originalPrice: 2650, discountPrice: 398, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 140, name: '4 inch NAYAGARA FALLS', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 141, name: '4 inch FANCY (2PCS)', packing: '(1 BOX)', originalPrice: 5300, discountPrice: 795, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 142, name: '4 inch FANCY DOUBLE BALL', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 143, name: '5 inchFANCY (2 PCS)', packing: '(1 BOX)', originalPrice: 6400, discountPrice: 960, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 144, name: '5 inch SINGLE', packing: '(1 BOX)', originalPrice: 3200, discountPrice: 480, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 145, name: '6 inch SINGLE', packing: '(1 BOX)', originalPrice: 3785, discountPrice: 567, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 146, name: '6 inch (2 PCS)', packing: '(1 BOX)', originalPrice: 7570, discountPrice: 1135, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },
  { code: 147, name: 'PURPLE SHOT', packing: '(1 BOX)', originalPrice: 2000, discountPrice: 300, categoryName: 'NIGHT ARRIVAL ATTRACTIONS', categoryDesc: 'NIGHT ARRIVAL ATTRACTIONS (85% DISCOUNT)', discount: 85 },

  // MULTI-SHOTS (80% DISCOUNT)
  { code: 148, name: '12 SHOT CRACKLING', packing: '(1 BOX)', originalPrice: 750, discountPrice: 112.5, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 149, name: '12 SHOT MULTICOLOUR', packing: '(1 BOX)', originalPrice: 1100, discountPrice: 165, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 150, name: '12 SHOT WHISTLING', packing: '(1 BOX)', originalPrice: 2000, discountPrice: 300, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 151, name: '25 SHOT WHISTLING', packing: '(1 BOX)', originalPrice: 5800, discountPrice: 870, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 152, name: '50 SHOT WHISTLING', packing: '(1 BOX)', originalPrice: 11560, discountPrice: 1734, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 153, name: '30 SHOT MUTICOLOUR', packing: '(1 BOX)', originalPrice: 3000, discountPrice: 450, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 154, name: '60 SHOT MUTICOLOUR', packing: '(1 BOX)', originalPrice: 6000, discountPrice: 900, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 155, name: '120 SHOT MULTICOLOR', packing: '(1 BOX)', originalPrice: 12000, discountPrice: 1800, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 156, name: '240 SHOT MULTICOLOR', packing: '(1 BOX)', originalPrice: 24000, discountPrice: 3600, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 157, name: '30 SHOT MULTICOLOR SPL', packing: '(1 BOX)', originalPrice: 3500, discountPrice: 525, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 158, name: '60 SHOT MULTICOLOR SPL', packing: '(1 BOX)', originalPrice: 7000, discountPrice: 1050, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 159, name: '120 SHOT MULTICOLOR SPL', packing: '(1 BOX)', originalPrice: 14000, discountPrice: 2100, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },
  { code: 160, name: '240 SHOT MULTICOLOR SPL', packing: '(1 BOX)', originalPrice: 28000, discountPrice: 4200, categoryName: 'MULTI-SHOTS', categoryDesc: 'MULTI-SHOTS (80% DISCOUNT)', discount: 85 },

  // DAY SHOTS (85% DISCOUNT)
  { code: 161, name: '2 inch SETOUT', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'DAY SHOTS', categoryDesc: 'DAY SHOTS (85% DISCOUNT)', discount: 85 },
  { code: 162, name: '2 1/2 inch SETOUT', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'DAY SHOTS', categoryDesc: 'DAY SHOTS (85% DISCOUNT)', discount: 85 },
  { code: 163, name: '3 inch SETOUT', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'DAY SHOTS', categoryDesc: 'DAY SHOTS (85% DISCOUNT)', discount: 85 },

  // FESTIVAL MEGA MULTI-SHOTS (85% DISCOUNT)
  { code: 164, name: 'GUJARAT FESTIVAL 150', packing: '(1 BOX)', originalPrice: 13000, discountPrice: 1950, categoryName: 'FESTIVAL MEGA MULTI-SHOTS', categoryDesc: 'FESTIVAL MEGA MULTI-SHOTS (85% DISCOUNT)', discount: 85 },
  { code: 165, name: 'GANG BANGERS 32 SHOT', packing: '(1 BOX)', originalPrice: 20000, discountPrice: 3000, categoryName: 'FESTIVAL MEGA MULTI-SHOTS', categoryDesc: 'FESTIVAL MEGA MULTI-SHOTS (85% DISCOUNT)', discount: 85 },
  { code: 166, name: '10X10', packing: '(1 BOX)', originalPrice: 25000, discountPrice: 3750, categoryName: 'FESTIVAL MEGA MULTI-SHOTS', categoryDesc: 'FESTIVAL MEGA MULTI-SHOTS (85% DISCOUNT)', discount: 85 },

  // CAP CRACKERS (NET RATE)
  { code: 167, name: 'ROLL CAP', packing: '1Pkt', originalPrice: 0, discountPrice: 0, categoryName: 'CAP CRACKERS', categoryDesc: 'CAP CRACKERS (NET RATE)', discount: 0 },

  // COLOUR MATCHES (NET RATE)
  { code: 168, name: 'RIDER COLOUR MATCHES', packing: '1Pkt', originalPrice: 0, discountPrice: 0, categoryName: 'COLOUR MATCHES', categoryDesc: 'COLOUR MATCHES (NET RATE)', discount: 0 },
  { code: 169, name: 'LOLLIPOP MATCHES', packing: '1Pkt', originalPrice: 0, discountPrice: 0, categoryName: 'COLOUR MATCHES', categoryDesc: 'COLOUR MATCHES (NET RATE)', discount: 0 },

  // SERPENT CRACKER (NET RATE)
  { code: 170, name: 'ANACONDA BIG SIZE', packing: '1Pkt', originalPrice: 0, discountPrice: 0, categoryName: 'SERPENT CRACKER', categoryDesc: 'SERPENT CRACKER (NET RATE)', discount: 0 },

  // GIFT BOXES (NET RATE)
  { code: 171, name: 'GIFT BOX', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'GIFT BOXES', categoryDesc: 'GIFT BOXES (NET RATE)', discount: 0 },
  { code: 172, name: 'GIFT BOX (35 ITEM)', packing: '(1 BOX)', originalPrice: 0, discountPrice: 0, categoryName: 'GIFT BOXES', categoryDesc: 'GIFT BOXES (NET RATE)', discount: 0 }
];

console.log('Total items in rawData:', rawData.length);
fs.writeFileSync('raw_muthumari_data.json', JSON.stringify(rawData, null, 2));
