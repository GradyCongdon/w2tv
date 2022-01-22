function fmtJSON(obj: object) {
  return JSON.stringify(obj, null, 2);
}

export type ImageType =
  | "wrapper"
  | "tea"
  | "soup"
  | "leaf"
  | "tong"
  | "underside";

export interface Image {
  type: ImageType;
  src: string;
  srcWhiteBalanced: string;
  alt: string;
  width: number;
  height: number;
}

export type TeaStyle =
  | "white"
  | "green"
  | "black"
  | "hongcha"
  | "raw"
  | "ripe"
  | "oolong"
  | "huangpian"
  | "unknown";

export type TeaSize =
  | "cake"
  | "mini"
  | "bamboo"
  | "square"
  | "brick"
  | "ball"
  | "sample"
  | "unknown";

export interface TeaProduct {
  slug: string;
  oSlug: string;
  year: number;
  style: TeaStyle;
  name: string;
  size: TeaSize;
  wrapper: Image;
  bing: Image;
  soup: Image;
  description: string;
}
export interface FullTea {
  name: string;
  year: number;
  quantity: number;
  key: string;
  type: Type;
  id: number;
  sku: null;
  tags: string[];
  brand: Brand;
  inStock: boolean;
  forms: Form[];
  description?: string;
  thumbnailURL?: string;
  url?: string;
  version?: string;
  images: ImageFull[];
}

export enum Brand {
  White2Tea = "white2tea",
}

export interface Form {
  name: string;
  price: number;
  inStock: boolean;
  grams: number;
  dpg: number;
  size: Size;
  percentiles: Percentiles;
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

export interface ImageFull {
  key: string;
  url: string;
  predictedType: PredictedType;
  probability: number;
}

export type PredictedType =
  | "bamboo"
  | "leaf"
  | "soup"
  | "tea"
  | "tong"
  | "underside"
  | "wrapper";

export enum Type {
  BlackTea = "Black Tea",
  Heicha = "Heicha",
  Oolong = "Oolong",
  RawPuerTea = "Raw Puer Tea",
  RipePuerTea = "Ripe Puer Tea",
  WhiteTea = "White Tea",
}

const getStyle = (t: FullTea): TeaStyle => {
  switch (t.type) {
    case Type.BlackTea:
      return "black";
    case Type.Heicha:
      return "black";
    case Type.Oolong:
      return "oolong";
    case Type.RawPuerTea:
      return "raw";
    case Type.RipePuerTea:
      return "ripe";
    default:
      return "unknown";
  }
};

const makeImage = (
  type: ImageType,
  slug: string,
  size: number,
  view: string
): Image => {
  return {
    type,
    src: `${slug}${view}_${size}x.jpg`,
    srcWhiteBalanced: `${slug}${view}w_${size}x.jpg`,
    alt: type,
    width: size,
    height: size,
  };
};
const defaultImage = makeImage("wrapper", "xxx", 300, "w");

const getImage = (t: FullTea, type: PredictedType): Image => {
  const match = t.images.find((i) => i.predictedType === type);
  if (!match) return defaultImage;
  const src = match.url.replace("_SIZEx", "_400x");
  return {
    type: type === "bamboo" ? "tea" : type,
    src,
    srcWhiteBalanced: src,
    alt: t.name,
    width: 400,
    height: 400,
  };
};

const data = await Deno.readTextFile("fullTeas.json");
const fullTeas: FullTea[] = JSON.parse(data);
const validTeas = fullTeas.filter((t) => t.images.length);

const teaProducts: TeaProduct[] = validTeas.map((t) => {
  return {
    slug: t.key,
    oSlug: t.key,
    year: t.year,
    style: getStyle(t),
    name: t.name,
    size: t.forms[0]?.size || "unknown",
    wrapper: getImage(t, "wrapper"),
    bing: getImage(t, "tea"),
    soup: getImage(t, "soup"),
    description: t.description?.replace(/<\/?[^>]+(>|$)/g, "") || "",
  };
});
await Deno.writeTextFile("../teaProducts2.json", fmtJSON(teaProducts));
