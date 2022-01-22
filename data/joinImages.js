import fs from 'fs';
import Fuse from 'fuse.js'


const teas = JSON.parse(fs.readFileSync('teas.json'))
// .slice(1, 20);
const predictions = JSON.parse(fs.readFileSync('predictions.json'));
const pKeys = Object.keys(predictions);

const minis = teas.filter(t => t.key.match(/mini/i)).map(t => t.key);
const miniFuse = new Fuse(minis, {
  includeScore: true,
  threshold: 0.1,
});



const pKeyFuse = new Fuse(pKeys, {
  includeScore: true,
  threshold: 0.25,
});



teas.forEach(tea => {
  const miniScore = miniFuse.search(tea.key);
  const miniCheck = (s, t) => {
    if (!miniScore) return true;
    if (s.item.match(/mini/i) && !t.key.match(/mini/i)) return false;
    if (!s.item.match(/mini/i) && t.key.match(/mini/i)) return false;
    return true;
  }
  const scores = pKeyFuse.search(tea.key);
  const years = scores
    .filter(s => miniCheck(s, tea))
    .filter(s => s.item.match(tea.year));
  // console.log(tea.name, years);
  const images = years.map(y => {
    const { className, probability } = predictions[y.item];
    const key = y.item.replace(/_\d+x/, '_SIZEx');
    return {
      key,
      url: `https://cdn.shopify.com/s/files/1/0313/6064/7305/products/${key}`,
      fuse: y,
      predictedType: className,
      probability,
    };
  });
  tea.images = images;
});

fs.writeFileSync('teaImages.json', JSON.stringify(
  teas.map(t => ({ name: t.key, images: t.images.map(i => i.key) })), null, 2));
