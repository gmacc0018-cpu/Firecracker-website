const fs = require('fs');
const xml = fs.readFileSync('scratch_docx_latest/word/document.xml', 'utf8');

function cleanXml(text) {
  return text
    .replace(/<w:tab[^>]*\/>/g, ' ')
    .replace(/<w:br[^>]*\/>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

const trRegex = /<w:tr[\s>].*?<\/w:tr>/gs;
const rows = xml.match(trRegex) || [];

const parsedRows = [];
rows.forEach((tr) => {
  const tcRegex = /<w:tc[\s>].*?<\/w:tc>/gs;
  const cells = tr.match(tcRegex) || [];
  const cellTexts = cells.map(tc => cleanXml(tc));
  if (cellTexts.some(c => c.length > 0)) {
    parsedRows.push(cellTexts);
  }
});

console.log('Total cleaned non-empty rows:', parsedRows.length);
fs.writeFileSync('scratch_latest_clean_rows.json', JSON.stringify(parsedRows, null, 2));

parsedRows.slice(0, 40).forEach((r, i) => console.log(i, JSON.stringify(r)));
