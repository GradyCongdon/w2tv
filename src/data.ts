import { TeaProduct, TeaSize, TeaStyle, Image, ImageType } from "./TeaProduct";

const makeImage = (type: ImageType, slug: string, size: number, view: string): Image => {
  return {
    type,
    src: `${slug}${view}_${size}x.jpg`,
    srcWhiteBalanced: `${slug}${view}w_${size}x.jpg`,
    alt: type,
    width: size,
    height: size,
  }
}

const price1 = {
  price: 60,
  mass: 257,
  amount: 1,
}


const makeTea = ({
  slug,
  style,
  name,
  w,
  b,
  s,
  size = TeaSize.Cake
}: any) => {
  const imageSize = 600;
  const [yearString] = slug.split('-');
  const year = parseInt(yearString, 10);
  const oSlug = [year, ...name.split(' ')].join('-').toLowerCase();
  return {
    slug,
    oSlug,
    year,
    name,
    style,
    size,
    wrapper: makeImage('wrapper', slug, imageSize, w),
    bing: makeImage('bing', slug, imageSize, b),
    soup: makeImage('soup', slug, imageSize, s),
    description: slug,
    prices: [price1],
  } as TeaProduct
}

export const data = [
  {
    slug: '2017-tuhao-as-fuck-raw-puerh-tea',
    name: 'Tuhao As Fuck',
    style: TeaStyle.Raw,
    w: '-w',
    b: '-bx',
    s: '-s'
  },
  {
    slug: '2018-Censers-Guizhou-White-Tea',
    name: 'Censers',
    style: TeaStyle.White,
    w: '-w',
    b: '-bx',
    s: '-s'
  },
  {
    slug: '2018-Demon-Slayer-Huangpian-Tea',
    name: 'Demon Slayer',
    style: TeaStyle.Huangpian,
    w: '-w',
    b: '-b',
    s: '-s'
  },
  {
    slug: '2018-Chirping-Bird-Puerh-Tea',
    name: 'Chirping Bird',
    style: TeaStyle.Raw,
    w: '-w',
    b: '-b',
    s: '-sw'
  },
  {
    slug: '2018-Carbolic-Soap-Dancong',
    name: 'Carbolic Soap',
    style: TeaStyle.Oolong,
    w: '-w',
    b: '-b',
    s: '-s'
  },
  {
    slug: '2018-Brown-Sugar-Ripe-Puer',
    name: 'Brown Sugar',
    size: TeaSize.Brick,
    style: TeaStyle.Ripe,
    w: '-w',
    b: '-b',
    s: '-s'
  },
  {
    slug: '2021-1-Absolution-Tea',
    name: '1 Absolution',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4w'
  },
  {
    slug: '2021-Bosch-Raw-Puer-Tea',
    name: 'Bosch',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Coyote-Mini-Puerh-Tea',
    name: 'Hotline Space Coyote Mini',
    size: TeaSize.Ball,
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-MISSING'
  },
  {
    slug: '2021-Diao-Retro-Puer-Tea',
    name: 'Diao Retro',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Fox-Down-Black-Tea',
    name: 'Fox Down',
    style: TeaStyle.Black,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Gas-Bitter-Puerh-Tea',
    name: 'Gas',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Green-Hype-Tea',
    name: 'Green Hype',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Hotline-Space-Coyote-Tea',
    name: 'Hotline Space Coyote',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Is-A-Gift-Sheng-Puer-Tea',
    name: 'Is A Gift',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Lucky-Puppy-Tea',
    name: 'Lucky Puppy',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Moon-Waffles-Tea',
    name: 'Moon Waffles',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Philtre-Mini-Tea',
    name: 'Philtre Mini',
    size: TeaSize.Mini,
    style: TeaStyle.Raw,
    w: '',
    b: '-3',
    s: '-4'
  },
  {
    slug: '2021-Philtre-Puer-Tea',
    name: 'Philtre',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Road-2-Nowhere-Tea',
    name: 'Road 2 Nowhere',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-MISSING'
  },
  {
    slug: '2021-Sun-Skate-Hongcha-Tea',
    name: 'Sun Skate',
    style: TeaStyle.Black,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-The-Thing-Is-Goo-Shoo-Puerh-Tea',
    name: 'The Thing Is',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Tuhao-Tea',
    name: 'Tuhao',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2021-Yesheng-Gushu-Baicha-Tea',
    name: 'Yesheng Gushu Baicha',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Ajai-Raw-Puer-tea',
    name: 'Ajai',
    style: TeaStyle.Raw,
    w: '',
    b: '-3',
    s: '-5'
  },
  {
    slug: '2020-Amalgamation-of-Capital-Bamboo-Shou-Puer-Tea',
    name: 'Amalgamation Of Capital',
    size: TeaSize.Bamboo,
    style: TeaStyle.Ripe,
    w: '-88',
    b: '-2',
    s: '-3'
  },
  {
    slug: '2020-Arbor-Red',
    name: 'Arbor Red',
    style: TeaStyle.Black,
    w: '_8914b4ec-a32c-460a-ab20-0c260bde34f1',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Arbor-White',
    name: 'Arbor White',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Astro-Kittens',
    name: 'Astro Kittens',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Astro-Red-Kittens-Black-Tea',
    name: 'Astro Red Kittens',
    style: TeaStyle.Black,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Big-O-V2',
    name: 'Big O V2',
    style: TeaStyle.Ripe,
    w: '-8',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Big-O-V2-Mini',
    name: 'Big O v2 Mini',
    size: TeaSize.Mini,
    style: TeaStyle.Ripe, // Chen
    w: '',
    b: '-2',
    s: '-3'
  },
  {
    slug: '2020-Biscuits-Tea',
    name: 'Biscuits',
    size: TeaSize.Square,
    style: TeaStyle.Raw,
    w: '',
    b: '-4',
    s: '-6'
  },
  {
    slug: '2020-Brown-Sugar-Small-Batch-Shou',
    name: 'Brown Sugar',
    size: TeaSize.Brick,
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Camphornought-Puer-Mini',
    name: 'Camphornought Mini',
    size: TeaSize.Ball,
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-3'
  },
  {
    slug: '2020-Camphornought-Shu',
    name: 'Camphornought',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Conversation-Part-2-white-tea',
    name: 'Conversation Part 2',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Demon-Slayer',
    name: 'Demon Slayer',
    style: TeaStyle.Huangpian,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Demon-Slayer-Minis-Huangpian-tea',
    name: 'Demon Slayer Minis',
    size: TeaSize.Mini,
    style: TeaStyle.Huangpian,
    w: '',
    b: '-4',
    s: '-5'
  },
  {
    slug: '2020-Ecce-Puer',
    name: 'Ecce Puer',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Fox-Down-Black-Tea-Hong-Cha-Mini',
    name: 'Fox Down Mini',
    size: TeaSize.Mini,
    style: TeaStyle.Black,
    w: '',
    b: '-3',
    s: '-4'
  },
  {
    slug: '2020-Foxdown-Black-Tea',
    name: 'Fox Down',
    style: TeaStyle.Black,
    w: '-88',
    b: '-3',
    s: '-MISSING'
  },
  {
    slug: '2020-Good-Man-in-a-a-Storm',
    name: 'Good Man In A Storm',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Green-Hype-Raw-Puer-Tea',
    name: 'Green Hype',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Hand-roasted-bamboo-tea-Bamboo-Dove',
    name: 'Bamboo Dove',
    size: TeaSize.Bamboo,
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Horse-Girl-Clique',
    name: 'Horse Girl Clique',
    style: TeaStyle.Black,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Hot-Brandy-Mini',
    name: 'Hot Brandy Mini',
    size: TeaSize.Ball,
    style: TeaStyle.White, // Mixed
    w: '',
    b: '-2',
    s: '-3'
  },
  {
    slug: '2020-Hotline-Space-Coyote-Sheng-Puer-Tea',
    name: 'Hotline Space Coyote',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-I-Am-Puer-tea',
    name: 'I Am Puer',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Inb4',
    name: 'Inb4',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-5'
  },
  {
    slug: '2020-Is-A-Gift-Raw-Puer-tea',
    name: 'Is A Gift',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-La-Sombra-Raw',
    name: 'La Sombra',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Loyal-Soldier-Puerh-Tea',
    name: 'Loyal Soldier',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Lucky-Puppy',
    name: 'Lucky Puppy',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Mall-Ninja-Dojo',
    name: 'Mall Ninja Dojo',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Mirage-Puer-Tea',
    name: 'Mirage',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Modern-Witch-Ripe-Puer',
    name: 'Modern Witch',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Moon-Waffles',
    name: 'Moon Waffles',
    style: TeaStyle.White,
    w: '-8',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Mud-Tea',
    name: 'Mud',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Nameless-One',
    name: 'The Nameless One',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Natural-Redhead-Black-Tea',
    name: 'Natural Redhead',
    style: TeaStyle.Black,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Nightlife-Minis-white-Tea',
    name: 'Nightlife Mini',
    size: TeaSize.Ball,
    style: TeaStyle.White,
    w: '',
    b: '-3',
    s: '-4'
  },
  {
    slug: '2020-Nightlife-Yueguangbai-Tea',
    name: 'Nightlife',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Old-Reliable-Small-Batch-Shu-House-Blend',
    name: 'Old Reliable',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Planetary-Shark-Feed-Mini',
    name: 'Planetary Shark Feed Mini',
    size: TeaSize.Ball,
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-3'
  },
  {
    slug: '2020-Planetary-Shark-Feed-shu',
    name: 'Planetary Shark Feed',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Prosbloom-Puer-Mini',
    name: 'Prosbloom Mini',
    size: TeaSize.Ball,
    style: TeaStyle.Ripe,
    w: '-2',
    b: '-3',
    s: '-4'
  },
  {
    slug: '2020-Prosbloom-Tea',
    name: 'Prosbloom',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Road-2-Nowhere-Limited-Edition-Tea',
    name: 'Road 2 Nowhere',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Saturday-Mass',
    name: 'Saturday Mass',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Saturday-Mass-Mini',
    name: 'Saturday Mass Mini',
    size: TeaSize.Mini,
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-3'
  },
  {
    slug: '2020-Sentinel-Gushu-hongcha',
    name: 'Sentinel',
    style: TeaStyle.Black,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Sunday-Special-Small-Batch-SHou',
    name: 'Sunday Special',
    style: TeaStyle.Ripe,
    w: '-8',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Supteaheads-limited-edition-puer',
    name: 'Supteaheads',
    style: TeaStyle.Raw,
    w: '',
    b: '-2',
    s: '5'
  },
  {
    slug: '2020-The-Stranger',
    name: 'The Stranger',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Turtle-Dove-White-Tea',
    name: 'Turtle Dove',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Umbrella-raw-Puer',
    name: 'Umbrella',
    style: TeaStyle.Raw,
    w: '',
    b: '-3',
    s: '-5'
  },
  {
    slug: '2020-Unicorn',
    name: 'Unicorn',
    style: TeaStyle.Raw,
    w: '_30fc073f-5a83-46cb-b440-a8e72365f221',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Waffles-Puerh',
    name: 'Waffles',
    style: TeaStyle.Ripe,
    w: '',
    b: '-2',
    s: '-4'
  },
  {
    slug: '2020-Zero-Sum-White-Tea',
    name: 'Zero Sum',
    style: TeaStyle.White,
    w: '',
    b: '-2',
    s: '-4'
  },
  // { slug: '2021-Yes-Gaiwan', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },
  // { slug: '2021-Yes-Gaiwan-v7', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },
  // { slug: '2020-Conversation-Part-2-white-tea', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },
  // { slug: '2020-Conversation-Part-2-white-tea', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },
  // { slug: '2020-Conversation-Part-2-white-tea', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },
  // { slug: '2020-Conversation-Part-2-white-t', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },
  // { slug: '2020-Road-2-Nowhere-Limited-Edition-Tea', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },

  // '2020-Road-2-Nowhere-Limited-Edition-Tea', '', '-2', '-4',
  // '2020-Road-2-Nowhere-Limited-Edition-Tea', '', '-2', '-4',
  // '2020-Road-2-Nowhere-Limited-Edition-T', '', '-2', '-4',
  // '2020-Saturday-Mass-Mini-4_e8460803-1589-45f7-97c7-213f3892c5', '', '-2', '-4',
  // { slug: '2020BambooShu', style: TeaStyle.Black, w: '', b: '-2', s: '-4' },

  // '2020FenrisUlf', '', '-2', '-4',
  // '2020LumberSlut', '', '-2', '-4',
  // '2020Marion-gushu-baicha', '', '-2', '-4',
  // '2020MilanMaochaDancongBrick', '', '-2', '-4',
  // '2020Prettygirlsminishoupuerh', '', '-2', '-4',
  // '2020Snoozefestlimitededition', '', '-2', '-4',
  // '2020Tiltshift-yue-guang-bai-bud-white-tea', '', '-2', '-4',
  // '2020TiltshiftMinimoonlightwhitetea', '', '-2', '-4',
];
export const teas = data.map(makeTea);
// const whites = data
//   .map(t => {
//     const tea = makeTea(t);
//     const source = tea.soup.src;
//     const dest = makeImage('soup', tea.slug, 600, t.s + 'w').src;
//     return `./whitebalance 0,599 -r "rgb(254,254,254)" public/${source} public/${dest}`;
//   })
//   .join(' \n');

// console.log(whites);