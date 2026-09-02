const fs = require('fs');
const path = require('path');

const srcDir = 'D:/muthumari fireworks/PRODUCT IMAGE 2-09-2026';
const destDir = 'public/images';

const newFiles = fs.readdirSync(srcDir);
console.log('Files to process:', newFiles.length);

newFiles.forEach(f => {
  const src = path.join(srcDir, f);
  const dest = path.join(destDir, f);
  fs.copyFileSync(src, dest);
});
console.log('Copied all new files to public/images');
