
const fs = require('fs');

const gramsPrices = {};
const typePrices = {};
const sizePrices = {};
const typeGramsPrices = {};
const dpgs = [];
const all = [];

const addGroup = (obj, key, value) => {
  if (!obj[key]) {
    obj[key] = [];
  }
  obj[key].push(value);
}

const percentile = (arr, val) =>
  (100 *
    arr.reduce(
      (acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0),
      0
    )) /
  arr.length;


function readJSON(file) {
  let buffer = fs.readFileSync(file);
  let json = JSON.parse(buffer);
  return json;
}

function getSize(grams) {
  switch (grams) {
    case 7: return 'mini';
    case 25: return 'sample';
    case 50: return 'sample';
    case 200: return 'cake';
    case 357: return 'cake';
    case 1000: return 'brick';
    default: return 'unknown';
  }
}

const mapForm = (x) => {
  const price = parseFloat(x.price);
  let grams = parseFloat(x.name.replace('~', ''));
  grams = grams == 1 ? 1000 : grams;
  let dpg = price / grams;
  const size = getSize(grams);


  const form = {
    name: x.name,
    price,
    inStock: x.inStock,
    grams,
    dpg,
    size
  };
  return form;
}

const isTea = (form) => !form.name.match(/One Cloth|Default Title| \/ [LMX]/)

const mapTea = ([k, x]) => {
  const { id, sku, tags, brand, inStock } = x;
  const type = x.type || 'unknown'
  const tea = {
    name: x.title,
    year: parseInt(x.title, 10),
    quantity: x.stockQty,
    key: k,
    type,
    id,
    sku,
    tags,
    brand,
    inStock,
    forms: x.variants.map(mapForm).filter(isTea)
  };

  try {
    const { description, thumbnail_url, url, version } = readJSON(k + '.oembed');
    tea.description = description;
    tea.thumbnail_url = thumbnail_url;
    tea.url = url;
    tea.version = version;
  } catch (e) {
    console.error('no oembed', k)
  }
  return tea;
};

const teaMap = readJSON('data.json')
const teas = Object.entries(teaMap)
  .map(mapTea)
  .filter(x => !isNaN(x.year) && x.year > 2000)

teas.forEach(tea => {
  tea.forms.forEach(form => {
    const { size, grams, price, dpg } = form
    if (isNaN(grams)) console.error(x);
    addGroup(sizePrices, size, price)
    addGroup(gramsPrices, grams, price);
    addGroup(typePrices, tea.type, price)
    addGroup(typeGramsPrices, `${tea.type}-${grams}`, price)
    all.push(price);
    dpgs.push(dpg);
  })
})

Object.values(gramsPrices).map(p => p.sort((a, b) => a - b));
// console.log(gramsPrices)
Object.values(typePrices).map(p => p.sort((a, b) => a - b));
// console.log(typePrices)
Object.values(sizePrices).map(p => p.sort((a, b) => a - b));
// console.log(sizePrices)
Object.values(typeGramsPrices).map(p => p.sort((a, b) => a - b));
console.log(typeGramsPrices)
all.sort((a, b) => a - b);
dpgs.sort((a, b) => a - b);

teas.forEach(tea => {
  tea.forms.forEach(form => {
    form.percentiles = {
      size: percentile(gramsPrices[form.grams], form.price),
      type: percentile(typePrices[tea.type], form.price),
      typeSize: percentile(typeGramsPrices[`${tea.type}-${form.grams}`], form.price),
      all: percentile(all, form.price),
      dpg: percentile(dpgs, form.dpg),
    }
  })
})

let teaJSON = JSON.stringify(teas, null, 2);
fs.writeFileSync('teas.json', teaJSON);