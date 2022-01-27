import fs from 'fs';

function readJSONSync(file) {
  let buffer = fs.readFileSync(file);
  let json = JSON.parse(buffer);
  return json;
}
function fmtJSON(obj) {
  return JSON.stringify(obj, null, 2);
}


const teas = readJSONSync('teas.json');
const predictions = readJSONSync('predictions.json');

const teaImages = readJSONSync('teaImages.json');
const teaToPKeys = {}
teaImages.forEach(x => teaToPKeys[x.name] = x.images);

teas.forEach(tea => {
  const pKeys = teaToPKeys[tea.key];
  const images = pKeys.map(pK => {
    const one = pK.replace('_SIZEx', '_100x');
    const { className, probability } = predictions[one];
    return {
      key: pK,
      url: `https://cdn.shopify.com/s/files/1/0313/6064/7305/products/${pK}`,
      predictedType: className,
      probability,
    };
  });
  tea.images = images;
});

fs.writeFileSync('fullTeas.json', fmtJSON(teas));