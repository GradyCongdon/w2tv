export interface TeaIn {
  slug: string;
  oSlug: string;
  year: number;
  style: Style;
  name: string;
  size: Size;
  wrapper: Bing;
  bing: Bing;
  soup: Bing;
  description: string;
  images: Image[];
  forms: Form[];
}

export interface Bing {
  type: Type;
  src: string;
  srcWhiteBalanced: string;
  alt: string;
  width: number;
  height: number;
}

export enum Type {
  Bamboo = "bamboo",
  Leaf = "leaf",
  Soup = "soup",
  Tea = "tea",
  Tong = "tong",
  Underside = "underside",
  Wrapper = "wrapper",
}

export interface Form {
  name: Name;
  price: number;
  inStock: boolean;
  grams: number;
  dpg: number;
  size: Size;
  percentiles: Percentiles;
}

export enum Name {
  Name7G = "7g",
  The100G = "100g",
  The10G = "10g",
  The120G = "120g",
  The1Kg = "1kg",
  The200G = "200g",
  The250G = "250g",
  The250GBrickTuoCake = "250g Brick/Tuo/Cake",
  The25G = "25g",
  The25GSample = "25g Sample",
  The357G = "357g",
  The357GCake = "357g Cake",
  The360G = "360g",
  The49G = "~49g",
  The49GStack = "49g Stack",
  The50G = "~50g",
  The7G = "~7g",
  The7GMini = "7g Mini",
  The80G = "80g",
}

export interface Percentiles {
  size: number;
  type: number;
  typeSize: number;
  all: number;
  dpg: number;
}

export enum Size {
  Brick = "brick",
  Cake = "cake",
  Mini = "mini",
  Sample = "sample",
  Unknown = "unknown",
}

export interface Image {
  key: string;
  url: string;
  predictedType: Type;
  probability: number;
  subject: Subject;
}

export enum Subject {
  Bamboo = "bamboo",
  Chabu = "chabu",
  Leaf = "leaf",
  Soup = "soup",
  TeaBottom = "tea-bottom",
  TeaDetail = "tea-detail",
  TeaTop = "tea-top",
  Tong = "tong",
  WrapperBottom = "wrapper-bottom",
  WrapperDetail = "wrapper-detail",
  WrapperTop = "wrapper-top",
}

export enum Style {
  Black = "black",
  Oolong = "oolong",
  Raw = "raw",
  Ripe = "ripe",
  Unknown = "unknown",
}
